import {
  Meta,
  StoryObj,
  applicationConfig,
  moduleMetadata,
} from '@storybook/angular-vite';

import {
  Tooltip,
  TooltipDirective,
} from '@ds-design-system/ui-components/tooltip';

import { importProvidersFrom } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';

type TooltipPosition =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left';

type TooltipType =
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light';

type TooltipTrigger =
  | 'hover'
  | 'click'
  | 'focus';

const meta: Meta<TooltipDirective> = {
  title: 'Components/Tooltip',

  component: TooltipDirective,

  tags: ['autodocs'],

  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(OverlayModule),
      ],
    }),

    moduleMetadata({
      imports: [
        TooltipDirective,
        Tooltip,
      ],
    }),
  ],

  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component: `
Le Tooltip permet d'afficher une information contextuelle associée à un élément interactif.

Il peut être utilisé avec :

- un texte simple ;
- un contenu HTML via \`TemplateRef\` ;
- différentes positions ;
- différents types visuels ;
- une largeur personnalisée ;
- un état désactivé ;
- une option d'ombre ;
- différents événements de déclenchement lorsqu'ils sont supportés par le composant.

## Utilisation simple

\`\`\`html
<button
  type="button"
  [libTooltip]="'Informations complémentaires'"
  [libTooltipPosition]="'top'"
  [libTooltipType]="'info'">
  Survolez-moi
</button>
\`\`\`

## Contenu personnalisé

Le Tooltip accepte également un \`TemplateRef\`.

\`\`\`html
<ng-template #content>
  <strong>Information</strong>
  <span>Contenu personnalisé.</span>
</ng-template>

<button
  type="button"
  [libTooltip]="content">
  Survolez-moi
</button>
\`\`\`

## Accessibilité

Le Tooltip doit compléter l'information disponible sur l'interface et ne devrait pas être utilisé pour transmettre une information essentielle inaccessible autrement.

Pour les actions importantes ou les informations critiques, privilégiez un texte visible ou une aide persistante.
        `.trim(),
      },
    },
  },

  argTypes: {
    text: {
      control: 'text',
      description: 'Texte ou contenu du Tooltip.',
      table: {
        category: 'Content',
      },
    },

    position: {
      control: 'select',
      options: [
        'top',
        'right',
        'bottom',
        'left',
      ],

      description: 'Position du Tooltip autour de l’élément cible.',

      table: {
        category: 'Appearance',
        defaultValue: {
          summary: 'top',
        },
      },
    },

    type: {
      control: 'select',
      options: [
        'info',
        'success',
        'warning',
        'danger',
        'light',
      ],

      description: 'Style visuel du Tooltip.',

      table: {
        category: 'Appearance',
        defaultValue: {
          summary: 'info',
        },
      },
    },

    width: {
      control: 'text',

      description:
        'Largeur du Tooltip. Peut être une valeur CSS ou "auto".',

      table: {
        category: 'Appearance',
        defaultValue: {
          summary: 'auto',
        },
      },
    },

    noShadow: {
      control: 'boolean',

      description:
        'Désactive l’ombre portée du Tooltip.',

      table: {
        category: 'Appearance',
        defaultValue: {
          summary: 'false',
        },
      },
    },

    disabled: {
      control: 'boolean',

      description:
        'Désactive l’affichage du Tooltip.',

      table: {
        category: 'Behavior',
        defaultValue: {
          summary: 'false',
        },
      },
    },

    trigger: {
      control: 'select',

      options: [
        'hover',
        'click',
        'focus',
      ],

      description:
        'Événement utilisé pour déclencher le Tooltip.',

      table: {
        category: 'Behavior',
        defaultValue: {
          summary: 'hover',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<TooltipDirective>;

export const Default: Story = {
  args: {
    text: 'Ceci est un tooltip simple.',

    position: 'top' satisfies TooltipPosition,

    type: 'info' satisfies TooltipType,

    width: 'auto',

    noShadow: false,

    disabled: false,

    trigger: 'hover' satisfies TooltipTrigger,
  },

  render: (args: any) => ({
    props: args,

    template: `
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10rem;
        "
      >
        <button
          type="button"
          class="btn btn-primary"

          [libTooltip]="text"
          [libTooltipPosition]="position"
          [libTooltipType]="type"
          [libTooltipWidth]="width"
          [libTooltipNoShadow]="noShadow"
          [libTooltipDisabled]="disabled"
          [libTooltipTrigger]="trigger"
        >
          Survolez-moi
        </button>
      </div>
    `,
  }),

  parameters: {
    docs: {
      description: {
        story:
          'Utilisation standard du Tooltip avec un contenu texte.',
      },

      source: {
        type: 'code',

        language: 'html',

        code: `
<button
  type="button"
  [libTooltip]="'Ceci est un tooltip simple.'"
  [libTooltipPosition]="'top'"
  [libTooltipType]="'info'">
  Survolez-moi
</button>
        `.trim(),
      },
    },
  },
};

export const CustomContent: Story = {
  args: {
    position: 'top' satisfies TooltipPosition,

    type: 'info' satisfies TooltipType,

    width: '320px',

    noShadow: false,

    disabled: false,

    trigger: 'hover' satisfies TooltipTrigger,
  },

  render: (args: any) => ({
    props: args,

    template: `
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10rem;
        "
      >
        <ng-template #richContent>
          <div
            style="
              display: flex;
              align-items: center;
              gap: 10px;
            "
          >
            <span
              aria-hidden="true"
              style="font-size: 1.25rem;"
            >
              🚀
            </span>

            <div>
              <strong
                style="
                  display: block;
                  font-size: 0.875rem;
                "
              >
                Mise à jour disponible !
              </strong>

              <span
                style="
                  display: block;
                  font-size: 0.75rem;
                  opacity: 0.9;
                "
              >
                Cliquez pour découvrir les nouveautés.
              </span>
            </div>
          </div>
        </ng-template>

        <button
          type="button"
          class="btn btn-secondary"

          [libTooltip]="richContent"
          [libTooltipPosition]="position"
          [libTooltipType]="type"
          [libTooltipWidth]="width"
          [libTooltipNoShadow]="noShadow"
          [libTooltipDisabled]="disabled"
          [libTooltipTrigger]="trigger"
        >
          Contenu personnalisé
        </button>
      </div>
    `,
  }),

  parameters: {
    docs: {
      description: {
        story:
          'Le Tooltip peut afficher un TemplateRef permettant de construire un contenu riche.',
      },

      source: {
        type: 'code',

        language: 'html',

        code: `
<ng-template #richContent>
  <div>
    <strong>Mise à jour disponible !</strong>
    <span>
      Cliquez pour découvrir les nouveautés.
    </span>
  </div>
</ng-template>

<button
  type="button"
  [libTooltip]="richContent"
  [libTooltipPosition]="'top'"
  [libTooltipType]="'info'"
  [libTooltipWidth]="'320px'">
  Contenu personnalisé
</button>
        `.trim(),
      },
    },
  },
};

export const AllPositions: Story = {
  render: () => ({
    template: `
      <div
        style="
          width: 600px;
          height: 600px;
          margin: 5rem auto;
          position: relative;
          border: 1px dashed #ccc;
          box-sizing: border-box;
        "
      >
        <button
          type="button"
          class="btn btn-outline-primary"

          style="
            position: absolute;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
          "

          libTooltip="Tooltip Top"
          libTooltipPosition="top"
        >
          Position Top
        </button>

        <button
          type="button"
          class="btn btn-outline-primary"

          style="
            position: absolute;
            right: 80px;
            top: 50%;
            transform: translateY(-50%);
          "

          libTooltip="Tooltip Right"
          libTooltipPosition="right"
        >
          Position Right
        </button>

        <button
          type="button"
          class="btn btn-outline-primary"

          style="
            position: absolute;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%);
          "

          libTooltip="Tooltip Bottom"
          libTooltipPosition="bottom"
        >
          Position Bottom
        </button>

        <button
          type="button"
          class="btn btn-outline-primary"

          style="
            position: absolute;
            left: 80px;
            top: 50%;
            transform: translateY(-50%);
          "

          libTooltip="Tooltip Left"
          libTooltipPosition="left"
        >
          Position Left
        </button>
      </div>
    `,
  }),

  parameters: {
    docs: {
      description: {
        story:
          'Présentation des quatre positions disponibles : top, right, bottom et left.',
      },

      source: {
        type: 'code',

        language: 'html',

        code: `
<!-- Top -->
<button
  type="button"
  [libTooltip]="'Tooltip Top'"
  [libTooltipPosition]="'top'">
  Position Top
</button>

<!-- Right -->
<button
  type="button"
  [libTooltip]="'Tooltip Right'"
  [libTooltipPosition]="'right'">
  Position Right
</button>

<!-- Bottom -->
<button
  type="button"
  [libTooltip]="'Tooltip Bottom'"
  [libTooltipPosition]="'bottom'">
  Position Bottom
</button>

<!-- Left -->
<button
  type="button"
  [libTooltip]="'Tooltip Left'"
  [libTooltipPosition]="'left'">
  Position Left
</button>
        `.trim(),
      },
    },
  },
};

export const Types: Story = {
  render: () => ({
    template: `
      <div
        style="
          display: grid;
          grid-template-columns: repeat(2, minmax(180px, 1fr));
          gap: 24px;
          padding: 6rem;
          max-width: 600px;
        "
      >
        <button
          type="button"
          class="btn btn-outline-primary"
          libTooltip="Information"
          libTooltipType="info"
        >
          Info
        </button>

        <button
          type="button"
          class="btn btn-outline-success"
          libTooltip="Opération réussie"
          libTooltipType="success"
        >
          Success
        </button>

        <button
          type="button"
          class="btn btn-outline-warning"
          libTooltip="Attention"
          libTooltipType="warning"
        >
          Warning
        </button>

        <button
          type="button"
          class="btn btn-outline-danger"
          libTooltip="Une erreur est survenue"
          libTooltipType="danger"
        >
          Danger
        </button>

        <button
          type="button"
          class="btn btn-outline-secondary"
          libTooltip="Information secondaire"
          libTooltipType="light"
        >
          Light
        </button>
      </div>
    `,
  }),

  parameters: {
    docs: {
      description: {
        story:
          'Les différents styles visuels disponibles pour le Tooltip.',
      },

      source: {
        type: 'code',

        language: 'html',

        code: `
<button
  [libTooltip]="'Information'"
  [libTooltipType]="'info'">
  Info
</button>

<button
  [libTooltip]="'Opération réussie'"
  [libTooltipType]="'success'">
  Success
</button>

<button
  [libTooltip]="'Attention'"
  [libTooltipType]="'warning'">
  Warning
</button>

<button
  [libTooltip]="'Une erreur est survenue'"
  [libTooltipType]="'danger'">
  Danger
</button>

<button
  [libTooltip]="'Information secondaire'"
  [libTooltipType]="'light'">
  Light
</button>
        `.trim(),
      },
    },
  },
};

export const Widths: Story = {
  render: () => ({
    template: `
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
          padding: 6rem;
        "
      >
        <button
          type="button"
          class="btn btn-primary"

          libTooltip="Tooltip avec une largeur automatique."
          libTooltipWidth="auto"
        >
          Largeur auto
        </button>

        <button
          type="button"
          class="btn btn-primary"

          libTooltip="
            Tooltip avec une largeur fixe de 200 pixels.
          "
          libTooltipWidth="200px"
        >
          Largeur 200px
        </button>

        <button
          type="button"
          class="btn btn-primary"

          libTooltip="
            Tooltip avec une largeur plus importante permettant
            d'afficher davantage de contenu.
          "
          libTooltipWidth="350px"
        >
          Largeur 350px
        </button>
      </div>
    `,
  }),

  parameters: {
    docs: {
      description: {
        story:
          'Le Tooltip peut recevoir une largeur personnalisée ou utiliser une largeur automatique.',
      },

      source: {
        type: 'code',

        language: 'html',

        code: `
<button
  [libTooltip]="'Tooltip avec une largeur automatique.'"
  [libTooltipWidth]="'auto'">
  Largeur auto
</button>

<button
  [libTooltip]="'Tooltip avec une largeur fixe.'"
  [libTooltipWidth]="'200px'">
  Largeur 200px
</button>

<button
  [libTooltip]="'Tooltip plus large.'"
  [libTooltipWidth]="'350px'">
  Largeur 350px
</button>
        `.trim(),
      },
    },
  },
};

export const NoShadow: Story = {
  args: {
    text: 'Tooltip sans ombre.',
    position: 'top',
    type: 'info',
    width: 'auto',
    noShadow: true,
    disabled: false,
    trigger: 'hover',
  },

  render: (args: any) => ({
    props: args,

    template: `
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10rem;
        "
      >
        <button
          type="button"
          class="btn btn-primary"

          [libTooltip]="text"
          [libTooltipPosition]="position"
          [libTooltipType]="type"
          [libTooltipWidth]="width"
          [libTooltipNoShadow]="noShadow"
          [libTooltipDisabled]="disabled"
          [libTooltipTrigger]="trigger"
        >
          Tooltip sans ombre
        </button>
      </div>
    `,
  }),

  parameters: {
    docs: {
      description: {
        story:
          'Désactive l’ombre portée du Tooltip avec `libTooltipNoShadow`.',
      },

      source: {
        type: 'code',

        language: 'html',

        code: `
<button
  type="button"
  [libTooltip]="'Tooltip sans ombre.'"
  [libTooltipPosition]="'top'"
  [libTooltipType]="'info'"
  [libTooltipNoShadow]="true">
  Tooltip sans ombre
</button>
        `.trim(),
      },
    },
  },
};
