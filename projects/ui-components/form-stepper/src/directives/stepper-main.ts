import { Directive, TemplateRef, inject } from '@angular/core';

/**
 * Customize the template of the current step.
 *
 * This is optional. By default, `libFormStepperMainComponent` renders the
 * step's own template with title, prev/next buttons already wired.
 * When you provide this directive, it is your responsibility to display
 * the step title, previous and next buttons yourself.
 *
 * Example of usage:
 * ```html
 * <lib-form-stepper-container #formStepper>
 *   <ng-template libFormStepperMain>
 *     @let main = formStepper.main();
 *     @if (main) {
 *       <h2>{{ main.stepTitle }}</h2>
 *
 *       <ng-container [ngTemplateOutlet]="main.stepTemplate"></ng-container>
 *
 *       <p>
 *         @if (!main.isFirstStep) {
 *           <button libFormStepperPrev type="button">Previous</button>
 *         }
 *
 *         @if (!main.isLastStep) {
 *           <button libFormStepperNext type="button">Next</button>
 *         } @else {
 *           <button type="submit">Submit</button>
 *         }
 *       </p>
 *     }
 *   </ng-template>
 * </lib-form-stepper-container>
 * ```
 */
@Directive({
  selector: '[libFormStepperMain]'
})
export class StepperMainDirective {
  private readonly templateRef = inject(TemplateRef<unknown>);
  readonly template = this.templateRef;
}
