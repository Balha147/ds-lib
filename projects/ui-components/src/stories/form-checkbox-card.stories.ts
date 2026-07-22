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
  LibFormCheckboxCard,
} from '@ds-design-system/ui-components/form-card';

/**
 * ============================================================================
 * Types
 * ============================================================================
 */

type CheckboxCardValue = Array<{
  label: string;
  value: string;
}>;

/**
 * ============================================================================
 * Story data
 * ============================================================================
 */

const PREFERENCE_ITEMS: LibFormCardItem[] = [
  {
    value: 'email',
    label: 'Email',
    icon: 'libicon-mail',
  },
  {
    value: 'sms',
    label: 'SMS',
    icon: 'libicon-tel',
  },
  {
    value: 'push',
    label: 'Notification push',
    icon: 'libicon-cloche',
  },
  {
    value: 'courrier',
    label: 'Courrier postal',
    icon: 'libicon-document',
  },
];

const MANY_ITEMS: LibFormCardItem[] = Array.from(
  { length: 10 },
  (_, index) => ({
    value: `option-${index + 1}`,
    label: `Option ${index + 1}`,
    icon: 'libicon-cercle-plus',
  }),
);

/**
 * ============================================================================
 * Meta
 * ============================================================================
 */

const meta: Meta<LibFormCheckboxCard> = {
  title: 'Forms/Cards/Checkbox',

  /**
   * The real component documented by Storybook.
   *
   * Host components below are only used for complex interactive scenarios.
   */
  component: LibFormCheckboxCard,

  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component: `
A checkbox card component for selecting one or multiple options.

The component supports:

- Standard \`value\` binding
- \`valueChange\` event
- Angular Signal Forms through \`formField\`
- Multiple selected values
- Custom icons
- Dynamic item collections
- Labels
        `.trim(),
      },
    },
  },
};

export default meta;

type Story = StoryObj<LibFormCheckboxCard>;

/**
 * ============================================================================
 * Default
 * ============================================================================
 */

export const Default: Story = {
  args: {
    value: [],
    items: PREFERENCE_ITEMS,
    label: 'Canaux de notification préférés',
  },
};

/**
 * ============================================================================
 * Many items
 * ============================================================================
 */

export const ManyItems: Story = {
  args: {
    value: [
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 5',
        value: 'option-5',
      },
    ],

    items: MANY_ITEMS,

    label: "Beaucoup d'options",
  },
};

/**
 * ============================================================================
 * Signal Forms host
 * ============================================================================
 */

@Component({
  selector: 'story-checkbox-card-with-form',
  standalone: true,
  imports: [
    LibFormCheckboxCard,
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
      <lib-form-checkbox-card
        [formField]="demoForm.channels"
        [items]="items"
        label="Canaux de notification préférés"
      />

      <pre>{{ model() | json }}</pre>
    </div>
  `,
})
class CheckboxCardWithFormHost {
  readonly items = PREFERENCE_ITEMS;

  readonly model = signal<{
    channels: CheckboxCardValue;
  }>({
    channels: [],
  });

  readonly demoForm = form(this.model);
}


export const WithForm: Story = {
  decorators: [
    moduleMetadata({
      imports: [CheckboxCardWithFormHost],
    }),
  ],

  render: () => ({
    template: `<story-checkbox-card-with-form />`,
  }),

  parameters: {
    docs: {
      description: {
        story:
          'Le composant est lié à `demoForm.channels`. ' +
          "L'état affiché reflète en temps réel le tableau des valeurs sélectionnées.",
      },

      source: {
        type: 'code',
        language: 'html',
        code: `
<lib-form-checkbox-card
  [formField]="demoForm.channels"
  [items]="items"
  label="Canaux de notification préférés">
</lib-form-checkbox-card>
        `.trim(),
      },
    },
  },
};


@Component({
  selector: 'story-checkbox-card-without-form',
  standalone: true,
  imports: [
    LibFormCheckboxCard,
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
      <lib-form-checkbox-card
        [value]="selected()"
        (valueChange)="selected.set($event)"
        [items]="items"
        label="Canaux de notification préférés"
      />

      <pre>{{ { channels: selected() } | json }}</pre>
    </div>
  `,
})
class CheckboxCardWithoutFormHost {
  readonly items = PREFERENCE_ITEMS;

  readonly selected = signal<CheckboxCardValue>([]);
}

export const WithoutForm: Story = {
  decorators: [
    moduleMetadata({
      imports: [CheckboxCardWithoutFormHost],
    }),
  ],

  render: () => ({
    template: `
      <story-checkbox-card-without-form />
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
<lib-form-checkbox-card
  [value]="selected()"
  (valueChange)="selected.set($event)"
  [items]="items"
  label="Canaux de notification préférés">
</lib-form-checkbox-card>
        `.trim(),
      },
    },
  },
};