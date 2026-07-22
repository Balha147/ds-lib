import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

import {
  Icon,
  LibIconName,
  LibIconSize,
} from '@ds-design-system/ui-components/icon';

export type LibScrollTopSize = 'sm' | 'md' | 'lg';

export type LibScrollTopPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

@Component({
  selector: 'lib-scroll-top',
  imports: [Icon],
  template: `
    @if (isVisible()) {
      <button
        type="button"
        class="lib-scroll-top"
        [class.lib-scroll-top--sm]="size() === 'sm'"
        [class.lib-scroll-top--md]="size() === 'md'"
        [class.lib-scroll-top--lg]="size() === 'lg'"
        [class.lib-scroll-top--top-left]="position() === 'top-left'"
        [class.lib-scroll-top--top-right]="position() === 'top-right'"
        [class.lib-scroll-top--bottom-left]="position() === 'bottom-left'"
        [class.lib-scroll-top--bottom-right]="position() === 'bottom-right'"
        [class]="customClass()"
        [attr.aria-label]="ariaLabel()"
        (click)="scrollToTop()"
      >
        <lib-icon
          [name]="icon()"
          [size]="iconSize()"
          aria-hidden="true"
        />
      </button>
    }
  `,
})
export class ScrollTop {
  private readonly destroyRef = inject(DestroyRef);

  readonly threshold = input(300);
  readonly size = input<LibScrollTopSize>('md');

  readonly position =
    input<LibScrollTopPosition>('bottom-right');

  readonly smooth = input(true);

  readonly icon =
    input<LibIconName>('libicon-fleche-haut');

  readonly ariaLabel =
    input('Remonter en haut de la page');

  readonly customClass = input('');

  private readonly scrollY = signal(0);

  readonly isVisible = computed(
    () => this.scrollY() > this.threshold(),
  );

  readonly iconSize = computed<LibIconSize>(() => {
    switch (this.size()) {
      case 'sm':
        return 'sm';

      case 'lg':
        return 'lg';

      default:
        return 'md';
    }
  });

  constructor() {
    const onScroll = () => {
      this.scrollY.set(window.scrollY);
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', onScroll);
    });

    onScroll();
  }

  protected scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: this.smooth()
        ? 'smooth'
        : 'auto',
    });
  }
}