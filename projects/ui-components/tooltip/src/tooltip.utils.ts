const TOOLTIP_ID_PREFIX = 'lib-tooltip-id-';

let tooltipIdCounter = 0;

export function getTooltipId(): string {
    tooltipIdCounter += 1;

    return `${TOOLTIP_ID_PREFIX}${tooltipIdCounter}`;
}