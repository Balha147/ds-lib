import type {
    Meta,
    StoryObj,
} from '@storybook/angular-vite';

import { Component } from '@angular/core';
import { moduleMetadata } from '@storybook/angular-vite';

import {
    OrgChart,
    LibOrgChartNode,
} from '@ds-design-system/ui-components/org-chart';

const SMALL_TREE: LibOrgChartNode = {
    id: 'ceo',
    label: 'Alice Martin',
    role: 'CEO',

    children: [
        {
            id: 'cto',
            label: 'Bruno Petit',
            role: 'CTO',
        },
        {
            id: 'cfo',
            label: 'Claire Dubois',
            role: 'CFO',
        },
    ],
};

const MEDIUM_TREE: LibOrgChartNode = {
    id: 'ceo',
    label: 'Alice Martin',
    role: 'CEO',
    icon: 'libicon-compte',

    children: [
        {
            id: 'cto',
            label: 'Bruno Petit',
            role: 'CTO',

            children: [
                {
                    id: 'lead-fe',
                    label: 'Diane Roy',
                    role: 'Lead Frontend',
                },
                {
                    id: 'lead-be',
                    label: 'Eric Nguyen',
                    role: 'Lead Backend',
                },
                {
                    id: 'lead-devops',
                    label: 'Fatou Diallo',
                    role: 'Lead DevOps',
                },
            ],
        },

        {
            id: 'cfo',
            label: 'Claire Dubois',
            role: 'CFO',

            children: [
                {
                    id: 'compta',
                    label: 'Gérard Blanc',
                    role: 'Comptabilité',
                },
                {
                    id: 'paie',
                    label: 'Hélène Moreau',
                    role: 'Paie',
                },
            ],
        },

        {
            id: 'coo',
            label: 'Ivan Leroy',
            role: 'COO',
            disabled: true,
        },
    ],
};

const DEEP_TREE: LibOrgChartNode = {
    id: 'ceo',
    label: 'Alice Martin',
    role: 'CEO',

    children: [
        {
            id: 'cto',
            label: 'Bruno Petit',
            role: 'CTO',

            children: [
                {
                    id: 'lead-fe',
                    label: 'Diane Roy',
                    role: 'Lead Frontend',

                    children: [
                        {
                            id: 'dev1',
                            label: 'Julien Faure',
                            role: 'Développeur',
                        },
                        {
                            id: 'dev2',
                            label: 'Karim Aziz',
                            role: 'Développeur',
                        },
                    ],
                },

                {
                    id: 'lead-be',
                    label: 'Eric Nguyen',
                    role: 'Lead Backend',

                    children: [
                        {
                            id: 'dev3',
                            label: 'Léa Simon',
                            role: 'Développeuse',
                        },
                        {
                            id: 'dev4',
                            label: 'Marc Girard',
                            role: 'Développeur',
                        },
                    ],
                },
            ],
        },

        {
            id: 'cfo',
            label: 'Claire Dubois',
            role: 'CFO',
        },
    ],
};

const AVATAR_TREE: LibOrgChartNode = {
    id: 'ceo',
    label: 'Alice Martin',
    role: 'CEO',
    avatarUrl: 'https://i.pravatar.cc/100?img=1',

    children: [
        {
            id: 'cto',
            label: 'Bruno Petit',
            role: 'CTO',
            avatarUrl: 'https://i.pravatar.cc/100?img=2',
        },

        {
            id: 'cfo',
            label: 'Claire Dubois',
            role: 'CFO',
            avatarUrl: 'https://i.pravatar.cc/100?img=3',
        },
    ],
};

const meta: Meta<OrgChart> = {
    title: 'Components/OrgChart',

    component: OrgChart,

    tags: ['autodocs'],

    parameters: {
        layout: 'padded',

        docs: {
            description: {
                component: `
The **OrgChart** component provides a hierarchical
visual representation of organizational structures.

## Features

- recursive tree rendering;
- vertical orientation;
- horizontal orientation;
- expand/collapse nodes;
- configurable initial expansion depth;
- avatars;
- Design System icons;
- automatic initials;
- disabled nodes;
- keyboard accessibility;
- node click event;
- responsive layout.
        `,
            },
        },
    },

    argTypes: {
        root: {
            control: 'object',

            description:
                'Root node of the organizational hierarchy.',

            table: {
                category: 'Data',

                type: {
                    summary: 'LibOrgChartNode',
                },
            },
        },

        orientation: {
            control: 'select',

            options: [
                'vertical',
                'horizontal',
            ],

            description:
                'Controls the direction of the organizational hierarchy.',

            table: {
                category: 'Appearance',

                defaultValue: {
                    summary: 'vertical',
                },
            },
        },

        initialExpandDepth: {
            control: {
                type: 'number',
                min: -1,
                step: 1,
            },

            description:
                'Depth initially expanded. Use -1 to expand the entire tree.',

            table: {
                category: 'Behavior',

                defaultValue: {
                    summary: '-1',
                },
            },
        },

        nodeClick: {
            action: 'nodeClick',

            description:
                'Emitted when an enabled node is clicked.',
        },
    },
};

export default meta;

type Story = StoryObj<OrgChart>;

export const Small: Story = {
    args: {
        root: SMALL_TREE,
    },
};

export const Medium: Story = {
    args: {
        root: MEDIUM_TREE,
    },
};

export const WithAvatars: Story = {
    args: {
        root: AVATAR_TREE,
    },
};

export const DeepHierarchy: Story = {
    args: {
        root: DEEP_TREE,
    },
};

export const CollapsedByDefault: Story = {
    args: {
        root: DEEP_TREE,
        initialExpandDepth: 1,
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Only the root level is expanded initially. Deeper levels remain collapsed.',
            },
        },
    },
};

export const Horizontal: Story = {
    args: {
        root: MEDIUM_TREE,
        orientation: 'horizontal',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Horizontal layout for wide organizational structures.',
            },
        },
    },
};

export const WithDisabledNode: Story = {
    args: {
        root: MEDIUM_TREE,
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Demonstrates a disabled organizational node. The COO node is visually muted and cannot be selected.',
            },
        },
    },
};

@Component({
    selector: 'story-org-chart-interactive',

    imports: [OrgChart],

    template: `
    <div class="org-chart-interactive">

      <lib-org-chart
        [root]="root"
        (nodeClick)="onNodeClick($event)"
      />

      @if (selected) {
        <div class="org-chart-interactive__result">

          <strong>
            Nœud sélectionné
          </strong>

          <span>
            {{ selected.label }}
          </span>

          @if (selected.role) {
            <small>
              {{ selected.role }}
            </small>
          }

        </div>
      }

    </div>
  `,
})
class OrgChartInteractiveHost {
    readonly root = MEDIUM_TREE;

    selected: LibOrgChartNode | null = null;

    onNodeClick(node: LibOrgChartNode): void {
        this.selected = node;
    }
}

export const Interactive: Story = {
    render: () => ({
        template: `
      <story-org-chart-interactive />
    `,
    }),

    decorators: [
        moduleMetadata({
            imports: [OrgChartInteractiveHost],
        }),
    ],

    parameters: {
        docs: {
            description: {
                story:
                    'Click an enabled node to display the selected organizational node.',
            },
        },
    },
};