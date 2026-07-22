import { booleanAttribute, Component, computed, ElementRef, input, viewChild } from '@angular/core';
import { LibFormBaseControl } from '@ds-design-system/ui-components/form-core';
import { LibFormRadioValue } from './radio.types';

@Component({
  selector: 'lib-form-radio',
  templateUrl: './radio.html',
  host: {
    class: 'form-check',
    '[class.form-check-inline]': 'inline()',
    '[class.form-check-reverse]': 'reverse()'
  }
})
export class Radio extends LibFormBaseControl<LibFormRadioValue> {
  readonly name = input.required<string>();
  readonly optionValue = input.required<LibFormRadioValue>();
  readonly inline = input(false, { transform: booleanAttribute });
  readonly reverse = input(false, { transform: booleanAttribute });
  readonly isChecked = computed(() => this.value() === this.optionValue());

  private readonly controlRef = viewChild<ElementRef<HTMLInputElement>>('control');

  protected onChange(): void {
    if (this.disabled() || this.readonly()) return;
    this.value.set(this.optionValue());
  }

  override focus(): void {
    this.controlRef()?.nativeElement.focus();
  }
}
