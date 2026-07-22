import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { StepperSectionIcon } from '../stepper-section-icon/stepper-section-icon';
import { NgTemplateOutlet } from '@angular/common';
import { LIB_FORM_STEPPER_CONFIG } from '../../stepper.config';
import { LibStepperStore } from '../../stepper.store';
import { LibFormStepperStep } from '../../stepper.types';

/**
 * Render the form value in a nice summary with links to jump back to any step.
 *
 * Use the `libFormStepperCompact` input to adjust the HTML output.
 */
@Component({
  selector: 'lib-form-stepper-quicknav',
  imports: [NgTemplateOutlet, StepperSectionIcon],
  templateUrl: './stepper-quicknav.html',
  styleUrl: './stepper-quicknav.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'lib-form-stepper-quicknav'
  }
})
export class StepperQuicknav {
  private readonly store = inject(LibStepperStore);
  private readonly config = inject(LIB_FORM_STEPPER_CONFIG);

  /**
   * Determines whether to remove the sections from the summary.
   * Should be set to `true` when the LibFormStepper has only one level (each section has only one step).
   */
  readonly libFormStepperCompact = input(false);

  /**
   * Customize the value of any step.
   * Return a `string` to overwrite the default formatting, or `undefined` to bypass.
   */
  readonly libFormStepperFormat =
    input<(path: string, value: unknown) => string | undefined>();

  readonly nav = computed(() => this.store.state().nav);

  goToStep(step: LibFormStepperStep): void {
    this.store.goToPath(step.path);
  }

  getStepValue(step: LibFormStepperStep): string {
    const format = this.libFormStepperFormat();
    if (format) {
      const result = format(step.path, step.field.value());
      if (result !== undefined)
        return result;
    }
    return this.format(step.field.value());
  }

  private format(value: unknown): string {
    if (Array.isArray(value)) {
      return this.formatArray(value);
    }
    if (typeof value === 'object' && value !== null) {
      return this.formatArray(Object.values(value));
    }
    const { yes, no } = this.config.translations;
    if (value === true)
      return yes;
    if (value === false)
      return no;
    return (value ?? '').toString();
  }

  private formatArray(values: unknown[]): string {
    return values
      .map(value => this.format(value))
      .filter(value => !!value)
      .join(', ');
  }
}
