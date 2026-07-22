import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  booleanAttribute,
  computed,
  input,
  TemplateRef,
  ViewEncapsulation,
  signal,
} from '@angular/core';
import { LibAlertType } from '@ds-design-system/ui-components/alert';
import { DropletPosition } from './tooltip.config';
import { getTooltipId } from './tooltip.utils';

@Component({
  selector: 'lib-tooltip',
  imports: [NgTemplateOutlet],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    role: 'tooltip',
    class: 'lib-tooltip alert lib-fs-7',
    '[id]': 'tooltipId()',
    '(pointerenter)': 'pointerInside.set(true)',
    '(pointerleave)': 'pointerInside.set(false)',
    '[class.lib-alert-light]': 'type() === "light"',
    '[class.lib-alert-success]': 'type() === "success"',
    '[class.lib-alert-danger]': 'type() === "danger"',
    '[class.lib-alert-warning]': 'type() === "warning"',
    '[class.lib-alert-info]': 'type() === "info"',
    '[style.width]': 'width()',
  },
})
export class Tooltip {
  private readonly generatedId = getTooltipId();

  readonly id = input<string>();
  readonly content = input<string | TemplateRef<void>>('');
  readonly type = input<LibAlertType>('info');
  readonly width = input('auto');
  readonly dropletPosition = input<DropletPosition>('bottom');

  readonly pointerInside = signal(false);

  readonly tooltipId = computed(() => this.id() ?? this.generatedId);

  readonly contentTemplate = computed(() => {
    const value = this.content();
    return value instanceof TemplateRef ? value : null;
  });
}