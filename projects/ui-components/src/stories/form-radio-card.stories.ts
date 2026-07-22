import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import {
    Meta,
    moduleMetadata,
    StoryObj,
} from '@storybook/angular-vite';

import {
    LibFormCardItem,
    LibFormRadioCard,
} from '@ds-design-system/ui-components/form-card';

/**
 * ============================================================================
 * Types
 * ============================================================================
 */

type SelectedPlan = {
    label: string;
    value: string;
} | null;

/**
 * ============================================================================
 * Story data
 * ============================================================================
 */

const PLAN_ITEMS: LibFormCardItem[] = [
    {
        value: 'basic',
        label: 'Basique',
        icon: 'libicon-compte',
    },
    {
        value: 'pro',
        label: 'Pro',
        icon: 'libicon-etoile',
    },
    {
        value: 'enterprise',
        label: 'Entreprise',
        icon: 'libicon-building',
    },
];

const ITEMS_WITH_TOOLTIP: LibFormCardItem[] = [
    {
        value: 'starter',
        label: 'Starter',
        icon: 'libicon-flag',
        tooltip: "Idéal pour démarrer, jusqu'à 5 utilisateurs.",
    },
    {
        value: 'growth',
        label: 'Croissance',
        icon: 'libicon-graphique',
        tooltip: "Jusqu'à 50 utilisateurs.",
    },
];

/**
 * ============================================================================
 * Meta
 * ============================================================================
 */

const meta: Meta<LibFormRadioCard> = {
    title: 'Forms/Cards/Radio',

    component: LibFormRadioCard,

    tags: ['autodocs'],

    parameters: {
        docs: {
            description: {
                component: `
Radio card component allowing the user to select exactly one option
from a collection of cards.

The component supports:

- Standard value binding
- valueChange events
- Angular Signal Forms integration
- Custom icons
- Tooltips
- Single selection
        `.trim(),
            },
        },
    },
};

export default meta;

type Story = StoryObj<LibFormRadioCard>;

/**
 * ============================================================================
 * Default
 * ============================================================================
 */

export const Default: Story = {
    args: {
        value: null,
        items: PLAN_ITEMS,
        label: 'Choisissez votre forfait',
    },
};

/**
 * ============================================================================
 * With tooltip
 * ============================================================================
 */

export const WithTooltip: Story = {
    args: {
        value: 'starter',
        items: ITEMS_WITH_TOOLTIP,
        label: 'Choisissez votre offre',
    },

    render: (args: any) => ({
        props: args,

        template: `
      <div>
        <lib-form-radio-card
          [value]="value"
          [items]="items"
          [label]="label"
        />
      </div>
    `,
    }),

    parameters: {
        docs: {
            description: {
                story:
                    'Les options peuvent afficher une information complémentaire ' +
                    'via la propriété `tooltip` de chaque élément.',
            },

            source: {
                type: 'code',
                language: 'html',

                code: `
<lib-form-radio-card
  [value]="value"
  [items]="items"
  [label]="label">
</lib-form-radio-card>
        `.trim(),
            },
        },
    },
};

/**
 * ============================================================================
 * Host - Signal Forms
 * ============================================================================
 */

@Component({
    selector: 'story-radio-card-with-form',
    standalone: true,
    imports: [
        LibFormRadioCard,
        FormField,
        JsonPipe,
    ],
    template: `
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 600px;
      "
    >
      <lib-form-radio-card
        [formField]="demoForm.plan"
        [items]="items"
        label="Choisissez votre forfait"
      />

      <pre>{{ model() | json }}</pre>
    </div>
  `,
})
class RadioCardWithFormHost {
    readonly items = PLAN_ITEMS;

    readonly model = signal<{
        plan: SelectedPlan;
    }>({
        plan: null,
    });

    readonly demoForm = form(this.model);
}

/**
 * ============================================================================
 * With Signal Forms
 * ============================================================================
 */

export const WithForm: Story = {
    decorators: [
        moduleMetadata({
            imports: [RadioCardWithFormHost],
        }),
    ],

    render: () => ({
        template: `
      <story-radio-card-with-form />
    `,
    }),

    parameters: {
        docs: {
            description: {
                story:
                    'Le composant est lié à `demoForm.plan`. ' +
                    "L'état affiché reflète l'objet sélectionné `{ label, value }` " +
                    'ou `null` en temps réel.',
            },

            source: {
                type: 'code',
                language: 'html',

                code: `
<lib-form-radio-card
  [formField]="demoForm.plan"
  [items]="items"
  label="Choisissez votre forfait">
</lib-form-radio-card>
        `.trim(),
            },
        },
    },
};

/**
 * ============================================================================
 * Host - Standalone / without Signal Forms
 * ============================================================================
 */

@Component({
    selector: 'story-radio-card-without-form',
    standalone: true,
    imports: [
        LibFormRadioCard,
        JsonPipe,
    ],
    template: `
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 600px;
      "
    >
      <lib-form-radio-card
        [value]="selected()"
        (valueChange)="selected.set($event)"
        [items]="items"
        label="Choisissez votre forfait"
      />

      <pre>{{ { plan: selected() } | json }}</pre>
    </div>
  `,
})
class RadioCardWithoutFormHost {
    readonly items = PLAN_ITEMS;

    readonly selected = signal<SelectedPlan>(null);
}

/**
 * ============================================================================
 * Without Signal Forms
 * ============================================================================
 */

export const WithoutForm: Story = {
    decorators: [
        moduleMetadata({
            imports: [RadioCardWithoutFormHost],
        }),
    ],

    render: () => ({
        template: `
      <story-radio-card-without-form />
    `,
    }),

    parameters: {
        docs: {
            description: {
                story:
                    'Aucun `formField` ici. Le composant est piloté directement ' +
                    'via `[value]` et `(valueChange)` avec un signal local `selected`.',
            },

            source: {
                type: 'code',
                language: 'html',

                code: `
<lib-form-radio-card
  [value]="selected()"
  (valueChange)="selected.set($event)"
  [items]="items"
  label="Choisissez votre forfait">
</lib-form-radio-card>
        `.trim(),
            },
        },
    },
};