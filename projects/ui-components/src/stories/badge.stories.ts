import type { Meta, StoryObj } from '@storybook/angular-vite';
import { fn } from 'storybook/test';

import './badge.stories.scss';

import {
    Badge,
    LibBadgeAppearance,
    LibBadgeSize,
} from '@ds-design-system/ui-components/badge';

/* -------------------------------------------------------------------------- */
/* Design System palette                                                       */
/* -------------------------------------------------------------------------- */

const COLORS = [
    // Primary
    'corail_lib_brand',
    'corail_lib_dark',

    // Secondary
    'gris_sable_light',
    'gris_sable_dark',
    'jaune_ivoire_light',
    'jaune_ivoire_dark',
    'jaune_light',
    'jaune_dark',
    'orange',
    'orange_dark',
    'orange_hover',
    'vert_light',
    'vert_dark',
    'bleu_turquoise_light',
    'bleu_turquoise_middle',
    'bleu_turquoise_dark',
    'bleu_light',
    'bleu_dark',
    'bleu_klein_light',
    'bleu_klein_dark',
    'bleu_klein_dark_a',
    'violet_light',
    'violet_dark',
    'mauve',
    'rose_light',
    'rose_dark',
    'rose_fushia',
    'rouge_framboise',
    'rose_chair_light',
    'rose_chair_dark',

    // Interface
    'vert_positif',
    'rouge_negatif',
    'bleu_texte',
    'alerte_vert_positif',
    'alerte_rouge_negatif',
    'alerte_bleu_information',
    'alerte_jaune_attention',

    // Neutral
    'blanc',
    'noir',
    'gris_light',
    'gris_dark',
    'gris_background',
    'beige_sable',

    // Accessibility
    'corail_lib_brand_a',
    'corail_lib_dark_a',
    'orange_a',
    'orange_dark_a',
    'vert_dark_a',
    'bleu_turquoise_middle_a',
    'bleu_turquoise_dark_a',
    'bleu_light_a',
    'bleu_klein_light_a',
    'violet_light_a',
    'rose_dark_a',
    'rose_fushia_a',
    'rouge_framboise_a',
    'rose_chair_dark_a',
    'violet_dark_a',
    'vert_positif_a',
    'rouge_negatif_a',
    'bleu_texte_a',
    'gris_dark_a',
] as const;

type PaletteColor = (typeof COLORS)[number];

const LIGHT_COLORS = new Set<PaletteColor>([
    'gris_sable_light',
    'gris_sable_dark',
    'jaune_ivoire_light',
    'jaune_ivoire_dark',
    'jaune_light',
    'mauve',
    'rose_light',
    'rose_chair_light',
    'alerte_vert_positif',
    'alerte_rouge_negatif',
    'alerte_bleu_information',
    'alerte_jaune_attention',
    'blanc',
    'gris_light',
    'gris_background',
    'orange_a',
    'rose_chair_dark_a',
]);

const getTextColorClass = (color: PaletteColor): string =>
    LIGHT_COLORS.has(color) ? 'color-noir' : 'color-blanc';

const BOOTSTRAP_VARIANTS = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
] as const;

type BootstrapVariant = (typeof BOOTSTRAP_VARIANTS)[number];

interface BadgeStoryArgs {
    label: string;
    appearance: LibBadgeAppearance;
    size: LibBadgeSize;
    icon?: string;
    removable: boolean;
    removeLabel: string;
    disabled: boolean;
    customClass: string;
}

