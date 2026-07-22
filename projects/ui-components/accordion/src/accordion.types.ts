import type { LibIconName } from '@ds-design-system/ui-components/icon';

export type LibAccordionSize = 'sm' | 'md' | 'lg';

export type LibAccordionMode = 'single' | 'multiple';

export interface LibAccordionItem {
    readonly id: string;
    readonly title: string;
    readonly content: string;
    readonly expanded?: boolean;
    readonly disabled?: boolean;
    readonly icon?: LibIconName;
}