import { Component, ElementRef, input, viewChild } from '@angular/core';
import { LibFormInputType } from './form-input.type';
import { LibFormBaseControl } from '@ds-design-system/ui-components/form-core';

const DEFAULT_ALLOWED_KEYS = ['Backspace', 'Tab', 'Enter', 'Delete', 'ArrowLeft', 'ArrowRight'];

@Component({
  selector: 'lib-form-input',
  templateUrl: './form-input.html',
})
export class FormInput extends LibFormBaseControl<string> {
  readonly type = input<LibFormInputType>('text');
  readonly allowedChars = input<RegExp | string | undefined>(undefined);

  private readonly controlRef = viewChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('control');

  protected onKeydown(event: KeyboardEvent): void {
    const chars = this.allowedChars();
    if (!chars) return;
    if (DEFAULT_ALLOWED_KEYS.includes(event.key)) return;

    const regExp = typeof chars === 'string' ? new RegExp(chars) : chars;
    if (!regExp.test(event.key)) {
      event.preventDefault();
    }
  }

  override focus(): void {
    this.controlRef()?.nativeElement.focus();
  }
}
