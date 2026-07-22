import { LibIconName } from '@ds-design-system/ui-components/icon';

export interface LibOrgChartNode {
    readonly id: string;
    readonly label: string;
    readonly role?: string;
    readonly avatarUrl?: string;
    readonly icon?: LibIconName;
    readonly disabled?: boolean;
    readonly children?: readonly LibOrgChartNode[];
}

export type LibOrgChartOrientation = 'vertical' | 'horizontal';