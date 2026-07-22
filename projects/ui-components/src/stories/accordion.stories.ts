import type { Meta, StoryObj } from '@storybook/angular-vite';

import {
    Accordion,
    LibAccordionItem,
    LibAccordionSize,
} from '@ds-design-system/ui-components/accordion';

const ITEMS: readonly LibAccordionItem[] = [
    {
        id: 'general',
        title: 'Informations générales',
        content:
            'Retrouvez ici les informations générales concernant votre compte et les paramètres principaux.',
    },
    {
        id: 'profile',
        title: 'Profil utilisateur',
        content:
            'Vous pouvez consulter et modifier vos informations personnelles, votre photo de profil et vos préférences.',
    },
    {
        id: 'notifications',
        title: 'Notifications',
        content:
            'Configurez les notifications que vous souhaitez recevoir et choisissez les canaux utilisés pour vous contacter.',
    },
    {
        id: 'security',
        title: 'Sécurité',
        content:
            'Gérez votre mot de passe, vos sessions actives et les différentes options de sécurité disponibles.',
    },
];

const meta: Meta<Accordion> = {
    title: 'Components/Accordion',

    component: Accordion,

    tags: ['autodocs'],

    parameters: {
        layout: 'padded',

        docs: {
            description: {
                component: `
The **Accordion** component is used to organize and display
collapsible sections of related content.

The component is implemented natively with Angular Signals and
does not depend on Bootstrap JavaScript.

## Features

- collapsible sections;
- Angular Signals based state management;
- configurable accordion items;
- configurable size;
- disabled items;
- accessible buttons;
- keyboard-friendly interaction;
- smooth expand/collapse animation;
- custom styling through CSS classes.

## Usage

\`\`\`html
<lib-accordion
  [items]="items"
/>
\`\`\`

## Items

Each accordion item contains a unique identifier, a title and
the content displayed when the section is expanded.

Example:

\`\`\`ts
const items = [
  {
    id: 'general',
    title: 'Informations générales',
    content: 'Contenu de la section...',
  },
  {
    id: 'profile',
    title: 'Profil utilisateur',
    content: 'Contenu du profil...',
  },
];
\`\`\`

## Accessibility

The accordion uses semantic buttons and exposes the expanded state
through appropriate ARIA attributes.

The component should always provide meaningful titles for each section.
        `,
            },
        },
    },

    argTypes: {
        items: {
            control: 'object',

            description:
                'Collection of accordion items displayed by the component.',

            table: {
                category: 'Content',

                type: {
                    summary: 'readonly LibAccordionItem[]',
                },
            },
        },

        size: {
            control: 'inline-radio',

            options: ['sm', 'md', 'lg'] satisfies LibAccordionSize[],

            description: `
Size of the accordion.

- **sm**: compact accordion
- **md**: default size
- **lg**: large accordion
      `,

            table: {
                category: 'Appearance',

                type: {
                    summary: 'LibAccordionSize',
                },

                defaultValue: {
                    summary: 'md',
                },
            },
        },

        customClass: {
            control: 'text',

            description:
                'Additional CSS classes applied to the accordion root element.',

            table: {
                category: 'Customization',

                type: {
                    summary: 'string',
                },

                defaultValue: {
                    summary: '',
                },
            },
        },
    },

    args: {
        items: ITEMS,
        size: 'md',
        customClass: '',
    },
};

export default meta;

type Story = StoryObj<Accordion>;

export const Playground: Story = {
    name: 'Custom',

    render: (args: any) => ({
        props: args,

        template: `
      <div class="accordion-story">

        <div class="accordion-story__header">

          <span class="accordion-story__eyebrow">
            Design System
          </span>

          <h2 class="accordion-story__title">
            Accordion
          </h2>

          <p class="accordion-story__description">
            Composant Accordion custom basé sur Angular Signals.
            Cliquez sur les différentes sections pour afficher
            ou masquer leur contenu.
          </p>

        </div>

        <div class="accordion-story__component">

          <lib-accordion
            [items]="items"
            [size]="size"
            [customClass]="customClass"
          />

        </div>

      </div>
    `,
    }),

    parameters: {
        docs: {
            description: {
                story:
                    'Présentation de l’implémentation custom du composant Accordion du Design System.',
            },
        },
    },
};