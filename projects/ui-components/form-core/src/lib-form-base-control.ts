import { computed, Directive, input, model, signal } from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';

@Directive()
export abstract class LibFormBaseControl<T> implements FormValueControl<T | null> {
    readonly value = model<T | null>(null);

    readonly disabled = input(false);
    readonly readonly = input(false);
    readonly hidden = input(false);
    readonly errors = input<readonly ValidationError[]>([]);
    readonly invalid = input(false);
    readonly touched = input(false);

    readonly label = input('');
    readonly placeholder = input(' ');
    readonly ariaLabel = input<string | null>(null);
    readonly noErrorMessages = input(false);
    readonly hint = input('');

    protected readonly hasFocus = signal(false);

    readonly isInvalid = computed(() =>
        this.touched() && (this.invalid() || this.errors().length > 0)
    );

    readonly isValid = computed(() =>
        this.touched() && !this.invalid() && this.errors().length === 0
    );

    protected readonly id = `lib-field-${crypto.randomUUID().slice(0, 8)}`;

    readonly firstErrorMessage = computed<string>(() => {
        const [first] = this.errors();
        return first ? this.messageFor(first) : '';
    });

    protected messageFor(error: ValidationError): string {
        return error.kind ?? 'Invalid value';
    }

    protected onFocus(): void {
        this.hasFocus.set(true);
    }

    protected onBlur(): void {
        this.hasFocus.set(false);
    }

    focus?(): void;
}