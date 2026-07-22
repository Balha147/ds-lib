import {
    Directive,
    DestroyRef,
    ElementRef,
    Injector,
    TemplateRef,
    ViewContainerRef,
    ComponentRef,
    afterRenderEffect,
    booleanAttribute,
    computed,
    effect,
    inject,
    input,
    linkedSignal,
    output,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Overlay, OverlayRef, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
    DEFAULT_HIDE_DELAY,
    DEFAULT_SHOW_DELAY,
    DropletPosition,
    POSITION_MAP,
    TooltipTrigger,
} from './tooltip.config';
import { getTooltipId } from './tooltip.utils';
import { Tooltip } from './tooltip';
import { LibAlertType } from '@ds-design-system/ui-components/alert';

@Directive({
    selector: '[libTooltip]',
    host: {
        class: 'lib-tooltip-trigger',
        '[attr.aria-describedby]': 'ariaDescribedBy()',
        '(click)': 'onClick($event)',
        '(pointerenter)': 'onPointerEnter()',
        '(pointerleave)': 'onPointerLeave()',
        '(focus)': 'onFocusEvent(true)',
        '(blur)': 'onFocusEvent(false)',
    },
})
export class TooltipDirective {
    private readonly destroyRef = inject(DestroyRef);
    private readonly overlay = inject(Overlay);
    private readonly elementRef = inject(ElementRef);
    private readonly injector = inject(Injector);
    private readonly viewContainerRef = inject(ViewContainerRef);

    protected readonly id = getTooltipId();

    readonly libTooltip = input.required<string | TemplateRef<void>>();
    readonly libTooltipPosition = input<DropletPosition>('top');
    readonly libTooltipType = input<LibAlertType>('info');
    readonly libTooltipWidth = input('auto');
    readonly libTooltipNoShadow = input(false, { transform: booleanAttribute });
    readonly libTooltipAllowDefaultClick = input(false, { transform: booleanAttribute });
    readonly libTooltipVisible = input(false, { transform: booleanAttribute });
    readonly libTooltipDisabled = input(false, { transform: booleanAttribute });
    readonly libTooltipTrigger = input<TooltipTrigger>('hover');
    readonly libTooltipShowDelay = input(DEFAULT_SHOW_DELAY);
    readonly libTooltipHideDelay = input(DEFAULT_HIDE_DELAY);

    readonly libTooltipVisibleChange = output<boolean>();

    private readonly componentRef = signal<ComponentRef<Tooltip> | undefined>(undefined);
    protected readonly isAttached = computed(() => !!this.componentRef());
    protected readonly ariaDescribedBy = computed(() => (this.isAttached() ? this.id : null));

    private readonly triggerPointerInside = signal(false);
    private readonly tooltipPointerInside = computed(
        () => this.componentRef()?.instance.pointerInside() ?? false
    );
    protected readonly pointerInside = computed(
        () => this.triggerPointerInside() || this.tooltipPointerInside()
    );

    protected readonly dropletPosition = linkedSignal<DropletPosition>(() =>
        this.libTooltipPosition()
    );

    private overlayRef?: OverlayRef;
    private componentPortal?: ComponentPortal<Tooltip>;
    private showTimeoutId?: ReturnType<typeof setTimeout>;
    private hideTimeoutId?: ReturnType<typeof setTimeout>;

    private readonly positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withFlexibleDimensions(false)
        .withGrowAfterOpen(false)
        .withPush(true)
        .withLockedPosition(false)
        .withViewportMargin(8);

    private readonly resolvedPosition = toSignal(
        this.positionStrategy.positionChanges.pipe(
            map(({ connectionPair }) => connectionPair.panelClass as DropletPosition)
        )
    );

