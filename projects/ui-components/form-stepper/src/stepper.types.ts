import { Signal, TemplateRef } from '@angular/core';
import { LibStepperFieldAdapter } from './utils/stepper-field.adapter';
import { LibIconName } from '@ds-design-system/ui-components/icon';

export type LibStepperField<T = unknown> = LibStepperFieldAdapter<T>;

export interface LibFormStepperSectionProgression {
    count: number;
    total: number;
}

export interface LibFormStepperExtraPageInfo {
    title: string;
    icon: LibIconName;
    index: number;
}

export interface LibFormStepperExtraPage {
    title: string;
    icon: LibIconName;
    path: string;
    template: TemplateRef<unknown>;
}

export interface LibFormStepperStep {
    id: string;
    title: string;
    shortTitle: string;
    path: string;
    field: LibStepperField;
    template: TemplateRef<unknown>;
    sectionIndex: number;
    sectionProgression?: LibFormStepperSectionProgression;
    autoNext?: boolean;
    hidden?: Signal<boolean>;
    disabled?: Signal<boolean>;
}

export interface LibFormStepperNavSection {
    id: string;
    title: string;
    icon: LibIconName;
    field: LibStepperField;
    steps: Signal<LibFormStepperStep[]>;
    hasQuicknav: boolean;
    noStepsNav?: boolean;
}

export interface LibFormStepperState {
    sectionIndex: number;
    stepIndex: number;
    isStepValid: boolean;
    hasPrevStep: boolean;
    hasNextStep: boolean;
    firstStepIndex: number;
    lastStepIndex: number;
    maxStepIndexViewed: number;
    allStepsViewed: boolean;
    progress: number;
    onboardingInfo?: LibFormStepperExtraPageInfo;
    summaryInfo?: LibFormStepperExtraPageInfo;
    nav: LibFormStepperNavSection[];
}

export interface libFormStepperMain {
    sectionTitle: string;
    stepTitle: string;
    stepTemplate: TemplateRef<unknown>;
    isFirstStep: boolean;
    isLastStep: boolean;
    isOnboarding: boolean;
    isSummary: boolean;
}

export interface LibFormStepperConfig {
    translations: {
        start: string;
        prev: string;
        next: string;
        submit: string;
        yes: string;
        no: string;
    };
    css: {
        stepTitle: string;
        prev: string;
        next: string;
        submit: string;
    };
}