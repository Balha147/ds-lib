import { computed, Signal } from '@angular/core';
import { FieldTree, ValidationError } from '@angular/forms/signals';

export interface LibStepperFieldAdapter<T = unknown> {
    readonly valid: Signal<boolean>;
    readonly invalid: Signal<boolean>;
    readonly errors: Signal<readonly ValidationError[]>;
    readonly value: Signal<T>;
    readonly touched: Signal<boolean>;
    readonly dirty: Signal<boolean>;
    readonly pending: Signal<boolean>;
}

export function adaptField<T>(field: FieldTree<T>): LibStepperFieldAdapter<T> {
    return {
        valid: computed(() => field().valid()),
        invalid: computed(() => field().invalid()),
        errors: computed(() => field().errors()),
        value: computed(() => field().value()),
        touched: computed(() => field().touched()),
        dirty: computed(() => field().dirty()),
        pending: computed(() => field().pending()),
    };
}

export function staticValidField<T = unknown>(value?: T): LibStepperFieldAdapter<T> {
    return {
        valid: computed(() => true),
        invalid: computed(() => false),
        errors: computed(() => []),
        value: computed(() => value as T),
        touched: computed(() => true),
        dirty: computed(() => false),
        pending: computed(() => false),
    };
}