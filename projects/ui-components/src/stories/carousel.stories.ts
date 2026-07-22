import type { Meta, StoryObj } from '@storybook/angular-vite';

import { Carousel, LibCarouselItem } from '@ds-design-system/ui-components/carousel';


const ITEMS: LibCarouselItem[] = [
    {
        id: 'paris',
        src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
        alt: 'Vue de Paris avec la Tour Eiffel',
        title: 'Paris',
        description: 'Découvrez la ville lumière.',
    },
    {
        id: 'london',
        src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
        alt: 'Vue de Londres',
        title: 'London',
        description: 'Une ville entre histoire et modernité.',
    },
    {
        id: 'new-york',
        src: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee',
        alt: 'Vue de New York',
        title: 'New York',
        description: 'La ville qui ne dort jamais.',
    },
    {
        id: 'tokyo',
        src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
        alt: 'Vue de Tokyo',
        title: 'Tokyo',
        description: 'Tradition et technologie réunies.',
    },
];

const meta: Meta<Carousel> = {
    title: 'Components/Carousel',
    component: Carousel,
    tags: ['autodocs'],

    argTypes: {
        items: {
            control: false,
            description: 'Liste des slides du Carousel.',
        },

        size: {
            control: 'inline-radio',
            options: ['sm', 'md', 'lg'],
            description: 'Taille du Carousel.',
        },

        transition: {
            control: 'inline-radio',
            options: ['slide', 'fade'],
            description: 'Type de transition entre les slides.',
        },

        autoplay: {
            control: 'boolean',
            description: 'Active la lecture automatique.',
        },

        interval: {
            control: 'number',
            description: 'Intervalle entre les slides en millisecondes.',
        },

        showControls: {
            control: 'boolean',
            description: 'Affiche les boutons précédent/suivant.',
        },

        showIndicators: {
            control: 'boolean',
            description: 'Affiche les indicateurs.',
        },

        showCounter: {
            control: 'boolean',
            description: 'Affiche le compteur.',
        },

        loop: {
            control: 'boolean',
            description: 'Permet de revenir au premier slide.',
        },

        ariaLabel: {
            control: 'text',
            description: 'Label accessible du Carousel.',
        },
    },

    args: {
        items: ITEMS,
        size: 'md',
        transition: 'slide',
        autoplay: false,
        interval: 5000,
        showControls: true,
        showIndicators: true,
        showCounter: true,
        loop: true,
        ariaLabel: 'Galerie de destinations',
    },

    parameters: {
        docs: {
            description: {
                component: `
Carousel accessible et responsive basé sur Angular Signals.

Les contrôles de navigation réutilisent les boutons du Design System
(\`btn\`, \`btn-light\`, \`btn-rounded\`) afin de conserver une expérience
visuelle cohérente avec les autres composants.
        `.trim(),
            },
        },
    },
};

export default meta;

type Story = StoryObj<Carousel>;

/**
 * Playground
 */
export const Playground: Story = {};

/**
 * Fade
 */
export const Fade: Story = {
    args: {
        transition: 'fade',
    },
};

/**
 * Small
 */
export const Small: Story = {
    args: {
        size: 'sm',
    },
};

/**
 * Large
 */
export const Large: Story = {
    args: {
        size: 'lg',
    },
};

/**
 * WithoutControls
 */
export const WithoutControls: Story = {
    args: {
        showControls: false,
    },
};

/**
 * WithoutIndicators
 */
export const WithoutIndicators: Story = {
    args: {
        showIndicators: false,
    },
};

/**
 * WithoutCounter
 */
export const WithoutCounter: Story = {
    args: {
        showCounter: false,
    },
};

/**
 * StaticGallery
 */
export const StaticGallery: Story = {
    args: {
        showControls: true,
        showIndicators: true,
        showCounter: true,
        autoplay: false,
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Galerie statique avec navigation manuelle et indicateurs.',
            },
        },
    },
};
