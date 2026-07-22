import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, Injector, input, ViewEncapsulation } from '@angular/core';
import { StepperNext } from '../../directives/stepper-next';
import { StepperPrev } from '../../directives/stepper-prev';
import { LIB_FORM_STEPPER_CONFIG } from '../../stepper.config';
import { LibStepperStore } from '../../stepper.store';
/**
 * Default rendering of the current step: title, step content, prev/next/submit buttons.
 * Bypassed when `libFormStepperMain` directive is provided by the consumer.
 */
@Component({
  selector: 'lib-form-stepper-main',
  imports: [NgTemplateOutlet, StepperPrev, StepperNext],
  templateUrl: './stepper-main.html',
  styleUrl: './stepper-main.scss',
  host: {
    class: 'lib-form-stepper-main'
  }
})
export class StepperMain {
  private readonly store = inject(LibStepperStore);
  private readonly injector = inject(Injector);

  readonly config = inject(LIB_FORM_STEPPER_CONFIG);

  /**
   * Overrides the computed form validity (aggregated from every section).
   * Only provide this if your notion of "valid" includes something outside the stepper.
   */
  readonly libIsFormValid = input<boolean>();

  /**
   * Determines whether the submit button is displayed on the last step.
   */
  readonly libFormStepperNoSubmitButton = input(false);

  /**
   * Determines whether the submit button is disabled
   * (set to `true` while the form is being submitted).
   */
  readonly libFormStepperDisabled = input(false);

  readonly main = computed(() => this.store.main());

  readonly isFormValid = computed(() =>
    this.libIsFormValid() ?? this.store.isFormValid()
  );

  /**
   * Injector to resolve directives/services (e.g. `libFormStepperControlDirective`)
   * declared inside a projected `LibFormStepperStep` template.
   */
  readonly stepTemplateInjector = this.injector;
}
