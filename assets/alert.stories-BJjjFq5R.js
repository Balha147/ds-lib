import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,L as n,R as r,Ti as i,U as a,V as o,ct as s,et as c,j as l,pt as u}from"./angular-platform-CkHGXGBq.js";import{i as d,n as f,t as p}from"./public-api-CB813VaT.js";var m,h=e((()=>{m=`@if (visible()) {
<div class="alert lib-alert-{{ type() }}" [class.alert-dismissible]="dismissible()">
    @if (icon(); as iconName) {
    <lib-icon [name]="iconName" size="sm" class="lib-alert__icon" aria-hidden="true" />
    }

    <div class="alert-content lib-ff-regular">
        <ng-content></ng-content>
    </div>

    @if (dismissible()) {
    <button type="button" class="lib-alert__close" aria-label="Fermer" (click)="onClose()">
        <lib-icon name="libicon-close" size="sm" aria-hidden="true" />
    </button>
    }
</div>
}`})),g,_=e((()=>{t(),h(),n(),p(),g=class Alert{type=r(`light`);icon=r();visible=o(!0);dismissible=r(!1,{transform:l});closed=a();onClose(){this.visible.set(!1),this.closed.emit()}static propDecorators={type:[{type:s,args:[{isSignal:!0,alias:`type`,required:!1,transform:void 0}]}],icon:[{type:s,args:[{isSignal:!0,alias:`icon`,required:!1,transform:void 0}]}],visible:[{type:s,args:[{isSignal:!0,alias:`visible`,required:!1}]},{type:u,args:[`visibleChange`]}],dismissible:[{type:s,args:[{isSignal:!0,alias:`dismissible`,required:!1,transform:void 0}]}],closed:[{type:u,args:[`closed`]}]}},g=i([c({selector:`lib-alert`,template:m,imports:[d]})],g)})),v=e((()=>{})),y=e((()=>{_(),v()})),b,x,S,C,w,T;e((()=>{p(),y(),b={title:`Components/Alert`,component:g,tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`light`,`success`,`danger`,`warning`,`info`],description:`Détermine la variante visuelle de l'alerte.`},icon:{control:`select`,options:[void 0,...f],description:`Nom de l'icône d'illustration optionnelle.`},dismissible:{control:`boolean`,description:`Affiche un bouton de fermeture (icône close).`},visible:{control:`boolean`,description:`Signal gérant l'état d'affichage de l'alerte.`}}},x={args:{type:`info`,dismissible:!1,visible:!0},render:e=>({props:e,template:`
      <lib-alert [type]="type" [dismissible]="dismissible" [(visible)]="visible">
        <span>Ceci est une alerte d'information simple.</span>
      </lib-alert>
    `})},S={args:{type:`success`,icon:`libicon-check`,dismissible:!1,visible:!0},render:e=>({props:e,template:`
      <lib-alert [type]="type" [icon]="icon" [dismissible]="dismissible" [(visible)]="visible">
        L'opération a été effectuée avec succès !
      </lib-alert>
    `})},C={args:{type:`warning`,icon:`libicon-cercle-information`,dismissible:!0,visible:!0},render:e=>({props:e,template:`
      <lib-alert [type]="type" [icon]="icon" [dismissible]="dismissible" [(visible)]="visible">
        Attention, vous avez des modifications non enregistrées.
      </lib-alert>
    `}),parameters:{docs:{description:{story:'Utilise le composant `<lib-icon name="close" />` interne pour le bouton de fermeture.'}}}},w={render:()=>({template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <lib-alert type="light">Alerte variante Light</lib-alert>
        <lib-alert type="info" dismissible>Alerte variante Information</lib-alert>
        <lib-alert type="success" icon="libicon-check" dismissible>Alerte variante Succès</lib-alert>
        <lib-alert type="warning" icon="libicon-ampoule" dismissible>Alerte variante Avertissement</lib-alert>
        <lib-alert type="danger" dismissible>Alerte variante Danger / Erreur</lib-alert>
      </div>
    `}),parameters:{docs:{description:{story:`Aperçu de toutes les déclinaisons de couleurs basées sur les tokens du Design System.`}}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    dismissible: false,
    visible: true
  },
  render: (args: any) => ({
    props: args,
    template: \`
      <lib-alert [type]="type" [dismissible]="dismissible" [(visible)]="visible">
        <span>Ceci est une alerte d'information simple.</span>
      </lib-alert>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    icon: 'libicon-check',
    dismissible: false,
    visible: true
  },
  render: (args: any) => ({
    props: args,
    template: \`
      <lib-alert [type]="type" [icon]="icon" [dismissible]="dismissible" [(visible)]="visible">
        L'opération a été effectuée avec succès !
      </lib-alert>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    icon: 'libicon-cercle-information',
    dismissible: true,
    visible: true
  },
  render: (args: any) => ({
    props: args,
    template: \`
      <lib-alert [type]="type" [icon]="icon" [dismissible]="dismissible" [(visible)]="visible">
        Attention, vous avez des modifications non enregistrées.
      </lib-alert>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Utilise le composant \`<lib-icon name="close" />\` interne pour le bouton de fermeture.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <lib-alert type="light">Alerte variante Light</lib-alert>
        <lib-alert type="info" dismissible>Alerte variante Information</lib-alert>
        <lib-alert type="success" icon="libicon-check" dismissible>Alerte variante Succès</lib-alert>
        <lib-alert type="warning" icon="libicon-ampoule" dismissible>Alerte variante Avertissement</lib-alert>
        <lib-alert type="danger" dismissible>Alerte variante Danger / Erreur</lib-alert>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Aperçu de toutes les déclinaisons de couleurs basées sur les tokens du Design System.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithIcon`,`Dismissible`,`AllTypes`]}))();export{w as AllTypes,x as Default,C as Dismissible,S as WithIcon,T as __namedExportsOrder,b as default};