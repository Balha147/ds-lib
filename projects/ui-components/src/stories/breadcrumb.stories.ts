import type { Meta, StoryObj } from '@storybook/angular-vite';
import { fn } from 'storybook/test';

import {
    Breadcrumb,
    LibBreadcrumbItem,
    LibBreadcrumbSeparator,
    LibBreadcrumbSize,
} from '@ds-design-system/ui-components/breadcrumb';

const meta: Meta<Breadcrumb> = {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,

    tags: ['autodocs'],

    parameters: {
        layout: 'padded',

        docs: {
            description: {
                component: `
# Breadcrumb

The **Breadcrumb** component provides hierarchical navigation that helps
users understand their current location within an application or website.

It is especially useful for interfaces with multiple navigation levels,
such as:

- product catalogues;
- administration interfaces;
- account management;
- documentation websites;
- e-commerce navigation;
- nested application views.

The component is built with Angular Signals and supports:

- navigation links;
- current page indication;
- disabled items;
- leading icons;
- configurable separators;
- custom separators;
- small, medium and large sizes;
- optional home icon;
- collapsed navigation for long paths;
- long label truncation;
- accessible navigation labels;
- item click events.

---

## Basic usage

A Breadcrumb is configured through the \`items\` input.

Each item can contain a label and an optional URL.

The last item generally represents the current page and should use
\`current: true\`.

\`\`\`ts
const items = [
  {
    label: 'Accueil',
    url: '/',
  },
  {
    label: 'Produits',
    url: '/products',
  },
  {
    label: 'Ordinateurs',
    current: true,
  },
];
\`\`\`

The corresponding component can then be configured as:

\`\`\`html
<lib-breadcrumb
  [items]="items"
/>
\`\`\`

---

## Navigation hierarchy

A breadcrumb should represent the user's position in a hierarchy.

For example:

\`\`\`
Accueil > Produits > Ordinateurs
\`\`\`

In this example:

- **Accueil** links to the home page;
- **Produits** links to the products section;
- **Ordinateurs** represents the current page.

The current page should normally not navigate to another location.

---

## Separators

The Breadcrumb supports several separator styles:

| Separator | Description |
|-----------|-------------|
| \`chevron\` | Chevron separator |
| \`slash\` | Slash separator |
| \`dot\` | Dot separator |
| \`custom\` | User-defined separator |

### Chevron

\`\`\`html
<lib-breadcrumb
  [items]="items"
  separator="chevron"
/>
\`\`\`

### Slash

\`\`\`html
<lib-breadcrumb
  [items]="items"
  separator="slash"
/>
\`\`\`

### Dot

\`\`\`html
<lib-breadcrumb
  [items]="items"
  separator="dot"
/>
\`\`\`

### Custom separator

When \`separator="custom"\`, the \`customSeparator\` input defines the
separator displayed between items.

\`\`\`html
<lib-breadcrumb
  [items]="items"
  separator="custom"
  customSeparator="→"
/>
\`\`\`

---

## Sizes

Three sizes are available:

| Size | Usage |
|------|-------|
| \`sm\` | Compact interfaces and dense layouts |
| \`md\` | Default size for most interfaces |
| \`lg\` | Larger and more prominent navigation |

Example:

\`\`\`html
<lib-breadcrumb
  [items]="items"
  size="sm"
/>

<lib-breadcrumb
  [items]="items"
  size="md"
/>

<lib-breadcrumb
  [items]="items"
  size="lg"
/>
\`\`\`

---

## Icons

Breadcrumb items can optionally display a leading icon.

Each item can define its own icon through the \`icon\` property.

\`\`\`ts
const items = [
  {
    label: 'Accueil',
    url: '/',
    icon: 'libicon-ampoule',
  },
  {
    label: 'Produits',
    url: '/products',
    icon: 'libicon-Cercle-play',
  },
  {
    label: 'Ordinateurs',
    current: true,
    icon: 'libicon-afficher',
  },
];
\`\`\`

This allows the breadcrumb to provide additional visual context while
keeping the textual label available for accessibility.

---

## Home icon

The first breadcrumb item can display a dedicated home icon.

Enable it with \`showHomeIcon\` and configure the icon with \`homeIcon\`.

\`\`\`html
<lib-breadcrumb
  [items]="items"
  showHomeIcon
  homeIcon="libicon-ampoule"
/>
\`\`\`

The home icon is applied to the first breadcrumb item.

If the first item already defines an icon, the component's behavior should
be considered according to the component API and design-system conventions.

---

## Current page

The current page can be identified with \`current: true\`.

\`\`\`ts
const items = [
  {
    label: 'Accueil',
    url: '/',
  },
  {
    label: 'Mon compte',
    url: '/account',
  },
  {
    label: 'Paramètres',
    current: true,
  },
];
\`\`\`

The current item provides the user with a clear indication of their
location in the navigation hierarchy.

---

## Disabled items

An individual breadcrumb item can be disabled using \`disabled: true\`.

\`\`\`ts
const items = [
  {
    label: 'Accueil',
    url: '/',
  },
  {
    label: 'Produits',
    url: '/products',
  },
  {
    label: 'Administration',
    disabled: true,
  },
  {
    label: 'Utilisateurs',
    current: true,
  },
];
\`\`\`

Disabled items should be used sparingly and only when the corresponding
navigation level is intentionally unavailable.

---

## Collapsed navigation

Long breadcrumb paths can become difficult to display on smaller screens.

The \`maxVisibleItems\` input can be used to limit the number of visible
items.

For example:

\`\`\`html
<lib-breadcrumb
  [items]="items"
  [maxVisibleItems]="4"
/>
\`\`\`

When the number of items exceeds the configured maximum, intermediate
items can be collapsed while keeping the beginning and end of the
navigation path visible.

This is particularly useful for:

- deeply nested catalogues;
- administration interfaces;
- file browsers;
- documentation navigation;
- responsive layouts.

---

## Long labels

Breadcrumb labels can contain long text.

The component supports displaying long labels while preserving the
navigation structure.

Example:

\`\`\`ts
const items = [
  {
    label: 'Accueil',
    url: '/',
  },
  {
    label: 'Catalogue des produits disponibles',
    url: '/catalogue',
  },
  {
    label: 'Ordinateurs portables professionnels',
    url: '/catalogue/laptops',
  },
  {
    label: 'MacBook Pro 16 pouces avec puce Apple Silicon',
    current: true,
  },
];
\`\`\`

Long labels should remain meaningful and descriptive while the visual
presentation can truncate them when necessary.

When labels are truncated, the complete value should remain available
through the component's accessible or native tooltip behavior.

---

## Custom accessibility label

The breadcrumb navigation can be given a custom accessible label using
\`ariaLabel\`.

The default value is:

\`\`\`
Breadcrumb
\`\`\`

For French applications, for example:

\`\`\`html
<lib-breadcrumb
  [items]="items"
  ariaLabel="Fil d’Ariane de navigation"
/>
\`\`\`

A meaningful navigation label is recommended when a page contains
multiple navigation regions.

---

## Item click event

The component exposes an \`itemClick\` output when a breadcrumb item is
clicked.

A consumer can listen to the event:

\`\`\`html
<lib-breadcrumb
  [items]="items"
  (itemClick)="onItemClick($event)"
/>
\`\`\`

The emitted value can be used by an application to implement custom
navigation behavior, analytics or other application-specific logic.

When normal URL navigation is sufficient, prefer using the item's
configured URL instead of adding unnecessary custom click handling.

---

## Responsive behavior

Breadcrumbs should remain usable on smaller screens.

For long navigation paths, use \`maxVisibleItems\` to reduce the number
of visible levels.

For example:

\`\`\`html
<lib-breadcrumb
  [items]="items"
  [maxVisibleItems]="4"
/>
\`\`\`

The collapsed variant is preferable to allowing a very long breadcrumb
to overflow the available viewport.

---

## Accessibility

Breadcrumb navigation should provide a clear representation of the
user's current location.

Recommended practices:

- use meaningful labels;
- identify the current page;
- provide a meaningful \`ariaLabel\` when necessary;
- avoid using icons as the only source of information;
- ensure disabled states remain understandable;
- avoid excessive breadcrumb depth when possible;
- keep navigation labels concise and descriptive.

The breadcrumb should complement the application's primary navigation,
not replace it.

---

## API overview

| Input / Output | Type | Description |
|----------------|------|-------------|
| \`items\` | \`readonly LibBreadcrumbItem[]\` | Breadcrumb navigation items |
| \`separator\` | \`LibBreadcrumbSeparator\` | Separator style |
| \`customSeparator\` | \`string\` | Custom separator |
| \`size\` | \`LibBreadcrumbSize\` | Breadcrumb size |
| \`maxVisibleItems\` | \`number \\| null\` | Maximum visible items before collapsing |
| \`showHomeIcon\` | \`boolean\` | Enables the home icon |
| \`homeIcon\` | \`string\` | Icon used for the home item |
| \`ariaLabel\` | \`string\` | Accessible navigation label |
| \`itemClick\` | \`output\` | Emitted when an item is clicked |

---

## Design recommendations

Use Breadcrumb when the page belongs to a clear hierarchical structure.

Avoid using Breadcrumb:

- for flat navigation;
- as the only navigation mechanism;
- when the hierarchy contains only one level;
- when the navigation path changes too frequently to remain meaningful.

A good breadcrumb should answer:

> "Where am I in the application, and how can I go back to a higher level?"
`,
            },
        },
    },

    argTypes: {
        items: {
            control: 'object',
            description: `
Breadcrumb navigation items.

Each item can define:

- \`label\`: visible text;
- \`url\`: navigation target;
- \`icon\`: optional leading icon;
- \`current\`: identifies the current page;
- \`disabled\`: disables the item.
`,
            table: {
                category: 'Content',
                type: {
                    summary: 'readonly LibBreadcrumbItem[]',
                },
            },
        },

        separator: {
            control: 'select',
            options: [
                'slash',
                'chevron',
                'dot',
                'custom',
            ] satisfies LibBreadcrumbSeparator[],
            description: `
Separator displayed between breadcrumb items.

- **chevron**: directional hierarchy
- **slash**: compact and familiar
- **dot**: subtle separation
- **custom**: custom separator provided through \`customSeparator\`
`,
            table: {
                category: 'Appearance',
                type: {
                    summary: 'LibBreadcrumbSeparator',
                },
                defaultValue: {
                    summary: 'chevron',
                },
            },
        },

        customSeparator: {
            control: 'text',
            description:
                'Custom separator displayed when `separator` is set to `custom`.',
            table: {
                category: 'Appearance',
                type: {
                    summary: 'string',
                },
            },
        },

        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'] satisfies LibBreadcrumbSize[],
            description: `
Controls the visual size of the Breadcrumb.

- **sm**: compact
- **md**: default
- **lg**: large
`,
            table: {
                category: 'Appearance',
                type: {
                    summary: 'LibBreadcrumbSize',
                },
                defaultValue: {
                    summary: 'md',
                },
            },
        },

        maxVisibleItems: {
            control: {
                type: 'number',
                min: 2,
                step: 1,
            },
            description:
                'Maximum number of visible breadcrumb items before intermediate items are collapsed.',
            table: {
                category: 'Behavior',
                type: {
                    summary: 'number | null',
                },
                defaultValue: {
                    summary: 'null',
                },
            },
        },

        showHomeIcon: {
            control: 'boolean',
            description:
                'Displays the configured home icon on the first breadcrumb item.',
            table: {
                category: 'Appearance',
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },

        homeIcon: {
            control: 'text',
            description:
                'Icon name used for the home item when `showHomeIcon` is enabled.',
            table: {
                category: 'Appearance',
                type: {
                    summary: 'LibIconName',
                },
            },
        },

        ariaLabel: {
            control: 'text',
            description:
                'Accessible label applied to the breadcrumb navigation.',
            table: {
                category: 'Accessibility',
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'Breadcrumb',
                },
            },
        },

        itemClick: {
            action: 'itemClick',
            description:
                'Emitted when a breadcrumb item is clicked.',
            table: {
                category: 'Events',
                type: {
                    summary: 'Output',
                },
            },
        },
    },
};

