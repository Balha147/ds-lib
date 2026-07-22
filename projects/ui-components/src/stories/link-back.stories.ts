import { Location } from '@angular/common';
import { LinkBack } from '@ds-design-system/ui-components/link-back';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { fn } from 'storybook/test';

const meta: Meta<LinkBack> = {
    title: 'Components/LinkBack',
    component: LinkBack,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            providers: [
                {
                    provide: Location,
                    useValue: {
                        back: fn(),
                    },
                },
            ],
        }),
    ],
    argTypes: {
        label: {
            control: 'text',
            description: 'Texte affiché à côté de l\'icône de retour fixe',
            table: {
                defaultValue: { summary: 'Retour' },
            },
        },
    },
    args: {
        label: 'Retour',
    },
};

export default meta;
type Story = StoryObj<LinkBack>;

/**
 * Story par défaut.
 */
export const Default: Story = {};

/**
 * Exemple avec un libellé personnalisé.
 */
export const CustomLabel: Story = {
    args: {
        label: 'Retour au tableau de bord',
    },
};

/**
 * Exemple avec un texte plus long pour tester la résistance du layout.
 */
export const LongLabel: Story = {
    args: {
        label: 'Retour à la liste complète des résultats de recherche',
    },
};