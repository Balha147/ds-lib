import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,In as r,Kn as i,L as a,R as o,Ti as s,U as c,ct as l,et as u,f as d,pt as f,v as p}from"./angular-platform-CkHGXGBq.js";import{i as m,t as h}from"./public-api-CB813VaT.js";var g,_=e((()=>{g=`@if (hasItems()) {
@let visible = visibleItems();
@let collapsed = isCollapsed();

<nav class="lib-breadcrumb lib-breadcrumb--{{ size() }}" [attr.aria-label]="ariaLabel()">
    <ol class="lib-breadcrumb__list">
        @for (
        item of visible;
        track $index;
        let index = $index;
        let isLast = $last
        ) {
        @let current = isCurrentItem(item);
        @let showEllipsisBefore = collapsed && index === 1;

        @if (showEllipsisBefore) {
        <li class="lib-breadcrumb__item">
            <button type="button" class="lib-breadcrumb__ellipsis" [attr.aria-label]="getEllipsisLabel()"
                [attr.title]="getEllipsisLabel()" (click)="onEllipsisClick()">
                <span aria-hidden="true">…</span>
            </button>
        </li>

        <li class="lib-breadcrumb__separator" aria-hidden="true">
            <ng-container [ngTemplateOutlet]="separatorTemplate" />
        </li>
        }

        <li class="lib-breadcrumb__item" [class.lib-breadcrumb__item--current]="current"
            [class.lib-breadcrumb__item--disabled]="item.disabled">
            @if (current) {
            <span class="lib-breadcrumb__current" aria-current="page" [attr.title]="item.label">
                @if (item.icon) {
                <span class="lib-breadcrumb__icon" aria-hidden="true">
                    <lib-icon [name]="item.icon" [size]="getIconSize()" />
                </span>
                } @else if (
                index === 0 && showHomeIcon()
                ) {
                <span class="lib-breadcrumb__icon" aria-hidden="true">
                    <lib-icon [name]="homeIcon()" [size]="getIconSize()" />
                </span>
                }

                <span class="lib-breadcrumb__label">
                    {{ truncateLabel(item.label) }}
                </span>
            </span>
            } @else if (item.disabled) {
            <span class="lib-breadcrumb__disabled" aria-disabled="true" [attr.title]="item.label"
                [attr.aria-label]="item.ariaLabel ?? null">
                @if (item.icon) {
                <span class="lib-breadcrumb__icon" aria-hidden="true">
                    <lib-icon [name]="item.icon" [size]="getIconSize()" />
                </span>
                }

                <span class="lib-breadcrumb__label">
                    {{ truncateLabel(item.label) }}
                </span>
            </span>
            } @else {
            <a class="lib-breadcrumb__link" [href]="item.url ?? null" [attr.aria-label]="item.ariaLabel ?? null"
                [attr.title]="item.label" (click)="
                onItemClick(item);
                item.url
                  ? null
                  : $event.preventDefault()
              ">
                @if (item.icon) {
                <span class="lib-breadcrumb__icon" aria-hidden="true">
                    <lib-icon [name]="item.icon" [size]="getIconSize()" />
                </span>
                } @else if (
                index === 0 && showHomeIcon()
                ) {
                <span class="lib-breadcrumb__icon" aria-hidden="true">
                    <lib-icon [name]="homeIcon()" [size]="getIconSize()" />
                </span>
                }

                <span class="lib-breadcrumb__label">
                    {{ truncateLabel(item.label) }}
                </span>
            </a>
            }
        </li>

        @if (!isLast) {
        <li class="lib-breadcrumb__separator" aria-hidden="true">
            <ng-container [ngTemplateOutlet]="separatorTemplate" />
        </li>
        }
        }
    </ol>
</nav>
}

<ng-template #separatorTemplate>
    @switch (separator()) {
    @case ('slash') {
    <span>/</span>
    }

    @case ('dot') {
    <span>•</span>
    }

    @case ('custom') {
    <span>{{ customSeparator() }}</span>
    }

    @default {
    <span class="lib-breadcrumb__chevron">
        ›
    </span>
    }
    }
</ng-template>`})),v,y,b=e((()=>{t(),_(),a(),d(),h(),v=30,y=class Breadcrumb{items=o([]);separator=o(`chevron`);customSeparator=o(`›`);size=o(`md`);maxVisibleItems=o(null);showHomeIcon=o(!1);homeIcon=o(`libicon-vague`);ariaLabel=o(`Breadcrumb`);itemClick=c();expanded=i(!1);hasItems=n(()=>this.items().length>0);normalizedItems=n(()=>{let e=this.items();return e.length===0?[]:e.some(e=>e.current===!0)?e:e.map((t,n)=>({...t,current:n===e.length-1}))});isCollapsible=n(()=>{let e=this.maxVisibleItems();return e!==null&&e>1&&this.normalizedItems().length>e});isCollapsed=n(()=>this.isCollapsible()&&!this.expanded());hiddenCount=n(()=>{if(!this.isCollapsed())return 0;let e=this.maxVisibleItems();return e===null?0:Math.max(this.normalizedItems().length-e,0)});visibleItems=n(()=>{let e=this.normalizedItems();if(!this.isCollapsed())return e;let t=this.maxVisibleItems();return t===null||t<=1?e.slice(-1):[e[0],...e.slice(-(t-1))]});constructor(){r(()=>{let e=this.items(),t=this.maxVisibleItems();(e.length===0||t===null||t<=1||e.length<=t)&&this.expanded.set(!1)})}isCurrentItem(e){return e.current===!0}onItemClick(e){e.disabled||e.current||this.itemClick.emit(e)}onEllipsisClick(){this.expanded.set(!0)}getEllipsisLabel(){let e=this.hiddenCount();return e===1?`Afficher 1 élément masqué`:`Afficher ${e} éléments masqués`}truncateLabel(e){return e.length>v?`${e.slice(0,v)}…`:e}getIconSize(){switch(this.size()){case`sm`:return`sm`;case`lg`:return`lg`;default:return`md`}}static ctorParameters=()=>[];static propDecorators={items:[{type:l,args:[{isSignal:!0,alias:`items`,required:!1,transform:void 0}]}],separator:[{type:l,args:[{isSignal:!0,alias:`separator`,required:!1,transform:void 0}]}],customSeparator:[{type:l,args:[{isSignal:!0,alias:`customSeparator`,required:!1,transform:void 0}]}],size:[{type:l,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}],maxVisibleItems:[{type:l,args:[{isSignal:!0,alias:`maxVisibleItems`,required:!1,transform:void 0}]}],showHomeIcon:[{type:l,args:[{isSignal:!0,alias:`showHomeIcon`,required:!1,transform:void 0}]}],homeIcon:[{type:l,args:[{isSignal:!0,alias:`homeIcon`,required:!1,transform:void 0}]}],ariaLabel:[{type:l,args:[{isSignal:!0,alias:`ariaLabel`,required:!1,transform:void 0}]}],itemClick:[{type:f,args:[`itemClick`]}]}},y=s([u({selector:`lib-breadcrumb`,imports:[m,p],template:g,host:{class:`lib-breadcrumb-host`}})],y)})),x=e((()=>{})),S=e((()=>{b(),x()})),C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;e((()=>{S(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/Breadcrumb`,component:y,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
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
`}}},argTypes:{items:{control:`object`,description:`
Breadcrumb navigation items.

Each item can define:

- \`label\`: visible text;
- \`url\`: navigation target;
- \`icon\`: optional leading icon;
- \`current\`: identifies the current page;
- \`disabled\`: disables the item.
`,table:{category:`Content`,type:{summary:`readonly LibBreadcrumbItem[]`}}},separator:{control:`select`,options:[`slash`,`chevron`,`dot`,`custom`],description:`
Separator displayed between breadcrumb items.

- **chevron**: directional hierarchy
- **slash**: compact and familiar
- **dot**: subtle separation
- **custom**: custom separator provided through \`customSeparator\`
`,table:{category:`Appearance`,type:{summary:`LibBreadcrumbSeparator`},defaultValue:{summary:`chevron`}}},customSeparator:{control:`text`,description:"Custom separator displayed when `separator` is set to `custom`.",table:{category:`Appearance`,type:{summary:`string`}}},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`
Controls the visual size of the Breadcrumb.

- **sm**: compact
- **md**: default
- **lg**: large
`,table:{category:`Appearance`,type:{summary:`LibBreadcrumbSize`},defaultValue:{summary:`md`}}},maxVisibleItems:{control:{type:`number`,min:2,step:1},description:`Maximum number of visible breadcrumb items before intermediate items are collapsed.`,table:{category:`Behavior`,type:{summary:`number | null`},defaultValue:{summary:`null`}}},showHomeIcon:{control:`boolean`,description:`Displays the configured home icon on the first breadcrumb item.`,table:{category:`Appearance`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},homeIcon:{control:`text`,description:"Icon name used for the home item when `showHomeIcon` is enabled.",table:{category:`Appearance`,type:{summary:`LibIconName`}}},ariaLabel:{control:`text`,description:`Accessible label applied to the breadcrumb navigation.`,table:{category:`Accessibility`,type:{summary:`string`},defaultValue:{summary:`Breadcrumb`}}},itemClick:{action:`itemClick`,description:`Emitted when a breadcrumb item is clicked.`,table:{category:`Events`,type:{summary:`Output`}}}}},T=[{label:`Accueil`,url:`/`},{label:`Produits`,url:`/products`},{label:`Ordinateurs`,current:!0}],E=[{label:`Accueil`,url:`/`},{label:`Produits`,url:`/products`},{label:`Ordinateurs`,current:!0}],D=[{label:`Accueil`,url:`/`},{label:`Catalogue`,url:`/catalogue`},{label:`Électronique`,url:`/catalogue/electronics`},{label:`Informatique`,url:`/catalogue/electronics/computers`},{label:`Ordinateurs portables`,url:`/catalogue/electronics/computers/laptops`},{label:`MacBook Pro`,current:!0}],O={name:`Default`,args:{items:T,separator:`chevron`,size:`md`,showHomeIcon:!1,maxVisibleItems:null},parameters:{docs:{description:{story:`
Default Breadcrumb configuration using the chevron separator and medium
size.

The last item represents the current page.
`}}}},k={name:`With Home Icon`,args:{items:E,separator:`chevron`,size:`md`,showHomeIcon:!0,homeIcon:`libicon-ampoule`},parameters:{docs:{description:{story:`Displays a dedicated home icon on the first breadcrumb item.`}}}},A={name:`Slash Separator`,args:{items:T,separator:`slash`,size:`md`},parameters:{docs:{description:{story:`Uses a slash character to separate the breadcrumb levels.`}}}},j={name:`Chevron Separator`,args:{items:T,separator:`chevron`,size:`md`},parameters:{docs:{description:{story:`Uses a chevron to visually indicate the navigation hierarchy.`}}}},M={name:`Dot Separator`,args:{items:T,separator:`dot`,size:`md`},parameters:{docs:{description:{story:`Uses a dot as a subtle separator between navigation levels.`}}}},N={name:`Custom Separator`,args:{items:T,separator:`custom`,customSeparator:`→`,size:`md`},parameters:{docs:{description:{story:"Demonstrates a custom separator using the `customSeparator` input."}}}},P={name:`Small`,args:{items:T,separator:`chevron`,size:`sm`},parameters:{docs:{description:{story:`Small Breadcrumb suitable for compact interfaces and dense layouts.`}}}},F={name:`Medium`,args:{items:T,separator:`chevron`,size:`md`},parameters:{docs:{description:{story:`Medium Breadcrumb, recommended as the default size.`}}}},I={name:`Large`,args:{items:T,separator:`chevron`,size:`lg`},parameters:{docs:{description:{story:`Large Breadcrumb for prominent navigation areas.`}}}},L={name:`With Icons`,args:{items:[{label:`Accueil`,url:`/`,icon:`libicon-ampoule`},{label:`Produits`,url:`/products`,icon:`libicon-Cercle-play`},{label:`Ordinateurs`,current:!0,icon:`libicon-afficher`}],separator:`chevron`,size:`md`},parameters:{docs:{description:{story:`Each breadcrumb item can display an optional leading icon.`}}}},R={name:`Home Icon + Item Icons`,args:{items:[{label:`Accueil`,url:`/`},{label:`Produits`,url:`/products`,icon:`libicon-Cercle-play`},{label:`Ordinateurs`,current:!0,icon:`libicon-afficher`}],separator:`chevron`,size:`md`,showHomeIcon:!0,homeIcon:`libicon-ampoule`},parameters:{docs:{description:{story:`Combines a dedicated home icon with icons defined on individual breadcrumb items.`}}}},z={name:`Current Page`,args:{items:[{label:`Accueil`,url:`/`},{label:`Mon compte`,url:`/account`},{label:`Paramètres`,current:!0}],separator:`chevron`,size:`md`},parameters:{docs:{description:{story:"Demonstrates how the current page is identified using `current: true`."}}}},B={name:`With Disabled Item`,args:{items:[{label:`Accueil`,url:`/`},{label:`Produits`,url:`/products`},{label:`Administration`,disabled:!0},{label:`Utilisateurs`,current:!0}],separator:`chevron`,size:`md`},parameters:{docs:{description:{story:`Demonstrates a breadcrumb containing a disabled navigation item.`}}}},V={name:`Long Breadcrumb`,args:{items:D,separator:`chevron`,size:`md`},parameters:{docs:{description:{story:`Displays a breadcrumb with several navigation levels without collapsing them.`}}}},H={name:`Collapsed`,args:{items:D,separator:`chevron`,size:`md`,maxVisibleItems:4},parameters:{docs:{description:{story:`
Limits the number of visible breadcrumb items to four.

Intermediate navigation levels are collapsed to keep the breadcrumb
compact.
`}}}},U={name:`Collapsed with Icons`,args:{items:[{label:`Accueil`,url:`/`,icon:`libicon-ampoule`},{label:`Catalogue`,url:`/catalogue`,icon:`folder`},{label:`Électronique`,url:`/catalogue/electronics`,icon:`monitor`},{label:`Informatique`,url:`/catalogue/electronics/computers`,icon:`libicon-altere`},{label:`Ordinateurs portables`,url:`/catalogue/electronics/computers/laptops`,icon:`libicon-balance-haut`},{label:`MacBook Pro`,current:!0}],separator:`chevron`,size:`md`,maxVisibleItems:4},parameters:{docs:{description:{story:`Combines item icons with collapsed navigation for a long breadcrumb path.`}}}},W={name:`Long Labels`,args:{items:[{label:`Accueil`,url:`/`},{label:`Catalogue des produits disponibles`,url:`/catalogue`},{label:`Ordinateurs portables professionnels`,url:`/catalogue/laptops`},{label:`MacBook Pro 16 pouces avec puce Apple Silicon`,current:!0}],separator:`chevron`,size:`md`},parameters:{docs:{description:{story:`
Demonstrates the Breadcrumb behavior with long navigation labels.

Long labels should remain understandable while the component handles
their visual presentation.
`}}}},G={name:`Truncated Labels`,args:{items:[{label:`Accueil`,url:`/`},{label:`Catalogue des produits disponibles pour la vente en ligne`,url:`/catalogue`},{label:`MacBook Pro 16 pouces avec puce Apple Silicon M4 Max`,current:!0}],separator:`chevron`,size:`md`},parameters:{docs:{description:{story:`
Demonstrates the presentation of long labels.

Labels longer than the component's visual limit are truncated with an
ellipsis. Hovering the truncated label exposes the complete label through
the native \`title\` attribute when supported by the component.
`}}}},K={name:`Custom ARIA Label`,args:{items:T,separator:`chevron`,size:`md`,ariaLabel:`Fil d’Ariane de navigation`},parameters:{docs:{description:{story:`
Provides a custom accessible name for the breadcrumb navigation.

This is useful when the application uses a language other than English
or when multiple navigation regions require clearer identification.
`}}}},q={name:`Interactive`,args:{items:[{label:`Accueil`,url:`/`,icon:`libicon-ampoule`},{label:`Dashboard`,url:`/dashboard`,icon:`libicon-Cercle-play`},{label:`Utilisateurs`,url:`/users`,icon:`libicon-afficher`},{label:`Hedi`,current:!0}],separator:`chevron`,size:`md`,showHomeIcon:!1},render:e=>({props:{...e,itemClick:C().mockName(`itemClick`)},template:`
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
    `}),parameters:{docs:{description:{story:`
Interactive breadcrumb demonstrating the \`itemClick\` output.

Clicking a breadcrumb item triggers the Storybook action, allowing the
event payload to be inspected in the Actions panel.
`}}}},J={name:`Interactive + Collapsed`,args:{items:D,separator:`chevron`,size:`md`,maxVisibleItems:4},render:e=>({props:{...e,itemClick:C().mockName(`itemClick`)},template:`
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
    `}),parameters:{docs:{description:{story:`Interactive collapsed breadcrumb showing how item navigation behaves in a long hierarchy.`}}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    items: basicItems,
    separator: 'chevron',
    size: 'md',
    showHomeIcon: false,
    maxVisibleItems: null
  },
  parameters: {
    docs: {
      description: {
        story: \`
Default Breadcrumb configuration using the chevron separator and medium
size.

The last item represents the current page.
\`
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With Home Icon',
  args: {
    items: homeItems,
    separator: 'chevron',
    size: 'md',
    showHomeIcon: true,
    homeIcon: 'libicon-ampoule'
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a dedicated home icon on the first breadcrumb item.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Slash Separator',
  args: {
    items: basicItems,
    separator: 'slash',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Uses a slash character to separate the breadcrumb levels.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Chevron Separator',
  args: {
    items: basicItems,
    separator: 'chevron',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Uses a chevron to visually indicate the navigation hierarchy.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Dot Separator',
  args: {
    items: basicItems,
    separator: 'dot',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Uses a dot as a subtle separator between navigation levels.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Custom Separator',
  args: {
    items: basicItems,
    separator: 'custom',
    customSeparator: '→',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a custom separator using the \`customSeparator\` input.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Small',
  args: {
    items: basicItems,
    separator: 'chevron',
    size: 'sm'
  },
  parameters: {
    docs: {
      description: {
        story: 'Small Breadcrumb suitable for compact interfaces and dense layouts.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Medium',
  args: {
    items: basicItems,
    separator: 'chevron',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium Breadcrumb, recommended as the default size.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Large',
  args: {
    items: basicItems,
    separator: 'chevron',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large Breadcrumb for prominent navigation areas.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'With Icons',
  args: {
    items: [{
      label: 'Accueil',
      url: '/',
      icon: 'libicon-ampoule'
    }, {
      label: 'Produits',
      url: '/products',
      icon: 'libicon-Cercle-play'
    }, {
      label: 'Ordinateurs',
      current: true,
      icon: 'libicon-afficher'
    }],
    separator: 'chevron',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Each breadcrumb item can display an optional leading icon.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Home Icon + Item Icons',
  args: {
    items: [{
      label: 'Accueil',
      url: '/'
    }, {
      label: 'Produits',
      url: '/products',
      icon: 'libicon-Cercle-play'
    }, {
      label: 'Ordinateurs',
      current: true,
      icon: 'libicon-afficher'
    }],
    separator: 'chevron',
    size: 'md',
    showHomeIcon: true,
    homeIcon: 'libicon-ampoule'
  },
  parameters: {
    docs: {
      description: {
        story: 'Combines a dedicated home icon with icons defined on individual breadcrumb items.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Current Page',
  args: {
    items: [{
      label: 'Accueil',
      url: '/'
    }, {
      label: 'Mon compte',
      url: '/account'
    }, {
      label: 'Paramètres',
      current: true
    }],
    separator: 'chevron',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how the current page is identified using \`current: true\`.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled Item',
  args: {
    items: [{
      label: 'Accueil',
      url: '/'
    }, {
      label: 'Produits',
      url: '/products'
    }, {
      label: 'Administration',
      disabled: true
    }, {
      label: 'Utilisateurs',
      current: true
    }],
    separator: 'chevron',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a breadcrumb containing a disabled navigation item.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Long Breadcrumb',
  args: {
    items: longItems,
    separator: 'chevron',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a breadcrumb with several navigation levels without collapsing them.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Collapsed',
  args: {
    items: longItems,
    separator: 'chevron',
    size: 'md',
    maxVisibleItems: 4
  },
  parameters: {
    docs: {
      description: {
        story: \`
Limits the number of visible breadcrumb items to four.

Intermediate navigation levels are collapsed to keep the breadcrumb
compact.
\`
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Collapsed with Icons',
  args: {
    items: [{
      label: 'Accueil',
      url: '/',
      icon: 'libicon-ampoule'
    }, {
      label: 'Catalogue',
      url: '/catalogue',
      icon: 'folder'
    }, {
      label: 'Électronique',
      url: '/catalogue/electronics',
      icon: 'monitor'
    }, {
      label: 'Informatique',
      url: '/catalogue/electronics/computers',
      icon: 'libicon-altere'
    }, {
      label: 'Ordinateurs portables',
      url: '/catalogue/electronics/computers/laptops',
      icon: 'libicon-balance-haut'
    }, {
      label: 'MacBook Pro',
      current: true
    }],
    separator: 'chevron',
    size: 'md',
    maxVisibleItems: 4
  },
  parameters: {
    docs: {
      description: {
        story: 'Combines item icons with collapsed navigation for a long breadcrumb path.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Long Labels',
  args: {
    items: [{
      label: 'Accueil',
      url: '/'
    }, {
      label: 'Catalogue des produits disponibles',
      url: '/catalogue'
    }, {
      label: 'Ordinateurs portables professionnels',
      url: '/catalogue/laptops'
    }, {
      label: 'MacBook Pro 16 pouces avec puce Apple Silicon',
      current: true
    }],
    separator: 'chevron',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates the Breadcrumb behavior with long navigation labels.

Long labels should remain understandable while the component handles
their visual presentation.
\`
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Truncated Labels',
  args: {
    items: [{
      label: 'Accueil',
      url: '/'
    }, {
      label: 'Catalogue des produits disponibles pour la vente en ligne',
      url: '/catalogue'
    }, {
      label: 'MacBook Pro 16 pouces avec puce Apple Silicon M4 Max',
      current: true
    }],
    separator: 'chevron',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates the presentation of long labels.

Labels longer than the component's visual limit are truncated with an
ellipsis. Hovering the truncated label exposes the complete label through
the native \\\`title\\\` attribute when supported by the component.
\`
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Custom ARIA Label',
  args: {
    items: basicItems,
    separator: 'chevron',
    size: 'md',
    ariaLabel: 'Fil d’Ariane de navigation'
  },
  parameters: {
    docs: {
      description: {
        story: \`
Provides a custom accessible name for the breadcrumb navigation.

This is useful when the application uses a language other than English
or when multiple navigation regions require clearer identification.
\`
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Interactive',
  args: {
    items: [{
      label: 'Accueil',
      url: '/',
      icon: 'libicon-ampoule'
    }, {
      label: 'Dashboard',
      url: '/dashboard',
      icon: 'libicon-Cercle-play'
    }, {
      label: 'Utilisateurs',
      url: '/users',
      icon: 'libicon-afficher'
    }, {
      label: 'Hedi',
      current: true
    }],
    separator: 'chevron',
    size: 'md',
    showHomeIcon: false
  },
  render: (args: any) => ({
    props: {
      ...args,
      itemClick: fn().mockName('itemClick')
    },
    template: \`
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
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Interactive breadcrumb demonstrating the \\\`itemClick\\\` output.

Clicking a breadcrumb item triggers the Storybook action, allowing the
event payload to be inspected in the Actions panel.
\`
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Interactive + Collapsed',
  args: {
    items: longItems,
    separator: 'chevron',
    size: 'md',
    maxVisibleItems: 4
  },
  render: (args: any) => ({
    props: {
      ...args,
      itemClick: fn().mockName('itemClick')
    },
    template: \`
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
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive collapsed breadcrumb showing how item navigation behaves in a long hierarchy.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`WithHomeIcon`,`SlashSeparator`,`ChevronSeparator`,`DotSeparator`,`CustomSeparator`,`Small`,`Medium`,`Large`,`WithIcons`,`HomeAndIcons`,`CurrentPage`,`WithDisabledItem`,`LongBreadcrumb`,`Collapsed`,`CollapsedWithIcons`,`LongLabels`,`TruncatedLabels`,`CustomAriaLabel`,`Interactive`,`InteractiveCollapsed`]}))();export{j as ChevronSeparator,H as Collapsed,U as CollapsedWithIcons,z as CurrentPage,K as CustomAriaLabel,N as CustomSeparator,O as Default,M as DotSeparator,R as HomeAndIcons,q as Interactive,J as InteractiveCollapsed,I as Large,V as LongBreadcrumb,W as LongLabels,F as Medium,A as SlashSeparator,P as Small,G as TruncatedLabels,B as WithDisabledItem,k as WithHomeIcon,L as WithIcons,Y as __namedExportsOrder,w as default};