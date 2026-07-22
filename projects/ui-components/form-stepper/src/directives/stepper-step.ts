import { computed, Directive, inject, input, TemplateRef } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';
import { LibStepperFieldAdapter, adaptField } from '../utils/stepper-field.adapter';
import { nextStepperId } from '../utils/stepper-id.util';

/**
 * Declares a step of the stepper.
 *
 * Usage:
 * <ng-template
 *   LibFormStepperStep
 *   [LibFormStepperStepField]="myForm.address"
 *   libFormStepperPath="address">
 *   ...
 * </ng-template>
 */
@Directive({
  selector: '[libFormStepperStep]',
})
export class StepperStep {
  private readonly templateRef = inject(TemplateRef<unknown>);

  readonly libFormStepperStepField = input<FieldTree<unknown>>();
  readonly libFormStepperOptions = input<LibFormStepperStepOptions>();
  readonly libFormStepperTitle = input<string>();
  readonly libFormStepperShortTitle = input<string>();
  readonly libFormStepperAutoNextOnValueChange = input(false);
  readonly libFormStepperPath = input<string>();

  readonly path = computed(() => {
    const path = this.libFormStepperOptions()?.path ?? this.libFormStepperPath();
    if (!path) {
      throw new Error(
        '[libFormStepperStep] "path" is required: provide it via [libFormStepperPath] or via [libFormStepperOptions].path.'
      );
    }
    return path;
  });

  readonly template = this.templateRef;

  readonly id = nextStepperId('lib-step');

  readonly field = computed<LibStepperFieldAdapter | undefined>(() => {
    const field = this.libFormStepperStepField();
    return field ? adaptField(field) : undefined;
  });

  readonly title = computed(() =>
    this.libFormStepperOptions()?.title ?? this.libFormStepperTitle()
  );

  readonly shortTitle = computed(() =>
    this.libFormStepperOptions()?.shortTitle ?? this.libFormStepperShortTitle()
  );

  readonly autoNext = computed(() =>
    this.libFormStepperOptions()?.autoNextOnValueChange ?? this.libFormStepperAutoNextOnValueChange()
  );
}
export interface LibFormStepperStepOptions {
  title?: string;
  shortTitle?: string;
  autoNextOnValueChange?: boolean;
  path: string;
}