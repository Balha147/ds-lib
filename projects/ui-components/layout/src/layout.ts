import {
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  Renderer2,
  afterNextRender,
  afterRenderEffect,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { LibLayoutHeaderComponent } from './header/layout-header';
import { LibLayoutSubnavComponent } from './subnav/layout-subnav';
import { LibLayoutService } from './shared/layout.service';

@Component({
  selector: 'lib-layout',
  templateUrl: './layout.html',
  imports: [LibLayoutHeaderComponent, LibLayoutSubnavComponent],
  host: {
    class: 'lib-layout-container',
    '[class.lib-layout-container--nav-less]': 'libLayoutService.state().isNavLess',
  },
})
export class LibLayoutComponent {
  protected readonly libLayoutService = inject(LibLayoutService);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly isNavLess = input<boolean>();

  private readonly navRef = viewChild.required<ElementRef<HTMLElement>>('navRef');
  private readonly navInnerRef = viewChild.required<ElementRef<HTMLElement>>('navInnerRef');

  protected readonly isNavOpened = this.libLayoutService.isNavOpened;
  protected readonly isSubnavOpened = this.libLayoutService.isSubnavOpened;

  private readonly isDesktop = toSignal(
    this.breakpointObserver.observe('(min-width: 1280px)').pipe(map(state => state.matches)),
    { initialValue: false }
  );

  private readonly navInnerHeight = signal('auto');
  private readonly windowHasMinHeight = signal(false);

  readonly hasFixedMenu = computed(() => this.isDesktop() && this.windowHasMinHeight());
  readonly subnavHeight = computed(() => (this.isDesktop() ? this.navInnerHeight() : 'auto'));

  constructor() {
    effect(() => {
      const value = this.isNavLess();
      if (value !== undefined) {
        this.libLayoutService.toggleNavLess(value);
      }
    });

    afterRenderEffect(() => {
      this.isDesktop();
      this.navInnerHeight();
      this.recomputeWindowHasMinHeight();
    });

    effect(() => {
      const shouldLock = this.isNavOpened() && (!this.isDesktop() || this.windowHasMinHeight());
      const root = this.document.documentElement;
      if (shouldLock) {
        this.renderer.setStyle(root, 'overflow', 'hidden');
      } else {
        this.renderer.removeStyle(root, 'overflow');
      }
    });

    afterNextRender(() => {
      const observer = new ResizeObserver(([entry]) => {
        this.navInnerHeight.set(`${entry.contentRect.height}px`);
      });
      observer.observe(this.navInnerRef().nativeElement);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected closeMenu(): void {
    this.libLayoutService.closeMenu();
  }

  private recomputeWindowHasMinHeight(): void {
    const view = this.document.defaultView;
    if (!view) {
      this.windowHasMinHeight.set(false);
      return;
    }

    const { marginTop, marginBottom } = view.getComputedStyle(this.navRef().nativeElement);
    const { height } = view.getComputedStyle(this.navInnerRef().nativeElement);
    const requiredHeight = parseFloat(marginTop) + parseFloat(marginBottom) + parseFloat(height);

    this.windowHasMinHeight.set(view.innerHeight >= requiredHeight);
  }
}