export default meta;

type Story = StoryObj<Breadcrumb>;

const basicItems: readonly LibBreadcrumbItem[] = [
    {
        label: 'Accueil',
        url: '/',
    },
    {
        label: 'Produits',
        url: '/products',
    },
    {
        label: 'Ordinateurs',
        current: true,
    },
];

const homeItems: readonly LibBreadcrumbItem[] = [
    {
        label: 'Accueil',
        url: '/',
    },
    {
        label: 'Produits',
        url: '/products',
    },
    {
        label: 'Ordinateurs',
        current: true,
    },
];

const longItems: readonly LibBreadcrumbItem[] = [
    {
        label: 'Accueil',
        url: '/',
    },
    {
        label: 'Catalogue',
        url: '/catalogue',
    },
    {
        label: 'Électronique',
        url: '/catalogue/electronics',
    },
    {
        label: 'Informatique',
        url: '/catalogue/electronics/computers',
    },
    {
        label: 'Ordinateurs portables',
        url: '/catalogue/electronics/computers/laptops',
    },
    {
        label: 'MacBook Pro',
        current: true,
    },
];

/* -------------------------------------------------------------------------- */
/* Basic                                                                       */
/* -------------------------------------------------------------------------- */

export const Default: Story = {
    name: 'Default',

    args: {
        items: basicItems,
        separator: 'chevron',
        size: 'md',
        showHomeIcon: false,
        maxVisibleItems: null,
    },

    parameters: {
        docs: {
            description: {
                story: `
Default Breadcrumb configuration using the chevron separator and medium
size.

The last item represents the current page.
`,
            },
        },
    },
};

