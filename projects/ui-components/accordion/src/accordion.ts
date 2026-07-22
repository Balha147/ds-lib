import { Component, computed, input, model, output } from '@angular/core';
import { Icon } from '@ds-design-system/ui-components/icon';

import { LibIconName, LibIconSize } from '@ds-design-system/ui-components/icon';

import {
  LibAccordionItem,
  LibAccordionMode,
  LibAccordionSize,
} from './accordion.types';

@Component({
  selector: 'lib-accordion',
  imports: [Icon],
  templateUrl: './accordion.html',
})
export class Accordion {
  readonly items = input.required<readonly LibAccordionItem[]>();
  readonly mode = input<LibAccordionMode>('single');
  readonly size = input<LibAccordionSize>('md');
  readonly flush = input(false);
  readonly expandIcon = input<LibIconName>('libicon-fleche-bas');
  readonly collapseIcon = input<LibIconName>('libicon-fleche-haut');
  readonly customClass = input('');

  readonly expandedIds = model<readonly string[]>([]);
  readonly itemToggle = output<{
    item: LibAccordionItem;
    expanded: boolean;
  }>();

  protected readonly iconSize = computed<LibIconSize>(() => {
    switch (this.size()) {
      case 'sm':
        return 'sm';

      case 'lg':
        return 'lg';

      default:
        return 'md';
    }
  });

  protected readonly classes = computed(() => ({
    'lib-accordion': true,
    [`lib-accordion--${this.size()}`]: true,
    'lib-accordion--flush': this.flush(),
    [this.customClass()]: !!this.customClass(),
  }));

  protected readonly normalizedExpandedIds = computed<readonly string[]>(() => {
    const controlledIds = this.expandedIds();

    if (controlledIds.length > 0) {
      return controlledIds;
    }

    return this.items()
      .filter((item) => item.expanded && !item.disabled)
      .map((item) => item.id)
      .slice(0, this.mode() === 'single' ? 1 : undefined);
  });

  protected isExpanded(item: LibAccordionItem): boolean {
    return this.normalizedExpandedIds().includes(item.id);
  }

  protected toggle(item: LibAccordionItem): void {
    if (item.disabled) {
      return;
    }

    const currentlyExpanded = this.isExpanded(item);

    if (currentlyExpanded) {
      const nextIds = this.normalizedExpandedIds().filter(
        (id) => id !== item.id,
      );

      this.expandedIds.set(nextIds);

      this.itemToggle.emit({
        item,
        expanded: false,
      });

      return;
    }

    const nextIds =
      this.mode() === 'single'
        ? [item.id]
        : [...this.normalizedExpandedIds(), item.id];

    this.expandedIds.set(nextIds);

    this.itemToggle.emit({
      item,
      expanded: true,
    });
  }

  protected onKeydown(
    event: KeyboardEvent,
    item: LibAccordionItem,
  ): void {
    if (item.disabled) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      this.toggle(item);
    }
  }

  protected getPanelId(item: LibAccordionItem): string {
    return `accordion-panel-${item.id}`;
  }

  protected getButtonId(item: LibAccordionItem): string {
    return `accordion-button-${item.id}`;
  }
}