import {
    Directive,
    DestroyRef,
    ElementRef,
    computed,
    effect,
    inject,
    input,
    output,
    signal,
    DOCUMENT,
} from '@angular/core';

@Directive({
    selector: '[libFormAutocomplete]',
    exportAs: 'libFormAutocomplete',
    host: {
        '(click)': 'onClick()',
        '(input)': 'onInput($event)',
        '(keydown.ArrowUp)': 'onArrowUp($event)',
        '(keydown.ArrowDown)': 'onArrowDown($event)',
        '(keydown.Enter)': 'onEnter()',
        '(keydown.Escape)': 'onEscape()',
    },
})
export class LibFormAutocompleteDirective<T> {
    private readonly elementRef = inject(ElementRef<HTMLInputElement>);
    private readonly document = inject(DOCUMENT);
    private readonly destroyRef = inject(DestroyRef);

    readonly libFormAutocomplete = input<T[] | null | undefined>(undefined);
    readonly libFormAutocompleteMinLength = input(0);
    readonly libFormAutocompleteFilter = input.required<(inputValue: string | undefined, item: T) => boolean>();

    readonly libFormAutocompleteSelection = output<T>();

    private readonly items = computed(() => this.libFormAutocomplete() ?? []);
    readonly inputValue = signal<string | undefined>(undefined);
    readonly focusedSuggestionIndex = signal(-1);

    readonly suggestions = computed(() =>
        this.items().filter(item => this.libFormAutocompleteFilter()(this.inputValue(), item))
    );

    readonly shouldShowSuggestions = computed(() => {
        const value = this.inputValue();
        return value !== undefined && value.length >= this.libFormAutocompleteMinLength();
    });

    constructor() {
        effect(() => {
            const length = this.suggestions().length;
            if (this.focusedSuggestionIndex() >= length) {
                this.focusedSuggestionIndex.set(-1);
            }
        });

        this.document.addEventListener('click', this.onDocumentClick, { capture: true });
        this.destroyRef.onDestroy(() => {
            this.document.removeEventListener('click', this.onDocumentClick, { capture: true });
        });
    }

    protected onClick(): void {
        if (this.inputValue() === undefined) {
            this.inputValue.set('');
        } else {
            this.close();
        }
    }

    protected onInput(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.inputValue.set(target.value);
    }
    protected onArrowUp(event: Event): void {
        event.preventDefault();
        const length = this.suggestions().length;
        if (length === 0) return;
        this.focusedSuggestionIndex.update(index => (index > 0 ? index - 1 : length - 1));
    }

    protected onArrowDown(event: Event): void {
        event.preventDefault();
        const length = this.suggestions().length;
        if (length === 0) return;
        this.focusedSuggestionIndex.update(index => (index + 1) % length);
    }

    protected onEnter(): void {
        const suggestion = this.suggestions()[this.focusedSuggestionIndex()];
        if (!suggestion) return;

        this.libFormAutocompleteSelection.emit(suggestion);
        this.close();
    }

    protected onEscape(): void {
        this.close();
    }

    private readonly onDocumentClick = (event: Event): void => {
        if (event.target === this.elementRef.nativeElement || !this.shouldShowSuggestions()) {
            return;
        }
        this.close();
    };

    private close(): void {
        this.inputValue.set(undefined);
        this.focusedSuggestionIndex.set(-1);
    }
}