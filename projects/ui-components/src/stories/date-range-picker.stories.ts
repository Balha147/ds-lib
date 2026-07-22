import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { Component, input, signal } from '@angular/core';
import { JsonPipe, DatePipe } from '@angular/common';
import { form, FormField } from '@angular/forms/signals';
import { DatepickerRange, LibFormDateRangePicker, LibFormDateRangePickerPlaceholders } from '@ds-design-system/ui-components/date-range-picker';

interface RangeFormModel {
  bookingPeriod: LibFormDateRangePicker;
}

const docsSource = (code: string) => ({
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: code.trim(),
      },
    },
  },
});

@Component({
  selector: 'story-date-range-with-form',
  imports: [DatepickerRange, FormField, JsonPipe, DatePipe],
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 450px; padding: 2rem;">
      <lib-form-date-range-picker
        [formField]="demoForm.bookingPeriod"
        [placeholders]="placeholders"
        label="Période de réservation"
        hint="Sélectionnez une date de début et une date de fin">
      </lib-form-date-range-picker>

      <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
        <strong>Form Model Value:</strong>
        <pre style="margin: 8px 0 0 0;">{{ { 
          start: (model().bookingPeriod.start | date:'yyyy-MM-dd') ?? null,
          end: (model().bookingPeriod.end | date:'yyyy-MM-dd') ?? null
        } | json }}</pre>
      </div>
    </div>
  `
})
class DateRangeWithFormHost {
  readonly model = signal<RangeFormModel>({
    bookingPeriod: {
      start: new Date('2026-07-01'),
      end: new Date('2026-07-15')
    }
  });

  readonly placeholders: LibFormDateRangePickerPlaceholders = {
    start: 'Du (JJ/MM/AAAA)',
    end: 'Au (JJ/MM/AAAA)'
  };

  readonly demoForm = form(this.model);
}

@Component({
  selector: 'story-date-range-with-error',
  imports: [DatepickerRange, FormField, JsonPipe],
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 450px; padding: 2rem;">
      <lib-form-date-range-picker
        [formField]="demoForm.bookingPeriod"
        [placeholders]="placeholders"
        [touched]="true"
        [invalid]="isInvalid()"
        [errors]="getErrors()"
        label="Période obligatoire"
        hint="Sélectionnez une plage complète dans le calendrier">
      </lib-form-date-range-picker>

      <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
        <strong>Validation State:</strong>
        <pre style="margin: 8px 0 0 0;">{{ { 
          hasStart: !!model().bookingPeriod.start,
          hasEnd: !!model().bookingPeriod.end,
          isInvalid: isInvalid(),
          errorMessage: getErrors()[0]?.message ?? null
        } | json }}</pre>
      </div>
    </div>
  `
})
class DateRangeWithErrorHost {
  readonly model = signal<RangeFormModel>({
    bookingPeriod: { start: new Date('2026-07-01'), end: null }
  });

  readonly placeholders: LibFormDateRangePickerPlaceholders = {
    start: 'Début',
    end: 'Fin'
  };

  readonly demoForm = form(this.model);

  isInvalid(): boolean {
    const val = this.model().bookingPeriod;
    return !val.start || !val.end;
  }

  getErrors() {
    const val = this.model().bookingPeriod;
    if (!val.start) {
      return [{ kind: 'dateRange', message: 'La date de début doit également être renseignée.' }];
    }
    if (!val.end) {
      return [{ kind: 'dateRange', message: 'La date de fin doit également être renseignée.' }];
    }
    return [];
  }
}

