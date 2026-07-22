import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { moduleMetadata } from '@storybook/angular-vite';
import { Radio } from '@ds-design-system/ui-components/radio';
import { JsonPipe } from '@angular/common';

const meta: Meta<Radio> = {
    title: 'Forms/Radio',
    component: Radio,
    tags: ['autodocs']
};
export default meta;
type Story = StoryObj<Radio>;

export const Playground: Story = {
    args: {
        value: 'basic',
        optionValue: 'basic',
        name: 'plan-playground',
        label: 'Basique'
    }
};


@Component({
    selector: 'story-radio-with-form',
    imports: [Radio, JsonPipe, FormField],
    template: `
    <div style="display:flex; flex-direction:column; gap:8px; max-width:320px;">
      <lib-form-radio [formField]="demoForm.plan" [optionValue]="'basic'" name="plan-with-form" label="Basique"></lib-form-radio>
      <lib-form-radio [formField]="demoForm.plan" [optionValue]="'pro'" name="plan-with-form" label="Pro"></lib-form-radio>
      <lib-form-radio [formField]="demoForm.plan" [optionValue]="'enterprise'" name="plan-with-form" label="Entreprise"></lib-form-radio>

      <pre>{{ model() | json }}</pre>
    </div>
  `
})
class RadioWithFormHost {
    readonly model = signal({ plan: 'basic' as string });
    readonly demoForm = form(this.model);
}

export const WithForm: Story = {
    decorators: [
        moduleMetadata({
            imports: [RadioWithFormHost]
        })
    ],
    render: () => ({
        template: `<story-radio-with-form></story-radio-with-form>`
    }),
    parameters: {
        docs: {
            description: {
                story:
                    'Les trois radios partagent le même `[field]` (`demoForm.plan`) — ' +
                    'sélectionner l\'une désélectionne automatiquement les autres, ' +
                    'piloté entièrement par Signal Forms.'
            }
        }
    }
};


@Component({
    selector: 'story-radio-without-form',
    imports: [Radio, JsonPipe],
    template: `
    <div style="display:flex; flex-direction:column; gap:8px; max-width:320px;">
      <lib-form-radio
        [value]="selected()"
        (valueChange)="selected.set($event)"
        [optionValue]="'basic'"
        name="plan-without-form"
        label="Basique">
      </lib-form-radio>
      <lib-form-radio
        [value]="selected()"
        (valueChange)="selected.set($event)"
        [optionValue]="'pro'"
        name="plan-without-form"
        label="Pro">
      </lib-form-radio>
      <lib-form-radio
        [value]="selected()"
        (valueChange)="selected.set($event)"
        [optionValue]="'enterprise'"
        name="plan-without-form"
        label="Entreprise">
      </lib-form-radio>

      <pre>{{ { plan: selected() } | json }}</pre>
    </div>
  `
})
class RadioWithoutFormHost {
    readonly selected = signal<string>('basic');
}

export const WithoutForm: Story = {
    decorators: [
        moduleMetadata({
            imports: [RadioWithoutFormHost]
        })
    ],
    render: () => ({
        template: `<story-radio-without-form></story-radio-without-form>`
    }),
    parameters: {
        docs: {
            description: {
                story:
                    'Aucun `[field]` ici — chaque radio est piloté directement via ' +
                    '`[value]`/`(valueChange)` sur un signal local `selected`, ' +
                    'démontrant que le composant fonctionne aussi en usage isolé.'
            }
        }
    }
};

/* -------------------------------------------------------------------------- */

export const Inline: Story = {
    render: () => ({
        template: `
      <div>
        <lib-form-radio [value]="'a'" [optionValue]="'a'" name="plan-inline" label="A" [inline]="true"></lib-form-radio>
        <lib-form-radio [value]="'a'" [optionValue]="'b'" name="plan-inline" label="B" [inline]="true"></lib-form-radio>
      </div>
    `
    })
};

export const Disabled: Story = {
    args: {
        value: 'basic',
        optionValue: 'basic',
        name: 'plan-disabled',
        label: 'Désactivé',
        disabled: true
    }
};