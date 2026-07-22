import { TemplateRef } from '@angular/core';

export interface TimelineItemModel {
    content?: string;
    template?: TemplateRef<void>;
    icon?: string;
}

export interface TimelineGap {
    horizontal?: string;
    vertical?: string;
}