/* -------------------------------------------------------------------------- */
/* Home                                                                        */
/* -------------------------------------------------------------------------- */

export const WithHomeIcon: Story = {
    name: 'With Home Icon',

    args: {
        items: homeItems,
        separator: 'chevron',
        size: 'md',
        showHomeIcon: true,
        homeIcon: 'libicon-ampoule',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Displays a dedicated home icon on the first breadcrumb item.',
            },
        },
    },
};

/* -------------------------------------------------------------------------- */
/* Separators                                                                  */
/* -------------------------------------------------------------------------- */

export const SlashSeparator: Story = {
    name: 'Slash Separator',

    args: {
        items: basicItems,
        separator: 'slash',
        size: 'md',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Uses a slash character to separate the breadcrumb levels.',
            },
        },
    },
};

export const ChevronSeparator: Story = {
    name: 'Chevron Separator',

    args: {
        items: basicItems,
        separator: 'chevron',
        size: 'md',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Uses a chevron to visually indicate the navigation hierarchy.',
            },
        },
    },
};

export const DotSeparator: Story = {
    name: 'Dot Separator',

    args: {
        items: basicItems,
        separator: 'dot',
        size: 'md',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Uses a dot as a subtle separator between navigation levels.',
            },
        },
    },
};

export const CustomSeparator: Story = {
    name: 'Custom Separator',

    args: {
        items: basicItems,
        separator: 'custom',
        customSeparator: '→',
        size: 'md',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Demonstrates a custom separator using the `customSeparator` input.',
            },
        },
    },
};

