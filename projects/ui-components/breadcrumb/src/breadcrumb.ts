import {
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import {
  Icon,
  LibIconName,
  LibIconSize,
} from '@ds-design-system/ui-components/icon';

import {
  LibBreadcrumbItem,
  LibBreadcrumbSeparator,
  LibBreadcrumbSize,
} from './breadcrumb.types';

const LABEL_MAX_LENGTH = 30;

@Component({
  selector: 'lib-breadcrumb',
  imports: [Icon, NgTemplateOutlet],
  templateUrl: './breadcrumb.html',
  host: {
    class: 'lib-breadcrumb-host',
  },
})
export class Breadcrumb {
  readonly items = input<readonly LibBreadcrumbItem[]>([]);

  readonly separator =
    input<LibBreadcrumbSeparator>('chevron');

  readonly customSeparator = input<string>('›');

  readonly size = input<LibBreadcrumbSize>('md');

  readonly maxVisibleItems = input<number | null>(null);

  readonly showHomeIcon = input(false);

  readonly homeIcon =
    input<LibIconName>('libicon-vague');

  readonly ariaLabel = input('Breadcrumb');

  readonly itemClick =
    output<LibBreadcrumbItem>();

  private readonly expanded = signal(false);

  readonly hasItems = computed(
    () => this.items().length > 0,
  );

  readonly normalizedItems =
    computed<readonly LibBreadcrumbItem[]>(() => {
      const items = this.items();

      if (items.length === 0) {
        return [];
      }

      const hasExplicitCurrent = items.some(
        (item) => item.current === true,
      );

      if (hasExplicitCurrent) {
        return items;
      }

      return items.map((item, index) => ({
        ...item,
        current: index === items.length - 1,
      }));
    });

  readonly isCollapsible = computed(() => {
    const max = this.maxVisibleItems();

    return (
      max !== null &&
      max > 1 &&
      this.normalizedItems().length > max
    );
  });

  readonly isCollapsed = computed(
    () => this.isCollapsible() && !this.expanded(),
  );

  readonly hiddenCount = computed(() => {
    if (!this.isCollapsed()) {
      return 0;
    }

    const max = this.maxVisibleItems();

    if (max === null) {
      return 0;
    }

    return Math.max(
      this.normalizedItems().length - max,
      0,
    );
  });

  readonly visibleItems =
    computed<readonly LibBreadcrumbItem[]>(() => {
      const items = this.normalizedItems();

      if (!this.isCollapsed()) {
        return items;
      }

      const max = this.maxVisibleItems();

      if (max === null || max <= 1) {
        return items.slice(-1);
      }

      return [
        items[0],
        ...items.slice(-(max - 1)),
      ];
    });

  constructor() {
    effect(() => {
      const items = this.items();
      const max = this.maxVisibleItems();

      if (
        items.length === 0 ||
        max === null ||
        max <= 1 ||
        items.length <= max
      ) {
        this.expanded.set(false);
      }
    });
  }

  protected isCurrentItem(
    item: LibBreadcrumbItem,
  ): boolean {
    return item.current === true;
  }

  protected onItemClick(
    item: LibBreadcrumbItem,
  ): void {
    if (item.disabled || item.current) {
      return;
    }

    this.itemClick.emit(item);
  }

  protected onEllipsisClick(): void {
    this.expanded.set(true);
  }

  protected getEllipsisLabel(): string {
    const count = this.hiddenCount();

    return count === 1
      ? 'Afficher 1 élément masqué'
      : `Afficher ${count} éléments masqués`;
  }

  protected truncateLabel(label: string): string {
    return label.length > LABEL_MAX_LENGTH
      ? `${label.slice(0, LABEL_MAX_LENGTH)}…`
      : label;
  }

  protected getIconSize(): LibIconSize {
    switch (this.size()) {
      case 'sm':
        return 'sm';

      case 'lg':
        return 'lg';

      default:
        return 'md';
    }
  }
}