    constructor() {
        this.destroyRef.onDestroy(() => {
            this.clearTimers();
            this.overlayRef?.dispose();
        });

        effect(() => {
            const positions = this.buildPositions(this.libTooltipPosition());
            this.positionStrategy.withPositions(positions);
            this.overlayRef?.updatePosition();
        });

        effect(() => {
            const resolved = this.resolvedPosition();
            if (resolved) {
                this.dropletPosition.set(resolved);
            }
        });

        effect(() => {
            if (this.libTooltipDisabled()) {
                this.hide(true);
                return;
            }
            if (this.libTooltipVisible()) {
                this.show(true);
            } else {
                this.hide(true);
            }
        });

        effect(() => {
            const ref = this.componentRef();
            if (!ref) return;

            ref.setInput('id', this.id);
            ref.setInput('content', this.libTooltip());
            ref.setInput('type', this.libTooltipType());
            ref.setInput('width', this.libTooltipWidth());
            ref.setInput('noShadow', this.libTooltipNoShadow());
            ref.setInput('dropletPosition', this.dropletPosition());
        });

        effect(() => {
            if (this.libTooltipTrigger() !== 'hover') return;

            if (this.pointerInside()) {
                clearTimeout(this.hideTimeoutId);
            } else if (this.isAttached()) {
                this.scheduleHide();
            }
        });

        effect((onCleanup) => {
            if (this.libTooltipTrigger() !== 'click' || !this.overlayRef) return;

            const subscription = this.overlayRef.outsidePointerEvents().subscribe(() => {
                this.hide();
            });
            onCleanup(() => subscription.unsubscribe());
        });

        afterRenderEffect(() => {
            if (this.isAttached()) {
                this.overlayRef?.updatePosition();
            }
        });
    }

    private buildPositions(preferred: DropletPosition): ConnectedPosition[] {
        const fallbacks = (Object.keys(POSITION_MAP) as DropletPosition[]).filter(
            pos => pos !== preferred
        );
        const ordered: DropletPosition[] = [preferred, ...fallbacks];
        return ordered.map(pos => POSITION_MAP[pos]);
    }

    protected onClick(event: Event): void {
        if (!this.libTooltipAllowDefaultClick()) {
            event.preventDefault();
        }
        if (this.libTooltipTrigger() === 'click' && !this.libTooltipDisabled()) {
            this.isAttached() ? this.hide() : this.show();
        }
    }

    protected onPointerEnter(): void {
        this.triggerPointerInside.set(true);
        if (this.libTooltipTrigger() === 'hover' && !this.libTooltipDisabled()) {
            this.show();
        }
    }

    protected onPointerLeave(): void {
        this.triggerPointerInside.set(false);
    }

    protected onFocusEvent(entering: boolean): void {
        if (this.libTooltipDisabled()) return;
        entering ? this.show() : this.hide();
    }

    protected show(internal = false): void {
        this.clearTimers();
        if (this.isAttached()) return;

        const delay = this.libTooltipShowDelay();
        if (delay > 0) {
            this.showTimeoutId = setTimeout(() => this.attach(internal), delay);
        } else {
            this.attach(internal);
        }
    }

    protected hide(internal = false): void {
        clearTimeout(this.showTimeoutId);
        if (!this.isAttached()) return;
        this.scheduleHide(internal);
    }

    private scheduleHide(internal = false): void {
        clearTimeout(this.hideTimeoutId);
        this.hideTimeoutId = setTimeout(() => {
            this.detach();
            if (!internal) {
                this.libTooltipVisibleChange.emit(false);
            }
        }, this.libTooltipHideDelay());
    }

    private clearTimers(): void {
        clearTimeout(this.showTimeoutId);
        clearTimeout(this.hideTimeoutId);
    }

    private attach(internal: boolean): void {
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create({
                positionStrategy: this.positionStrategy,
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
            });
        }

        if (!this.componentPortal) {
            this.componentPortal = new ComponentPortal(Tooltip, this.viewContainerRef, this.injector);
        }

        const ref = this.overlayRef.attach(this.componentPortal);
        this.componentRef.set(ref);

        if (!internal) {
            this.libTooltipVisibleChange.emit(true);
        }
    }

    private detach(): void {
        this.clearTimers();
        this.overlayRef?.detach();
        this.componentRef.set(undefined);
    }
}