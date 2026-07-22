import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  contentChild,
  contentChildren,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { StepperMain } from '../stepper-main/stepper-main';
import { StepperMainDirective } from '../../directives/stepper-main';
import { StepperNav } from '../stepper-nav/stepper-nav';
import { LibStepperStore } from '../../stepper.store';
import { libFormStepperMain, LibFormStepperNavSection, LibFormStepperStep } from '../../stepper.types';
import { Onboarding } from '../../directives/onboarding';
import { StepperSummary } from '../../directives/stepper-summary';
import { StepperSection } from '../../directives/stepper-section';

/**
 * Root component of the LibFormStepper.
 */
@Component({
  selector: 'lib-form-stepper-container',
  imports: [NgTemplateOutlet, StepperMain, StepperNav],
  templateUrl: './stepper-container.html',
  styleUrl: './stepper-container.scss',
  providers: [LibStepperStore],
  encapsulation: ViewEncapsulation.None,

})
export class StepperContainer {
  private readonly store = inject(LibStepperStore);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly injector = inject(Injector);

  /**
   * Determines whether navigation between steps uses routing.
   *
   * NOTE: not wired yet — reserved for a future routing integration.
   */
  readonly libFormStepperUseRouting = input(true);

  /**
   * Determines whether to scroll to the top of `<lib-form-stepper-container>` on navigation.
   */
  readonly libFormStepperNoScrollToTopOnNavigation = input(true);

  /**
   * Determines whether the submit button is displayed on the last step.
   * Only used when `LibFormStepperMainDirective` is not provided.
   */
  readonly libFormStepperNoSubmitButton = input(false);

  /** Determines whether to hide the steps in the "nav" for all sections. */
  readonly libFormStepperNoStepsNav = input(false);

  /** Determines whether to remove the Onboarding link from the "nav". */
  readonly libFormStepperNoOnboardingNav = input(false);

  /**
   * Determines whether the submit button in the last step is disabled.
   * Only used when `LibFormStepperMainDirective` is not provided.
   */
  readonly libFormStepperDisabled = input(false);

  private readonly mainDirective = contentChild(StepperMainDirective);
  private readonly onboardingDirective = contentChild(Onboarding);
  private readonly summaryDirective = contentChild(StepperSummary);
  private readonly sectionDirectives = contentChildren(StepperSection);

  /** Exposed for consumers overriding `libFormStepperMain`, and used internally. */
  readonly stepTemplateInjector = this.injector;

  readonly hasMainOverride = computed(() => !!this.mainDirective());
  readonly mainOverrideTemplate = computed(() => this.mainDirective()?.template);

  /** Snapshot-on-read infos needed to render the current step. */
  readonly main = computed<libFormStepperMain>(() => this.store.main());

  private readonly assembledSections = computed<LibFormStepperNavSection[]>(() =>
    this.sectionDirectives().map((section, sectionIndex) => ({
      id: section.id,
      title: section.title(),
      icon: section.icon(),
      field: section.field(),
      hasQuicknav: section.hasQuicknav(),
      noStepsNav: section.noStepsNav(),
      steps: computed<LibFormStepperStep[]>(() => {
        const stepDirectives = section.stepDirectives();
        const total = stepDirectives.length;
        return stepDirectives.map((step, relativeIndex) => ({
          id: step.id,
          title: step.title() || section.title(),
          shortTitle: step.shortTitle() ?? '',
          path: step.path(),
          field: step.field() ?? section.field(),
          template: step.template,
          sectionIndex,
          sectionProgression: total >= 2
            ? { count: relativeIndex + 1, total }
            : undefined,
          autoNext: step.autoNext()
        }));
      })
    }))
  );

  constructor() {
    effect(() => {
      this.store.onboarding.set(this.onboardingDirective()?.page());
    });

    effect(() => {
      this.store.summary.set(this.summaryDirective()?.page());
    });

    effect(() => {
      this.store.sections.set(this.assembledSections());
    });

    // Scroll to top on navigation, but never on initial render.
    let isFirstRun = true;
    effect(() => {
      this.store.stepIndex();
      if (isFirstRun) {
        isFirstRun = false;
        return;
      }
      if (this.libFormStepperNoScrollToTopOnNavigation())
        return;
      this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
