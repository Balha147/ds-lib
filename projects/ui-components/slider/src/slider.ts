import {
  Component,
  ElementRef,
  booleanAttribute,
  computed,
  input,
  viewChild,
} from '@angular/core';
import { LibFormBaseControl } from '@ds-design-system/ui-components/form-core';

@Component({
  selector: 'lib-slider',
  templateUrl: './slider.html',
  host: {
    class: 'lib-slider',
    '[class.lib-slider--disabled]': 'disabled()',
  },
})
export class Slider extends LibFormBaseControl<number> {
  readonly min = input(0);
  readonly max = input(100);
  readonly step = input(1);
  readonly showValue = input(true, { transform: booleanAttribute });
  readonly showTicks = input(false, { transform: booleanAttribute });
  readonly formatValue = input<(value: number) => string>(v => `${v}`);

  private readonly controlRef = viewChild<ElementRef<HTMLInputElement>>('control');

  protected readonly fillPercent = computed(() => {
    const current = this.value() ?? this.min();
    const range = this.max() - this.min();
    if (range <= 0) return 0;
    return ((current - this.min()) / range) * 100;
  });

  protected readonly formattedValue = computed(() => {
    const val = this.value() ?? this.min();
    return this.formatValue()(val);
  });

  protected readonly ticks = computed(() => {
    if (!this.showTicks()) return [];
    const count = Math.floor((this.max() - this.min()) / this.step());
    return Array.from({ length: count + 1 }, (_, i) => i);
  });

  protected onInput(raw: string): void {
    const next = Number(raw);
    if (next === this.value()) return;
    this.value.set(next);
  }

  override focus(): void {
    this.controlRef()?.nativeElement.focus();
  }
}