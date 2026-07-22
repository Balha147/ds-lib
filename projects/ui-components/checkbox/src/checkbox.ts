import {
  Component,
  ElementRef,
  booleanAttribute,
  computed,
  input,
  viewChild
} from '@angular/core';
import { LibFormBaseControl } from '@ds-design-system/ui-components/form-core';

export type SwitchType = boolean | 'native';

function transformSwitch(value: unknown): SwitchType {
  if (value === 'native') {
    return 'native';
  }
  return booleanAttribute(value);
}

@Component({
  selector: 'lib-form-checkbox',
  templateUrl: './checkbox.html',
  host: {
    class: 'form-check',
    '[class.form-switch]': 'hasSwitchCss()',
    '[class.lib-form-switch]': 'hasLibSwitchCss()',
    '[class.form-check-inline]': 'inline()',
    '[class.form-check-reverse]': 'reverse()'
  }
})
export class Checkbox extends LibFormBaseControl<boolean> {
  readonly switch = input<SwitchType, unknown>(false, {
    transform: transformSwitch
  });

  readonly inline = input(false, { transform: booleanAttribute });
  readonly reverse = input(false, { transform: booleanAttribute });

  readonly hasSwitchCss = computed(() => Boolean(this.switch()));
  readonly hasLibSwitchCss = computed(() => this.switch() === true);

  private readonly controlRef = viewChild<ElementRef<HTMLInputElement>>('control');

  protected onChange(checked: boolean): void {
    if (this.readonly()) {
      const input = this.controlRef()?.nativeElement;
      if (input) {
        input.checked = this.value() || false;
      }
      return;
    }
    this.value.set(checked);
  }

  override focus(): void {
    this.controlRef()?.nativeElement.focus();
  }
}