const meta: Meta<BadgeStoryArgs> = {
    title: 'Components/Badge',

    component: Badge,

    tags: ['autodocs'],

    parameters: {
        layout: 'padded',

        docs: {
            description: {
                component: `
The **Badge** component is used to display short pieces of contextual
information such as statuses, categories, labels, tags or metadata.

The Design System Badge provides a lightweight API based on Angular Signals
and supports:

- three visual appearances: **soft**, **solid** and **outline**;
- three sizes: **sm**, **md** and **lg**;
- optional leading icons;
- removable badges;
- disabled state;
- accessible remove labels;
- custom Design System colors;
- complete integration with the Design System utility classes.

---

## Design System Badge

The recommended approach when building a Design System interface is to use
the \`lib-badge\` component.

\`\`\`html
<lib-badge
  label="Active"
  appearance="solid"
/>
\`\`\`

The component provides a consistent API and behavior across applications.

---

## Bootstrap Badge

Bootstrap is also available in the project.

For Bootstrap-specific styling, badges can be created directly using the
Bootstrap \`.badge\` and \`.text-bg-*\` utility classes.

\`\`\`html
<span class="badge text-bg-primary">
  Primary
</span>

<span class="badge text-bg-success">
  Success
</span>

<span class="badge text-bg-danger">
  Danger
</span>
\`\`\`

The Bootstrap implementation is intentionally documented separately from
the Design System \`lib-badge\` component.

---

## When to use which implementation?

### Use \`lib-badge\`

Use the Design System Badge when you need:

- Design System colors;
- Design System appearances;
- consistent component behavior;
- icons;
- removable badges;
- disabled state;
- accessible remove actions;
- a reusable Angular component API.

Example:

\`\`\`html
<lib-badge
  label="Validated"
  appearance="solid"
  customClass="bg-vert_positif color-blanc"
/>
\`\`\`

### Use Bootstrap badges

Use Bootstrap utilities when you specifically need Bootstrap styling or
when working with existing Bootstrap markup.

Example:

\`\`\`html
<span class="badge text-bg-success">
  Success
</span>
\`\`\`

The two approaches are intentionally kept separate.

---

## Appearances

The Design System Badge supports three appearances.

### Soft

Subtle visual emphasis, recommended for secondary information.

\`\`\`html
<lib-badge
  label="Angular"
  appearance="soft"
/>
\`\`\`

### Solid

Strong visual emphasis with a filled background.

\`\`\`html
<lib-badge
  label="Active"
  appearance="solid"
/>
\`\`\`

### Outline

Transparent background with a visible border.

\`\`\`html
<lib-badge
  label="Category"
  appearance="outline"
/>
\`\`\`

---

## Sizes

Three sizes are available:

| Size | Usage |
|------|-------|
| \`sm\` | Compact interfaces and dense lists |
| \`md\` | Default size |
| \`lg\` | Prominent labels and larger UI elements |

Example:

\`\`\`html
<lib-badge label="Small" size="sm" />
<lib-badge label="Medium" size="md" />
<lib-badge label="Large" size="lg" />
\`\`\`

---

## Custom colors

The Badge does not expose a TypeScript color enum.

Instead, colors can be provided through the \`customClass\` input.

This keeps the Badge API independent from the Design System palette.

Example:

\`\`\`html
<lib-badge
  label="Primary"
  appearance="solid"
  customClass="bg-corail_lib_brand color-blanc"
/>
\`\`\`

Available utility conventions include:

- \`bg-{color}\`
- \`color-{color}\`
- \`border-{color}\`

Examples:

\`\`\`html
<lib-badge
  label="Success"
  appearance="solid"
  customClass="bg-vert_positif color-blanc"
/>

<lib-badge
  label="Warning"
  appearance="solid"
  customClass="bg-jaune_dark color-noir"
/>

<lib-badge
  label="Information"
  appearance="solid"
  customClass="bg-bleu_light color-blanc"
/>
\`\`\`

---

## Icons

A Badge can display an optional leading icon.

\`\`\`html
<lib-badge
  label="Validated"
  icon="libicon-check"
/>
\`\`\`

Icons provide additional visual context but should not be the only way
to communicate meaning.

---

## Removable badges

Set \`removable\` to \`true\` to display a remove action.

\`\`\`html
<lib-badge
  label="Angular"
  removable
  (removed)="onBadgeRemoved()"
/>
\`\`\`

The accessible label of the remove action can be customized:

\`\`\`html
<lib-badge
  label="Angular"
  removable
  removeLabel="Remove Angular"
  (removed)="onBadgeRemoved()"
/>
\`\`\`

---

## Icon + remove action

Icons and the remove action can be combined.

\`\`\`html
<lib-badge
  label="Validated"
  icon="libicon-check"
  removable
  removeLabel="Remove validated status"
  (removed)="onBadgeRemoved()"
/>
\`\`\`

---

## Disabled state

The disabled state prevents the remove action and visually indicates that
the Badge is unavailable.

\`\`\`html
<lib-badge
  label="Disabled"
  disabled
/>
\`\`\`

For removable badges:

\`\`\`html
<lib-badge
  label="Disabled"
  removable
  disabled
/>
\`\`\`

---

## Accessibility

The Badge should always contain a meaningful textual label.

When the Badge is removable, provide an appropriate \`removeLabel\`.

For example:

\`\`\`html
<lib-badge
  label="JavaScript"
  removable
  removeLabel="Remove JavaScript filter"
/>
\`\`\`

Icons should not replace the textual label.

When using colors to communicate meaning, the text should also communicate
the meaning because color alone is not sufficient for users who cannot
perceive the visual distinction.

---

## Bootstrap accessibility

Bootstrap also recommends that badge meaning should not rely exclusively
on color.

For example:

\`\`\`html
<span class="badge text-bg-danger">
  Error
</span>
\`\`\`

is preferable to using a badge whose only meaning is the red color.

Additional visually-hidden context can be provided when necessary.

---

## Bootstrap variants

The project includes the standard Bootstrap badge variants:

- \`primary\`
- \`secondary\`
- \`success\`
- \`danger\`
- \`warning\`
- \`info\`
- \`light\`
- \`dark\`

Example:

\`\`\`html
<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-secondary">Secondary</span>
<span class="badge text-bg-success">Success</span>
<span class="badge text-bg-danger">Danger</span>
<span class="badge text-bg-warning">Warning</span>
<span class="badge text-bg-info">Info</span>
<span class="badge text-bg-light">Light</span>
<span class="badge text-bg-dark">Dark</span>
\`\`\`

---

## Summary

The Design System provides two complementary approaches:

### Design System

\`\`\`html
<lib-badge
  label="Success"
  appearance="solid"
  customClass="bg-vert_positif color-blanc"
/>
\`\`\`

### Bootstrap

\`\`\`html
<span class="badge text-bg-success">
  Success
</span>
\`\`\`

Use \`lib-badge\` for application components that should follow the Design
System API and use Bootstrap classes directly when Bootstrap styling is
specifically required.
`,
            },
        },
    },

    argTypes: {
        label: {
            control: 'text',

            description:
                'Text displayed inside the Design System Badge.',

            table: {
                category: 'Content',

                type: {
                    summary: 'string',
                },
            },
        },

        appearance: {
            control: 'inline-radio',

            options: [
                'soft',
                'solid',
                'outline',
            ],

            description: `
Visual appearance of the Design System Badge.

- **soft**: subtle background
- **solid**: filled background
- **outline**: transparent background with border
`,

            table: {
                category: 'Appearance',

                type: {
                    summary: 'LibBadgeAppearance',
                },

                defaultValue: {
                    summary: 'soft',
                },
            },
        },

        size: {
            control: 'inline-radio',

            options: [
                'sm',
                'md',
                'lg',
            ],

            description: `
Controls the size of the Design System Badge.

- **sm**: compact
- **md**: default
- **lg**: large
`,

            table: {
                category: 'Appearance',

                type: {
                    summary: 'LibBadgeSize',
                },

                defaultValue: {
                    summary: 'md',
                },
            },
        },

        icon: {
            control: 'text',

            description:
                'Optional leading icon using a registered LibIconName.',

            table: {
                category: 'Content',

                type: {
                    summary: 'LibIconName | undefined',
                },

                defaultValue: {
                    summary: 'undefined',
                },
            },
        },

        removable: {
            control: 'boolean',

            description:
                'Displays a remove button and emits the `removed` event when clicked.',

            table: {
                category: 'Behavior',

                type: {
                    summary: 'boolean',
                },

                defaultValue: {
                    summary: 'false',
                },
            },
        },

        removeLabel: {
            control: 'text',

            description:
                'Accessible label applied to the remove button.',

            table: {
                category: 'Accessibility',

                type: {
                    summary: 'string',
                },

                defaultValue: {
                    summary: 'Remove badge',
                },
            },
        },

        disabled: {
            control: 'boolean',

            description:
                'Disables the Badge and prevents its remove action.',

            table: {
                category: 'Behavior',

                type: {
                    summary: 'boolean',
                },

                defaultValue: {
                    summary: 'false',
                },
            },
        },

        customClass: {
            control: 'text',

            description: `
Additional Design System CSS utility classes.

Examples:

\`bg-corail_lib_brand color-blanc\`

\`bg-vert_positif color-blanc\`

\`bg-jaune_dark color-noir\`

\`border-corail_lib_brand color-corail_lib_brand\`

Bootstrap classes are intentionally not documented as values for this
input. Bootstrap badges have their own dedicated story.
`,

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
        label: 'Badge',
        appearance: 'soft',
        size: 'md',
        icon: undefined,
        removable: false,
        removeLabel: 'Remove badge',
        disabled: false,
        customClass: '',
    },
};

export default meta;

type Story = StoryObj<BadgeStoryArgs>;

export const Palette: Story = {
    name: 'Design System Palette',

    render: (args) => ({
        props: {
            ...args,

            colors: COLORS,

            getTextColorClass,

            removed: fn().mockName('paletteBadgeRemoved'),
        },

        template: `
      <div class="badge-palette">

        <div class="badge-palette__header">
          <h2 class="badge-palette__title">
            Design System Badge palette
          </h2>

          <p class="badge-palette__description">
            Complete visual reference of the Design System color palette.
          </p>
        </div>

        <div class="badge-palette__legend">

          <span class="badge-palette__legend-item">
            <span class="badge-palette__legend-number">
              1
            </span>
            Simple
          </span>

          <span class="badge-palette__legend-item">
            <span class="badge-palette__legend-number">
              2
            </span>
            Icon
          </span>

          <span class="badge-palette__legend-item">
            <span class="badge-palette__legend-number">
              3
            </span>
            Remove
          </span>

          <span class="badge-palette__legend-item">
            <span class="badge-palette__legend-number">
              4
            </span>
            Icon + Remove
          </span>

        </div>

        <div class="badge-palette__table">

          <div class="badge-palette__row badge-palette__row--header">

            <div class="badge-palette__color">
              Color
            </div>

            <div class="badge-palette__variant">
              Simple
            </div>

            <div class="badge-palette__variant">
              Icon
            </div>

            <div class="badge-palette__variant">
              Remove
            </div>

            <div class="badge-palette__variant">
              Icon + Remove
            </div>

          </div>

          @for (color of colors; track color) {

            <div class="badge-palette__row">

              <div class="badge-palette__color">
                <code>
                  {{ color }}
                </code>
              </div>

              <!-- Simple -->
              <div class="badge-palette__variant">

                <lib-badge
                  [label]="label"
                  [appearance]="appearance"
                  [size]="size"
                  [disabled]="disabled"
                  [customClass]="
                    'bg-' + color + ' ' + getTextColorClass(color)
                  "
                />

              </div>

              <!-- Icon -->
              <div class="badge-palette__variant">

                <lib-badge
                  [label]="label"
                  [appearance]="appearance"
                  [size]="size"
                  icon="libicon-check"
                  [disabled]="disabled"
                  [customClass]="
                    'bg-' + color + ' ' + getTextColorClass(color)
                  "
                />

              </div>

              <!-- Remove -->
              <div class="badge-palette__variant">

                <lib-badge
                  [label]="label"
                  [appearance]="appearance"
                  [size]="size"
                  [removable]="true"
                  [removeLabel]="removeLabel"
                  [disabled]="disabled"
                  [customClass]="
                    'bg-' + color + ' ' + getTextColorClass(color)
                  "
                  (removed)="removed()"
                />

              </div>

              <!-- Icon + Remove -->
              <div class="badge-palette__variant">

                <lib-badge
                  [label]="label"
                  [appearance]="appearance"
                  [size]="size"
                  icon="libicon-check"
                  [removable]="true"
                  [removeLabel]="removeLabel"
                  [disabled]="disabled"
                  [customClass]="
                    'bg-' + color + ' ' + getTextColorClass(color)
                  "
                  (removed)="removed()"
                />

              </div>

            </div>

          }

        </div>

      </div>
    `,
    }),

    parameters: {
        docs: {
            description: {
                story: `
Complete visual reference of the Design System Badge using all available
palette colors.

The palette demonstrates the four main configurations:

1. Simple
2. Icon
3. Remove
4. Icon + Remove
`,
            },
        },
    },
};

export const Bootstrap: Story = {
    name: 'Bootstrap',

    render: () => ({
        props: {
            variants: BOOTSTRAP_VARIANTS satisfies readonly BootstrapVariant[],
        },

        template: `
      <div class="badge-bootstrap">

        <div class="badge-bootstrap__header">

          <h2 class="badge-bootstrap__title">
            Bootstrap badges
          </h2>

          <p class="badge-bootstrap__description">
            Bootstrap badge variants available in the application.
          </p>

        </div>

        <div class="badge-bootstrap__grid">

          @for (variant of variants; track variant) {

            <div class="badge-bootstrap__item">

              <span
                class="badge text-bg-{{ variant }}"
              >
                {{ variant }}
              </span>

              <code>
                .badge.text-bg-{{ variant }}
              </code>

            </div>

          }

        </div>

      </div>
    `,
    }),

    parameters: {
        docs: {
            description: {
                story: `
Demonstrates the Bootstrap Badge variants available in the application.

Bootstrap provides the following \`text-bg-*\` variants:

- primary
- secondary
- success
- danger
- warning
- info
- light
- dark

This story intentionally uses Bootstrap classes directly instead of
\`lib-badge\`.

For Design System components, use the \`lib-badge\` stories instead.
`,
            },
        },
    },
};

export const BootstrapPills: Story = {
    name: 'Bootstrap Pills',

    render: () => ({
        props: {
            variants: BOOTSTRAP_VARIANTS satisfies readonly BootstrapVariant[],
        },

        template: `
      <div class="badge-bootstrap">

        <div class="badge-bootstrap__header">

          <h2 class="badge-bootstrap__title">
            Bootstrap pill badges
          </h2>

          <p class="badge-bootstrap__description">
            Bootstrap badges using the rounded-pill utility.
          </p>

        </div>

        <div class="badge-bootstrap__grid">

          @for (variant of variants; track variant) {

            <div class="badge-bootstrap__item">

              <span
                class="badge rounded-pill text-bg-{{ variant }}"
              >
                {{ variant }}
              </span>

              <code>
                .badge.rounded-pill.text-bg-{{ variant }}
              </code>

            </div>

          }

        </div>

      </div>
    `,
    }),

    parameters: {
        docs: {
            description: {
                story: `
Bootstrap also supports pill-shaped badges using the \`rounded-pill\`
utility.

Example:

\`\`\`html
<span class="badge rounded-pill text-bg-primary">
  Primary
</span>
\`\`\`
`,
            },
        },
    },
};
