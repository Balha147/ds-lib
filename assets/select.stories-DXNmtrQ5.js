import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,Hn as n,Kn as r,L as i,R as a,Ti as o,Tn as s,ct as c,et as l,f as u,g as d,yt as f,z as p}from"./angular-platform-CkHGXGBq.js";import{a as m,i as h,n as g,o as _}from"./signals-C2mKSRCS.js";import{i as v,t as y}from"./dist-_fqtV9zk.js";import{i as b,n as x,t as S}from"./public-api-BnCkdoK3.js";var C,w,T,E=e((()=>{t(),i(),C=`lib-flag-sprite`,w=`assets/flags/flags-sprite.svg`,T=class FlagSpriteService{document=n(s);status;ensureInjected(){if(this.status===!0||this.document.getElementById(C)){this.status=!0;return}if(this.status===!1)return;let e=new URL(w,this.document.baseURI).href;fetch(e).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status} ${e.statusText}`);return e.text()}).then(e=>{this.injectSprite(e),this.status=!0}).catch(t=>{this.status=!1,p()&&console.error(`[lib-flag] Impossible de charger le sprite de drapeaux depuis "${e}".`,t)})}injectSprite(e){if(this.document.getElementById(C))return;let t=new DOMParser().parseFromString(e,`image/svg+xml`).documentElement;if(t.nodeName.toLowerCase()!==`svg`)throw Error(`Invalid flag sprite: root element is not <svg>.`);let n=this.document.createElement(`div`);n.id=C,n.style.position=`absolute`,n.style.width=`0`,n.style.height=`0`,n.style.overflow=`hidden`;let r=this.document.importNode(t,!0);n.appendChild(r),this.document.body.prepend(n)}},T=o([f()],T)})),D,O=e((()=>{t(),i(),E(),D=class Flag{sprite=n(T);code=a.required();size=a(`md`);label=a();constructor(){this.sprite.ensureInjected()}static ctorParameters=()=>[];static propDecorators={code:[{type:c,args:[{isSignal:!0,alias:`code`,required:!0,transform:void 0}]}],size:[{type:c,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}],label:[{type:c,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}]}},D=o([l({selector:`lib-flag`,template:`
    <svg [attr.aria-label]="label()" [attr.role]="label() ? 'img' : null" [attr.aria-hidden]="!label()">
      <use [attr.href]="'#flag-' + code()"></use>
    </svg>
  `,host:{class:`lib-flag`,"[class]":`"lib-flag--" + size()`}})],D)})),k=e((()=>{})),A=e((()=>{O(),E(),k()})),j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{t(),u(),i(),h(),y(),S(),A(),j=[{value:`fr`,label:`France`},{value:`be`,label:`Belgique`},{value:`ch`,label:`Suisse`},{value:`ca`,label:`Canada`},{value:`lu`,label:`Luxembourg`},{value:`de`,label:`Allemagne`},{value:`es`,label:`Espagne`}],M={title:`Forms/Select`,component:x,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},hint:{control:`text`},disabled:{control:`boolean`},readonly:{control:`boolean`},autocomplete:{control:`boolean`},fuzzySearch:{control:`boolean`},searchMaxDistance:{control:`number`},allowUncheck:{control:`boolean`},noErrorMessages:{control:`boolean`}},parameters:{docs:{description:{component:`Select component supporting standard selection, autocomplete,
fuzzy search, Signal Forms integration and custom option templates.

The component emits a complete \`{ code, label }\` value.`}}}},N=class ClassicVsFuzzyHost{items=j},N=o([l({selector:`story-select-classic-vs-fuzzy`,standalone:!0,imports:[x],template:`
    <div
      style="
        display: flex;
        gap: 24px;
        max-width: 800px;
        padding: 2rem;
      "
    >
      <div
        style="
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        "
      >
        <h4
          style="
            margin: 0;
            font-size: 15px;
            color: #333;
          "
        >
          Recherche Classique (Sous-chaîne)
        </h4>

        <p
          style="
            margin: 0;
            font-size: 12px;
            color: #666;
          "
        >
          Exige une correspondance exacte.
          Tapez <code>"Luxemburg"</code> ou
          <code>"Sisse"</code> : aucun résultat.
        </p>

        <lib-form-select
          [items]="items"
          [autocomplete]="true"
          [fuzzySearch]="false"
          label="Pays"
          placeholder="Saisissez un pays..."
          hint="Recherche sous-chaîne standard"
        />
      </div>

      <div
        style="
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        "
      >
        <h4
          style="
            margin: 0;
            font-size: 15px;
            color: #333;
          "
        >
          Recherche Fuzzy (Tolérance aux fautes)
        </h4>

        <p
          style="
            margin: 0;
            font-size: 12px;
            color: #666;
          "
        >
          Tolère les fautes de frappe.
          Tapez <code>"Luxemburg"</code>
          &rarr; trouve <strong>Luxembourg</strong>.
        </p>

        <lib-form-select
          [items]="items"
          [autocomplete]="true"
          [fuzzySearch]="true"
          label="Pays"
          placeholder="Saisissez un pays..."
          hint="Algorithme Levenshtein actif"
        />
      </div>
    </div>
  `})],N),P={render:()=>({template:`
      <story-select-classic-vs-fuzzy />
    `}),decorators:[v({imports:[N]})],parameters:{docs:{description:{story:"Comparaison côte à côte de la recherche par sous-chaîne classique versus la recherche Fuzzy basée sur la distance de Levenshtein. Testez des mots avec fautes de frappe comme `Luxemburg`, `Suis` ou `Almagne`."},source:{type:`code`,language:`html`,code:`<div style="display: flex; gap: 24px; max-width: 800px;">
  <lib-form-select
    [items]="items"
    [autocomplete]="true"
    [fuzzySearch]="false"
    label="Pays"
    placeholder="Saisissez un pays..."
    hint="Recherche sous-chaîne standard">
  </lib-form-select>

  <lib-form-select
    [items]="items"
    [autocomplete]="true"
    [fuzzySearch]="true"
    label="Pays"
    placeholder="Saisissez un pays..."
    hint="Algorithme Levenshtein actif">
  </lib-form-select>
</div>`}}}},F=class SelectWithoutFormHost{items=j;selectedCountry=r({code:`fr`,label:`France`})},F=o([l({selector:`story-select-without-form`,standalone:!0,imports:[x,d],template:`
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 400px;
        padding: 2rem;
      "
    >
      <lib-form-select
        [(value)]="selectedCountry"
        [items]="items"
        label="Pays"
        hint="Choisissez dans la liste"
      />

      <div
        style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
        "
      >
        <strong>Signal Value (code, label):</strong>

        <pre style="margin: 8px 0 0 0;">{{
          {
            selectedCountry: selectedCountry()
          } | json
        }}</pre>
      </div>
    </div>
  `})],F),I={render:()=>({template:`
      <story-select-without-form />
    `}),decorators:[v({imports:[F]})],parameters:{docs:{description:{story:'Utilisation autonome via le two-way binding `[(value)]="selectedCountry"`, sans Signal Forms. La valeur émise est un objet `{ code, label }` complet.'},source:{type:`code`,language:`html`,code:`<lib-form-select
  [(value)]="selectedCountry"
  [items]="items"
  label="Pays"
  hint="Choisissez dans la liste">
</lib-form-select>`}}}},L=class SelectWithFormHost{items=j;model=r({country:{code:`fr`,label:`France`}});demoForm=_(this.model)},L=o([l({selector:`story-select-with-form`,standalone:!0,imports:[x,g,d],template:`
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 400px;
        padding: 2rem;
      "
    >
      <lib-form-select
        [formField]="demoForm.country"
        [items]="items"
        label="Pays"
        hint="Choisissez dans la liste"
      />

      <div
        style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
        "
      >
        <strong>Form Model Value:</strong>

        <pre style="margin: 8px 0 0 0;">{{
          model() | json
        }}</pre>
      </div>
    </div>
  `})],L),R={render:()=>({template:`
      <story-select-with-form />
    `}),decorators:[v({imports:[L]})],parameters:{docs:{description:{story:'Intégration directe avec Angular Signal Forms via `[formField]="demoForm.country"`.'},source:{type:`code`,language:`html`,code:`<lib-form-select
  [formField]="demoForm.country"
  [items]="items"
  label="Pays"
  hint="Choisissez dans la liste">
</lib-form-select>`}}}},z=class SelectWithErrorHost{items=j;model=r({country:null});demoForm=_(this.model,e=>{m(e.country,{message:`Le pays est obligatoire.`})});constructor(){this.demoForm.country().markAsTouched()}static ctorParameters=()=>[]},z=o([l({selector:`story-select-with-error`,standalone:!0,imports:[x,g,d],template:`
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 400px;
        padding: 2rem;
      "
    >
      <lib-form-select
        [formField]="demoForm.country"
        [items]="items"
        label="Pays (obligatoire)"
        hint="Ce champ doit être renseigné"
      />

      <div
        style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
        "
      >
        <strong>Validation State:</strong>

        <pre style="margin: 8px 0 0 0;">{{
          {
            country: model().country,
            invalid: demoForm.country().invalid(),
            touched: demoForm.country().touched()
          } | json
        }}</pre>
      </div>
    </div>
  `})],z),B={render:()=>({template:`
      <story-select-with-error />
    `}),decorators:[v({imports:[z]})],parameters:{docs:{description:{story:"Validation réelle via `required(...)` sur le FieldTree."},source:{type:`code`,language:`html`,code:`<lib-form-select
  [formField]="demoForm.country"
  [items]="items"
  label="Pays (obligatoire)"
  hint="Ce champ doit être renseigné">
</lib-form-select>`}}}},V=class SelectWithFlagsHost{items=[{code:`fr`,label:`France`},{code:`be`,label:`Belgique`},{code:`ch`,label:`Suisse`},{code:`ca`,label:`Canada`},{code:`lu`,label:`Luxembourg`}];selected=r({code:`fr`,label:`France`})},V=o([l({selector:`story-select-with-flags`,standalone:!0,imports:[x,b,D,d],template:`
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 400px;
        padding: 2rem;
      "
    >
      <lib-form-select
        [(value)]="selected"
        label="Pays"
        templatePosition="before"
      >
        @for (item of items; track item.code) {
          <ng-template
            libFormSelectItem
            [value]="item.code"
            [label]="item.label"
          >
            <lib-flag
              [code]="item.code"
              size="sm"
              class="me-2"
            />
          </ng-template>
        }
      </lib-form-select>

      <pre
        style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
        "
      >{{ { selected: selected() } | json }}</pre>
    </div>
  `})],V),H={render:()=>({template:`
      <story-select-with-flags />
    `}),decorators:[v({imports:[V]})],parameters:{docs:{description:{story:"Utilise `lib-flag` au lieu d'émojis pour afficher le drapeau de chaque option."},source:{type:`code`,language:`html`,code:`<lib-form-select
  [(value)]="selected"
  label="Pays"
  templatePosition="before">

  @for (item of items; track item.code) {
    <ng-template
      libFormSelectItem
      [value]="item.code"
      [label]="item.label">

      <lib-flag
        [code]="item.code"
        size="sm"
        class="me-2">
      </lib-flag>

    </ng-template>
  }

</lib-form-select>`}}}},U={args:{value:{code:`fr`,label:`France`},items:j,label:`Pays (désactivé)`,disabled:!0,hint:`Ce champ ne peut pas être modifié`},parameters:{docs:{description:{story:`Le Select est désactivé et ne peut pas être modifié.`},source:{type:`code`,language:`html`,code:`<lib-form-select
  [value]="{ code: 'fr', label: 'France' }"
  [items]="items"
  [disabled]="true"
  label="Pays (désactivé)"
  hint="Ce champ ne peut pas être modifié">
</lib-form-select>`}}}},W={args:{value:{code:`be`,label:`Belgique`},items:j,label:`Pays (lecture seule)`,readonly:!0,hint:`Consultation uniquement`},parameters:{docs:{description:{story:`Le Select est en lecture seule. Sa valeur peut être consultée mais ne peut pas être modifiée.`},source:{type:`code`,language:`html`,code:`<lib-form-select
  [value]="{ code: 'be', label: 'Belgique' }"
  [items]="items"
  [readonly]="true"
  label="Pays (lecture seule)"
  hint="Consultation uniquement">
</lib-form-select>`}}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <story-select-classic-vs-fuzzy />
    \`
  }),
  decorators: [moduleMetadata({
    imports: [ClassicVsFuzzyHost]
  })],
  parameters: {
    docs: {
      description: {
        story: 'Comparaison côte à côte de la recherche par sous-chaîne classique ' + 'versus la recherche Fuzzy basée sur la distance de Levenshtein. ' + 'Testez des mots avec fautes de frappe comme \`Luxemburg\`, \`Suis\` ' + 'ou \`Almagne\`.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<div style="display: flex; gap: 24px; max-width: 800px;">
  <lib-form-select
    [items]="items"
    [autocomplete]="true"
    [fuzzySearch]="false"
    label="Pays"
    placeholder="Saisissez un pays..."
    hint="Recherche sous-chaîne standard">
  </lib-form-select>

  <lib-form-select
    [items]="items"
    [autocomplete]="true"
    [fuzzySearch]="true"
    label="Pays"
    placeholder="Saisissez un pays..."
    hint="Algorithme Levenshtein actif">
  </lib-form-select>
</div>
        \`.trim()
      }
    }
  }
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <story-select-without-form />
    \`
  }),
  decorators: [moduleMetadata({
    imports: [SelectWithoutFormHost]
  })],
  parameters: {
    docs: {
      description: {
        story: 'Utilisation autonome via le two-way binding ' + '\`[(value)]="selectedCountry"\`, sans Signal Forms. ' + 'La valeur émise est un objet \`{ code, label }\` complet.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-form-select
  [(value)]="selectedCountry"
  [items]="items"
  label="Pays"
  hint="Choisissez dans la liste">
</lib-form-select>
        \`.trim()
      }
    }
  }
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <story-select-with-form />
    \`
  }),
  decorators: [moduleMetadata({
    imports: [SelectWithFormHost]
  })],
  parameters: {
    docs: {
      description: {
        story: 'Intégration directe avec Angular Signal Forms via ' + '\`[formField]="demoForm.country"\`.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-form-select
  [formField]="demoForm.country"
  [items]="items"
  label="Pays"
  hint="Choisissez dans la liste">
</lib-form-select>
        \`.trim()
      }
    }
  }
}`,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <story-select-with-error />
    \`
  }),
  decorators: [moduleMetadata({
    imports: [SelectWithErrorHost]
  })],
  parameters: {
    docs: {
      description: {
        story: 'Validation réelle via \`required(...)\` sur le FieldTree.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-form-select
  [formField]="demoForm.country"
  [items]="items"
  label="Pays (obligatoire)"
  hint="Ce champ doit être renseigné">
</lib-form-select>
        \`.trim()
      }
    }
  }
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <story-select-with-flags />
    \`
  }),
  decorators: [moduleMetadata({
    imports: [SelectWithFlagsHost]
  })],
  parameters: {
    docs: {
      description: {
        story: "Utilise \`lib-flag\` au lieu d'émojis pour afficher le drapeau " + 'de chaque option.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-form-select
  [(value)]="selected"
  label="Pays"
  templatePosition="before">

  @for (item of items; track item.code) {
    <ng-template
      libFormSelectItem
      [value]="item.code"
      [label]="item.label">

      <lib-flag
        [code]="item.code"
        size="sm"
        class="me-2">
      </lib-flag>

    </ng-template>
  }

</lib-form-select>
        \`.trim()
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      code: 'fr',
      label: 'France'
    },
    items: COUNTRY_ITEMS,
    label: 'Pays (désactivé)',
    disabled: true,
    hint: 'Ce champ ne peut pas être modifié'
  },
  parameters: {
    docs: {
      description: {
        story: 'Le Select est désactivé et ne peut pas être modifié.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-form-select
  [value]="{ code: 'fr', label: 'France' }"
  [items]="items"
  [disabled]="true"
  label="Pays (désactivé)"
  hint="Ce champ ne peut pas être modifié">
</lib-form-select>
        \`.trim()
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      code: 'be',
      label: 'Belgique'
    },
    items: COUNTRY_ITEMS,
    label: 'Pays (lecture seule)',
    readonly: true,
    hint: 'Consultation uniquement'
  },
  parameters: {
    docs: {
      description: {
        story: 'Le Select est en lecture seule. Sa valeur peut être consultée ' + 'mais ne peut pas être modifiée.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-form-select
  [value]="{ code: 'be', label: 'Belgique' }"
  [items]="items"
  [readonly]="true"
  label="Pays (lecture seule)"
  hint="Consultation uniquement">
</lib-form-select>
        \`.trim()
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G=[`ClassicVsFuzzy`,`WithoutForm`,`WithForm`,`WithError`,`WithFlags`,`Disabled`,`Readonly`]}))();export{P as ClassicVsFuzzy,U as Disabled,W as Readonly,B as WithError,H as WithFlags,R as WithForm,I as WithoutForm,G as __namedExportsOrder,M as default};