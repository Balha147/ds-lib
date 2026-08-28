import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,Kn as n,L as r,Ti as i,et as a,f as o,g as s}from"./angular-platform-CkHGXGBq.js";import{i as c,n as l,o as u}from"./signals-C2mKSRCS.js";import{i as d,t as f}from"./dist-_fqtV9zk.js";import{i as p,t as m}from"./public-api-CWMmK9Gv.js";var h,g,_,v,y,b,x,S,C,w;e((()=>{t(),o(),r(),c(),f(),m(),h=[{value:`email`,label:`Email`,icon:`libicon-mail`},{value:`sms`,label:`SMS`,icon:`libicon-tel`},{value:`push`,label:`Notification push`,icon:`libicon-cloche`},{value:`courrier`,label:`Courrier postal`,icon:`libicon-document`}],g=Array.from({length:10},(e,t)=>({value:`option-${t+1}`,label:`Option ${t+1}`,icon:`libicon-cercle-plus`})),_={title:`Forms/Cards/Checkbox`,component:p,tags:[`autodocs`],parameters:{docs:{description:{component:`A checkbox card component for selecting one or multiple options.

The component supports:

- Standard \`value\` binding
- \`valueChange\` event
- Angular Signal Forms through \`formField\`
- Multiple selected values
- Custom icons
- Dynamic item collections
- Labels`}}}},v={args:{value:[],items:h,label:`Canaux de notification préférés`}},y={args:{value:[{label:`Option 2`,value:`option-2`},{label:`Option 5`,value:`option-5`}],items:g,label:`Beaucoup d'options`}},b=class CheckboxCardWithFormHost{items=h;model=n({channels:[]});demoForm=u(this.model)},b=i([a({selector:`story-checkbox-card-with-form`,standalone:!0,imports:[p,l,s],template:`
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 600px;
      "
    >
      <lib-form-checkbox-card
        [formField]="demoForm.channels"
        [items]="items"
        label="Canaux de notification préférés"
      />

      <pre>{{ model() | json }}</pre>
    </div>
  `})],b),x={decorators:[d({imports:[b]})],render:()=>({template:`<story-checkbox-card-with-form />`}),parameters:{docs:{description:{story:"Le composant est lié à `demoForm.channels`. L'état affiché reflète en temps réel le tableau des valeurs sélectionnées."},source:{type:`code`,language:`html`,code:`<lib-form-checkbox-card
  [formField]="demoForm.channels"
  [items]="items"
  label="Canaux de notification préférés">
</lib-form-checkbox-card>`}}}},S=class CheckboxCardWithoutFormHost{items=h;selected=n([])},S=i([a({selector:`story-checkbox-card-without-form`,standalone:!0,imports:[p,s],template:`
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 600px;
      "
    >
      <lib-form-checkbox-card
        [value]="selected()"
        (valueChange)="selected.set($event)"
        [items]="items"
        label="Canaux de notification préférés"
      />

      <pre>{{ { channels: selected() } | json }}</pre>
    </div>
  `})],S),C={decorators:[d({imports:[S]})],render:()=>({template:`
      <story-checkbox-card-without-form />
    `}),parameters:{docs:{description:{story:"Aucun `formField` ici. Le composant est piloté directement via `[value]` et `(valueChange)` avec un signal local `selected`."},source:{type:`code`,language:`html`,code:`<lib-form-checkbox-card
  [value]="selected()"
  (valueChange)="selected.set($event)"
  [items]="items"
  label="Canaux de notification préférés">
</lib-form-checkbox-card>`}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: [],
    items: PREFERENCE_ITEMS,
    label: 'Canaux de notification préférés'
  }
}`,...v.parameters?.docs?.source},description:{story:`============================================================================\r
Default\r
============================================================================`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: [{
      label: 'Option 2',
      value: 'option-2'
    }, {
      label: 'Option 5',
      value: 'option-5'
    }],
    items: MANY_ITEMS,
    label: "Beaucoup d'options"
  }
}`,...y.parameters?.docs?.source},description:{story:`============================================================================\r
Many items\r
============================================================================`,...y.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [CheckboxCardWithFormHost]
  })],
  render: () => ({
    template: \`<story-checkbox-card-with-form />\`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Le composant est lié à \`demoForm.channels\`. ' + "L'état affiché reflète en temps réel le tableau des valeurs sélectionnées."
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-form-checkbox-card
  [formField]="demoForm.channels"
  [items]="items"
  label="Canaux de notification préférés">
</lib-form-checkbox-card>
        \`.trim()
      }
    }
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [CheckboxCardWithoutFormHost]
  })],
  render: () => ({
    template: \`
      <story-checkbox-card-without-form />
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
<lib-form-checkbox-card
  [value]="selected()"
  (valueChange)="selected.set($event)"
  [items]="items"
  label="Canaux de notification préférés">
</lib-form-checkbox-card>
        \`.trim()
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`ManyItems`,`WithForm`,`WithoutForm`]}))();export{v as Default,y as ManyItems,x as WithForm,C as WithoutForm,w as __namedExportsOrder,_ as default};