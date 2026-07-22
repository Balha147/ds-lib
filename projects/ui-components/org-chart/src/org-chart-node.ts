import {
    Component,
    computed,
    effect,
    forwardRef,
    input,
    output,
    signal,
} from '@angular/core';

import { Icon } from '@ds-design-system/ui-components/icon';

import {
    LibOrgChartNode,
    LibOrgChartOrientation,
} from './org-chart.types';

@Component({
    selector: 'lib-org-chart-node',
    templateUrl: './org-chart-node.html',
    imports: [
        Icon,
        forwardRef(() => OrgChartNode),
    ],
    host: {
        class: 'lib-org-chart__branch',
        '[class.lib-org-chart__branch--horizontal]':
            'orientation() === "horizontal"',
    },
})
export class OrgChartNode {
    readonly node = input.required<LibOrgChartNode>();

    readonly orientation =
        input<LibOrgChartOrientation>('vertical');

    readonly initialExpandDepth = input(-1);

    readonly depth = input(0);

    readonly nodeClick =
        output<LibOrgChartNode>();

    protected readonly expanded = signal(true);

    protected readonly hasChildren = computed(
        () => (this.node().children?.length ?? 0) > 0,
    );

    private readonly initialExpansionEffect = effect(() => {
        const maxDepth = this.initialExpandDepth();
        const currentDepth = this.depth();

        if (maxDepth >= 0) {
            this.expanded.set(currentDepth < maxDepth);
        } else {
            this.expanded.set(true);
        }
    });

    protected toggle(): void {
        if (!this.hasChildren() || this.node().disabled) {
            return;
        }

        this.expanded.update((value) => !value);
    }

    protected onClick(): void {
        if (this.node().disabled) {
            return;
        }

        this.nodeClick.emit(this.node());
    }

    protected initials(label: string): string {
        return label
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word.charAt(0))
            .join('')
            .toUpperCase();
    }
}