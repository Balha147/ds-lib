import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LibSkeletonAnimation, LibSkeletonVariant } from './skeleton.types';

@Component({
  selector: 'lib-skeleton',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lib-skeleton',
    role: 'presentation',
    'aria-hidden': 'true',
    '[class]': '"lib-skeleton--" + variant() + " lib-skeleton--" + animation()',
    '[style.width]': 'resolvedWidth()',
    '[style.height]': 'resolvedHeight()',
    '[style.border-radius]': 'resolvedRadius()',
  },
})
export class Skeleton {

  readonly variant = input<LibSkeletonVariant>('text');
  readonly width = input<string>();
  readonly height = input<string>();
  readonly radius = input<string>();
  readonly animation = input<LibSkeletonAnimation>('shimmer');

  protected readonly resolvedHeight = computed(() => {
    const explicit = this.height();
    if (explicit) return explicit;

    switch (this.variant()) {
      case 'text':
        return '1em';
      case 'circular':
        return this.width() ?? '40px';
      default:
        return '40px';
    }
  });

  protected readonly resolvedWidth = computed(() => {
    const explicit = this.width();
    if (explicit) return explicit;

    return this.variant() === 'circular' ? this.resolvedHeight() : '100%';
  });

  protected readonly resolvedRadius = computed(() => {
    const explicit = this.radius();
    if (explicit) return explicit;

    switch (this.variant()) {
      case 'circular':
        return '50%';
      case 'text':
        return '4px';
      case 'rounded':
        return '12px';
      default:
        return '2px';
    }
  });
}