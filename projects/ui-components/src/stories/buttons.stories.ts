import type { Meta, StoryObj } from '@storybook/angular-vite';

const meta: Meta = {
    title: 'Components/Button',
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Texte affiché dans le bouton.',
            defaultValue: 'Bouton',
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            description: 'Variante de couleur du bouton.',
        },
        size: {
            control: 'inline-radio',
            options: ['sm', 'md', 'lg'],
            description: 'Taille du bouton.',
        },
        isOutline: {
            control: 'boolean',
            description: 'Applique le style de contour (outline).',
        },
        isRounded: {
            control: 'boolean',
            description: 'Applique les bords entièrement arrondis (pill).',
        },
        disabled: {
            control: 'boolean',
            description: 'Désactive le bouton.',
        },
    },
};

export default meta;

type Story = StoryObj;

export const Playground: Story = {
    args: {
        label: 'Cliquez ici',
        variant: 'primary',
        size: 'md',
        isOutline: false,
        isRounded: false,
        disabled: false,
    },
    render: (args) => {
        const { label, variant, size, isOutline, isRounded, disabled } = args;

        const variantClass = isOutline ? `btn-outline-${variant}` : `btn-${variant}`;
        const sizeClass = size !== 'md' ? `btn-${size}` : '';
        const roundedClass = isRounded ? 'btn-rounded' : '';

        const classes = ['btn', variantClass, sizeClass, roundedClass].filter(Boolean).join(' ');

        return {
            props: args,
            template: `
        <button type="button" class="${classes}" [disabled]="${disabled}">
          ${label}
        </button>
      `,
        };
    },
};

export const AllVariants: Story = {
    render: () => ({
        template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        
        <!-- Section Solid -->
        <div>
          <h4 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 12px;">Variantes Solid</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-dark">Dark</button>
          </div>
        </div>

        <!-- Section Outline -->
        <div>
          <h4 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 12px;">Variantes Outline</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <button type="button" class="btn btn-outline-primary">Primary</button>
            <button type="button" class="btn btn-outline-success">Success</button>
            <button type="button" class="btn btn-outline-danger">Danger</button>
            <button type="button" class="btn btn-outline-dark">Dark</button>
          </div>
        </div>

        <!-- Section Rounded -->
        <div>
          <h4 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 12px;">Variantes Rounded (.btn-rounded)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <button type="button" class="btn btn-primary btn-rounded">Primary Rounded</button>
            <button type="button" class="btn btn-outline-primary btn-rounded">Outline Rounded</button>
            <button type="button" class="btn btn-success btn-rounded">Success Rounded</button>
          </div>
        </div>

      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Vue d’ensemble des combinaisons de couleurs, formes et bordures disponibles dans le Design System.',
            },
        },
    },
};