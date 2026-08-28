import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,Kn as n,L as r,Ti as i,et as a,f as o,g as s,h as c}from"./angular-platform-CkHGXGBq.js";import{a as l,i as u,n as d,o as f}from"./signals-C2mKSRCS.js";import{i as p,n as m,t as h}from"./dist-_fqtV9zk.js";import{c as g,d as _,o as v,s as y}from"./datepicker-CSVnXJnq.js";import{o as b,s as x}from"./public-api-CpgCs3-l.js";import{n as S,t as C}from"./public-api-CfHzAJFF.js";var w,T,E,D,O,k,A,j,M;e((()=>{t(),r(),o(),u(),h(),v(),g(),b(),C(),w={title:`Forms/Datepicker`,component:S,tags:[`autodocs`],decorators:[m({providers:[y(),{provide:_,useValue:x}]})],parameters:{docs:{description:{component:"\nA flexible datepicker control built on Angular Signals and Material Datepicker.\n\n### Features\n- **Flexible Text Parsing**: Converts inputs like `17 November 2026`, `demain`, `today`, or `+3d` automatically to `dd/MM/yyyy`.\n- **Validation**: Displays inline field validation and handles date parsing errors smoothly.\n- **Accessible**: Built with built-in accessibility roles, labels, and keyboard navigation.\n        "}}},argTypes:{value:{control:`date`,description:`The selected date signal model.`,table:{category:`State`,type:{summary:`Date`}}},label:{control:`text`,description:`Floating or top label displayed above/inside the field.`,table:{category:`Content`,type:{summary:`string`},defaultValue:{summary:`''`}}},placeholder:{control:`text`,description:`Placeholder text shown when input is empty.`,table:{category:`Content`,type:{summary:`string`},defaultValue:{summary:`' '`}}},hint:{control:`text`,description:`Helper message displayed beneath the input field.`,table:{category:`Content`,type:{summary:`string`},defaultValue:{summary:`''`}}},disabled:{control:`boolean`,description:`Disables user interaction and grays out the field.`,table:{category:`Behavior`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},readonly:{control:`boolean`,description:`Prevents typing and prevents opening the datepicker overlay.`,table:{category:`Behavior`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},invalid:{control:`boolean`,description:`Forces the field into a visual error state.`,table:{category:`Validation`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},touched:{control:`boolean`,description:`Indicates if the user has interacted with and blurred the control.`,table:{category:`Validation`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},noErrorMessages:{control:`boolean`,description:`Hides error message text below the field when in an invalid state.`,table:{category:`Validation`,type:{summary:`boolean`},defaultValue:{summary:`false`}}}},args:{label:`Date de naissance`,placeholder:`ex: 17/11/2026, demain, +3d`,hint:`Formats acceptés : DD/MM/YYYY, texte libre (ex: 17 novembre 2026), ou raccourcis (ex: +2d, demain).`,disabled:!1,readonly:!1,noErrorMessages:!1,touched:!1,invalid:!1}},T={render:e=>({props:{...e,selectedDate:n(new Date(`2026-07-28`))},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px; padding: 2rem;">
        <lib-form-datepicker
          [(value)]="selectedDate"
          [label]="label"
          [placeholder]="placeholder"
          [hint]="hint"
          [disabled]="disabled"
          [readonly]="readonly">
        </lib-form-datepicker>

        <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
          <strong>Signal Value:</strong>
          <pre style="margin: 8px 0 0 0;">{{ { selectedDate: selectedDate() | date:'yyyy-MM-dd' } | json }}</pre>
        </div>
      </div>
    `}),args:{label:`Date de rendez-vous`,placeholder:`JJ/MM/AAAA`,hint:`Format attendu : JJ/MM/AAAA`,disabled:!1,readonly:!1}},E=class DatepickerWithFormHost{model=n({birthDate:new Date});demoForm=f(this.model)},E=i([a({selector:`story-datepicker-with-form`,imports:[S,d,s,c],template:`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px; padding: 2rem;">
      <lib-form-datepicker
        [formField]="demoForm.birthDate"
        label="Date de naissance"
        hint="Sélectionnez une date dans le calendrier">
      </lib-form-datepicker>

      <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
        <strong>Form Model Value:</strong>
        <pre style="margin: 8px 0 0 0;">{{ { birthDate: model().birthDate | date:'yyyy-MM-dd' } | json }}</pre>
      </div>
    </div>
  `})],E),D={decorators:[p({imports:[E]})],render:()=>({template:`<story-datepicker-with-form></story-datepicker-with-form>`}),parameters:{docs:{description:{story:'Intégration directe avec **Angular Signal Forms** via `[field]="demoForm.birthDate"`.'}}}},O=class DatepickerWithErrorHost{model=n({birthDate:null});demoForm=f(this.model,e=>{l(e.birthDate,{message:`La date d'échéance est obligatoire.`})});constructor(){this.demoForm.birthDate().markAsTouched()}static ctorParameters=()=>[]},O=i([a({selector:`story-datepicker-with-error`,imports:[S,d,s,c],template:`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px; padding: 2rem;">
      <lib-form-datepicker
        [formField]="demoForm.birthDate"
        label="Date d'échéance obligatoire"
        hint="Sélectionnez une date dans le calendrier pour valider">
      </lib-form-datepicker>

      <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
        <strong>Validation State:</strong>
        <pre style="margin: 8px 0 0 0;">{{ {
          birthDate: (model().birthDate | date:'yyyy-MM-dd') ?? null,
          invalid: demoForm.birthDate().invalid(),
          touched: demoForm.birthDate().touched()
        } | json }}</pre>
      </div>
    </div>
  `})],O),k={decorators:[p({imports:[O]})],render:()=>({template:`<story-datepicker-with-error></story-datepicker-with-error>`}),parameters:{docs:{description:{story:"Validation réelle via `required(...)` sur le field — l'erreur est affichée dès le chargement grâce à un `markAsTouched()` forcé pour la démo."}}}},A={render:()=>({template:`
      <div style="padding: 2rem; max-width: 400px;">
        <lib-form-datepicker
          [value]="defaultDate"
          [disabled]="true"
          label="Date archivée"
          hint="Ce champ ne peut pas être modifié">
        </lib-form-datepicker>
      </div>
    `,props:{defaultDate:new Date(`2026-01-01`)}})},j={render:()=>({template:`
      <div style="padding: 2rem; max-width: 400px;">
        <lib-form-datepicker
          [value]="defaultDate"
          [readonly]="true"
          label="Date de création"
          hint="Consultation uniquement">
        </lib-form-datepicker>
      </div>
    `,props:{defaultDate:new Date(`2026-05-12`)}})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    props: {
      ...args,
      selectedDate: signal<Date | null>(new Date('2026-07-28'))
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px; padding: 2rem;">
        <lib-form-datepicker
          [(value)]="selectedDate"
          [label]="label"
          [placeholder]="placeholder"
          [hint]="hint"
          [disabled]="disabled"
          [readonly]="readonly">
        </lib-form-datepicker>

        <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
          <strong>Signal Value:</strong>
          <pre style="margin: 8px 0 0 0;">{{ { selectedDate: selectedDate() | date:'yyyy-MM-dd' } | json }}</pre>
        </div>
      </div>
    \`
  }),
  args: {
    label: 'Date de rendez-vous',
    placeholder: 'JJ/MM/AAAA',
    hint: 'Format attendu : JJ/MM/AAAA',
    disabled: false,
    readonly: false
  }
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [DatepickerWithFormHost]
  })],
  render: () => ({
    template: \`<story-datepicker-with-form></story-datepicker-with-form>\`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Intégration directe avec **Angular Signal Forms** via \`[field]="demoForm.birthDate"\`.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [DatepickerWithErrorHost]
  })],
  render: () => ({
    template: \`<story-datepicker-with-error></story-datepicker-with-error>\`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Validation réelle via \`required(...)\` sur le field — l\\'erreur est ' + 'affichée dès le chargement grâce à un \`markAsTouched()\` forcé pour la démo.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="padding: 2rem; max-width: 400px;">
        <lib-form-datepicker
          [value]="defaultDate"
          [disabled]="true"
          label="Date archivée"
          hint="Ce champ ne peut pas être modifié">
        </lib-form-datepicker>
      </div>
    \`,
    props: {
      defaultDate: new Date('2026-01-01')
    }
  })
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="padding: 2rem; max-width: 400px;">
        <lib-form-datepicker
          [value]="defaultDate"
          [readonly]="true"
          label="Date de création"
          hint="Consultation uniquement">
        </lib-form-datepicker>
      </div>
    \`,
    props: {
      defaultDate: new Date('2026-05-12')
    }
  })
}`,...j.parameters?.docs?.source}}},M=[`WithoutForm`,`WithForm`,`WithError`,`Disabled`,`Readonly`]}))();export{A as Disabled,j as Readonly,k as WithError,D as WithForm,T as WithoutForm,M as __namedExportsOrder,w as default};