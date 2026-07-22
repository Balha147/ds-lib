import {
  Component,
  computed,
  contentChildren,
  input,
  ViewEncapsulation,
} from '@angular/core';

import { TimelineItem } from './timeline-item.component';
import { TimelineItemModel } from './timeline.types';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'lib-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'lib-timeline',
    '[class.lib-timeline--horizontal]': 'orientation() === "horizontal"',
    '[class.lib-timeline--vertical]': 'orientation() === "vertical"',
    '[class.lib-timeline--reverse]': 'reverse()',
    '[class.lib-timeline--small]': 'small()',
  },
  imports: [NgTemplateOutlet]
})
export class Timeline {

  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');

  protected readonly MAX_INDEX = Number.MAX_SAFE_INTEGER;

  readonly reverse = input(false);

  readonly small = input(false);

  readonly pendingFromIndex = input<number>();

  readonly content = input<string[]>([]);

  readonly icons = input<string[]>([]);

  readonly projectedItems = contentChildren(TimelineItem);

  readonly items = computed<TimelineItemModel[]>(() => {

    const projected = this.projectedItems();

    if (projected.length) {
      return projected.map(item => ({
        template: item.template(),
        icon: item.icon(),
      }));
    }

    return this.content().map((content, index) => ({
      content,
      icon: this.icons()[index],
    }));
  });

  trackByIndex(index: number) {
    return index;
  }

}