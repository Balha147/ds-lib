import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,Kn as r,L as i,R as a,Ti as o,W as s,ct as c,et as l,f as u,g as d,j as f,k as p}from"./angular-platform-CkHGXGBq.js";import{i as m,n as h,o as g}from"./signals-C2mKSRCS.js";import{i as _,t as v}from"./dist-_fqtV9zk.js";import{n as y,t as b}from"./public-api-ClneZIDV.js";var x,S=e((()=>{x=`<input #control type="radio" class="form-check-input me-1" [class.is-invalid]="isInvalid()" [class.is-valid]="isValid()"
    [name]="name()" [id]="id" [checked]="isChecked()" [disabled]="disabled()" [attr.aria-label]="ariaLabel()"
    [attr.aria-invalid]="isInvalid()" [attr.aria-readonly]="readonly() ? true : null" (focus)="onFocus()"
    (blur)="onBlur()" (change)="onChange()" />

@if (label()) {
<label class="form-check-label" [for]="id">{{ label() }}</label>
}

@if (!noErrorMessages() && isInvalid() && firstErrorMessage()) {
<div class="invalid-feedback">{{ firstErrorMessage() }}</div>
}`})),C,w=e((()=>{t(),S(),i(),b(),C=class Radio extends y{name=a.required();optionValue=a.required();inline=a(!1,{transform:f});reverse=a(!1,{transform:f});isChecked=n(()=>this.value()===this.optionValue());controlRef=s(`control`);onChange(){this.disabled()||this.readonly()||this.value.set(this.optionValue())}focus(){this.controlRef()?.nativeElement.focus()}static propDecorators={name:[{type:c,args:[{isSignal:!0,alias:`name`,required:!0,transform:void 0}]}],optionValue:[{type:c,args:[{isSignal:!0,alias:`optionValue`,required:!0,transform:void 0}]}],inline:[{type:c,args:[{isSignal:!0,alias:`inline`,required:!1,transform:void 0}]}],reverse:[{type:c,args:[{isSignal:!0,alias:`reverse`,required:!1,transform:void 0}]}],controlRef:[{type:p,args:[`control`,{isSignal:!0}]}]}},C=o([l({selector:`lib-form-radio`,template:x,host:{class:`form-check`,"[class.form-check-inline]":`inline()`,"[class.form-check-reverse]":`reverse()`}})],C)})),T=e((()=>{})),E=e((()=>{w(),T()})),D,O,k,A,j,M,N,P,F;e((()=>{t(),i(),m(),v(),E(),u(),D={title:`Forms/Radio`,component:C,tags:[`autodocs`]},O={args:{value:`basic`,optionValue:`basic`,name:`plan-playground`,label:`Basique`}},k=class RadioWithFormHost{model=r({plan:`basic`});demoForm=g(this.model)},k=o([l({selector:`story-radio-with-form`,imports:[C,d,h],template:`
    <div style="display:flex; flex-direction:column; gap:8px; max-width:320px;">
      <lib-form-radio [formField]="demoForm.plan" [optionValue]="'basic'" name="plan-with-form" label="Basique"></lib-form-radio>
      <lib-form-radio [formField]="demoForm.plan" [optionValue]="'pro'" name="plan-with-form" label="Pro"></lib-form-radio>
      <lib-form-radio [formField]="demoForm.plan" [optionValue]="'enterprise'" name="plan-with-form" label="Entreprise"></lib-form-radio>

      <pre>{{ model() | json }}</pre>
    </div>
  `})],k),A={decorators:[_({imports:[k]})],render:()=>({template:`<story-radio-with-form></story-radio-with-form>`}),parameters:{docs:{description:{story:"Les trois radios partagent le même `[field]` (`demoForm.plan`) — sélectionner l'une désélectionne automatiquement les autres, piloté entièrement par Signal Forms."}}}},j=class RadioWithoutFormHost{selected=r(`basic`)},j=o([l({selector:`story-radio-without-form`,imports:[C,d],template:`
    <div style="display:flex; flex-direction:column; gap:8px; max-width:320px;">
      <lib-form-radio
        [value]="selected()"
        (valueChange)="selected.set($event)"
        [optionValue]="'basic'"
        name="plan-without-form"
        label="Basique">
      </lib-form-radio>
      <lib-form-radio
        [value]="selected()"
        (valueChange)="selected.set($event)"
        [optionValue]="'pro'"
        name="plan-without-form"
        label="Pro">
      </lib-form-radio>
      <lib-form-radio
        [value]="selected()"
        (valueChange)="selected.set($event)"
        [optionValue]="'enterprise'"
        name="plan-without-form"
        label="Entreprise">
      </lib-form-radio>

      <pre>{{ { plan: selected() } | json }}</pre>
    </div>
  `})],j),M={decorators:[_({imports:[j]})],render:()=>({template:`<story-radio-without-form></story-radio-without-form>`}),parameters:{docs:{description:{story:"Aucun `[field]` ici — chaque radio est piloté directement via `[value]`/`(valueChange)` sur un signal local `selected`, démontrant que le composant fonctionne aussi en usage isolé."}}}},N={render:()=>({template:`
      <div>
        <lib-form-radio [value]="'a'" [optionValue]="'a'" name="plan-inline" label="A" [inline]="true"></lib-form-radio>
        <lib-form-radio [value]="'a'" [optionValue]="'b'" name="plan-inline" label="B" [inline]="true"></lib-form-radio>
      </div>
    `})},P={args:{value:`basic`,optionValue:`basic`,name:`plan-disabled`,label:`Désactivé`,disabled:!0}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'basic',
    optionValue: 'basic',
    name: 'plan-playground',
    label: 'Basique'
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [RadioWithFormHost]
  })],
  render: () => ({
    template: \`<story-radio-with-form></story-radio-with-form>\`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les trois radios partagent le même \`[field]\` (\`demoForm.plan\`) — ' + 'sélectionner l\\'une désélectionne automatiquement les autres, ' + 'piloté entièrement par Signal Forms.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [RadioWithoutFormHost]
  })],
  render: () => ({
    template: \`<story-radio-without-form></story-radio-without-form>\`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Aucun \`[field]\` ici — chaque radio est piloté directement via ' + '\`[value]\`/\`(valueChange)\` sur un signal local \`selected\`, ' + 'démontrant que le composant fonctionne aussi en usage isolé.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div>
        <lib-form-radio [value]="'a'" [optionValue]="'a'" name="plan-inline" label="A" [inline]="true"></lib-form-radio>
        <lib-form-radio [value]="'a'" [optionValue]="'b'" name="plan-inline" label="B" [inline]="true"></lib-form-radio>
      </div>
    \`
  })
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'basic',
    optionValue: 'basic',
    name: 'plan-disabled',
    label: 'Désactivé',
    disabled: true
  }
}`,...P.parameters?.docs?.source}}},F=[`Playground`,`WithForm`,`WithoutForm`,`Inline`,`Disabled`]}))();export{P as Disabled,N as Inline,O as Playground,A as WithForm,M as WithoutForm,F as __namedExportsOrder,D as default};