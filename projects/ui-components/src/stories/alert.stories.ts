import type { Meta, StoryObj } from '@storybook/angular-vite';
import { LIB_ICON_NAMES } from '@ds-design-system/ui-components/icon';
import { Alert } from '@ds-design-system/ui-components/alert';

const meta: Meta<Alert> = {
    title: 'Components/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['light', 'success', 'danger', 'warning', 'info'],
            description: 'Détermine la variante visuelle de l\'alerte.',
        },
        icon: {
            control: 'select',
            options: [undefined, ...LIB_ICON_NAMES],
            description: 'Nom de l\'icône d\'illustration optionnelle.',
        },
        dismissible: {
            control: 'boolean',
            description: 'Affiche un bouton de fermeture (icône close).',
        },
        visible: {
            control: 'boolean',
            description: 'Signal gérant l\'état d\'affichage de l\'alerte.',
        },
    },
};

export default meta;

type Story = StoryObj<Alert>;

export const Default: Story = {
    args: {
        type: 'info',
        dismissible: false,
        visible: true,
    },
    render: (args: any) => ({
        props: args,
        template: `
      <lib-alert [type]="type" [dismissible]="dismissible" [(visible)]="visible">
        <span>Ceci est une alerte d'information simple.</span>
      </lib-alert>
    `,
    }),
};

export const WithIcon: Story = {
    args: {
        type: 'success',
        icon: 'libicon-check',
        dismissible: false,
        visible: true,
    },
    render: (args: any) => ({
        props: args,
        template: `
      <lib-alert [type]="type" [icon]="icon" [dismissible]="dismissible" [(visible)]="visible">
        L'opération a été effectuée avec succès !
      </lib-alert>
    `,
    }),
};

export const Dismissible: Story = {
    args: {
        type: 'warning',
        icon: 'libicon-cercle-information',
        dismissible: true,
        visible: true,
    },
    render: (args: any) => ({
        props: args,
        template: `
      <lib-alert [type]="type" [icon]="icon" [dismissible]="dismissible" [(visible)]="visible">
        Attention, vous avez des modifications non enregistrées.
      </lib-alert>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Utilise le composant `<lib-icon name="close" />` interne pour le bouton de fermeture.',
            },
        },
    },
};

export const AllTypes: Story = {
    render: () => ({
        template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <lib-alert type="light">Alerte variante Light</lib-alert>
        <lib-alert type="info" dismissible>Alerte variante Information</lib-alert>
        <lib-alert type="success" icon="libicon-check" dismissible>Alerte variante Succès</lib-alert>
        <lib-alert type="warning" icon="libicon-ampoule" dismissible>Alerte variante Avertissement</lib-alert>
        <lib-alert type="danger" dismissible>Alerte variante Danger / Erreur</lib-alert>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Aperçu de toutes les déclinaisons de couleurs basées sur les tokens du Design System.',
            },
        },
    },
};