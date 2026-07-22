import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  form,
  FormField,
  required,
} from '@angular/forms/signals';
import {
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular-vite';

import {
  LibFormSelectItem,
  LibFormSelectItemDirective,
  LibFormSelectValue,
  Select,
} from '@ds-design-system/ui-components/select';

import {
  Flag,
  LibFlagCode,
} from '@ds-design-system/ui-components/flag';

interface CountryFormModel {
  country: LibFormSelectValue;
}

interface CountryFormModelNullable {
  country: LibFormSelectValue | null;
}

const COUNTRY_ITEMS: LibFormSelectItem[] = [
  {
    value: 'fr',
    label: 'France',
  },
  {
    value: 'be',
    label: 'Belgique',
  },
  {
    value: 'ch',
    label: 'Suisse',
  },
  {
    value: 'ca',
    label: 'Canada',
  },
  {
    value: 'lu',
    label: 'Luxembourg',
  },
  {
    value: 'de',
    label: 'Allemagne',
  },
  {
    value: 'es',
    label: 'Espagne',
  },
];

const meta: Meta<Select> = {
  title: 'Forms/Select',

  component: Select,

  tags: ['autodocs'],

  argTypes: {
    label: {
      control: 'text',
    },

    placeholder: {
      control: 'text',
    },

    hint: {
      control: 'text',
    },

    disabled: {
      control: 'boolean',
    },

    readonly: {
      control: 'boolean',
    },

    autocomplete: {
      control: 'boolean',
    },

    fuzzySearch: {
      control: 'boolean',
    },

    searchMaxDistance: {
      control: 'number',
    },

    allowUncheck: {
      control: 'boolean',
    },

    noErrorMessages: {
      control: 'boolean',
    },
  },

  parameters: {
    docs: {
      description: {
        component: `
Select component supporting standard selection, autocomplete,
fuzzy search, Signal Forms integration and custom option templates.

The component emits a complete \`{ code, label }\` value.
        `.trim(),
      },
    },
  },
};

export default meta;

type Story = StoryObj<Select>;

@Component({
  selector: 'story-select-classic-vs-fuzzy',
  standalone: true,
  imports: [Select],
  template: `
    <div
      style="
        display: flex;
        gap: 24px;
        max-width: 800px;
        padding: 2rem;
      "
    >
      <div
        style="
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        "
      >
        <h4
          style="
            margin: 0;
            font-size: 15px;
            color: #333;
          "
        >
          Recherche Classique (Sous-chaîne)
        </h4>

        <p
          style="
            margin: 0;
            font-size: 12px;
            color: #666;
          "
        >
          Exige une correspondance exacte.
          Tapez <code>"Luxemburg"</code> ou
          <code>"Sisse"</code> : aucun résultat.
        </p>

        <lib-form-select
          [items]="items"
          [autocomplete]="true"
          [fuzzySearch]="false"
          label="Pays"
          placeholder="Saisissez un pays..."
          hint="Recherche sous-chaîne standard"
        />
      </div>

      <div
        style="
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        "
      >
        <h4
          style="
            margin: 0;
            font-size: 15px;
            color: #333;
          "
        >
          Recherche Fuzzy (Tolérance aux fautes)
        </h4>

        <p
          style="
            margin: 0;
            font-size: 12px;
            color: #666;
          "
        >
          Tolère les fautes de frappe.
          Tapez <code>"Luxemburg"</code>
          &rarr; trouve <strong>Luxembourg</strong>.
        </p>

        <lib-form-select
          [items]="items"
          [autocomplete]="true"
          [fuzzySearch]="true"
          label="Pays"
          placeholder="Saisissez un pays..."
          hint="Algorithme Levenshtein actif"
        />
      </div>
    </div>
  `,
})
class ClassicVsFuzzyHost {
  readonly items = COUNTRY_ITEMS;
}

export const ClassicVsFuzzy: Story = {
  render: () => ({
    template: `
      <story-select-classic-vs-fuzzy />
    `,
  }),

  decorators: [
    moduleMetadata({
      imports: [ClassicVsFuzzyHost],
    }),
  ],

  parameters: {
    docs: {
      description: {
        story:
          'Comparaison côte à côte de la recherche par sous-chaîne classique ' +
          'versus la recherche Fuzzy basée sur la distance de Levenshtein. ' +
          'Testez des mots avec fautes de frappe comme `Luxemburg`, `Suis` ' +
          'ou `Almagne`.',
      },

      source: {
        type: 'code',
        language: 'html',

        code: `
<div style="display: flex; gap: 24px; max-width: 800px;">
  <lib-form-select
    [items]="items"
    [autocomplete]="true"
    [fuzzySearch]="false"
    label="Pays"
    placeholder="Saisissez un pays..."
    hint="Recherche sous-chaîne standard">
  </lib-form-select>

  <lib-form-select
    [items]="items"
    [autocomplete]="true"
    [fuzzySearch]="true"
    label="Pays"
    placeholder="Saisissez un pays..."
    hint="Algorithme Levenshtein actif">
  </lib-form-select>
</div>
        `.trim(),
      },
    },
  },
};

@Component({
  selector: 'story-select-without-form',
  standalone: true,
  imports: [
    Select,
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
      <lib-form-select
        [(value)]="selectedCountry"
        [items]="items"
        label="Pays"
        hint="Choisissez dans la liste"
      />

      <div
        style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
        "
      >
        <strong>Signal Value (code, label):</strong>

        <pre style="margin: 8px 0 0 0;">{{
          {
            selectedCountry: selectedCountry()
          } | json
        }}</pre>
      </div>
    </div>
  `,
})
class SelectWithoutFormHost {
  readonly items = COUNTRY_ITEMS;

  readonly selectedCountry = signal<LibFormSelectValue>({
    code: 'fr',
    label: 'France',
  });
}

export const WithoutForm: Story = {
  render: () => ({
    template: `
      <story-select-without-form />
    `,
  }),

  decorators: [
    moduleMetadata({
      imports: [SelectWithoutFormHost],
    }),
  ],

  parameters: {
    docs: {
      description: {
        story:
          'Utilisation autonome via le two-way binding ' +
          '`[(value)]="selectedCountry"`, sans Signal Forms. ' +
          'La valeur émise est un objet `{ code, label }` complet.',
      },

      source: {
        type: 'code',
        language: 'html',

        code: `
<lib-form-select
  [(value)]="selectedCountry"
  [items]="items"
  label="Pays"
  hint="Choisissez dans la liste">
</lib-form-select>
        `.trim(),
      },
    },
  },
};


@Component({
  selector: 'story-select-with-form',
  standalone: true,
  imports: [
    Select,
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
      <lib-form-select
        [formField]="demoForm.country"
        [items]="items"
        label="Pays"
        hint="Choisissez dans la liste"
      />

      <div
        style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
        "
      >
        <strong>Form Model Value:</strong>

        <pre style="margin: 8px 0 0 0;">{{
          model() | json
        }}</pre>
      </div>
    </div>
  `,
})
class SelectWithFormHost {
  readonly items = COUNTRY_ITEMS;

  readonly model = signal<CountryFormModel>({
    country: {
      code: 'fr',
      label: 'France',
    },
  });

  readonly demoForm = form(this.model);
}

export const WithForm: Story = {
  render: () => ({
    template: `
      <story-select-with-form />
    `,
  }),

  decorators: [
    moduleMetadata({
      imports: [SelectWithFormHost],
    }),
  ],

  parameters: {
    docs: {
      description: {
        story:
          'Intégration directe avec Angular Signal Forms via ' +
          '`[formField]="demoForm.country"`.',
      },

      source: {
        type: 'code',
        language: 'html',

        code: `
<lib-form-select
  [formField]="demoForm.country"
  [items]="items"
  label="Pays"
  hint="Choisissez dans la liste">
</lib-form-select>
        `.trim(),
      },
    },
  },
};

@Component({
  selector: 'story-select-with-error',
  standalone: true,
  imports: [
    Select,
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
      <lib-form-select
        [formField]="demoForm.country"
        [items]="items"
        label="Pays (obligatoire)"
        hint="Ce champ doit être renseigné"
      />

      <div
        style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
        "
      >
        <strong>Validation State:</strong>

        <pre style="margin: 8px 0 0 0;">{{
          {
            country: model().country,
            invalid: demoForm.country().invalid(),
            touched: demoForm.country().touched()
          } | json
        }}</pre>
      </div>
    </div>
  `,
})
class SelectWithErrorHost {
  readonly items = COUNTRY_ITEMS;

  readonly model = signal<CountryFormModelNullable>({
    country: null,
  });

  readonly demoForm = form(
    this.model,
    (path) => {
      required(path.country, {
        message: 'Le pays est obligatoire.',
      });
    },
  );

  constructor() {
    this.demoForm.country().markAsTouched();
  }
}

export const WithError: Story = {
  render: () => ({
    template: `
      <story-select-with-error />
    `,
  }),

  decorators: [
    moduleMetadata({
      imports: [SelectWithErrorHost],
    }),
  ],

  parameters: {
    docs: {
      description: {
        story:
          'Validation réelle via `required(...)` sur le FieldTree.',
      },

      source: {
        type: 'code',
        language: 'html',

        code: `
<lib-form-select
  [formField]="demoForm.country"
  [items]="items"
  label="Pays (obligatoire)"
  hint="Ce champ doit être renseigné">
</lib-form-select>
        `.trim(),
      },
    },
  },
};

@Component({
  selector: 'story-select-with-flags',
  standalone: true,
  imports: [
    Select,
    LibFormSelectItemDirective,
    Flag,
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
      <lib-form-select
        [(value)]="selected"
        label="Pays"
        templatePosition="before"
      >
        @for (item of items; track item.code) {
          <ng-template
            libFormSelectItem
            [value]="item.code"
            [label]="item.label"
          >
            <lib-flag
              [code]="item.code"
              size="sm"
              class="me-2"
            />
          </ng-template>
        }
      </lib-form-select>

      <pre
        style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
        "
      >{{ { selected: selected() } | json }}</pre>
    </div>
  `,
})
class SelectWithFlagsHost {
  readonly items: Array<{
    code: LibFlagCode;
    label: string;
  }> = [
      {
        code: 'fr',
        label: 'France',
      },
      {
        code: 'be',
        label: 'Belgique',
      },
      {
        code: 'ch',
        label: 'Suisse',
      },
      {
        code: 'ca',
        label: 'Canada',
      },
      {
        code: 'lu',
        label: 'Luxembourg',
      },
    ];

  readonly selected = signal<LibFormSelectValue>({
    code: 'fr',
    label: 'France',
  });
}

export const WithFlags: Story = {
  render: () => ({
    template: `
      <story-select-with-flags />
    `,
  }),

  decorators: [
    moduleMetadata({
      imports: [SelectWithFlagsHost],
    }),
  ],

  parameters: {
    docs: {
      description: {
        story:
          "Utilise `lib-flag` au lieu d'émojis pour afficher le drapeau " +
          'de chaque option.',
      },

      source: {
        type: 'code',
        language: 'html',

        code: `
<lib-form-select
  [(value)]="selected"
  label="Pays"
  templatePosition="before">

  @for (item of items; track item.code) {
    <ng-template
      libFormSelectItem
      [value]="item.code"
      [label]="item.label">

      <lib-flag
        [code]="item.code"
        size="sm"
        class="me-2">
      </lib-flag>

    </ng-template>
  }

</lib-form-select>
        `.trim(),
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    value: {
      code: 'fr',
      label: 'France',
    },

    items: COUNTRY_ITEMS,

    label: 'Pays (désactivé)',

    disabled: true,

    hint: 'Ce champ ne peut pas être modifié',
  },

  parameters: {
    docs: {
      description: {
        story:
          'Le Select est désactivé et ne peut pas être modifié.',
      },

      source: {
        type: 'code',
        language: 'html',

        code: `
<lib-form-select
  [value]="{ code: 'fr', label: 'France' }"
  [items]="items"
  [disabled]="true"
  label="Pays (désactivé)"
  hint="Ce champ ne peut pas être modifié">
</lib-form-select>
        `.trim(),
      },
    },
  },
};

export const Readonly: Story = {
  args: {
    value: {
      code: 'be',
      label: 'Belgique',
    },

    items: COUNTRY_ITEMS,

    label: 'Pays (lecture seule)',

    readonly: true,

    hint: 'Consultation uniquement',
  },

  parameters: {
    docs: {
      description: {
        story:
          'Le Select est en lecture seule. Sa valeur peut être consultée ' +
          'mais ne peut pas être modifiée.',
      },

      source: {
        type: 'code',
        language: 'html',

        code: `
<lib-form-select
  [value]="{ code: 'be', label: 'Belgique' }"
  [items]="items"
  [readonly]="true"
  label="Pays (lecture seule)"
  hint="Consultation uniquement">
</lib-form-select>
        `.trim(),
      },
    },
  },
};