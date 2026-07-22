import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { Timeline, TimelineItem } from '@ds-design-system/ui-components/timeline';

const meta: Meta<Timeline> = {
    title: 'Components/Timeline',
    component: Timeline,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [Timeline, TimelineItem]
        })
    ],
    argTypes: {
        orientation: {
            control: 'select',
            options: ['horizontal', 'vertical']
        }
    },
    parameters: {
        docs: {
            description: {
                component:
                    'Timeline configurable soit via `[content]`/`[icons]` (tableaux simples), ' +
                    'soit via projection de `<lib-timeline-item>` (contenu riche + template).'
            }
        }
    }
};
export default meta;
type Story = StoryObj<Timeline>;

/* -------------------------------------------------------------------------- */
/* Usage simple — tableaux `content`/`icons`                                 */
/* -------------------------------------------------------------------------- */

export const Horizontal: Story = {
    args: {
        orientation: 'horizontal',
        content: ['Commande passée', 'En préparation', 'Expédiée', 'Livrée'],
        pendingFromIndex: 2
    }
};

export const Vertical: Story = {
    args: {
        orientation: 'vertical',
        content: ['Commande passée', 'En préparation', 'Expédiée', 'Livrée'],
        pendingFromIndex: 2
    }
};

export const WithIcons: Story = {
    args: {
        orientation: 'horizontal',
        content: ['Inscription', 'Vérification', 'Paiement', 'Confirmation'],
        icons: ['compte', 'check', 'euro', 'check'],
        pendingFromIndex: 2
    },
    parameters: {
        docs: {
            description: {
                story: 'Chaque étape reçoit une icône via `icons[index]` au lieu d\'un numéro.'
            }
        }
    }
};

export const MixedIconsAndNumbers: Story = {
    args: {
        orientation: 'horizontal',
        content: ['Étape 1', 'Étape 2', 'Étape 3', 'Étape 4'],
        icons: ['compte', undefined as unknown as string, 'check', undefined as unknown as string],
        pendingFromIndex: 3
    },
    parameters: {
        docs: {
            description: {
                story: 'Certaines étapes n\'ont pas d\'icône (`icons[index]` undefined) — elles retombent sur leur numéro.'
            }
        }
    }
};

export const Reverse: Story = {
    args: {
        orientation: 'horizontal',
        reverse: true,
        content: ['Commande passée', 'En préparation', 'Expédiée', 'Livrée'],
        pendingFromIndex: 2
    }
};

export const Small: Story = {
    args: {
        orientation: 'horizontal',
        small: true,
        content: ['Étape 1', 'Étape 2', 'Étape 3'],
        pendingFromIndex: 1
    }
};

export const AllCompleted: Story = {
    args: {
        orientation: 'horizontal',
        content: ['Commande passée', 'En préparation', 'Expédiée', 'Livrée']
        // pendingFromIndex omis : aucune étape "pending" (MAX_INDEX par défaut)
    }
};

export const NothingStarted: Story = {
    args: {
        orientation: 'horizontal',
        content: ['Commande passée', 'En préparation', 'Expédiée', 'Livrée'],
        pendingFromIndex: 0
    },
    parameters: {
        docs: {
            description: { story: '`pendingFromIndex: 0` marque toutes les étapes comme non atteintes.' }
        }
    }
};

/* -------------------------------------------------------------------------- */
/* Usage riche — projection de <lib-timeline-item>                          */
/* -------------------------------------------------------------------------- */

export const ProjectedContent: Story = {
    render: () => ({
        template: `
      <lib-timeline orientation="vertical" [pendingFromIndex]="2">
        <lib-timeline-item icon="compte">
          <strong>Compte créé</strong>
          <p>Votre compte a été créé avec succès le 12 janvier.</p>
        </lib-timeline-item>
        <lib-timeline-item icon="check">
          <strong>Email vérifié</strong>
          <p>Adresse confirmée via le lien envoyé.</p>
        </lib-timeline-item>
        <lib-timeline-item icon="euro">
          <strong>Paiement en attente</strong>
          <p>En attente de confirmation bancaire.</p>
        </lib-timeline-item>
        <lib-timeline-item>
          <strong>Compte activé</strong>
        </lib-timeline-item>
      </lib-timeline>
    `
    }),
    parameters: {
        docs: {
            description: {
                story:
                    '`<lib-timeline-item>` permet du contenu riche (HTML, pas juste du texte), ' +
                    'chaque item pouvant avoir sa propre icône.'
            }
        }
    }
};

export const ProjectedContentHorizontal: Story = {
    render: () => ({
        template: `
      <lib-timeline orientation="horizontal" [pendingFromIndex]="1">
        <lib-timeline-item icon="document">Devis envoyé</lib-timeline-item>
        <lib-timeline-item icon="check">Devis accepté</lib-timeline-item>
        <lib-timeline-item icon="calendrier">Intervention planifiée</lib-timeline-item>
      </lib-timeline>
    `
    })
};