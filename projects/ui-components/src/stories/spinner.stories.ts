import { Meta, StoryObj } from '@storybook/angular-vite';
import { Spinner } from '@ds-design-system/ui-components/spinner';

const meta: Meta<Spinner> = {
    title: 'Components/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Taille du spinner (sm, md, lg)',
            table: {
                defaultValue: { summary: 'sm' },
            },
        },
        centered: {
            control: 'boolean',
            description: 'Centre le spinner dans son conteneur parent',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        fullScreen: {
            control: 'boolean',
            description: 'Affiche le spinner en plein écran',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
    },
    args: {
        centered: false,
        fullScreen: false,
    },
};

export default meta;
type Story = StoryObj<Spinner>;

export const Default: Story = {
    args: {
        size: 'md',
    },
};

export const Centered: Story = {
    args: {
        centered: true,
        size: 'md',
    },
    render: (args: any) => ({
        props: args,
        template: `
      <div style="height: 200px; border: 1px dashed #ccc; position: relative;">
        <lib-spinner [centered]="centered" [size]="size"></lib-spinner>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Centre le spinner au milieu de son élément conteneur (`position: relative`).',
            },
        },
    },
};

export const WithContent: Story = {
    render: (args: any) => ({
        props: args,
        template: `
      <lib-spinner [size]="size">
        <span>Chargement des données en cours...</span>
      </lib-spinner>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Le contenu projeté via `ng-content` s\'affiche à côté du spinner.',
            },
        },
    },
};

export const AllSizes: Story = {
    render: () => ({
        template: `
      <div style="display: flex; align-items: center; gap: 2rem;">
        <lib-spinner size="sm"></lib-spinner>
        <lib-spinner size="md"></lib-spinner>
        <lib-spinner size="lg"></lib-spinner>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Aperçu de toutes les tailles disponibles (`sm`, `md`, `lg`).',
            },
        },
    },
};