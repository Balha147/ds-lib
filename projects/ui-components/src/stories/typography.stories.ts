import { Meta, StoryObj } from '@storybook/angular-vite';

const meta: Meta = {
  title: 'Foundation/Typography',
  parameters: {
    docs: {
      description: {
        component: `
Le système de typographie repose sur la police **Poppins** avec deux graisses (\`regular\` et \`bold\`) 
et une échelle de tailles allant de **1 (42px)** à **8 (12px)**.

### Classes utilitaires disponibles :
* **Font Family :** \`.lib-ff-regular\`, \`.lib-ff-bold\`
* **Font Size :** \`.lib-fs-1\` à \`.lib-fs-8\`
`
      }
    }
  }
};

export default meta;

type Story = StoryObj;

// 1. Story principale : Aperçu de l'échelle des tailles (Font Sizes)
export const FontSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div *ngFor="let size of sizes" style="display: flex; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 0.75rem;">
          <span style="width: 140px; font-size: 0.875rem; color: #666; font-family: sans-serif;">
            .lib-fs-{{ size.id }} ({{ size.px }} / {{ size.rem }})
          </span>
          <span [class]="'lib-fs-' + size.id + ' lib-ff-regular'">
            Sphinx noir de jais, observez le boz.
          </span>
        </div>
      </div>
    `,
    props: {
      sizes: [
        { id: 1, px: '42px', rem: '2.625rem' },
        { id: 2, px: '36px', rem: '2.25rem' },
        { id: 3, px: '28px', rem: '1.75rem' },
        { id: 4, px: '22px', rem: '1.375rem' },
        { id: 5, px: '18px', rem: '1.125rem' },
        { id: 6, px: '16px', rem: '1rem' },
        { id: 7, px: '14px', rem: '0.875rem' },
        { id: 8, px: '12px', rem: '0.75rem' }
      ]
    }
  })
};

// 2. Story pour comparer Font Weights (Regular vs Bold)
export const FontWeights: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <span style="display: block; font-size: 0.875rem; color: #666; margin-bottom: 0.5rem;">.lib-ff-regular</span>
          <p class="lib-ff-regular lib-fs-4" style="margin: 0;">
            Poppins Regular — Pack my box with five dozen liquor jugs.
          </p>
        </div>
        <div>
          <span style="display: block; font-size: 0.875rem; color: #666; margin-bottom: 0.5rem;">.lib-ff-bold</span>
          <p class="lib-ff-bold lib-fs-4" style="margin: 0;">
            Poppins Bold — Pack my box with five dozen liquor jugs.
          </p>
        </div>
      </div>
    `
  })
};

// 3. Playground interactif pour tester les classes sur un texte personnalisé
export const InteractivePlayground: Story = {
  argTypes: {
    text: { control: 'text' },
    fontSize: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    fontWeight: {
      control: 'select',
      options: ['regular', 'bold']
    }
  },
  args: {
    text: 'Texte d\'exemple pour tester la typographie',
    fontSize: 4,
    fontWeight: 'regular'
  },
  render: (args) => ({
    props: args,
    template: `
      <div [class]="'lib-fs-' + fontSize + ' lib-ff-' + fontWeight">
        {{ text }}
      </div>
    `
  })
};