@Component({
  selector: 'story-date-range-without-form',
  imports: [DatepickerRange, JsonPipe, DatePipe],
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 450px; padding: 2rem;">
      <lib-form-date-range-picker
        [(value)]="selectedRange"
        [label]="label"
        [placeholders]="placeholders"
        [hint]="hint"
        [disabled]="disabled"
        [readonly]="readonly">
      </lib-form-date-range-picker>

      <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
        <strong>Signal Value:</strong>
        <pre style="margin: 8px 0 0 0;">{{ { 
          start: (selectedRange()?.start | date:'yyyy-MM-dd') ?? null,
          end: (selectedRange()?.end | date:'yyyy-MM-dd') ?? null
        } | json }}</pre>
      </div>
    </div>
  `
})
class DateRangeWithoutFormHost {
  readonly selectedRange = signal<LibFormDateRangePicker>({
    start: new Date('2026-08-01'),
    end: new Date('2026-08-10')
  });

  label = 'Séjour vacances';
  hint = 'Format : JJ/MM/AAAA';
  disabled = false;
  readonly = false;

  placeholders: LibFormDateRangePickerPlaceholders = {
    start: 'Arrivée',
    end: 'Départ'
  };
}

@Component({
  selector: 'story-date-range-state-host',
  imports: [DatepickerRange],
  template: `
    <div style="padding: 2rem; max-width: 450px;">
      <lib-form-date-range-picker
        [(value)]="rangeValue"
        [readonly]="readonly()"
        [disabled]="disabled()"
        [label]="label()"
        [hint]="hint()"
        [placeholders]="placeholders">
      </lib-form-date-range-picker>
    </div>
  `
})
class DateRangeStateHost {
  readonly readonly = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly label = input<string>('');
  readonly hint = input<string>('');

  readonly rangeValue = signal<LibFormDateRangePicker>({
    start: new Date('2026-07-01'),
    end: new Date('2026-07-15')
  });

  readonly placeholders: LibFormDateRangePickerPlaceholders = { start: 'Début', end: 'Fin' };
}

const meta: Meta<DatepickerRange> = {
  title: 'Forms/Datepicker Range',
  component: DatepickerRange,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        DatepickerRange,
        DateRangeWithFormHost,
        DateRangeWithErrorHost,
        DateRangeWithoutFormHost,
        DateRangeStateHost
      ]
    })
  ],
  parameters: {
    docs: {
      description: {
        component: `
Date range picker supporting both Angular Signal Forms and standalone
two-way signal binding.

The component supports:

- Signal Forms integration through \`formField\`
- Standalone usage through \`[(value)]\`
- Disabled state
- Readonly state
- Custom placeholders
- Validation state
- Start/end date values
        `.trim(),
      }
    }
  }
};

export default meta;
type Story = StoryObj<DatepickerRange>;

export const WithSignalForms: Story = {
  render: () => ({
    template: `<story-date-range-with-form />`,
  }),

  ...docsSource(`
<lib-form-date-range-picker
  [formField]="demoForm.bookingPeriod"
  [placeholders]="placeholders"
  label="Période de réservation"
  hint="Sélectionnez une date de début et une date de fin">
</lib-form-date-range-picker>
  `),
};

export const WithValidationError: Story = {
  render: () => ({
    template: `<story-date-range-with-error />`,
  }),

  ...docsSource(`
<lib-form-date-range-picker
  [formField]="demoForm.bookingPeriod"
  [placeholders]="placeholders"
  [touched]="true"
  [invalid]="isInvalid()"
  [errors]="getErrors()"
  label="Période obligatoire"
  hint="Sélectionnez une plage complète dans le calendrier">
</lib-form-date-range-picker>
  `),
};

export const StandaloneWithoutForm: Story = {
  render: () => ({
    template: `<story-date-range-without-form />`,
  }),

  ...docsSource(`
<lib-form-date-range-picker
  [(value)]="selectedRange"
  [label]="label"
  [placeholders]="placeholders"
  [hint]="hint"
  [disabled]="disabled"
  [readonly]="readonly">
</lib-form-date-range-picker>
  `),
};

export const Readonly: Story = {
  render: () => ({
    template: `
      <story-date-range-state-host
        [readonly]="true"
        label="Période verrouillée (Readonly)"
        hint="Cette valeur ne peut pas être modifiée">
      </story-date-range-state-host>
    `,
  }),

  ...docsSource(`
<lib-form-date-range-picker
  [(value)]="rangeValue"
  [readonly]="true"
  [label]="label"
  [hint]="hint"
  [placeholders]="placeholders">
</lib-form-date-range-picker>
  `),
};

export const Disabled: Story = {
  render: () => ({
    template: `
      <story-date-range-state-host
        [disabled]="true"
        label="Période indisponible (Disabled)"
        hint="Le champ est désactivé">
      </story-date-range-state-host>
    `,
  }),

  ...docsSource(`
<lib-form-date-range-picker
  [(value)]="rangeValue"
  [disabled]="true"
  [label]="label"
  [hint]="hint"
  [placeholders]="placeholders">
</lib-form-date-range-picker>
  `),
};