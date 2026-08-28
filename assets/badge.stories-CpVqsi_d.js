import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,L as r,R as i,Ti as a,U as o,ct as s,et as c,pt as l}from"./angular-platform-CkHGXGBq.js";import{i as u,t as d}from"./public-api-CB813VaT.js";var f=e((()=>{})),p,m=e((()=>{p=`<span class="lib-badge" [class.lib-badge--soft]="appearance() === 'soft'"
    [class.lib-badge--solid]="appearance() === 'solid'" [class.lib-badge--outline]="appearance() === 'outline'"
    [class.lib-badge--sm]="size() === 'sm'" [class.lib-badge--md]="size() === 'md'"
    [class.lib-badge--lg]="size() === 'lg'" [class.lib-badge--disabled]="disabled()" [class]="customClass()"
    [attr.aria-disabled]="disabled()">
    @if (icon(); as iconName) {
    <span class="lib-badge__icon">
        <lib-icon [name]="iconName" [size]="iconSize()" aria-hidden="true" />
    </span>
    }

    <span class="lib-badge__label">
        {{ label() }}
    </span>

    @if (removable()) {
    <button type="button" class="lib-badge__remove" [disabled]="disabled()" [attr.aria-label]="removeLabel()"
        (click)="onRemove()">
        <span aria-hidden="true">×</span>
    </button>
    }
</span>`})),h,g=e((()=>{h=`.lib-badge-host{vertical-align:middle;display:inline-flex}.lib-badge{--lib-badge-background:transparent;--lib-badge-color:var(--noir);--lib-badge-border-color:transparent;--lib-badge-focus-ring:var(--lib-corail_lib_brand);box-sizing:border-box;border:1px solid var(--lib-badge-border-color);background-color:var(--lib-badge-background);min-width:0;color:var(--lib-badge-color);font-family:var(--lib-ff-regular);white-space:nowrap;-webkit-user-select:none;user-select:none;border-radius:999px;justify-content:center;align-items:center;gap:.375rem;font-weight:500;line-height:1;transition:background-color .15s,border-color .15s,color .15s,box-shadow .15s;display:inline-flex}.lib-badge--sm{min-height:1.5rem;padding:.1875rem .5rem;font-size:.6875rem}.lib-badge--sm .lib-badge__icon{width:.75rem;height:.75rem}.lib-badge--sm .lib-badge__remove{width:1rem;height:1rem;font-size:.75rem}.lib-badge--md{min-height:1.75rem;padding:.25rem .625rem;font-size:.75rem}.lib-badge--md .lib-badge__icon{width:.875rem;height:.875rem}.lib-badge--md .lib-badge__remove{width:1.125rem;height:1.125rem;font-size:.8125rem}.lib-badge--lg{min-height:2rem;padding:.3125rem .75rem;font-size:.8125rem}.lib-badge--lg .lib-badge__icon{width:1rem;height:1rem}.lib-badge--lg .lib-badge__remove{width:1.25rem;height:1.25rem;font-size:.875rem}.lib-badge--soft{--lib-badge-background:color-mix(in srgb, var(--lib-primary) 12%, transparent);--lib-badge-color:var(--lib-corail_lib_brand);--lib-badge-border-color:transparent}.lib-badge--solid{--lib-badge-background:var(--lib-corail_lib_brand);--lib-badge-color:var(--lib-gris_dark);--lib-badge-border-color:var(--lib-corail_lib_brand)}.lib-badge--outline{--lib-badge-background:transparent;--lib-badge-color:var(--lib-corail_lib_brand);--lib-badge-border-color:var(--lib-corail_lib_brand)}.lib-badge--disabled{opacity:.5;cursor:not-allowed}.lib-badge__icon{flex:none;justify-content:center;align-items:center;line-height:1;display:inline-flex}.lib-badge__label{text-overflow:ellipsis;white-space:nowrap;min-width:0;display:inline-block;overflow:hidden}.lib-badge__remove{color:currentColor;cursor:pointer;background:0 0;border:0;border-radius:50%;flex:none;justify-content:center;align-items:center;margin:0;padding:0;font-family:inherit;line-height:1;transition:background-color .15s,transform .1s;display:inline-flex}.lib-badge__remove:hover:not(:disabled){background-color:#0000001f}.lib-badge__remove:active:not(:disabled){transform:scale(.9)}.lib-badge__remove:focus-visible{outline:2px solid var(--lib-badge-focus-ring);outline-offset:2px}.lib-badge__remove:disabled{cursor:not-allowed}`})),_,v=e((()=>{t(),m(),g(),r(),d(),_=class Badge{label=i.required();appearance=i(`soft`);size=i(`md`);icon=i();removable=i(!1);removeLabel=i(`Remove badge`);disabled=i(!1);customClass=i(``);removed=o();iconSize=n(()=>{switch(this.size()){case`sm`:return`sm`;case`lg`:return`lg`;default:return`md`}});classes=n(()=>({[`lib-badge--${this.appearance()}`]:!0,[`lib-badge--${this.size()}`]:!0,"lib-badge--disabled":this.disabled()}));onRemove(){this.disabled()||this.removed.emit()}static propDecorators={label:[{type:s,args:[{isSignal:!0,alias:`label`,required:!0,transform:void 0}]}],appearance:[{type:s,args:[{isSignal:!0,alias:`appearance`,required:!1,transform:void 0}]}],size:[{type:s,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}],icon:[{type:s,args:[{isSignal:!0,alias:`icon`,required:!1,transform:void 0}]}],removable:[{type:s,args:[{isSignal:!0,alias:`removable`,required:!1,transform:void 0}]}],removeLabel:[{type:s,args:[{isSignal:!0,alias:`removeLabel`,required:!1,transform:void 0}]}],disabled:[{type:s,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],customClass:[{type:s,args:[{isSignal:!0,alias:`customClass`,required:!1,transform:void 0}]}],removed:[{type:l,args:[`removed`]}]}},_=a([c({selector:`lib-badge`,imports:[u],template:p,host:{class:`lib-badge-host`},styles:[h]})],_)})),y=e((()=>{})),b=e((()=>{v(),y()})),x,S,C,getTextColorClass,w,T,E,D,O,k;e((()=>{f(),b(),{fn:x}=__STORYBOOK_MODULE_TEST__,S=`corail_lib_brand.corail_lib_dark.gris_sable_light.gris_sable_dark.jaune_ivoire_light.jaune_ivoire_dark.jaune_light.jaune_dark.orange.orange_dark.orange_hover.vert_light.vert_dark.bleu_turquoise_light.bleu_turquoise_middle.bleu_turquoise_dark.bleu_light.bleu_dark.bleu_klein_light.bleu_klein_dark.bleu_klein_dark_a.violet_light.violet_dark.mauve.rose_light.rose_dark.rose_fushia.rouge_framboise.rose_chair_light.rose_chair_dark.vert_positif.rouge_negatif.bleu_texte.alerte_vert_positif.alerte_rouge_negatif.alerte_bleu_information.alerte_jaune_attention.blanc.noir.gris_light.gris_dark.gris_background.beige_sable.corail_lib_brand_a.corail_lib_dark_a.orange_a.orange_dark_a.vert_dark_a.bleu_turquoise_middle_a.bleu_turquoise_dark_a.bleu_light_a.bleu_klein_light_a.violet_light_a.rose_dark_a.rose_fushia_a.rouge_framboise_a.rose_chair_dark_a.violet_dark_a.vert_positif_a.rouge_negatif_a.bleu_texte_a.gris_dark_a`.split(`.`),C=new Set([`gris_sable_light`,`gris_sable_dark`,`jaune_ivoire_light`,`jaune_ivoire_dark`,`jaune_light`,`mauve`,`rose_light`,`rose_chair_light`,`alerte_vert_positif`,`alerte_rouge_negatif`,`alerte_bleu_information`,`alerte_jaune_attention`,`blanc`,`gris_light`,`gris_background`,`orange_a`,`rose_chair_dark_a`]),getTextColorClass=e=>C.has(e)?`color-noir`:`color-blanc`,w=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`],T={title:`Components/Badge`,component:_,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
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
`}}},argTypes:{label:{control:`text`,description:`Text displayed inside the Design System Badge.`,table:{category:`Content`,type:{summary:`string`}}},appearance:{control:`inline-radio`,options:[`soft`,`solid`,`outline`],description:`
Visual appearance of the Design System Badge.

- **soft**: subtle background
- **solid**: filled background
- **outline**: transparent background with border
`,table:{category:`Appearance`,type:{summary:`LibBadgeAppearance`},defaultValue:{summary:`soft`}}},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`
Controls the size of the Design System Badge.

- **sm**: compact
- **md**: default
- **lg**: large
`,table:{category:`Appearance`,type:{summary:`LibBadgeSize`},defaultValue:{summary:`md`}}},icon:{control:`text`,description:`Optional leading icon using a registered LibIconName.`,table:{category:`Content`,type:{summary:`LibIconName | undefined`},defaultValue:{summary:`undefined`}}},removable:{control:`boolean`,description:"Displays a remove button and emits the `removed` event when clicked.",table:{category:`Behavior`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},removeLabel:{control:`text`,description:`Accessible label applied to the remove button.`,table:{category:`Accessibility`,type:{summary:`string`},defaultValue:{summary:`Remove badge`}}},disabled:{control:`boolean`,description:`Disables the Badge and prevents its remove action.`,table:{category:`Behavior`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},customClass:{control:`text`,description:`
Additional Design System CSS utility classes.

Examples:

\`bg-corail_lib_brand color-blanc\`

\`bg-vert_positif color-blanc\`

\`bg-jaune_dark color-noir\`

\`border-corail_lib_brand color-corail_lib_brand\`

Bootstrap classes are intentionally not documented as values for this
input. Bootstrap badges have their own dedicated story.
`,table:{category:`Customization`,type:{summary:`string`},defaultValue:{summary:``}}}},args:{label:`Badge`,appearance:`soft`,size:`md`,icon:void 0,removable:!1,removeLabel:`Remove badge`,disabled:!1,customClass:``}},E={name:`Design System Palette`,render:e=>({props:{...e,colors:S,getTextColorClass,removed:x().mockName(`paletteBadgeRemoved`)},template:`
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
    `}),parameters:{docs:{description:{story:`
Complete visual reference of the Design System Badge using all available
palette colors.

The palette demonstrates the four main configurations:

1. Simple
2. Icon
3. Remove
4. Icon + Remove
`}}}},D={name:`Bootstrap`,render:()=>({props:{variants:w},template:`
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
    `}),parameters:{docs:{description:{story:`
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
`}}}},O={name:`Bootstrap Pills`,render:()=>({props:{variants:w},template:`
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
    `}),parameters:{docs:{description:{story:`
Bootstrap also supports pill-shaped badges using the \`rounded-pill\`
utility.

Example:

\`\`\`html
<span class="badge rounded-pill text-bg-primary">
  Primary
</span>
\`\`\`
`}}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Design System Palette',
  render: args => ({
    props: {
      ...args,
      colors: COLORS,
      getTextColorClass,
      removed: fn().mockName('paletteBadgeRemoved')
    },
    template: \`
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
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Complete visual reference of the Design System Badge using all available
palette colors.

The palette demonstrates the four main configurations:

1. Simple
2. Icon
3. Remove
4. Icon + Remove
\`
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Bootstrap',
  render: () => ({
    props: {
      variants: BOOTSTRAP_VARIANTS satisfies readonly BootstrapVariant[]
    },
    template: \`
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
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates the Bootstrap Badge variants available in the application.

Bootstrap provides the following \\\`text-bg-*\\\` variants:

- primary
- secondary
- success
- danger
- warning
- info
- light
- dark

This story intentionally uses Bootstrap classes directly instead of
\\\`lib-badge\\\`.

For Design System components, use the \\\`lib-badge\\\` stories instead.
\`
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Bootstrap Pills',
  render: () => ({
    props: {
      variants: BOOTSTRAP_VARIANTS satisfies readonly BootstrapVariant[]
    },
    template: \`
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
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Bootstrap also supports pill-shaped badges using the \\\`rounded-pill\\\`
utility.

Example:

\\\`\\\`\\\`html
<span class="badge rounded-pill text-bg-primary">
  Primary
</span>
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`Palette`,`Bootstrap`,`BootstrapPills`]}))();export{D as Bootstrap,O as BootstrapPills,E as Palette,k as __namedExportsOrder,T as default};