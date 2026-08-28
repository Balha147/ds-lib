import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,Kn as n,L as r,Ti as i,et as a,f as o,g as s}from"./angular-platform-CkHGXGBq.js";import{i as c,n as l,o as u}from"./signals-C2mKSRCS.js";import{i as d,t as f}from"./dist-_fqtV9zk.js";import{n as p,t as m}from"./public-api-CWMmK9Gv.js";var h,g,_,v,y,b,x,S,C,w;e((()=>{t(),o(),r(),c(),f(),m(),h=[{value:`basic`,label:`Basique`,icon:`libicon-compte`},{value:`pro`,label:`Pro`,icon:`libicon-etoile`},{value:`enterprise`,label:`Entreprise`,icon:`libicon-building`}],g=[{value:`starter`,label:`Starter`,icon:`libicon-flag`,tooltip:`Idéal pour démarrer, jusqu'à 5 utilisateurs.`},{value:`growth`,label:`Croissance`,icon:`libicon-graphique`,tooltip:`Jusqu'à 50 utilisateurs.`}],_={title:`Forms/Cards/Radio`,component:p,tags:[`autodocs`],parameters:{docs:{description:{component:`Radio card component allowing the user to select exactly one option
from a collection of cards.

The component supports:

- Standard value binding
- valueChange events
- Angular Signal Forms integration
- Custom icons
- Tooltips
- Single selection`}}}},v={args:{value:null,items:h,label:`Choisissez votre forfait`}},y={args:{value:`starter`,items:g,label:`Choisissez votre offre`},render:e=>({props:e,template:`
      <div>
        <lib-form-radio-card
          [value]="value"
          [items]="items"
          [label]="label"
        />
      </div>
    `}),parameters:{docs:{description:{story:"Les options peuvent afficher une information complémentaire via la propriété `tooltip` de chaque élément."},source:{type:`code`,language:`html`,code:`<lib-form-radio-card
  [value]="value"
  [items]="items"
  [label]="label">
</lib-form-radio-card>`}}}},b=class RadioCardWithFormHost{items=h;model=n({plan:null});demoForm=u(this.model)},b=i([a({selector:`story-radio-card-with-form`,standalone:!0,imports:[p,l,s],template:`
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 600px;
      "
    >
      <lib-form-radio-card
        [formField]="demoForm.plan"
        [items]="items"
        label="Choisissez votre forfait"
      />

      <pre>{{ model() | json }}</pre>
    </div>
  `})],b),x={decorators:[d({imports:[b]})],render:()=>({template:`
      <story-radio-card-with-form />
    `}),parameters:{docs:{description:{story:"Le composant est lié à `demoForm.plan`. L'état affiché reflète l'objet sélectionné `{ label, value }` ou `null` en temps réel."},source:{type:`code`,language:`html`,code:`<lib-form-radio-card
  [formField]="demoForm.plan"
  [items]="items"
  label="Choisissez votre forfait">
</lib-form-radio-card>`}}}},S=class RadioCardWithoutFormHost{items=h;selected=n(null)},S=i([a({selector:`story-radio-card-without-form`,standalone:!0,imports:[p,s],template:`
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 600px;
      "
    >
      <lib-form-radio-card
        [value]="selected()"
        (valueChange)="selected.set($event)"
        [items]="items"
        label="Choisissez votre forfait"
      />

      <pre>{{ { plan: selected() } | json }}</pre>
    </div>
  `})],S),C={decorators:[d({imports:[S]})],render:()=>({template:`
      <story-radio-card-without-form />
    `}),parameters:{docs:{description:{story:"Aucun `formField` ici. Le composant est piloté directement via `[value]` et `(valueChange)` avec un signal local `selected`."},source:{type:`code`,language:`html`,code:`<lib-form-radio-card
  [value]="selected()"
  (valueChange)="selected.set($event)"
  [items]="items"
  label="Choisissez votre forfait">
</lib-form-radio-card>`}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: null,
    items: PLAN_ITEMS,
    label: 'Choisissez votre forfait'
  }
}`,...v.parameters?.docs?.source},description:{story:`============================================================================\r
Default\r
============================================================================`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'starter',
    items: ITEMS_WITH_TOOLTIP,
    label: 'Choisissez votre offre'
  },
  render: (args: any) => ({
    props: args,
    template: \`
      <div>
        <lib-form-radio-card
          [value]="value"
          [items]="items"
          [label]="label"
        />
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les options peuvent afficher une information complémentaire ' + 'via la propriété \`tooltip\` de chaque élément.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-form-radio-card
  [value]="value"
  [items]="items"
  [label]="label">
</lib-form-radio-card>
        \`.trim()
      }
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`============================================================================\r
With tooltip\r
============================================================================`,...y.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [RadioCardWithFormHost]
  })],
  render: () => ({
    template: \`
      <story-radio-card-with-form />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Le composant est lié à \`demoForm.plan\`. ' + "L'état affiché reflète l'objet sélectionné \`{ label, value }\` " + 'ou \`null\` en temps réel.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-form-radio-card
  [formField]="demoForm.plan"
  [items]="items"
  label="Choisissez votre forfait">
</lib-form-radio-card>
        \`.trim()
      }
    }
  }
}`,...x.parameters?.docs?.source},description:{story:`============================================================================\r
With Signal Forms\r
============================================================================`,...x.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [RadioCardWithoutFormHost]
  })],
  render: () => ({
    template: \`
      <story-radio-card-without-form />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Aucun \`formField\` ici. Le composant est piloté directement ' + 'via \`[value]\` et \`(valueChange)\` avec un signal local \`selected\`.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-form-radio-card
  [value]="selected()"
  (valueChange)="selected.set($event)"
  [items]="items"
  label="Choisissez votre forfait">
</lib-form-radio-card>
        \`.trim()
      }
    }
  }
}`,...C.parameters?.docs?.source},description:{story:`============================================================================\r
Without Signal Forms\r
============================================================================`,...C.parameters?.docs?.description}}},w=[`Default`,`WithTooltip`,`WithForm`,`WithoutForm`]}))();export{v as Default,x as WithForm,y as WithTooltip,C as WithoutForm,w as __namedExportsOrder,_ as default};