/* -------------------------------------------------------------------------- */
/* Sizes                                                                       */
/* -------------------------------------------------------------------------- */

export const Small: Story = {
    name: 'Small',

    args: {
        items: basicItems,
        separator: 'chevron',
        size: 'sm',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Small Breadcrumb suitable for compact interfaces and dense layouts.',
            },
        },
    },
};

export const Medium: Story = {
    name: 'Medium',

    args: {
        items: basicItems,
        separator: 'chevron',
        size: 'md',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Medium Breadcrumb, recommended as the default size.',
            },
        },
    },
};

export const Large: Story = {
    name: 'Large',

    args: {
        items: basicItems,
        separator: 'chevron',
        size: 'lg',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Large Breadcrumb for prominent navigation areas.',
            },
        },
    },
};

/* -------------------------------------------------------------------------- */
/* Icons                                                                       */
/* -------------------------------------------------------------------------- */

export const WithIcons: Story = {
    name: 'With Icons',

    args: {
        items: [
            {
                label: 'Accueil',
                url: '/',
                icon: 'libicon-ampoule',
            },
            {
                label: 'Produits',
                url: '/products',
                icon: 'libicon-Cercle-play',
            },
            {
                label: 'Ordinateurs',
                current: true,
                icon: 'libicon-afficher',
            },
        ],
        separator: 'chevron',
        size: 'md',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Each breadcrumb item can display an optional leading icon.',
            },
        },
    },
};

