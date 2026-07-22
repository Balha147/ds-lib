import { computed, contentChildren, Directive, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';
import { LibStepperFieldAdapter, adaptField } from '../utils/stepper-field.adapter';
import { StepperStep } from './stepper-step';
import { nextStepperId } from '../utils/stepper-id.util';
import { LibIconName } from '@ds-design-system/ui-components/icon';

@Directive({
  selector: '[libFormStepperSection]',
})
export class StepperSection {
  readonly libFormStepperSectionField = input<FieldTree<unknown>>();
  readonly libFormStepperOptions = input<LibFormStepperSectionOptions>();
  readonly libFormStepperTitle = input<string>();
  readonly libFormStepperIcon = input<LibIconName>();
  readonly libFormStepperNoQuicknav = input(false);
  readonly libFormStepperNoStepsNav = input(false);

  readonly id = nextStepperId('lib-section');

  readonly stepDirectives = contentChildren(StepperStep);

  readonly title = computed(() =>
    this.libFormStepperOptions()?.title ?? this.libFormStepperTitle() ?? ''
  );

  readonly icon = computed<LibIconName>(() =>
    this.libFormStepperOptions()?.icon ?? this.libFormStepperIcon() ?? 'libicon-crayon' as LibIconName
  );

  readonly hasQuicknav = computed(() => !this.libFormStepperNoQuicknav());
  readonly noStepsNav = computed(() => this.libFormStepperNoStepsNav());

  private readonly explicitField = computed<LibStepperFieldAdapter | undefined>(() => {
    const field = this.libFormStepperSectionField();
    return field ? adaptField(field) : undefined;
  });

  private readonly stepFields = computed(() =>
    this.stepDirectives()
      .map(step => step.field())
      .filter((field): field is LibStepperFieldAdapter => !!field)
  );

  private readonly aggregatedField: LibStepperFieldAdapter = {
    valid: computed(() => this.stepFields().every(field => field.valid())),
    invalid: computed(() => this.stepFields().some(field => field.invalid())),
    errors: computed(() => this.stepFields().flatMap(field => field.errors())),
    value: computed(() => this.stepFields().map(field => field.value())),
    touched: computed(() => this.stepFields().every(field => field.touched())),
    dirty: computed(() => this.stepFields().some(field => field.dirty())),
    pending: computed(() => this.stepFields().some(field => field.pending()))
  };

  readonly field = computed<LibStepperFieldAdapter>(() =>
    this.explicitField() ?? this.aggregatedField
  );
}
export interface LibFormStepperSectionOptions {
  title: string;
  icon?: LibIconName;
}