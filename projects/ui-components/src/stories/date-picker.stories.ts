
import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component, signal } from '@angular/core';
import { DatePipe, JsonPipe } from '@angular/common';
import { form, FormField, required } from '@angular/forms/signals';
import { moduleMetadata, applicationConfig } from '@storybook/angular-vite';
import { provideDateFnsAdapter } from '@angular/material-date-fns-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { fr } from 'date-fns/locale';
import { Datepicker } from '@ds-design-system/ui-components/datepicker';


type DateFormModel = {
  birthDate: Date | null;
};

const meta: Meta<Datepicker> = {
  title: 'Forms/Datepicker',
  component: Datepicker,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideDateFnsAdapter(),
        { provide: MAT_DATE_LOCALE, useValue: fr },
      ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
A flexible datepicker control built on Angular Signals and Material Datepicker.

### Features
- **Flexible Text Parsing**: Converts inputs like \`17 November 2026\`, \`demain\`, \`today\`, or \`+3d\` automatically to \`dd/MM/yyyy\`.
- **Validation**: Displays inline field validation and handles date parsing errors smoothly.
- **Accessible**: Built with built-in accessibility roles, labels, and keyboard navigation.
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'date',
      description: 'The selected date signal model.',
      table: {
        category: 'State',
        type: { summary: 'Date' },
      },
    },
    label: {
      control: 'text',
      description: 'Floating or top label displayed above/inside the field.',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when input is empty.',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: "' '" },
      },
    },
    hint: {
      control: 'text',
      description: 'Helper message displayed beneath the input field.',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables user interaction and grays out the field.',
      table: {
        category: 'Behavior',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Prevents typing and prevents opening the datepicker overlay.',
      table: {
        category: 'Behavior',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Forces the field into a visual error state.',
      table: {
        category: 'Validation',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    touched: {
      control: 'boolean',
      description: 'Indicates if the user has interacted with and blurred the control.',
      table: {
        category: 'Validation',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    noErrorMessages: {
      control: 'boolean',
      description: 'Hides error message text below the field when in an invalid state.',
      table: {
        category: 'Validation',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    label: 'Date de naissance',
    placeholder: 'ex: 17/11/2026, demain, +3d',
    hint: 'Formats acceptés : DD/MM/YYYY, texte libre (ex: 17 novembre 2026), ou raccourcis (ex: +2d, demain).',
    disabled: false,
    readonly: false,
    noErrorMessages: false,
    touched: false,
    invalid: false,
  },
};

export default meta;
type Story = StoryObj<Datepicker>;

export const WithoutForm: Story = {
  render: (args: any) => ({
    props: {
      ...args,
      selectedDate: signal<Date | null>(new Date('2026-07-28')),
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px; padding: 2rem;">
        <lib-form-datepicker
          [(value)]="selectedDate"
          [label]="label"
          [placeholder]="placeholder"
          [hint]="hint"
          [disabled]="disabled"
          [readonly]="readonly">
        </lib-form-datepicker>

        <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
          <strong>Signal Value:</strong>
          <pre style="margin: 8px 0 0 0;">{{ { selectedDate: selectedDate() | date:'yyyy-MM-dd' } | json }}</pre>
        </div>
      </div>
    `,
  }),
  args: {
    label: 'Date de rendez-vous',
    placeholder: 'JJ/MM/AAAA',
    hint: 'Format attendu : JJ/MM/AAAA',
    disabled: false,
    readonly: false,
  },
};

@Component({
  selector: 'story-datepicker-with-form',
  imports: [Datepicker, FormField, JsonPipe, DatePipe],
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px; padding: 2rem;">
      <lib-form-datepicker
        [formField]="demoForm.birthDate"
        label="Date de naissance"
        hint="Sélectionnez une date dans le calendrier">
      </lib-form-datepicker>

      <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
        <strong>Form Model Value:</strong>
        <pre style="margin: 8px 0 0 0;">{{ { birthDate: model().birthDate | date:'yyyy-MM-dd' } | json }}</pre>
      </div>
    </div>
  `
})
class DatepickerWithFormHost {
  readonly model = signal<DateFormModel>({ birthDate: new Date() });
  readonly demoForm = form(this.model);
}

export const WithForm: Story = {
  decorators: [
    moduleMetadata({
      imports: [DatepickerWithFormHost],
    }),
  ],
  render: () => ({
    template: `<story-datepicker-with-form></story-datepicker-with-form>`,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Intégration directe avec **Angular Signal Forms** via `[field]="demoForm.birthDate"`.',
      },
    },
  },
};

@Component({
  selector: 'story-datepicker-with-error',
  imports: [Datepicker, FormField, JsonPipe, DatePipe],
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px; padding: 2rem;">
      <lib-form-datepicker
        [formField]="demoForm.birthDate"
        label="Date d'échéance obligatoire"
        hint="Sélectionnez une date dans le calendrier pour valider">
      </lib-form-datepicker>

      <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
        <strong>Validation State:</strong>
        <pre style="margin: 8px 0 0 0;">{{ {
          birthDate: (model().birthDate | date:'yyyy-MM-dd') ?? null,
          invalid: demoForm.birthDate().invalid(),
          touched: demoForm.birthDate().touched()
        } | json }}</pre>
      </div>
    </div>
  `
})
class DatepickerWithErrorHost {
  readonly model = signal<DateFormModel>({ birthDate: null });

  readonly demoForm = form(this.model, path => {
    required(path.birthDate, { message: "La date d'échéance est obligatoire." });
  });

  constructor() {
    this.demoForm.birthDate().markAsTouched();
  }
}

export const WithError: Story = {
  decorators: [
    moduleMetadata({
      imports: [DatepickerWithErrorHost],
    }),
  ],
  render: () => ({
    template: `<story-datepicker-with-error></story-datepicker-with-error>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Validation réelle via `required(...)` sur le field — l\'erreur est ' +
          'affichée dès le chargement grâce à un `markAsTouched()` forcé pour la démo.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => ({
    template: `
      <div style="padding: 2rem; max-width: 400px;">
        <lib-form-datepicker
          [value]="defaultDate"
          [disabled]="true"
          label="Date archivée"
          hint="Ce champ ne peut pas être modifié">
        </lib-form-datepicker>
      </div>
    `,
    props: {
      defaultDate: new Date('2026-01-01'),
    },
  }),
};

export const Readonly: Story = {
  render: () => ({
    template: `
      <div style="padding: 2rem; max-width: 400px;">
        <lib-form-datepicker
          [value]="defaultDate"
          [readonly]="true"
          label="Date de création"
          hint="Consultation uniquement">
        </lib-form-datepicker>
      </div>
    `,
    props: {
      defaultDate: new Date('2026-05-12'),
    },
  }),
};