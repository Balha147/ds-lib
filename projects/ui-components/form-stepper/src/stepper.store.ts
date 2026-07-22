import {
    Injectable,
    computed,
    effect,
    signal
} from '@angular/core';
import {
    LibFormStepperExtraPage,
    libFormStepperMain,
    LibFormStepperNavSection,
    LibFormStepperState,
} from './stepper.types';

@Injectable()
export class LibStepperStore {
    private readonly controlElementsByPath = new Map<string, HTMLElement[]>();
    readonly onboarding = signal<LibFormStepperExtraPage | undefined>(undefined);
    readonly summary = signal<LibFormStepperExtraPage | undefined>(undefined);
    readonly sections = signal<LibFormStepperNavSection[]>([]);

    private readonly rawStepIndex = signal<number | undefined>(undefined);

    readonly firstIndex = computed(() => this.onboarding() ? -1 : 0);
    readonly lastIndex = computed(() =>
        this.summary() ? this.steps().length : this.steps().length - 1
    );

    readonly stepIndex = computed(() =>
        this.rawStepIndex() ?? this.firstIndex()
    );

    readonly steps = computed(() =>
        this.sections()
            .flatMap(section => section.steps())
            .filter(step => !step.hidden?.())
    );

    readonly currentStep = computed(() => {
        const index = this.stepIndex();
        if (index < 0 || index >= this.steps().length)
            return undefined;
        return this.steps()[index];
    });

    readonly currentSection = computed(() =>
        this.sections()[this.currentStep()?.sectionIndex ?? 0]
    );

    readonly isOnboardingPage = computed(() => this.stepIndex() === -1);
    readonly isSummaryPage = computed(() => this.stepIndex() === this.steps().length);

    readonly isFirstStep = computed(() => this.stepIndex() === this.firstIndex());
    readonly isLastStep = computed(() => this.stepIndex() === this.lastIndex());


    readonly canGoPrevious = computed(() => !this.isFirstStep());

    readonly canGoNext = computed(() =>
        this.isOnboardingPage() ? true : (this.currentStep()?.field.valid() ?? false)
    );

    readonly progress = computed(() => {
        if (!this.steps().length)
            return 0;
        return (this.stepIndex() - this.firstIndex() + 1) / (this.lastIndex() - this.firstIndex() + 1);
    });

    readonly isFormValid = computed(() =>
        this.sections().every(section => section.field.valid())
    );

    private readonly maxStepIndexViewed = signal(-1);

    readonly allStepsViewed = computed(() =>
        this.maxStepIndexViewed() >= this.lastIndex()
    );

    readonly state = computed<LibFormStepperState>(() => ({
        sectionIndex: this.currentStep()?.sectionIndex ?? -1,
        stepIndex: this.stepIndex(),
        isStepValid: this.canGoNext(),
        hasPrevStep: this.canGoPrevious(),
        hasNextStep: !this.isLastStep(),
        firstStepIndex: this.firstIndex(),
        lastStepIndex: this.lastIndex(),
        maxStepIndexViewed: this.maxStepIndexViewed(),
        allStepsViewed: this.allStepsViewed(),
        progress: this.progress(),
        onboardingInfo: this.onboarding()
            ? { title: this.onboarding()!.title, icon: this.onboarding()!.icon, index: -1 }
            : undefined,
        summaryInfo: this.summary()
            ? { title: this.summary()!.title, icon: this.summary()!.icon, index: this.steps().length }
            : undefined,
        nav: this.sections()
    }));

    readonly main = computed<libFormStepperMain>(() => {
        if (this.isOnboardingPage()) {
            const page = this.onboarding();
            return {
                sectionTitle: '',
                stepTitle: page?.title ?? '',
                stepTemplate: page!.template,
                isFirstStep: true,
                isLastStep: false,
                isOnboarding: true,
                isSummary: false
            };
        }
        if (this.isSummaryPage()) {
            const page = this.summary();
            return {
                sectionTitle: '',
                stepTitle: page?.title ?? '',
                stepTemplate: page!.template,
                isFirstStep: false,
                isLastStep: true,
                isOnboarding: false,
                isSummary: true
            };
        }
        return {
            sectionTitle: this.currentSection()?.title ?? '',
            stepTitle: this.currentStep()?.title ?? '',
            stepTemplate: this.currentStep()!.template,
            isFirstStep: this.isFirstStep(),
            isLastStep: this.isLastStep(),
            isOnboarding: false,
            isSummary: false
        };
    });

    constructor() {
        effect(() => {
            const index = this.stepIndex();
            this.maxStepIndexViewed.update(max => Math.max(max, index));
        });

        effect(() => {
            const step = this.currentStep();
            if (!step) return;
            if (!step.autoNext) return;
            if (!step.field.valid()) return;
            queueMicrotask(() => this.next());
        });

        effect(() => {
            const step = this.currentStep();
            if (!step) return;
            queueMicrotask(() => this.focusFirstControlIfEmpty(step.path));
        });
    }

    registerSection(section: LibFormStepperNavSection) {
        this.sections.update(sections => [...sections, section]);
    }

    next() {
        if (this.isLastStep())
            return;
        this.rawStepIndex.set(this.stepIndex() + 1);
    }

    previous() {
        if (this.isFirstStep())
            return;
        this.rawStepIndex.set(this.stepIndex() - 1);
    }

    goTo(index: number) {
        if (index < this.firstIndex())
            return;
        if (index > this.lastIndex())
            return;
        this.rawStepIndex.set(index);
    }

    goToPath(path: string) {
        if (this.onboarding()?.path === path) {
            this.goTo(-1);
            return;
        }
        if (this.summary()?.path === path) {
            this.goTo(this.steps().length);
            return;
        }
        const index = this.steps().findIndex(step => step.path === path);
        if (index >= 0)
            this.goTo(index);
    }

    registerControlElement(stepPath: string, element: HTMLElement): void {
        const elements = this.controlElementsByPath.get(stepPath) ?? [];
        elements.push(element);
        this.controlElementsByPath.set(stepPath, elements);
    }

    unregisterControlElement(stepPath: string, element: HTMLElement): void {
        const elements = this.controlElementsByPath.get(stepPath);
        if (!elements)
            return;
        const index = elements.indexOf(element);
        if (index >= 0)
            elements.splice(index, 1);
    }
    private focusFirstControlIfEmpty(stepPath: string): void {
        const step = this.currentStep();
        if (!step || step.path !== stepPath)
            return;
        if (step.field.value())
            return;
        const [first] = this.controlElementsByPath.get(stepPath) ?? [];
        first?.focus();
    }
}