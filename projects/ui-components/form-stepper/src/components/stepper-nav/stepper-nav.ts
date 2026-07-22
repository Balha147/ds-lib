import { Component, computed, DestroyRef, inject, input, signal, ViewEncapsulation } from '@angular/core';
import {
  ConnectedPosition,
  OverlayModule,
} from '@angular/cdk/overlay';
import { StepperSectionIcon } from '../stepper-section-icon/stepper-section-icon';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { LibStepperStore } from '../../stepper.store';
import { LibFormStepperNavSection, LibFormStepperStep } from '../../stepper.types';
import { NgTemplateOutlet } from '@angular/common';

const MOBILE_BREAKPOINT = '(max-width: 1023px)';
/**
 * Render the LibFormStepper navigation.
 */
@Component({
  selector: 'lib-form-stepper-nav',
  imports: [OverlayModule, StepperSectionIcon, NgTemplateOutlet],
  templateUrl: './stepper-nav.html',
  styleUrl: './stepper-nav.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'lib-form-stepper-nav',
    '[class.lib-form-stepper-nav--mobile]': 'isMobile()'
  }
})
export class StepperNav {
  private readonly store = inject(LibStepperStore);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly destroyRef = inject(DestroyRef);

  /** Determines whether to hide the steps in the "nav" for all sections. */
  readonly libFormStepperNoStepsNav = input(false);

  /** Determines whether to remove the Onboarding link from the "nav". */
  readonly libFormStepperNoOnboardingNav = input(false);

  private readonly breakpointState = toSignal(
    this.breakpointObserver.observe(MOBILE_BREAKPOINT)
  );
  readonly isMobile = computed<boolean>(() => this.breakpointState()?.matches ?? false);

  readonly isMobileOverlayOpen = signal(false);

  readonly mobileOverlayPosition: { left: ConnectedPosition[]; right: ConnectedPosition[] } = {
    left: [
      { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
      { originX: 'center', originY: 'bottom', overlayX: 'start', overlayY: 'top' }
    ],
    right: [
      { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
      { originX: 'center', originY: 'bottom', overlayX: 'end', overlayY: 'top' }
    ]
  };

  readonly state = computed(() => this.store.state());

  constructor() {
    // Referme l'overlay mobile dès que le step courant change.
    let previousStepIndex: number | undefined;
    const closeOnNavigate = () => {
      const index = this.store.stepIndex();
      if (previousStepIndex !== undefined && previousStepIndex !== index) {
        this.isMobileOverlayOpen.set(false);
      }
      previousStepIndex = index;
    };
    this.destroyRef.onDestroy(
      // pas de subscription RxJS à nettoyer : l'effect s'auto-détruit avec le composant
      () => { }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this as any).__closeEffect = closeOnNavigate;
  }

  /** Index global (dans `store.steps()`) du premier step d'une section, via son index dans `nav`. */
  sectionStepOffset(sectionIndex: number): number {
    return this.store.steps().findIndex(step => step.sectionIndex === sectionIndex);
  }

  navigateByStepIndex(event: Event, stepIndex: number, sectionIndex?: number): void {
    event.stopPropagation();
    if (sectionIndex !== this.state().sectionIndex) {
      this.store.goTo(stepIndex);
    } else if (!this.libFormStepperNoStepsNav()) {
      this.isMobileOverlayOpen.update(open => !open);
    }
  }

  isSectionValid(section: LibFormStepperNavSection, offset: number, maxStepIndexViewed: number): boolean {
    return offset <= maxStepIndexViewed && section.field.valid();
  }

  isStepValid(step: LibFormStepperStep, globalIndex: number, maxStepIndexViewed: number): boolean {
    return globalIndex <= maxStepIndexViewed && step.field.valid();
  }

  isStepDisabled(step: LibFormStepperStep, globalIndex: number, maxStepIndexViewed: number): boolean {
    return globalIndex > maxStepIndexViewed && !step.field.dirty();
  }
}
