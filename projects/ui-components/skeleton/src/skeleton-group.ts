import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Skeleton } from './skeleton';

@Component({
    selector: 'lib-skeleton-group',
    imports: [Skeleton],
    template: `
    @for (line of lineWidths(); track $index) {
      <lib-skeleton variant="text" [width]="line" [animation]="animation()"></lib-skeleton>
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'lib-skeleton-group' },
})
export class SkeletonGroup {
    readonly lines = input(3);
    readonly animation = input<'shimmer' | 'pulse' | 'none'>('shimmer');

    protected readonly lineWidths = computed(() => {
        const count = this.lines();
        return Array.from({ length: count }, (_, i) => (i === count - 1 ? '65%' : '100%'));
    });
}