import { Component, input, output } from '@angular/core';

import { OrgChartNode } from './org-chart-node';
import {
  LibOrgChartNode,
  LibOrgChartOrientation,
} from './org-chart.types';

@Component({
  selector: 'lib-org-chart',
  templateUrl: './org-chart.html',
  imports: [OrgChartNode],
  host: {
    class: 'lib-org-chart',
    '[class.lib-org-chart--horizontal]': 'orientation() === "horizontal"',
  },
})
export class OrgChart {
  /**
   * Root node of the organization chart.
   */
  readonly root = input.required<LibOrgChartNode>();

  /**
   * Chart orientation.
   *
   * @default 'vertical'
   */
  readonly orientation = input<LibOrgChartOrientation>('vertical');

  /**
   * Initial expansion depth.
   *
   * - `-1`: expand the complete tree
   * - `0`: only the root is expanded
   * - `1`: root + first level are expanded
   * - `2`: root + first two levels are expanded
   *
   * @default -1
   */
  readonly initialExpandDepth = input(-1);

  /**
   * Emits the clicked node.
   */
  readonly nodeClick = output<LibOrgChartNode>();
}