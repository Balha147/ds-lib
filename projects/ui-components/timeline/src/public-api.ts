export * from './timeline';
export * from './timeline-item.component';
export * from './timeline.types';
export * from './timeline.config';

import { TimelineItem } from './timeline-item.component';
import { Timeline } from './timeline';

export const LIB_TIMELINE_MODULE = [TimelineItem, Timeline] as const;

