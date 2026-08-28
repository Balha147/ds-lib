import{i as e}from"./preload-helper-G0Y2f6MP.js";import{n as t,t as n}from"./public-api-DdhVy8_M.js";var r,i,a,o,s,c,l,u,d;e((()=>{n(),r={title:`Forms/Input`,component:t,tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`text`,`password`,`email`,`number`,`textarea`]}},parameters:{docs:{description:{component:"Champ de saisie basé sur Signal Forms (`FormValueControl`). `value` est requis — fournissez toujours une valeur initiale, même vide, que ce soit via `[field]` en usage réel ou via les `args` dans Storybook."}}}},i={args:{value:``,label:`Adresse email`,hint:`Nous ne partagerons jamais votre email.`,disabled:!1,readonly:!1,touched:!1,type:`text`}},a={args:{value:`email@`,label:`Email`,touched:!0,errors:[{kind:`email`}]}},o={args:{value:`test@email.com`,label:`Email validé`,touched:!0}},s={args:{value:`Ceci est un message de démonstration.`,label:`Commentaire / Description`,type:`textarea`,hint:`Maximum 500 caractères`}},c={args:{value:`Champ désactivé`,label:`Désactivé`,disabled:!0}},l={args:{value:`Valeur en lecture seule`,label:`Lecture seule`,readonly:!0}},u={render:()=>({imports:[t],template:`
      <div style="display:flex; flex-direction:column; gap:24px; max-width:400px;">
        <lib-form-input [value]="''" label="Champ standard" ></lib-form-input>
        <lib-form-input [value]="'Valeur saisie'" label="Avec valeur" ></lib-form-input>
        
        <!-- Illustration explicite du Textarea -->
        <lib-form-input 
          [value]="'Texte plus long inséré dans une zone de texte multi-lignes...'" 
          type="textarea"
          label="Zone de texte (Textarea)">
        </lib-form-input>

        <lib-form-input
          [value]="'email@'"
          label="Email en erreur"
          [touched]="true"
          [errors]="[{ kind: 'email' }]">
        </lib-form-input>

        <lib-form-input [value]="'Champ désactivé'" label="Désactivé" [disabled]="true"></lib-form-input>
      </div>
    `})},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    label: 'Adresse email',
    hint: 'Nous ne partagerons jamais votre email.',
    disabled: false,
    readonly: false,
    touched: false,
    type: 'text'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'email@',
    label: 'Email',
    touched: true,
    errors: [{
      kind: 'email'
    } as never]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'test@email.com',
    label: 'Email validé',
    touched: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Ceci est un message de démonstration.',
    label: 'Commentaire / Description',
    type: 'textarea',
    hint: 'Maximum 500 caractères'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Champ désactivé',
    label: 'Désactivé',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Valeur en lecture seule',
    label: 'Lecture seule',
    readonly: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    imports: [FormInput],
    template: \`
      <div style="display:flex; flex-direction:column; gap:24px; max-width:400px;">
        <lib-form-input [value]="''" label="Champ standard" ></lib-form-input>
        <lib-form-input [value]="'Valeur saisie'" label="Avec valeur" ></lib-form-input>
        
        <!-- Illustration explicite du Textarea -->
        <lib-form-input 
          [value]="'Texte plus long inséré dans une zone de texte multi-lignes...'" 
          type="textarea"
          label="Zone de texte (Textarea)">
        </lib-form-input>

        <lib-form-input
          [value]="'email@'"
          label="Email en erreur"
          [touched]="true"
          [errors]="[{ kind: 'email' }]">
        </lib-form-input>

        <lib-form-input [value]="'Champ désactivé'" label="Désactivé" [disabled]="true"></lib-form-input>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`WithError`,`Success`,`Textarea`,`Disabled`,`ReadOnly`,`AllStates`]}))();export{u as AllStates,c as Disabled,i as Playground,l as ReadOnly,o as Success,s as Textarea,a as WithError,d as __namedExportsOrder,r as default};