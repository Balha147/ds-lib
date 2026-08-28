import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,Kn as r,L as i,R as a,Ti as o,W as s,ct as c,et as l,f as u,g as d,j as f,k as p}from"./angular-platform-CkHGXGBq.js";import{i as m,n as h,o as g}from"./signals-C2mKSRCS.js";import{i as _,t as v}from"./dist-_fqtV9zk.js";import{n as y,t as b}from"./public-api-ClneZIDV.js";var x,S=e((()=>{x=`@if (label()) {
<label [for]="id" class="lib-slider__label">
    {{ label() }}
    @if (showValue()) {
    <span class="lib-slider__value">{{ formattedValue() }}</span>
    }
</label>
}

<div class="lib-slider__track-wrapper" [style.--lib-slider-fill.%]="fillPercent()">
    <input #control type="range" class="lib-slider__input" [id]="id" [min]="min()" [max]="max()" [step]="step()"
        [disabled]="disabled()" [readOnly]="readonly()" [value]="value() ?? min()" [attr.aria-label]="ariaLabel()"
        [attr.aria-valuetext]="formattedValue()" (input)="onInput($any($event.target).value)" (focus)="onFocus()"
        (blur)="onBlur()" />

    @if (showTicks()) {
    <div class="lib-slider__ticks">
        @for (tick of ticks(); track tick) {
        <span class="lib-slider__tick"></span>
        }
    </div>
    }
</div>

@if (!noErrorMessages() && isInvalid() && firstErrorMessage()) {
<div class="lib-slider__message lib-slider__message--error">{{ firstErrorMessage() }}</div>
} @else if (hint()) {
<div class="lib-slider__message">{{ hint() }}</div>
}`})),C,w=e((()=>{t(),S(),i(),b(),C=class Slider extends y{min=a(0);max=a(100);step=a(1);showValue=a(!0,{transform:f});showTicks=a(!1,{transform:f});formatValue=a(e=>`${e}`);controlRef=s(`control`);fillPercent=n(()=>{let e=this.value()??this.min(),t=this.max()-this.min();return t<=0?0:(e-this.min())/t*100});formattedValue=n(()=>{let e=this.value()??this.min();return this.formatValue()(e)});ticks=n(()=>{if(!this.showTicks())return[];let e=Math.floor((this.max()-this.min())/this.step());return Array.from({length:e+1},(e,t)=>t)});onInput(e){let t=Number(e);t!==this.value()&&this.value.set(t)}focus(){this.controlRef()?.nativeElement.focus()}static propDecorators={min:[{type:c,args:[{isSignal:!0,alias:`min`,required:!1,transform:void 0}]}],max:[{type:c,args:[{isSignal:!0,alias:`max`,required:!1,transform:void 0}]}],step:[{type:c,args:[{isSignal:!0,alias:`step`,required:!1,transform:void 0}]}],showValue:[{type:c,args:[{isSignal:!0,alias:`showValue`,required:!1,transform:void 0}]}],showTicks:[{type:c,args:[{isSignal:!0,alias:`showTicks`,required:!1,transform:void 0}]}],formatValue:[{type:c,args:[{isSignal:!0,alias:`formatValue`,required:!1,transform:void 0}]}],controlRef:[{type:p,args:[`control`,{isSignal:!0}]}]}},C=o([l({selector:`lib-slider`,template:x,host:{class:`lib-slider`,"[class.lib-slider--disabled]":`disabled()`}})],C)})),T=e((()=>{w()})),E,D,O,k,A,j,M,N,P;e((()=>{t(),u(),i(),m(),v(),T(),E={title:`Forms/Slider`,component:C,tags:[`autodocs`],argTypes:{min:{control:`number`},max:{control:`number`},step:{control:`number`},showValue:{control:`boolean`},showTicks:{control:`boolean`},disabled:{control:`boolean`},label:{control:`text`},value:{control:`number`}},parameters:{docs:{description:{component:`============================================================================\r
Meta\r
============================================================================`}}}},D={args:{value:40,min:0,max:100,step:1,label:`Volume`,showValue:!0}},O=class SliderWithoutFormHost{volume=r(50)},O=o([l({selector:`story-slider-without-form`,standalone:!0,imports:[C,d],template:`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px; padding: 2rem;">
      <lib-slider [(value)]="volume" [min]="0" [max]="100" label="Volume" />

      <pre style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
        "
      >{{
        { volume: volume() } | json
      }}</pre>
    </div>
  `})],O),k={render:()=>({template:`
      <story-slider-without-form />
    `}),decorators:[_({imports:[O]})],parameters:{docs:{description:{story:"Utilisation autonome du Slider via le two-way binding `[(value)]` avec un signal Angular."},source:{type:`code`,language:`html`,code:`<lib-slider
  [(value)]="volume"
  [min]="0"
  [max]="100"
  label="Volume">
</lib-slider>`}}}},A=class SliderWithFormHost{model=r({budget:500});demoForm=g(this.model);formatEuro=e=>`${e??0} €`},A=o([l({selector:`story-slider-with-form`,standalone:!0,imports:[C,h,d],template:`
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 400px;
        padding: 2rem;
      "
    >
      <lib-slider
        [formField]="demoForm.budget"
        [min]="0"
        [max]="2000"
        [step]="50"
        [formatValue]="formatEuro"
        label="Budget mensuel"
      />

      <pre
        style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
        "
      >{{ model() | json }}</pre>
    </div>
  `})],A),j={render:()=>({template:`
      <story-slider-with-form />
    `}),decorators:[_({imports:[A]})],parameters:{docs:{description:{story:'Intégration du Slider avec Angular Signal Forms via `[formField]="demoForm.budget"`.'},source:{type:`code`,language:`html`,code:`<lib-slider
  [formField]="demoForm.budget"
  [min]="0"
  [max]="2000"
  [step]="50"
  [formatValue]="formatEuro"
  label="Budget mensuel">
</lib-slider>`}}}},M={args:{value:3,min:0,max:5,step:1,showTicks:!0,label:`Niveau de priorité`,formatValue:e=>`Niveau ${e}`},parameters:{docs:{description:{story:"Affiche les graduations du Slider avec `showTicks`."},source:{type:`code`,language:`html`,code:`<lib-slider
  [value]="value"
  [min]="0"
  [max]="5"
  [step]="1"
  [showTicks]="true"
  [formatValue]="formatValue"
  label="Niveau de priorité">
</lib-slider>`}}}},N={args:{value:70,min:0,max:100,disabled:!0,label:`Volume (désactivé)`},parameters:{docs:{description:{story:`Le Slider est désactivé et sa valeur ne peut pas être modifiée.`},source:{type:`code`,language:`html`,code:`<lib-slider
  [value]="value"
  [min]="0"
  [max]="100"
  [disabled]="true"
  [label]="label">
</lib-slider>`}}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: 40,
    min: 0,
    max: 100,
    step: 1,
    label: 'Volume',
    showValue: true
  }
}`,...D.parameters?.docs?.source},description:{story:`============================================================================\r
Playground\r
============================================================================`,...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <story-slider-without-form />
    \`
  }),
  decorators: [moduleMetadata({
    imports: [SliderWithoutFormHost]
  })],
  parameters: {
    docs: {
      description: {
        story: 'Utilisation autonome du Slider via le two-way binding ' + '\`[(value)]\` avec un signal Angular.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-slider
  [(value)]="volume"
  [min]="0"
  [max]="100"
  label="Volume">
</lib-slider>
        \`.trim()
      }
    }
  }
}`,...k.parameters?.docs?.source},description:{story:`============================================================================\r
Without Signal Forms\r
============================================================================`,...k.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <story-slider-with-form />
    \`
  }),
  decorators: [moduleMetadata({
    imports: [SliderWithFormHost]
  })],
  parameters: {
    docs: {
      description: {
        story: 'Intégration du Slider avec Angular Signal Forms via ' + '\`[formField]="demoForm.budget"\`.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-slider
  [formField]="demoForm.budget"
  [min]="0"
  [max]="2000"
  [step]="50"
  [formatValue]="formatEuro"
  label="Budget mensuel">
</lib-slider>
        \`.trim()
      }
    }
  }
}`,...j.parameters?.docs?.source},description:{story:`============================================================================\r
With Signal Forms\r
============================================================================`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    min: 0,
    max: 5,
    step: 1,
    showTicks: true,
    label: 'Niveau de priorité',
    formatValue: (value: number): string => \`Niveau \${value}\`
  },
  parameters: {
    docs: {
      description: {
        story: 'Affiche les graduations du Slider avec \`showTicks\`.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-slider
  [value]="value"
  [min]="0"
  [max]="5"
  [step]="1"
  [showTicks]="true"
  [formatValue]="formatValue"
  label="Niveau de priorité">
</lib-slider>
        \`.trim()
      }
    }
  }
}`,...M.parameters?.docs?.source},description:{story:`============================================================================\r
With ticks\r
============================================================================`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    value: 70,
    min: 0,
    max: 100,
    disabled: true,
    label: 'Volume (désactivé)'
  },
  parameters: {
    docs: {
      description: {
        story: 'Le Slider est désactivé et sa valeur ne peut pas être modifiée.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-slider
  [value]="value"
  [min]="0"
  [max]="100"
  [disabled]="true"
  [label]="label">
</lib-slider>
        \`.trim()
      }
    }
  }
}`,...N.parameters?.docs?.source},description:{story:`============================================================================\r
Disabled\r
============================================================================`,...N.parameters?.docs?.description}}},P=[`Playground`,`WithoutForm`,`WithForm`,`WithTicks`,`Disabled`]}))();export{N as Disabled,D as Playground,j as WithForm,M as WithTicks,k as WithoutForm,P as __namedExportsOrder,E as default};