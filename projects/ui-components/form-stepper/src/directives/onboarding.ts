import { computed, Directive, inject, input, TemplateRef } from '@angular/core';
import { LibFormStepperExtraPage } from '../stepper.types';
import { LibIconName } from '@ds-design-system/ui-components/icon';

@Directive({
  selector: '[libFormStepperOnboarding]',
})
export class Onboarding {
  private readonly templateRef = inject(TemplateRef<unknown>);

  readonly title = input<string>('', { alias: 'libFormStepperOnboardingTitle' });
  readonly icon = input<LibIconName>('libicon-ampoule', { alias: 'libFormStepperOnboardingIcon' });
  readonly path = input<string>('onboarding', { alias: 'libFormStepperOnboardingPath' });

  readonly page = computed<LibFormStepperExtraPage>(() => ({
    title: this.title(),
    icon: this.icon(),
    path: this.path(),
    template: this.templateRef
  }));

}
