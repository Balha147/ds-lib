import type { Meta, StoryObj } from '@storybook/angular-vite';
import { FormInput } from '@ds-design-system/ui-components/form-input';

const meta: Meta<FormInput> = {
    title: 'Forms/Input',
    component: FormInput,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'password', 'email', 'number', 'textarea']
        }
    },
    parameters: {
        docs: {
            description: {
                component:
                    'Champ de saisie basé sur Signal Forms (`FormValueControl`). ' +
                    '`value` est requis — fournissez toujours une valeur initiale, ' +
                    'même vide, que ce soit via `[field]` en usage réel ou via les ' +
                    '`args` dans Storybook.'
            }
        }
    }
};

export default meta;
type Story = StoryObj<FormInput>;

export const Playground: Story = {
    args: {
        value: '',
        label: 'Adresse email',
        hint: 'Nous ne partagerons jamais votre email.',
        disabled: false,
        readonly: false,
        touched: false,
        type: 'text'
    }
};

export const WithError: Story = {
    args: {
        value: 'email@',
        label: 'Email',
        touched: true,
        errors: [{ kind: 'email' } as never]
    }
};

export const Success: Story = {
    args: {
        value: 'test@email.com',
        label: 'Email validé',
        touched: true
    }
};

export const Textarea: Story = {
    args: {
        value: 'Ceci est un message de démonstration.',
        label: 'Commentaire / Description',
        type: 'textarea',
        hint: 'Maximum 500 caractères'
    }
};

export const Disabled: Story = {
    args: {
        value: 'Champ désactivé',
        label: 'Désactivé',
        disabled: true
    }
};

export const ReadOnly: Story = {
    args: {
        value: 'Valeur en lecture seule',
        label: 'Lecture seule',
        readonly: true
    }
};

export const AllStates: Story = {
    render: () => ({
        imports: [FormInput],
        template: `
      <div style="display:flex; flex-direction:column; gap:24px; max-width:400px;">
        <lib-form-input [value]="''" label="Champ standard" ></lib-form-input>
        <lib-form-input [value]="'Valeur saisie'" label="Avec valeur" ></lib-form-input>
        
        <!-- Illustration explicite du Textarea -->
        <lib-form-input 
          [value]="'Texte plus long inséré dans une zone de texte multi-lignes...'" 
          type="textarea"
          label="Zone de texte (Textarea)">
        </lib-form-input>

        <lib-form-input
          [value]="'email@'"
          label="Email en erreur"
          [touched]="true"
          [errors]="[{ kind: 'email' }]">
        </lib-form-input>

        <lib-form-input [value]="'Champ désactivé'" label="Désactivé" [disabled]="true"></lib-form-input>
      </div>
    `
    })
};