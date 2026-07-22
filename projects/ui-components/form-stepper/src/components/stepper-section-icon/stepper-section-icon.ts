import { Component, input, ViewEncapsulation } from '@angular/core';
import { LibIconName, Icon } from '@ds-design-system/ui-components/icon';

@Component({
  selector: 'lib-form-stepper-section-icon',
  templateUrl: './stepper-section-icon.html',
  styleUrl: './stepper-section-icon.scss',
  imports: [Icon],
  encapsulation: ViewEncapsulation.None,
})
export class StepperSectionIcon {
  readonly libFormStepperIcon = input<LibIconName>();

  readonly libFormStepperIsValid = input<boolean>();

  readonly libFormStepperDisableAnimation = input<boolean>();
}
