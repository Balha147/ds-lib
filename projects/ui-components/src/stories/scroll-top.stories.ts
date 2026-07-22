import type { Meta, StoryObj } from '@storybook/angular-vite';

import { ScrollTop } from '@ds-design-system/ui-components/scroll-top';

import './scroll-top.stories.scss';

const meta: Meta<ScrollTop> = {
  title: 'Components/ScrollTop',

  component: ScrollTop,

  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',

    docs: {
      description: {
        component: `
# ScrollTop

The **ScrollTop** component allows users to quickly return to the top
of a long page.

The button automatically appears when the configured scroll threshold
is reached.

## Features

- automatic visibility based on scroll position;
- configurable scroll threshold;
- smooth scrolling;
- configurable position;
- configurable size;
- Design System Icon integration;
- accessible label;
- custom CSS classes;
- support for reduced-motion preferences.

## Usage

\`\`\`html
<lib-scroll-top />
\`\`\`

By default, the button appears after **300px** of scrolling.

## Position

The component supports four positions:

- \`top-left\`
- \`top-right\`
- \`bottom-left\`
- \`bottom-right\`

## Accessibility

The component uses a native \`button\` element and provides an accessible
label through the \`ariaLabel\` input.

The icon is decorative and does not replace the accessible label.
        `,
      },
    },
  },

  argTypes: {
    threshold: {
      control: {
        type: 'number',
        min: 0,
        step: 50,
      },

      description:
        'Distance in pixels before the ScrollTop button becomes visible.',

      table: {
        category: 'Behavior',

        type: {
          summary: 'number',
        },

        defaultValue: {
          summary: '300',
        },
      },
    },

    position: {
      control: 'text',

      description: `
Position of the ScrollTop button.

Available values:

- \`top-left\`
- \`top-right\`
- \`bottom-left\`
- \`bottom-right\`
      `,

      table: {
        category: 'Appearance',

        type: {
          summary: 'LibScrollTopPosition',
        },

        defaultValue: {
          summary: 'bottom-right',
        },
      },
    },

    size: {
      control: 'text',

      description: `
Size of the ScrollTop button.

Available values:

- \`sm\`
- \`md\`
- \`lg\`
      `,

      table: {
        category: 'Appearance',

        type: {
          summary: 'LibScrollTopSize',
        },

        defaultValue: {
          summary: 'md',
        },
      },
    },

    smooth: {
      control: 'boolean',

      description:
        'Enables smooth scrolling when returning to the top of the page.',

      table: {
        category: 'Behavior',

        type: {
          summary: 'boolean',
        },

        defaultValue: {
          summary: 'true',
        },
      },
    },

    icon: {
      control: 'text',

      description:
        'Icon displayed inside the button using the Design System Icon component.',

      table: {
        category: 'Content',

        type: {
          summary: 'LibIconName',
        },

        defaultValue: {
          summary: 'libicon-fleche-haut',
        },
      },
    },

    ariaLabel: {
      control: 'text',

      description:
        'Accessible label of the ScrollTop button.',

      table: {
        category: 'Accessibility',

        type: {
          summary: 'string',
        },

        defaultValue: {
          summary: 'Remonter en haut de la page',
        },
      },
    },

    customClass: {
      control: 'text',

      description:
        'Additional CSS classes applied to the ScrollTop button.',

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
    threshold: 300,
    position: 'bottom-right',
    size: 'md',
    smooth: true,
    icon: 'libicon-fleche-haut',
    ariaLabel: 'Remonter en haut de la page',
    customClass: '',
  },
};

export default meta;

type Story = StoryObj<ScrollTop>;

