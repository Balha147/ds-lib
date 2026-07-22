import { computed, Directive, inject, input, TemplateRef } from '@angular/core';
import { LibFormStepperExtraPage } from '../stepper.types';
import { LibIconName } from '@ds-design-system/ui-components/icon';

/**
 * Add a static step as last step (can not contain any `Field<T>`).
 *
 * Use it for example to display the "quicknav".
 *
 * Usage :
 * <ng-template
 *   libFormStepperSummary
 *   libFormStepperSummaryTitle="Récapitulatif"
 *   libFormStepperSummaryIcon="libicon-check"
 *   libFormStepperSummaryPath="summary">
 *   ...contenu...
 * </ng-template>
 */

@Directive({
  selector: '[libFormStepperSummary]',
})
export class StepperSummary {
  private readonly templateRef = inject(TemplateRef<unknown>);

  readonly title = input.required<string>({ alias: 'libFormStepperSummaryTitle' });
  readonly icon = input.required<LibIconName>({ alias: 'libFormStepperSummaryIcon' });
  readonly path = input.required<string>({ alias: 'libFormStepperSummaryPath' });

  readonly page = computed<LibFormStepperExtraPage>(() => ({
    title: this.title(),
    icon: this.icon(),
    path: this.path(),
    template: this.templateRef
  }));
}