export const HomeAndIcons: Story = {
    name: 'Home Icon + Item Icons',

    args: {
        items: [
            {
                label: 'Accueil',
                url: '/',
            },
            {
                label: 'Produits',
                url: '/products',
                icon: 'libicon-Cercle-play',
            },
            {
                label: 'Ordinateurs',
                current: true,
                icon: 'libicon-afficher',
            },
        ],
        separator: 'chevron',
        size: 'md',
        showHomeIcon: true,
        homeIcon: 'libicon-ampoule',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Combines a dedicated home icon with icons defined on individual breadcrumb items.',
            },
        },
    },
};

/* -------------------------------------------------------------------------- */
/* States                                                                      */
/* -------------------------------------------------------------------------- */

export const CurrentPage: Story = {
    name: 'Current Page',

    args: {
        items: [
            {
                label: 'Accueil',
                url: '/',
            },
            {
                label: 'Mon compte',
                url: '/account',
            },
            {
                label: 'Paramètres',
                current: true,
            },
        ],
        separator: 'chevron',
        size: 'md',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Demonstrates how the current page is identified using `current: true`.',
            },
        },
    },
};

export const WithDisabledItem: Story = {
    name: 'With Disabled Item',

    args: {
        items: [
            {
                label: 'Accueil',
                url: '/',
            },
            {
                label: 'Produits',
                url: '/products',
            },
            {
                label: 'Administration',
                disabled: true,
            },
            {
                label: 'Utilisateurs',
                current: true,
            },
        ],
        separator: 'chevron',
        size: 'md',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Demonstrates a breadcrumb containing a disabled navigation item.',
            },
        },
    },
};

/* -------------------------------------------------------------------------- */
/* Long / Collapsed                                                            */
/* -------------------------------------------------------------------------- */

export const LongBreadcrumb: Story = {
    name: 'Long Breadcrumb',

    args: {
        items: longItems,
        separator: 'chevron',
        size: 'md',
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Displays a breadcrumb with several navigation levels without collapsing them.',
            },
        },
    },
};

export const Collapsed: Story = {
    name: 'Collapsed',

    args: {
        items: longItems,
        separator: 'chevron',
        size: 'md',
        maxVisibleItems: 4,
    },

    parameters: {
        docs: {
            description: {
                story: `
Limits the number of visible breadcrumb items to four.

Intermediate navigation levels are collapsed to keep the breadcrumb
compact.
`,
            },
        },
    },
};

export const CollapsedWithIcons: Story = {
    name: 'Collapsed with Icons',

    args: {
        items: [
            {
                label: 'Accueil',
                url: '/',
                icon: 'libicon-ampoule',
            },
            {
                label: 'Catalogue',
                url: '/catalogue',
                icon: 'folder',
            },
            {
                label: 'Électronique',
                url: '/catalogue/electronics',
                icon: 'monitor',
            },
            {
                label: 'Informatique',
                url: '/catalogue/electronics/computers',
                icon: 'libicon-altere',
            },
            {
                label: 'Ordinateurs portables',
                url: '/catalogue/electronics/computers/laptops',
                icon: 'libicon-balance-haut',
            },
            {
                label: 'MacBook Pro',
                current: true,
            },
        ],
        separator: 'chevron',
        size: 'md',
        maxVisibleItems: 4,
    },

    parameters: {
        docs: {
            description: {
                story:
                    'Combines item icons with collapsed navigation for a long breadcrumb path.',
            },
        },
    },
};

/* -------------------------------------------------------------------------- */
/* Labels                                                                      */
/* -------------------------------------------------------------------------- */

