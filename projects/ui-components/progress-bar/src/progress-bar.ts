import { Component, computed, input } from '@angular/core';
import { LibProgressBar } from './progress-bar.types';

@Component({
  selector: 'lib-progress-bar',
  templateUrl: './progress-bar.html',
  host: {
    class: 'progress'
  }
})
export class ProgressBar {
  value = input<number>(0);
  bars = input<LibProgressBar[]>([
    {
      width: 100
    }
  ]);
  showLabels = input<boolean>(false);
  striped = input<boolean>(false);
  animated = input<boolean>(false);
  protected liveBars = computed(() => {
    let remainingValue = this.value();
    return this.bars().map(
      ({
        width = 100,
        type,
        ariaLabel
      }) => {
        const bar = {
          width:
            remainingValue >= width
              ? width
              : remainingValue,
          type,
          ariaLabel
        };

        remainingValue = Math.max(
          remainingValue - width,
          0
        );
        return bar;
      }
    );
  });

  protected precision(width = 0): number {
    return Math.round(width * 10) / 10;
  }


  trackByIndex(index: number): number {
    return index;
  }
}
