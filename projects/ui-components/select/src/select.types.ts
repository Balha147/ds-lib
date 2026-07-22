import { TemplateRef } from '@angular/core';

export interface LibFormSelectValue {
    code: string;
    label: string;
}
export interface LibFormSelectItem {
    value: string;
    label: string;
    template?: TemplateRef<void>;
}

export type LibFormSelectTemplatePosition = 'before' | 'after';