import { ConnectedPosition } from '@angular/cdk/overlay';

export const DropletPosition = {
    Top: 'top',
    Right: 'right',
    Bottom: 'bottom',
    Left: 'left',
} as const;

export type DropletPosition = typeof DropletPosition[keyof typeof DropletPosition];

export type TooltipTrigger = 'hover' | 'click' | 'manual';

export const DEFAULT_SHOW_DELAY = 0;
export const DEFAULT_HIDE_DELAY = 100;

export const POSITION_MAP: Record<DropletPosition, ConnectedPosition> = {
    top: {
        originX: 'center', originY: 'top',
        overlayX: 'center', overlayY: 'bottom',
        offsetY: -8,
        panelClass: DropletPosition.Top,
    },
    bottom: {
        originX: 'center', originY: 'bottom',
        overlayX: 'center', overlayY: 'top',
        offsetY: 8,
        panelClass: DropletPosition.Bottom,
    },
    left: {
        originX: 'start', originY: 'center',
        overlayX: 'end', overlayY: 'center',
        offsetX: -8,
        panelClass: DropletPosition.Left,
    },
    right: {
        originX: 'end', originY: 'center',
        overlayX: 'start', overlayY: 'center',
        offsetX: 8,
        panelClass: DropletPosition.Right,
    },
};