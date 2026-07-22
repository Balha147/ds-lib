import {
  Component,
  computed,
  input,
  output,
} from '@angular/core';

import {
  Icon,
  LibIconName,
  LibIconSize,
} from '@ds-design-system/ui-components/icon';

import {
  LibBadgeAppearance,
  LibBadgeSize,
} from './badge.types';

@Component({
  selector: 'lib-badge',
  imports: [Icon],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
  host: {
    class: 'lib-badge-host',
  },
})
export class Badge {
  readonly label = input.required<string>();
  readonly appearance = input<LibBadgeAppearance>('soft');
  readonly size = input<LibBadgeSize>('md');
  readonly icon = input<LibIconName>();
  readonly removable = input(false);
  readonly removeLabel = input('Remove badge');
  readonly disabled = input(false);
  readonly customClass = input<string>('');
  readonly removed = output<void>();

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
    [`lib-badge--${this.appearance()}`]: true,
    [`lib-badge--${this.size()}`]: true,
    'lib-badge--disabled': this.disabled(),
  }));

  protected onRemove(): void {
    if (this.disabled()) {
      return;
    }

    this.removed.emit();
  }
}