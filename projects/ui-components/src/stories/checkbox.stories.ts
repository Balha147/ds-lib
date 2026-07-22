import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { form, FormField } from '@angular/forms/signals';
import { moduleMetadata } from '@storybook/angular-vite';
import { Checkbox } from '@ds-design-system/ui-components/checkbox';

const meta: Meta<Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texte du label associé à la case à cocher.'
    },
    disabled: {
      control: 'boolean',
      description: 'Désactive l\'interaction avec le composant.'
    },
    switch: {
      control: 'select',
      options: [false, true, 'native'],
      description: 'Active le style interrupteur (switch) classique ou natif.'
    },
    inline: {
      control: 'boolean',
      description: 'Affiche la checkbox en ligne (display inline-flex).'
    },
    reverse: {
      control: 'boolean',
      description: 'Inverse l\'ordre d\'affichage entre le label et la case.'
    },
    ariaLabel: {
      control: 'text',
      description: 'Label d\'accessibilité (aria-label) pour les lecteurs d\'écran.'
    }
  }
};

export default meta;
type Story = StoryObj<Checkbox>;


export const Playground: Story = {
  args: {
    value: false,
    label: 'J\'accepte les conditions générales',
    disabled: false,
    switch: false,
    inline: false,
    reverse: false
  },
  render: (args: any) => ({
    props: args,
    template: `
      <lib-form-checkbox
        [value]="value"
        [label]="label"
        [disabled]="disabled"
        [switch]="switch"
        [inline]="inline"
        [reverse]="reverse">
      </lib-form-checkbox>
    `
  })
};


@Component({
  selector: 'story-checkbox-with-form',
  imports: [Checkbox, FormField, JsonPipe],
  template: `
    <div style="display:flex; flex-direction:column; gap:8px; max-width:320px;">
      <lib-form-checkbox [formField]="demoForm.acceptTerms" label="J'accepte les conditions générales"></lib-form-checkbox>
      <lib-form-checkbox [formField]="demoForm.subscribeNewsletter" label="M'abonner à la newsletter" [switch]="true"></lib-form-checkbox>

      <pre>{{ model() | json }}</pre>
    </div>
  `
})
class CheckboxWithFormHost {
  readonly model = signal({ acceptTerms: false, subscribeNewsletter: false });
  readonly demoForm = form(this.model);
}

export const WithForm: Story = {
  decorators: [
    moduleMetadata({
      imports: [CheckboxWithFormHost]
    })
  ],
  render: () => ({
    template: `<story-checkbox-with-form></story-checkbox-with-form>`
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Chaque case est liée à un `field` distinct du même `form` — ' +
          'l\'état affiché dans le `<pre>` reflète le modèle Signal Forms en temps réel.'
      }
    }
  }
};

@Component({
  selector: 'story-checkbox-without-form',
  imports: [Checkbox, JsonPipe],
  template: `
    <div style="display:flex; flex-direction:column; gap:8px; max-width:320px;">
      <lib-form-checkbox
        [value]="accepted()"
        (valueChange)="accepted.set($event)"
        label="J'accepte les conditions générales">
      </lib-form-checkbox>

      <lib-form-checkbox
        [value]="subscribed()"
        (valueChange)="subscribed.set($event)"
        label="M'abonner à la newsletter"
        [switch]="true">
      </lib-form-checkbox>

      <pre>{{ { accepted: accepted(), subscribed: subscribed() } | json }}</pre>
    </div>
  `
})
class CheckboxWithoutFormHost {
  readonly accepted = signal(false);
  readonly subscribed = signal(false);
}

export const WithoutForm: Story = {
  decorators: [
    moduleMetadata({
      imports: [CheckboxWithoutFormHost]
    })
  ],
  render: () => ({
    template: `<story-checkbox-without-form></story-checkbox-without-form>`
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Aucun `[field]` ici — chaque case est pilotée directement via ' +
          '`[value]`/`(valueChange)` sur des signals locaux, démontrant ' +
          'l\'usage isolé du composant.'
      }
    }
  }
};

/* -------------------------------------------------------------------------- */

export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Par défaut (Décoché)</h5>
          <lib-form-checkbox label="Option non sélectionnée" [value]="false"></lib-form-checkbox>
        </div>

        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Coché</h5>
          <lib-form-checkbox label="Option sélectionnée" [value]="true"></lib-form-checkbox>
        </div>

        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Désactivé (Disabled)</h5>
          <div style="display: flex; gap: 24px;">
            <lib-form-checkbox label="Désactivé non coché" [value]="false" [disabled]="true"></lib-form-checkbox>
            <lib-form-checkbox label="Désactivé coché" [value]="true" [disabled]="true"></lib-form-checkbox>
          </div>
        </div>
      </div>
    `
  })
};

export const SwitchVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Switch Custom</h5>
          <lib-form-checkbox label="Activer les notifications" [value]="false" [switch]="true"></lib-form-checkbox>
        </div>

        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Switch Native Bootstrap</h5>
          <lib-form-checkbox label="Activer le mode sombre" [value]="false" switch="native"></lib-form-checkbox>
        </div>
      </div>
    `
  })
};

export const LayoutVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 12px;">Mode Inline</h5>
          <div>
            <lib-form-checkbox label="Choix A" [value]="false" [inline]="true"></lib-form-checkbox>
            <lib-form-checkbox label="Choix B" [value]="true" [inline]="true"></lib-form-checkbox>
            <lib-form-checkbox label="Choix C" [value]="false" [inline]="true"></lib-form-checkbox>
          </div>
        </div>

        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 12px;">Mode Inversé (Reverse)</h5>
          <div style="max-width: 300px;">
            <lib-form-checkbox label="Label à gauche" [value]="false" [reverse]="true"></lib-form-checkbox>
          </div>
        </div>
      </div>
    `
  })
};