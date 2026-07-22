import { InjectionToken } from '@angular/core';
import { LibFormStepperConfig } from './stepper.types';

export const LIB_STEPPER_CONFIG =
    new InjectionToken<LibFormStepperConfig>('LIB_STEPPER_CONFIG');

export const LIB_STEPPER_ROUTING =
    new InjectionToken<boolean>('LIB_STEPPER_ROUTING', {
        factory: () => true
    });

export const LIB_STEPPER_SCROLL =
    new InjectionToken<boolean>('LIB_STEPPER_SCROLL', {
        factory: () => true
    });