import { Meta, StoryObj } from '@storybook/angular-vite';
import { Icon, LIB_ICON_NAMES } from '@ds-design-system/ui-components/icon';

const meta: Meta<Icon> = {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: LIB_ICON_NAMES
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl']
        }
    }
};
export default meta;

type Story = StoryObj<Icon>;

export const Default: Story = {
    args: {
        name: 'libicon-check',
        size: 'md'
    }
};

export const Decorative: Story = {
    args: {
        name: 'libicon-crayon',
        size: 'lg'
    },
    parameters: {
        docs: {
            description: {
                story: "Sans `label`, l'icône est purement décorative (`aria-hidden`)."
            }
        }
    }
};

export const Accessible: Story = {
    args: {
        name: 'libicon-check',
        size: 'lg',
        label: 'Étape validée'
    },
    parameters: {
        docs: {
            description: {
                story: 'Avec `label`, l\'icône devient une image porteuse de sens (`role="img"`).'
            }
        }
    }
};

export const AllIcons: Story = {
    render: () => ({
        template: `
      <div style="display:flex; flex-wrap:wrap; gap:1rem;">
        ${LIB_ICON_NAMES.map(n => `<lib-icon name="${n}" size="lg" title="${n}"></lib-icon>`).join('')}
      </div>
    `
    })
};