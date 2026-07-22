import { InjectionToken } from "@angular/core";
import { LibFormStepperConfig } from "./stepper.types";

export const LIB_FORM_STEPPER_DEFAULT_CONFIG: LibFormStepperConfig = {
    translations: {
        start: 'Commencer',
        prev: 'Précédent',
        next: 'Suivant',
        submit: 'Envoyer',
        yes: 'Oui',
        no: 'Non',
    },
    css: {
        stepTitle: '',
        prev: '',
        next: '',
        submit: '',
    },
} as const;

export const LIB_FORM_STEPPER_CONFIG = new InjectionToken<LibFormStepperConfig>('LibFormStepperConfig');

export const LIB_FORM_STEPPER_PATH_PARAM = 'libFormStepperPathParam';