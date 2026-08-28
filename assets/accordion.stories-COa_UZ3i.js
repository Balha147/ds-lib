import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,L as r,R as i,Ti as a,U as o,V as s,ct as c,et as l,pt as u}from"./angular-platform-CkHGXGBq.js";import{i as d,t as f}from"./public-api-CB813VaT.js";var p,m=e((()=>{p=`<div class="lib-accordion" [class.lib-accordion--sm]="size() === 'sm'" [class.lib-accordion--md]="size() === 'md'"
    [class.lib-accordion--lg]="size() === 'lg'" [class.lib-accordion--flush]="flush()" [class]="customClass()">
    @for (item of items(); track item.id) {
    <div class="lib-accordion__item" [class.lib-accordion__item--expanded]="isExpanded(item)"
        [class.lib-accordion__item--disabled]="item.disabled">
        <button type="button" class="lib-accordion__trigger" [id]="getButtonId(item)" [disabled]="item.disabled"
            [attr.aria-expanded]="isExpanded(item)" [attr.aria-controls]="getPanelId(item)" (click)="toggle(item)"
            (keydown)="onKeydown($event, item)">
            <span class="lib-accordion__trigger-content">
                @if (item.icon) {
                <lib-icon class="lib-accordion__icon" [name]="item.icon" [size]="iconSize()" aria-hidden="true" />
                }

                <span class="lib-accordion__title">
                    {{ item.title }}
                </span>
            </span>

            <lib-icon class="lib-accordion__chevron" [name]="
            isExpanded(item)
              ? collapseIcon()
              : expandIcon()
          " [size]="iconSize()" aria-hidden="true" />
        </button>

        <div class="lib-accordion__panel" [id]="getPanelId(item)" role="region"
            [attr.aria-labelledby]="getButtonId(item)" [attr.hidden]="!isExpanded(item) ? true : null">
            <div class="lib-accordion__content">
                {{ item.content }}
            </div>
        </div>
    </div>
    }
</div>`})),h,g=e((()=>{t(),m(),r(),f(),h=class Accordion{items=i.required();mode=i(`single`);size=i(`md`);flush=i(!1);expandIcon=i(`libicon-fleche-bas`);collapseIcon=i(`libicon-fleche-haut`);customClass=i(``);expandedIds=s([]);itemToggle=o();iconSize=n(()=>{switch(this.size()){case`sm`:return`sm`;case`lg`:return`lg`;default:return`md`}});classes=n(()=>({"lib-accordion":!0,[`lib-accordion--${this.size()}`]:!0,"lib-accordion--flush":this.flush(),[this.customClass()]:!!this.customClass()}));normalizedExpandedIds=n(()=>{let e=this.expandedIds();return e.length>0?e:this.items().filter(e=>e.expanded&&!e.disabled).map(e=>e.id).slice(0,this.mode()===`single`?1:void 0)});isExpanded(e){return this.normalizedExpandedIds().includes(e.id)}toggle(e){if(e.disabled)return;if(this.isExpanded(e)){let t=this.normalizedExpandedIds().filter(t=>t!==e.id);this.expandedIds.set(t),this.itemToggle.emit({item:e,expanded:!1});return}let t=this.mode()===`single`?[e.id]:[...this.normalizedExpandedIds(),e.id];this.expandedIds.set(t),this.itemToggle.emit({item:e,expanded:!0})}onKeydown(e,t){t.disabled||(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.toggle(t))}getPanelId(e){return`accordion-panel-${e.id}`}getButtonId(e){return`accordion-button-${e.id}`}static propDecorators={items:[{type:c,args:[{isSignal:!0,alias:`items`,required:!0,transform:void 0}]}],mode:[{type:c,args:[{isSignal:!0,alias:`mode`,required:!1,transform:void 0}]}],size:[{type:c,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}],flush:[{type:c,args:[{isSignal:!0,alias:`flush`,required:!1,transform:void 0}]}],expandIcon:[{type:c,args:[{isSignal:!0,alias:`expandIcon`,required:!1,transform:void 0}]}],collapseIcon:[{type:c,args:[{isSignal:!0,alias:`collapseIcon`,required:!1,transform:void 0}]}],customClass:[{type:c,args:[{isSignal:!0,alias:`customClass`,required:!1,transform:void 0}]}],expandedIds:[{type:c,args:[{isSignal:!0,alias:`expandedIds`,required:!1}]},{type:u,args:[`expandedIdsChange`]}],itemToggle:[{type:u,args:[`itemToggle`]}]}},h=a([l({selector:`lib-accordion`,imports:[d],template:p})],h)})),_=e((()=>{})),v=e((()=>{g(),_()})),y,b,x;e((()=>{v(),y={title:`Components/Accordion`,component:h,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
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
        `}}},argTypes:{items:{control:`object`,description:`Collection of accordion items displayed by the component.`,table:{category:`Content`,type:{summary:`readonly LibAccordionItem[]`}}},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`
Size of the accordion.

- **sm**: compact accordion
- **md**: default size
- **lg**: large accordion
      `,table:{category:`Appearance`,type:{summary:`LibAccordionSize`},defaultValue:{summary:`md`}}},customClass:{control:`text`,description:`Additional CSS classes applied to the accordion root element.`,table:{category:`Customization`,type:{summary:`string`},defaultValue:{summary:``}}}},args:{items:[{id:`general`,title:`Informations générales`,content:`Retrouvez ici les informations générales concernant votre compte et les paramètres principaux.`},{id:`profile`,title:`Profil utilisateur`,content:`Vous pouvez consulter et modifier vos informations personnelles, votre photo de profil et vos préférences.`},{id:`notifications`,title:`Notifications`,content:`Configurez les notifications que vous souhaitez recevoir et choisissez les canaux utilisés pour vous contacter.`},{id:`security`,title:`Sécurité`,content:`Gérez votre mot de passe, vos sessions actives et les différentes options de sécurité disponibles.`}],size:`md`,customClass:``}},b={name:`Custom`,render:e=>({props:e,template:`
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
    `}),parameters:{docs:{description:{story:`Présentation de l’implémentation custom du composant Accordion du Design System.`}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Custom',
  render: (args: any) => ({
    props: args,
    template: \`
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
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Présentation de l’implémentation custom du composant Accordion du Design System.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}))();export{b as Playground,x as __namedExportsOrder,y as default};