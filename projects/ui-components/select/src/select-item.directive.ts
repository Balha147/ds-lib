import { Directive, TemplateRef, inject, input } from '@angular/core';

@Directive({
    selector: '[libFormSelectItem]',
})
export class LibFormSelectItemDirective<T> {
    readonly value = input.required<T>();
    readonly label = input.required<string>();

    readonly template: TemplateRef<void> = inject(TemplateRef);
}