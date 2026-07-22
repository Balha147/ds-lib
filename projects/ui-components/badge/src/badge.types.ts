import { LibIconName } from '@ds-design-system/ui-components/icon';

export type LibBadgeSize =
    | 'sm'
    | 'md'
    | 'lg';

export type LibBadgeAppearance =
    | 'soft'
    | 'solid'
    | 'outline';

export interface LibBadgeConfig {
    readonly label: string;
    readonly size?: LibBadgeSize;
    readonly appearance?: LibBadgeAppearance;
    readonly icon?: LibIconName;
    readonly dot?: boolean;
    readonly removable?: boolean;
    readonly disabled?: boolean;
    readonly ariaLabel?: string;
}