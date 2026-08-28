import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,Kn as r,L as i,R as a,Ti as o,W as s,ct as c,et as l,f as u,g as d,j as f,k as p}from"./angular-platform-CkHGXGBq.js";import{i as m,n as h,o as g}from"./signals-C2mKSRCS.js";import{i as _,t as v}from"./dist-_fqtV9zk.js";import{n as y,t as b}from"./public-api-ClneZIDV.js";var x,S=e((()=>{x=`<input #control type="checkbox" class="form-check-input" [class.is-invalid]="isInvalid()" [class.is-valid]="isValid()"
    [id]="id" [disabled]="disabled()" [checked]="value()" [attr.aria-label]="ariaLabel()"
    [attr.aria-invalid]="isInvalid()" [attr.aria-readonly]="readonly() ? true : null" (focus)="onFocus()"
    (blur)="onBlur()" (change)="onChange(control.checked)" />

@if (label()) {
<label class="form-check-label" [for]="id">{{ label() }}</label>
}

@if (!noErrorMessages() && isInvalid() && firstErrorMessage()) {
<div class="invalid-feedback">{{ firstErrorMessage() }}</div>
} @else if (hint()) {
<div class="form-text">{{ hint() }}</div>
}`}));function transformSwitch(e){return e===`native`?`native`:f(e)}var C,w=e((()=>{t(),S(),i(),b(),C=class Checkbox extends y{switch=a(!1,{transform:transformSwitch});inline=a(!1,{transform:f});reverse=a(!1,{transform:f});hasSwitchCss=n(()=>!!this.switch());hasLibSwitchCss=n(()=>this.switch()===!0);controlRef=s(`control`);onChange(e){if(this.readonly()){let e=this.controlRef()?.nativeElement;e&&(e.checked=this.value()||!1);return}this.value.set(e)}focus(){this.controlRef()?.nativeElement.focus()}static propDecorators={switch:[{type:c,args:[{isSignal:!0,alias:`switch`,required:!1,transform:void 0}]}],inline:[{type:c,args:[{isSignal:!0,alias:`inline`,required:!1,transform:void 0}]}],reverse:[{type:c,args:[{isSignal:!0,alias:`reverse`,required:!1,transform:void 0}]}],controlRef:[{type:p,args:[`control`,{isSignal:!0}]}]}},C=o([l({selector:`lib-form-checkbox`,template:x,host:{class:`form-check`,"[class.form-switch]":`hasSwitchCss()`,"[class.lib-form-switch]":`hasLibSwitchCss()`,"[class.form-check-inline]":`inline()`,"[class.form-check-reverse]":`reverse()`}})],C)})),T=e((()=>{w()})),E,D,O,k,A,j,M,N,P,F;e((()=>{t(),i(),u(),m(),v(),T(),E={title:`Forms/Checkbox`,component:C,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Texte du label associé à la case à cocher.`},disabled:{control:`boolean`,description:`Désactive l'interaction avec le composant.`},switch:{control:`select`,options:[!1,!0,`native`],description:`Active le style interrupteur (switch) classique ou natif.`},inline:{control:`boolean`,description:`Affiche la checkbox en ligne (display inline-flex).`},reverse:{control:`boolean`,description:`Inverse l'ordre d'affichage entre le label et la case.`},ariaLabel:{control:`text`,description:`Label d'accessibilité (aria-label) pour les lecteurs d'écran.`}}},D={args:{value:!1,label:`J'accepte les conditions générales`,disabled:!1,switch:!1,inline:!1,reverse:!1},render:e=>({props:e,template:`
      <lib-form-checkbox
        [value]="value"
        [label]="label"
        [disabled]="disabled"
        [switch]="switch"
        [inline]="inline"
        [reverse]="reverse">
      </lib-form-checkbox>
    `})},O=class CheckboxWithFormHost{model=r({acceptTerms:!1,subscribeNewsletter:!1});demoForm=g(this.model)},O=o([l({selector:`story-checkbox-with-form`,imports:[C,h,d],template:`
    <div style="display:flex; flex-direction:column; gap:8px; max-width:320px;">
      <lib-form-checkbox [formField]="demoForm.acceptTerms" label="J'accepte les conditions générales"></lib-form-checkbox>
      <lib-form-checkbox [formField]="demoForm.subscribeNewsletter" label="M'abonner à la newsletter" [switch]="true"></lib-form-checkbox>

      <pre>{{ model() | json }}</pre>
    </div>
  `})],O),k={decorators:[_({imports:[O]})],render:()=>({template:`<story-checkbox-with-form></story-checkbox-with-form>`}),parameters:{docs:{description:{story:"Chaque case est liée à un `field` distinct du même `form` — l'état affiché dans le `<pre>` reflète le modèle Signal Forms en temps réel."}}}},A=class CheckboxWithoutFormHost{accepted=r(!1);subscribed=r(!1)},A=o([l({selector:`story-checkbox-without-form`,imports:[C,d],template:`
    <div style="display:flex; flex-direction:column; gap:8px; max-width:320px;">
      <lib-form-checkbox
        [value]="accepted()"
        (valueChange)="accepted.set($event)"
        label="J'accepte les conditions générales">
      </lib-form-checkbox>

      <lib-form-checkbox
        [value]="subscribed()"
        (valueChange)="subscribed.set($event)"
        label="M'abonner à la newsletter"
        [switch]="true">
      </lib-form-checkbox>

      <pre>{{ { accepted: accepted(), subscribed: subscribed() } | json }}</pre>
    </div>
  `})],A),j={decorators:[_({imports:[A]})],render:()=>({template:`<story-checkbox-without-form></story-checkbox-without-form>`}),parameters:{docs:{description:{story:"Aucun `[field]` ici — chaque case est pilotée directement via `[value]`/`(valueChange)` sur des signals locaux, démontrant l'usage isolé du composant."}}}},M={render:()=>({template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Par défaut (Décoché)</h5>
          <lib-form-checkbox label="Option non sélectionnée" [value]="false"></lib-form-checkbox>
        </div>

        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Coché</h5>
          <lib-form-checkbox label="Option sélectionnée" [value]="true"></lib-form-checkbox>
        </div>

        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Désactivé (Disabled)</h5>
          <div style="display: flex; gap: 24px;">
            <lib-form-checkbox label="Désactivé non coché" [value]="false" [disabled]="true"></lib-form-checkbox>
            <lib-form-checkbox label="Désactivé coché" [value]="true" [disabled]="true"></lib-form-checkbox>
          </div>
        </div>
      </div>
    `})},N={render:()=>({template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Switch Custom</h5>
          <lib-form-checkbox label="Activer les notifications" [value]="false" [switch]="true"></lib-form-checkbox>
        </div>

        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Switch Native Bootstrap</h5>
          <lib-form-checkbox label="Activer le mode sombre" [value]="false" switch="native"></lib-form-checkbox>
        </div>
      </div>
    `})},P={render:()=>({template:`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 12px;">Mode Inline</h5>
          <div>
            <lib-form-checkbox label="Choix A" [value]="false" [inline]="true"></lib-form-checkbox>
            <lib-form-checkbox label="Choix B" [value]="true" [inline]="true"></lib-form-checkbox>
            <lib-form-checkbox label="Choix C" [value]="false" [inline]="true"></lib-form-checkbox>
          </div>
        </div>

        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 12px;">Mode Inversé (Reverse)</h5>
          <div style="max-width: 300px;">
            <lib-form-checkbox label="Label à gauche" [value]="false" [reverse]="true"></lib-form-checkbox>
          </div>
        </div>
      </div>
    `})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: false,
    label: 'J\\'accepte les conditions générales',
    disabled: false,
    switch: false,
    inline: false,
    reverse: false
  },
  render: (args: any) => ({
    props: args,
    template: \`
      <lib-form-checkbox
        [value]="value"
        [label]="label"
        [disabled]="disabled"
        [switch]="switch"
        [inline]="inline"
        [reverse]="reverse">
      </lib-form-checkbox>
    \`
  })
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [CheckboxWithFormHost]
  })],
  render: () => ({
    template: \`<story-checkbox-with-form></story-checkbox-with-form>\`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Chaque case est liée à un \`field\` distinct du même \`form\` — ' + 'l\\'état affiché dans le \`<pre>\` reflète le modèle Signal Forms en temps réel.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  decorators: [moduleMetadata({
    imports: [CheckboxWithoutFormHost]
  })],
  render: () => ({
    template: \`<story-checkbox-without-form></story-checkbox-without-form>\`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Aucun \`[field]\` ici — chaque case est pilotée directement via ' + '\`[value]\`/\`(valueChange)\` sur des signals locaux, démontrant ' + 'l\\'usage isolé du composant.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Par défaut (Décoché)</h5>
          <lib-form-checkbox label="Option non sélectionnée" [value]="false"></lib-form-checkbox>
        </div>

        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Coché</h5>
          <lib-form-checkbox label="Option sélectionnée" [value]="true"></lib-form-checkbox>
        </div>

        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Désactivé (Disabled)</h5>
          <div style="display: flex; gap: 24px;">
            <lib-form-checkbox label="Désactivé non coché" [value]="false" [disabled]="true"></lib-form-checkbox>
            <lib-form-checkbox label="Désactivé coché" [value]="true" [disabled]="true"></lib-form-checkbox>
          </div>
        </div>
      </div>
    \`
  })
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Switch Custom</h5>
          <lib-form-checkbox label="Activer les notifications" [value]="false" [switch]="true"></lib-form-checkbox>
        </div>

        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 8px;">Switch Native Bootstrap</h5>
          <lib-form-checkbox label="Activer le mode sombre" [value]="false" switch="native"></lib-form-checkbox>
        </div>
      </div>
    \`
  })
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 12px;">Mode Inline</h5>
          <div>
            <lib-form-checkbox label="Choix A" [value]="false" [inline]="true"></lib-form-checkbox>
            <lib-form-checkbox label="Choix B" [value]="true" [inline]="true"></lib-form-checkbox>
            <lib-form-checkbox label="Choix C" [value]="false" [inline]="true"></lib-form-checkbox>
          </div>
        </div>

        <div>
          <h5 class="lib-fs-2 lib-ff-bold" style="margin-bottom: 12px;">Mode Inversé (Reverse)</h5>
          <div style="max-width: 300px;">
            <lib-form-checkbox label="Label à gauche" [value]="false" [reverse]="true"></lib-form-checkbox>
          </div>
        </div>
      </div>
    \`
  })
}`,...P.parameters?.docs?.source}}},F=[`Playground`,`WithForm`,`WithoutForm`,`States`,`SwitchVariants`,`LayoutVariants`]}))();export{P as LayoutVariants,D as Playground,M as States,N as SwitchVariants,k as WithForm,j as WithoutForm,F as __namedExportsOrder,E as default};