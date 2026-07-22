import { computed, DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';
import { LibStepperStore } from '../stepper.store';

/**
 * Add smart behaviors to a form control inside a step:
 * - autofocus the first control of the step (when the step's field has no value).
 * - prevent form submission when pressing "Enter".
 * - jump to the next step when pressing "Enter" (if the current step is valid).
 *
 * Use `libFormStepperOnEnter` to adjust the behavior.
 *
 * IMPORTANT: relies on `LibStepperStore` being resolvable from this directive's
 * injection context. The host `lib-form-stepper` component MUST render step
 * templates with `[ngTemplateOutletInjector]` pointing to its own injector,
 * otherwise this directive throws a `NullInjectorError`.
 */
@Directive({
  selector: '[libFormStepperControl]',
  host: {
    '(keydown.enter)': 'onEnter($event)'
  }
})
export class StepperControl {
  private readonly store = inject(LibStepperStore);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  /**
   * Adjust the directive behavior.
   *
   * @example
   * For a `<textarea>` you probably want:
   * ```ts
   * { preventDefault: false, nextStep: false }
   * ```
   */
  readonly libFormStepperOnEnter = input<Partial<libFormStepperControlOnEnter>>({});

  readonly onEnterConfig = computed<libFormStepperControlOnEnter>(() => ({
    ...LIB_FORM_STEPPER_CONTROL_ON_ENTER_DEFAULT,
    ...this.libFormStepperOnEnter()
  }));

  constructor() {
    const step = this.store.currentStep();
    if (!step)
      return;

    this.store.registerControlElement(step.path, this.elementRef.nativeElement);
    this.destroyRef.onDestroy(() =>
      this.store.unregisterControlElement(step.path, this.elementRef.nativeElement)
    );
  }

  onEnter(event: Event): void {
    const { preventDefault, nextStep } = this.onEnterConfig();

    if (preventDefault) {
      event.preventDefault();
    }

    if (nextStep && this.store.state().isStepValid) {
      this.store.next();
    }
  }
}
export interface libFormStepperControlOnEnter {
  preventDefault: boolean;
  nextStep: boolean;
}

export const LIB_FORM_STEPPER_CONTROL_ON_ENTER_DEFAULT: libFormStepperControlOnEnter = {
  preventDefault: true,
  nextStep: true,
} as const;