import { LibIconName } from '@ds-design-system/ui-components/icon';

export interface LibBreadcrumbItem {
    readonly label: string;
    readonly url?: string;
    readonly icon?: LibIconName;
    readonly disabled?: boolean;
    readonly current?: boolean;
    readonly ariaLabel?: string;
}

export type LibBreadcrumbSeparator =
    | 'slash'
    | 'chevron'
    | 'dot'
    | 'custom';

export type LibBreadcrumbSize = 'sm' | 'md' | 'lg';