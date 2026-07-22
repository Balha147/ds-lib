import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import {
    Meta,
    moduleMetadata,
    StoryObj,
} from '@storybook/angular-vite';

import { Slider } from '@ds-design-system/ui-components/slider';

/**
 * ============================================================================
 * Types
 * ============================================================================
 */

interface BudgetFormModel {
    budget: number;
}

/**
 * ============================================================================
 * Meta
 * ============================================================================
 */

const meta: Meta<Slider> = {
    title: 'Forms/Slider',

    component: Slider,

    tags: ['autodocs'],

    argTypes: {
        min: {
            control: 'number',
        },

        max: {
            control: 'number',
        },

        step: {
            control: 'number',
        },

        showValue: {
            control: 'boolean',
        },

        showTicks: {
            control: 'boolean',
        },

        disabled: {
            control: 'boolean',
        },

        label: {
            control: 'text',
        },

        value: {
            control: 'number',
        },
    },
};

export default meta;

type Story = StoryObj<Slider>;

/**
 * ============================================================================
 * Playground
 * ============================================================================
 */

export const Playground: Story = {
    args: {
        value: 40,
        min: 0,
        max: 100,
        step: 1,
        label: 'Volume',
        showValue: true,
    },
};

/**
 * ============================================================================
 * Host - Without Signal Forms
 * ============================================================================
 */

@Component({
    selector: 'story-slider-without-form',
    standalone: true,
    imports: [
        Slider,
        JsonPipe,
    ],
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px; padding: 2rem;">
      <lib-slider [(value)]="volume" [min]="0" [max]="100" label="Volume" />

      <pre style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
        "
      >{{
        { volume: volume() } | json
      }}</pre>
    </div>
  `,
})
class SliderWithoutFormHost {
    readonly volume = signal(50);
}

/**
 * ============================================================================
 * Without Signal Forms
 * ============================================================================
 */

export const WithoutForm: Story = {
    render: () => ({
        template: `
      <story-slider-without-form />
    `,
    }),

    decorators: [
        moduleMetadata({
            imports: [SliderWithoutFormHost],
        }),
    ],

    parameters: {
        docs: {
            description: {
                story:
                    'Utilisation autonome du Slider via le two-way binding ' +
                    '`[(value)]` avec un signal Angular.',
            },

            source: {
                type: 'code',
                language: 'html',

                code: `
<lib-slider
  [(value)]="volume"
  [min]="0"
  [max]="100"
  label="Volume">
</lib-slider>
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
    selector: 'story-slider-with-form',
    standalone: true,
    imports: [
        Slider,
        FormField,
        JsonPipe,
    ],
    template: `
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 400px;
        padding: 2rem;
      "
    >
      <lib-slider
        [formField]="demoForm.budget"
        [min]="0"
        [max]="2000"
        [step]="50"
        [formatValue]="formatEuro"
        label="Budget mensuel"
      />

      <pre
        style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
        "
      >{{ model() | json }}</pre>
    </div>
  `,
})
class SliderWithFormHost {
    readonly model = signal<BudgetFormModel>({
        budget: 500,
    });

    readonly demoForm = form(this.model);

    readonly formatEuro = (value: number): string =>
        `${value ?? 0} €`;
}

/**
 * ============================================================================
 * With Signal Forms
 * ============================================================================
 */

export const WithForm: Story = {
    render: () => ({
        template: `
      <story-slider-with-form />
    `,
    }),

    decorators: [
        moduleMetadata({
            imports: [SliderWithFormHost],
        }),
    ],

    parameters: {
        docs: {
            description: {
                story:
                    'Intégration du Slider avec Angular Signal Forms via ' +
                    '`[formField]="demoForm.budget"`.',
            },

            source: {
                type: 'code',
                language: 'html',

                code: `
<lib-slider
  [formField]="demoForm.budget"
  [min]="0"
  [max]="2000"
  [step]="50"
  [formatValue]="formatEuro"
  label="Budget mensuel">
</lib-slider>
        `.trim(),
            },
        },
    },
};

/**
 * ============================================================================
 * With ticks
 * ============================================================================
 */

export const WithTicks: Story = {
    args: {
        value: 3,
        min: 0,
        max: 5,
        step: 1,
        showTicks: true,
        label: 'Niveau de priorité',

        formatValue: (value: number): string =>
            `Niveau ${value}`,
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Affiche les graduations du Slider avec `showTicks`.',
            },

            source: {
                type: 'code',
                language: 'html',

                code: `
<lib-slider
  [value]="value"
  [min]="0"
  [max]="5"
  [step]="1"
  [showTicks]="true"
  [formatValue]="formatValue"
  label="Niveau de priorité">
</lib-slider>
        `.trim(),
            },
        },
    },
};

/**
 * ============================================================================
 * Disabled
 * ============================================================================
 */

export const Disabled: Story = {
    args: {
        value: 70,
        min: 0,
        max: 100,
        disabled: true,
        label: 'Volume (désactivé)',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Le Slider est désactivé et sa valeur ne peut pas être modifiée.',
            },

            source: {
                type: 'code',
                language: 'html',

                code: `
<lib-slider
  [value]="value"
  [min]="0"
  [max]="100"
  [disabled]="true"
  [label]="label">
</lib-slider>
        `.trim(),
            },
        },
    },
};