export const LongLabels: Story = {
    name: 'Long Labels',

    args: {
        items: [
            {
                label: 'Accueil',
                url: '/',
            },
            {
                label: 'Catalogue des produits disponibles',
                url: '/catalogue',
            },
            {
                label: 'Ordinateurs portables professionnels',
                url: '/catalogue/laptops',
            },
            {
                label: 'MacBook Pro 16 pouces avec puce Apple Silicon',
                current: true,
            },
        ],
        separator: 'chevron',
        size: 'md',
    },

    parameters: {
        docs: {
            description: {
                story: `
Demonstrates the Breadcrumb behavior with long navigation labels.

Long labels should remain understandable while the component handles
their visual presentation.
`,
            },
        },
    },
};

export const TruncatedLabels: Story = {
    name: 'Truncated Labels',

    args: {
        items: [
            {
                label: 'Accueil',
                url: '/',
            },
            {
                label:
                    'Catalogue des produits disponibles pour la vente en ligne',
                url: '/catalogue',
            },
            {
                label:
                    'MacBook Pro 16 pouces avec puce Apple Silicon M4 Max',
                current: true,
            },
        ],
        separator: 'chevron',
        size: 'md',
    },

    parameters: {
        docs: {
            description: {
                story: `
Demonstrates the presentation of long labels.

Labels longer than the component's visual limit are truncated with an
ellipsis. Hovering the truncated label exposes the complete label through
the native \`title\` attribute when supported by the component.
`,
            },
        },
    },
};

/* -------------------------------------------------------------------------- */
/* Accessibility                                                               */
/* -------------------------------------------------------------------------- */

export const CustomAriaLabel: Story = {
    name: 'Custom ARIA Label',

    args: {
        items: basicItems,
        separator: 'chevron',
        size: 'md',
        ariaLabel: 'Fil d’Ariane de navigation',
    },

    parameters: {
        docs: {
            description: {
                story: `
Provides a custom accessible name for the breadcrumb navigation.

This is useful when the application uses a language other than English
or when multiple navigation regions require clearer identification.
`,
            },
        },
    },
};

/* -------------------------------------------------------------------------- */
/* Interactive                                                                 */
/* -------------------------------------------------------------------------- */

export const Interactive: Story = {
    name: 'Interactive',

    args: {
        items: [
            {
                label: 'Accueil',
                url: '/',
                icon: 'libicon-ampoule',
            },
            {
                label: 'Dashboard',
                url: '/dashboard',
                icon: 'libicon-Cercle-play',
            },
            {
                label: 'Utilisateurs',
                url: '/users',
                icon: 'libicon-afficher',
            },
            {
                label: 'Hedi',
                current: true,
            },
        ],
        separator: 'chevron',
        size: 'md',
        showHomeIcon: false,
    },

    render: (args: any) => ({
        props: {
            ...args,
            itemClick: fn().mockName('itemClick'),
        },

        template: `
      <lib-breadcrumb
        [items]="items"
        [separator]="separator"
        [customSeparator]="customSeparator"
        [size]="size"
        [maxVisibleItems]="maxVisibleItems"
        [showHomeIcon]="showHomeIcon"
        [homeIcon]="homeIcon"
        [ariaLabel]="ariaLabel"
        (itemClick)="itemClick($event)"
      />
    `,
    }),

    parameters: {
        docs: {
            description: {
                story: `
Interactive breadcrumb demonstrating the \`itemClick\` output.

Clicking a breadcrumb item triggers the Storybook action, allowing the
event payload to be inspected in the Actions panel.
`,
            },
        },
    },
};

export const InteractiveCollapsed: Story = {
    name: 'Interactive + Collapsed',

    args: {
        items: longItems,
        separator: 'chevron',
        size: 'md',
        maxVisibleItems: 4,
    },

    render: (args: any) => ({
        props: {
            ...args,
            itemClick: fn().mockName('itemClick'),
        },

        template: `
      <lib-breadcrumb
        [items]="items"
        [separator]="separator"
        [customSeparator]="customSeparator"
        [size]="size"
        [maxVisibleItems]="maxVisibleItems"
        [showHomeIcon]="showHomeIcon"
        [homeIcon]="homeIcon"
        [ariaLabel]="ariaLabel"
        (itemClick)="itemClick($event)"
      />
    `,
    }),

    parameters: {
        docs: {
            description: {
                story:
                    'Interactive collapsed breadcrumb showing how item navigation behaves in a long hierarchy.',
            },
        },
    },
};
