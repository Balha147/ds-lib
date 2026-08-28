import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,Kn as n,L as r,R as i,St as a,Ti as o,W as s,ct as c,et as l,f as u,g as d,h as f,k as ee}from"./angular-platform-CkHGXGBq.js";import{i as p,t as m}from"./public-api-CB813VaT.js";import{i as h,n as g,o as _}from"./signals-C2mKSRCS.js";import{i as te,t as v}from"./dist-_fqtV9zk.js";import{n as y,t as b}from"./public-api-ClneZIDV.js";import{a as x,c as S,d as C,i as ne,l as re,n as w,o as T,r as E,u as D}from"./datepicker-CSVnXJnq.js";import{B as O,l as k,n as A,o as j,s as M,t as N}from"./public-api-CpgCs3-l.js";var P,F=e((()=>{P=`<div class="lib-input-field" [class.lib-input-field--error]="isInvalid()" [class.lib-input-field--success]="isValid()">

    <div class="lib-input-field__wrapper">
        <mat-date-range-input class="lib-input-field__control lib-input-field__control--range" [id]="id"
            [rangePicker]="picker" [disabled]="disabled()" [attr.aria-label]="ariaLabel()">

            <input #startInput libFlexibleDateInput matStartDate [placeholder]="placeholders().start"
                [value]="value()?.start" [readOnly]="readonly()" (dateParsed)="onDateChange('start', $event)"
                (dateInput)="onDateChange('start', $event.value ?? null)" (focus)="onFocus()" (blur)="onBlur()" />

            <input matEndDate libFlexibleDateInput [placeholder]="placeholders().end" [value]="value()?.end"
                [readOnly]="readonly()" (dateParsed)="onDateChange('end', $event)"
                (dateInput)="onDateChange('end', $event.value ?? null)" (focus)="onFocus()" (blur)="onBlur()" />
        </mat-date-range-input>

        @if (label()) {
        <label [for]="id" class="lib-input-field__label">{{ label() }}</label>
        }

        <div class="lib-input-field__suffix">
            <button type="button" class="lib-button-unstyled" [disabled]="disabled()" (click)="openPicker(picker)">
                <lib-icon name="libicon-calendrier" aria-hidden="true"></lib-icon>
            </button>
        </div>
    </div>

    @if (!noErrorMessages() && isInvalid()) {
    <div class="lib-input-field__message lib-input-field__message--error">
        {{ firstErrorMessage() }}
    </div>
    } @else if (hint()) {
    <div class="lib-input-field__message">
        {{ hint() }}
    </div>
    }
</div>

<mat-date-range-picker #picker (closed)="onBlur()"></mat-date-range-picker>`})),I,L=e((()=>{I=`.lib-input-field__control--range{gap:.5rem;display:flex}.lib-input-field__control--range ::ng-deep input{background:0 0;border:none;outline:none;width:100%}`})),R,z=e((()=>{t(),F(),L(),r(),k(),j(),S(),E(),T(),m(),b(),N(),R=class DatepickerRange extends y{placeholders=i({start:``,end:``});startInputRef=s(`startInput`);onDateChange(e,t){let n={...this.value(),[e]:t};n.start&&n.end&&O(n.start,n.end)===1&&(n.end=null),this.value.set(n)}openPicker(e){this.readonly()||this.disabled()||e.open()}focus(){this.startInputRef()?.nativeElement.focus()}static propDecorators={placeholders:[{type:c,args:[{isSignal:!0,alias:`placeholders`,required:!1,transform:void 0}]}],startInputRef:[{type:ee,args:[`startInput`,{isSignal:!0}]}]}},R=o([l({selector:`lib-form-date-range-picker`,template:P,encapsulation:a.None,host:{class:`lib-form-container`},imports:[w,p,A],providers:[{provide:C,useValue:M},{provide:re,useClass:ne,deps:[C]},{provide:D,useValue:x}],styles:[I]})],R)})),B=e((()=>{})),V=e((()=>{})),H=e((()=>{z(),B(),V()})),docsSource,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{t(),v(),r(),u(),h(),H(),docsSource=e=>({parameters:{docs:{source:{language:`html`,code:e.trim()}}}}),U=class DateRangeWithFormHost{model=n({bookingPeriod:{start:new Date(`2026-07-01`),end:new Date(`2026-07-15`)}});placeholders={start:`Du (JJ/MM/AAAA)`,end:`Au (JJ/MM/AAAA)`};demoForm=_(this.model)},U=o([l({selector:`story-date-range-with-form`,imports:[R,g,d,f],template:`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 450px; padding: 2rem;">
      <lib-form-date-range-picker
        [formField]="demoForm.bookingPeriod"
        [placeholders]="placeholders"
        label="Période de réservation"
        hint="Sélectionnez une date de début et une date de fin">
      </lib-form-date-range-picker>

      <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
        <strong>Form Model Value:</strong>
        <pre style="margin: 8px 0 0 0;">{{ { 
          start: (model().bookingPeriod.start | date:'yyyy-MM-dd') ?? null,
          end: (model().bookingPeriod.end | date:'yyyy-MM-dd') ?? null
        } | json }}</pre>
      </div>
    </div>
  `})],U),W=class DateRangeWithErrorHost{model=n({bookingPeriod:{start:new Date(`2026-07-01`),end:null}});placeholders={start:`Début`,end:`Fin`};demoForm=_(this.model);isInvalid(){let e=this.model().bookingPeriod;return!e.start||!e.end}getErrors(){let e=this.model().bookingPeriod;return e.start?e.end?[]:[{kind:`dateRange`,message:`La date de fin doit également être renseignée.`}]:[{kind:`dateRange`,message:`La date de début doit également être renseignée.`}]}},W=o([l({selector:`story-date-range-with-error`,imports:[R,g,d],template:`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 450px; padding: 2rem;">
      <lib-form-date-range-picker
        [formField]="demoForm.bookingPeriod"
        [placeholders]="placeholders"
        [touched]="true"
        [invalid]="isInvalid()"
        [errors]="getErrors()"
        label="Période obligatoire"
        hint="Sélectionnez une plage complète dans le calendrier">
      </lib-form-date-range-picker>

      <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
        <strong>Validation State:</strong>
        <pre style="margin: 8px 0 0 0;">{{ { 
          hasStart: !!model().bookingPeriod.start,
          hasEnd: !!model().bookingPeriod.end,
          isInvalid: isInvalid(),
          errorMessage: getErrors()[0]?.message ?? null
        } | json }}</pre>
      </div>
    </div>
  `})],W),G=class DateRangeWithoutFormHost{selectedRange=n({start:new Date(`2026-08-01`),end:new Date(`2026-08-10`)});label=`Séjour vacances`;hint=`Format : JJ/MM/AAAA`;disabled=!1;readonly=!1;placeholders={start:`Arrivée`,end:`Départ`}},G=o([l({selector:`story-date-range-without-form`,imports:[R,d,f],template:`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 450px; padding: 2rem;">
      <lib-form-date-range-picker
        [(value)]="selectedRange"
        [label]="label"
        [placeholders]="placeholders"
        [hint]="hint"
        [disabled]="disabled"
        [readonly]="readonly">
      </lib-form-date-range-picker>

      <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
        <strong>Signal Value:</strong>
        <pre style="margin: 8px 0 0 0;">{{ { 
          start: (selectedRange()?.start | date:'yyyy-MM-dd') ?? null,
          end: (selectedRange()?.end | date:'yyyy-MM-dd') ?? null
        } | json }}</pre>
      </div>
    </div>
  `})],G),K=class DateRangeStateHost{readonly=i(!1);disabled=i(!1);label=i(``);hint=i(``);rangeValue=n({start:new Date(`2026-07-01`),end:new Date(`2026-07-15`)});placeholders={start:`Début`,end:`Fin`};static propDecorators={readonly:[{type:c,args:[{isSignal:!0,alias:`readonly`,required:!1,transform:void 0}]}],disabled:[{type:c,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],label:[{type:c,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],hint:[{type:c,args:[{isSignal:!0,alias:`hint`,required:!1,transform:void 0}]}]}},K=o([l({selector:`story-date-range-state-host`,imports:[R],template:`
    <div style="padding: 2rem; max-width: 450px;">
      <lib-form-date-range-picker
        [(value)]="rangeValue"
        [readonly]="readonly()"
        [disabled]="disabled()"
        [label]="label()"
        [hint]="hint()"
        [placeholders]="placeholders">
      </lib-form-date-range-picker>
    </div>
  `})],K),q={title:`Forms/Datepicker Range`,component:R,tags:[`autodocs`],decorators:[te({imports:[R,U,W,G,K]})],parameters:{docs:{description:{component:`Date range picker supporting both Angular Signal Forms and standalone
two-way signal binding.

The component supports:

- Signal Forms integration through \`formField\`
- Standalone usage through \`[(value)]\`
- Disabled state
- Readonly state
- Custom placeholders
- Validation state
- Start/end date values`}}}},J={render:()=>({template:`<story-date-range-with-form />`}),...docsSource(`
<lib-form-date-range-picker
  [formField]="demoForm.bookingPeriod"
  [placeholders]="placeholders"
  label="Période de réservation"
  hint="Sélectionnez une date de début et une date de fin">
</lib-form-date-range-picker>
  `)},Y={render:()=>({template:`<story-date-range-with-error />`}),...docsSource(`
<lib-form-date-range-picker
  [formField]="demoForm.bookingPeriod"
  [placeholders]="placeholders"
  [touched]="true"
  [invalid]="isInvalid()"
  [errors]="getErrors()"
  label="Période obligatoire"
  hint="Sélectionnez une plage complète dans le calendrier">
</lib-form-date-range-picker>
  `)},X={render:()=>({template:`<story-date-range-without-form />`}),...docsSource(`
<lib-form-date-range-picker
  [(value)]="selectedRange"
  [label]="label"
  [placeholders]="placeholders"
  [hint]="hint"
  [disabled]="disabled"
  [readonly]="readonly">
</lib-form-date-range-picker>
  `)},Z={render:()=>({template:`
      <story-date-range-state-host
        [readonly]="true"
        label="Période verrouillée (Readonly)"
        hint="Cette valeur ne peut pas être modifiée">
      </story-date-range-state-host>
    `}),...docsSource(`
<lib-form-date-range-picker
  [(value)]="rangeValue"
  [readonly]="true"
  [label]="label"
  [hint]="hint"
  [placeholders]="placeholders">
</lib-form-date-range-picker>
  `)},Q={render:()=>({template:`
      <story-date-range-state-host
        [disabled]="true"
        label="Période indisponible (Disabled)"
        hint="Le champ est désactivé">
      </story-date-range-state-host>
    `}),...docsSource(`
<lib-form-date-range-picker
  [(value)]="rangeValue"
  [disabled]="true"
  [label]="label"
  [hint]="hint"
  [placeholders]="placeholders">
</lib-form-date-range-picker>
  `)},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-date-range-with-form />\`
  }),
  ...docsSource(\`
<lib-form-date-range-picker
  [formField]="demoForm.bookingPeriod"
  [placeholders]="placeholders"
  label="Période de réservation"
  hint="Sélectionnez une date de début et une date de fin">
</lib-form-date-range-picker>
  \`)
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-date-range-with-error />\`
  }),
  ...docsSource(\`
<lib-form-date-range-picker
  [formField]="demoForm.bookingPeriod"
  [placeholders]="placeholders"
  [touched]="true"
  [invalid]="isInvalid()"
  [errors]="getErrors()"
  label="Période obligatoire"
  hint="Sélectionnez une plage complète dans le calendrier">
</lib-form-date-range-picker>
  \`)
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-date-range-without-form />\`
  }),
  ...docsSource(\`
<lib-form-date-range-picker
  [(value)]="selectedRange"
  [label]="label"
  [placeholders]="placeholders"
  [hint]="hint"
  [disabled]="disabled"
  [readonly]="readonly">
</lib-form-date-range-picker>
  \`)
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <story-date-range-state-host
        [readonly]="true"
        label="Période verrouillée (Readonly)"
        hint="Cette valeur ne peut pas être modifiée">
      </story-date-range-state-host>
    \`
  }),
  ...docsSource(\`
<lib-form-date-range-picker
  [(value)]="rangeValue"
  [readonly]="true"
  [label]="label"
  [hint]="hint"
  [placeholders]="placeholders">
</lib-form-date-range-picker>
  \`)
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <story-date-range-state-host
        [disabled]="true"
        label="Période indisponible (Disabled)"
        hint="Le champ est désactivé">
      </story-date-range-state-host>
    \`
  }),
  ...docsSource(\`
<lib-form-date-range-picker
  [(value)]="rangeValue"
  [disabled]="true"
  [label]="label"
  [hint]="hint"
  [placeholders]="placeholders">
</lib-form-date-range-picker>
  \`)
}`,...Q.parameters?.docs?.source}}},$=[`WithSignalForms`,`WithValidationError`,`StandaloneWithoutForm`,`Readonly`,`Disabled`]}))();export{Q as Disabled,Z as Readonly,X as StandaloneWithoutForm,J as WithSignalForms,Y as WithValidationError,$ as __namedExportsOrder,q as default};