export const Playground: Story = {
  name: 'Long Page',

  render: (args: any) => ({
    props: args,

    template: `
      <div class="scroll-top-story">

        <section class="scroll-top-story__hero">

          <span class="scroll-top-story__eyebrow">
            Design System
          </span>

          <h1 class="scroll-top-story__title">
            ScrollTop
          </h1>

          <p class="scroll-top-story__description">
            Faites défiler la page pour faire apparaître le bouton
            ScrollTop.
          </p>

          <span class="scroll-top-story__hint">
            ↓ Faites défiler vers le bas ↓
          </span>

        </section>

        <main class="scroll-top-story__content">

          <section class="scroll-top-story__section">

            <span class="scroll-top-story__number">
              01
            </span>

            <h2>
              Apparition automatique
            </h2>

            <p>
              Le bouton ScrollTop apparaît automatiquement lorsque
              la position de scroll dépasse le seuil configuré.
            </p>

            <p>
              Par défaut, le seuil est fixé à 300 pixels.
            </p>

          </section>

          <section class="scroll-top-story__section">

            <span class="scroll-top-story__number">
              02
            </span>

            <h2>
              Retour en haut
            </h2>

            <p>
              Lorsque le bouton est visible, cliquez dessus pour
              revenir automatiquement au début de la page.
            </p>

            <p>
              Le défilement peut être fluide grâce à la propriété
              <code>smooth</code>.
            </p>

          </section>

          <section class="scroll-top-story__section">

            <span class="scroll-top-story__number">
              03
            </span>

            <h2>
              Design System Icon
            </h2>

            <p>
              Le bouton utilise le composant
              <strong>Icon</strong> du Design System.
            </p>

            <p>
              Il n'utilise donc pas directement le caractère Unicode
              <code>↑</code>.
            </p>

          </section>

          <section class="scroll-top-story__section">

            <span class="scroll-top-story__number">
              04
            </span>

            <h2>
              Accessibilité
            </h2>

            <p>
              Le bouton possède un label accessible configurable
              grâce à la propriété <code>ariaLabel</code>.
            </p>

            <p>
              L'icône est décorative et ne remplace pas le texte
              accessible.
            </p>

          </section>

          <section class="scroll-top-story__section">

            <span class="scroll-top-story__number">
              05
            </span>

            <h2>
              Fin de la démonstration
            </h2>

            <p>
              Vous êtes maintenant suffisamment bas dans la page.
            </p>

            <p>
              Le bouton ScrollTop doit être visible.
              Utilisez-le pour revenir en haut.
            </p>

          </section>

        </main>

        <lib-scroll-top
          [threshold]="threshold"
          [position]="position"
          [size]="size"
          [smooth]="smooth"
          [icon]="icon"
          [ariaLabel]="ariaLabel"
          [customClass]="customClass"
        />

      </div>
    `,
  }),

  parameters: {
    docs: {
      description: {
        story:
          'Long page permettant de tester l’apparition automatique du ScrollTop après le seuil de défilement.',
      },
    },
  },
};

export const AllPositions: Story = {
  name: 'All Positions',

  render: () => ({
    template: `
      <div class="scroll-top-positions">

        <section class="scroll-top-positions__hero">

          <span class="scroll-top-positions__eyebrow">
            Design System
          </span>

          <h1 class="scroll-top-positions__title">
            ScrollTop
          </h1>

          <p class="scroll-top-positions__description">
            Défilez vers le bas pour visualiser les quatre positions
            disponibles pour le composant.
          </p>

          <span class="scroll-top-positions__hint">
            ↓ Faites défiler vers le bas ↓
          </span>

        </section>

        <main class="scroll-top-positions__content">

          <section class="scroll-top-positions__section">

            <span class="scroll-top-positions__number">
              01
            </span>

            <h2>
              Top Left
            </h2>

            <p>
              Le bouton est positionné dans le coin supérieur gauche
              de la fenêtre.
            </p>

            <code>
              position="top-left"
            </code>

          </section>

          <section class="scroll-top-positions__section">

            <span class="scroll-top-positions__number">
              02
            </span>

            <h2>
              Top Right
            </h2>

            <p>
              Le bouton est positionné dans le coin supérieur droit
              de la fenêtre.
            </p>

            <code>
              position="top-right"
            </code>

          </section>

          <section class="scroll-top-positions__section">

            <span class="scroll-top-positions__number">
              03
            </span>

            <h2>
              Bottom Left
            </h2>

            <p>
              Le bouton est positionné dans le coin inférieur gauche
              de la fenêtre.
            </p>

            <code>
              position="bottom-left"
            </code>

          </section>

          <section class="scroll-top-positions__section">

            <span class="scroll-top-positions__number">
              04
            </span>

            <h2>
              Bottom Right
            </h2>

            <p>
              Le bouton est positionné dans le coin inférieur droit
              de la fenêtre.
            </p>

            <code>
              position="bottom-right"
            </code>

          </section>

          <section class="scroll-top-positions__section">

            <span class="scroll-top-positions__number">
              ✓
            </span>

            <h2>
              Démonstration terminée
            </h2>

            <p>
              Les quatre boutons utilisent le même composant ScrollTop.
              Seule leur propriété de position change.
            </p>

          </section>

        </main>

        <lib-scroll-top
          position="top-left"
          [threshold]="100"
          ariaLabel="Remonter en haut - position haut gauche"
        />

        <lib-scroll-top
          position="top-right"
          [threshold]="100"
          ariaLabel="Remonter en haut - position haut droite"
        />

        <lib-scroll-top
          position="bottom-left"
          [threshold]="100"
          ariaLabel="Remonter en haut - position bas gauche"
        />

        <lib-scroll-top
          position="bottom-right"
          [threshold]="100"
          ariaLabel="Remonter en haut - position bas droite"
        />

      </div>
    `,
  }),

  parameters: {
    docs: {
      description: {
        story:
          'Démonstration des quatre positions disponibles. Faites défiler la page pour afficher les boutons ScrollTop.',
      },
    },
  },
};