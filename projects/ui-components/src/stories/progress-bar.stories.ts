import type { Meta, StoryObj } from '@storybook/angular-vite';
import { ProgressBar } from '@ds-design-system/ui-components/progress-bar';
import { LibProgressBar } from '@ds-design-system/ui-components/progress-bar';

const meta: Meta<ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Valeur globale de progression (en %)',
    },
    showLabels: {
      control: 'boolean',
      description: 'Affiche ou masque le pourcentage dans les barres',
    },
    striped: {
      control: 'boolean',
      description: 'Applique un motif hachuré sur la barre',
    },
    animated: {
      control: 'boolean',
      description: 'Anime les hachures (nécessite striped à true)',
    },
    bars: {
      control: 'object',
      description: 'Configuration des sous-barres de progression',
    },
  },
  args: {
    value: 60,
    showLabels: false,
    striped: false,
    animated: true,
    bars: [{ width: 100, type: 'info', ariaLabel: 'Progression de la tâche' }],
  },
};

export default meta;
type Story = StoryObj<ProgressBar>;

/**
 * Cas d'usage par défaut avec une simple barre de progression.
 */
export const Default: Story = {};

/**
 * Variantes de couleurs de fond gérées par le composant (`info`, `success`, `warning`, `danger`).
 */
export const Variants: Story = {
  args: {
    value: 35,
  },

  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <small>Info</small>
          <lib-progress-bar [value]="75" [bars]="[{ width: 100, type: 'info' }]" showLabels />
        </div>
        <div>
          <small>Success</small>
          <lib-progress-bar [value]="100" [bars]="[{ width: 100, type: 'success' }]" showLabels />
        </div>
        <div>
          <small>Warning</small>
          <lib-progress-bar [value]="45" [bars]="[{ width: 100, type: 'warning' }]" showLabels />
        </div>
        <div>
          <small>Danger</small>
          <lib-progress-bar [value]="25" [bars]="[{ width: 100, type: 'danger' }]" showLabels />
        </div>
      </div>
    `,
  }),
};

/**
 * Barre de progression avec affichage explicite des pourcentages.
 */
export const WithLabels: Story = {
  args: {
    value: 85,
    showLabels: true,
  },
};

/**
 * Barre avec style hachuré et animé.
 */
export const StripedAndAnimated: Story = {
  args: {
    value: 50,
    striped: true,
    animated: true,
    bars: [{ width: 100, type: 'success' }],
  },
};

/**
 * Barre de progression empilée (multi-segments) permettant de représenter plusieurs étapes ou états.
 */
export const MultiBars: Story = {
  args: {
    value: 80,
    showLabels: true,
    bars: [
      { width: 25, type: 'success', ariaLabel: 'Étape 1 terminée' },
      { width: 35, type: 'warning', ariaLabel: 'Étape 2 en cours' },
      { width: 40, type: 'danger', ariaLabel: 'Étape 3 restante' },
    ] as LibProgressBar[],
  },
};
