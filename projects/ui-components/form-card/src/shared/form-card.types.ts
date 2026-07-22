import { TemplateRef } from '@angular/core';
import { LibIconName } from '@ds-design-system/ui-components/icon';

export type LibFormCardType = 'checkbox' | 'radio';

export type LibFormCardValue = string | number | boolean;

export interface LibFormCardObjectValue {
    label: string;
    value: LibFormCardValue;
    [key: string]: unknown;
}

export type LibFormCardComplexValue = LibFormCardValue | LibFormCardObjectValue;

export interface LibFormCardItem {
    value: LibFormCardValue;
    label: string;
    icon?: LibIconName;
    tooltip?: string | TemplateRef<void>;
    tooltipWidth?: string;
}