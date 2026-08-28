import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,L as r,R as i,Ti as a,ct as o,et as s}from"./angular-platform-CkHGXGBq.js";var c,l=e((()=>{c=`@for (bar of liveBars(); track $index) {

<div role="progressbar" [attr.aria-label]="bar.ariaLabel" aria-valuemin="0" aria-valuemax="100"
    [attr.aria-valuenow]="precision(bar.width)" class="progress-bar" [class.bg-info]="bar.type === 'info'"
    [class.bg-success]="bar.type === 'success'" [class.bg-warning]="bar.type === 'warning'"
    [class.bg-danger]="bar.type === 'danger'" [class.progress-bar-striped]="striped()"
    [class.progress-bar-animated]="animated() && striped()" [style.width.%]="bar.width">
    @if(showLabels()) {
    {{ bar.width }}%
    }
</div>

}`})),u,d=e((()=>{t(),l(),r(),u=class ProgressBar{value=i(0);bars=i([{width:100}]);showLabels=i(!1);striped=i(!1);animated=i(!1);liveBars=n(()=>{let e=this.value();return this.bars().map(({width:t=100,type:n,ariaLabel:r})=>{let i={width:e>=t?t:e,type:n,ariaLabel:r};return e=Math.max(e-t,0),i})});precision(e=0){return Math.round(e*10)/10}trackByIndex(e){return e}static propDecorators={value:[{type:o,args:[{isSignal:!0,alias:`value`,required:!1,transform:void 0}]}],bars:[{type:o,args:[{isSignal:!0,alias:`bars`,required:!1,transform:void 0}]}],showLabels:[{type:o,args:[{isSignal:!0,alias:`showLabels`,required:!1,transform:void 0}]}],striped:[{type:o,args:[{isSignal:!0,alias:`striped`,required:!1,transform:void 0}]}],animated:[{type:o,args:[{isSignal:!0,alias:`animated`,required:!1,transform:void 0}]}]}},u=a([s({selector:`lib-progress-bar`,template:c,host:{class:`progress`}})],u)})),f=e((()=>{})),p=e((()=>{d(),f()})),m,h,g,_,v,y,b;e((()=>{p(),m={title:`Components/ProgressBar`,component:u,tags:[`autodocs`],argTypes:{value:{control:{type:`range`,min:0,max:100,step:1},description:`Valeur globale de progression (en %)`},showLabels:{control:`boolean`,description:`Affiche ou masque le pourcentage dans les barres`},striped:{control:`boolean`,description:`Applique un motif hachuré sur la barre`},animated:{control:`boolean`,description:`Anime les hachures (nécessite striped à true)`},bars:{control:`object`,description:`Configuration des sous-barres de progression`}},args:{value:60,showLabels:!1,striped:!1,animated:!0,bars:[{width:100,type:`info`,ariaLabel:`Progression de la tâche`}]}},h={},g={args:{value:35},render:()=>({template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <small>Info</small>
          <lib-progress-bar [value]="75" [bars]="[{ width: 100, type: 'info' }]" showLabels />
        </div>
        <div>
          <small>Success</small>
          <lib-progress-bar [value]="100" [bars]="[{ width: 100, type: 'success' }]" showLabels />
        </div>
        <div>
          <small>Warning</small>
          <lib-progress-bar [value]="45" [bars]="[{ width: 100, type: 'warning' }]" showLabels />
        </div>
        <div>
          <small>Danger</small>
          <lib-progress-bar [value]="25" [bars]="[{ width: 100, type: 'danger' }]" showLabels />
        </div>
      </div>
    `})},_={args:{value:85,showLabels:!0}},v={args:{value:50,striped:!0,animated:!0,bars:[{width:100,type:`success`}]}},y={args:{value:80,showLabels:!0,bars:[{width:25,type:`success`,ariaLabel:`Étape 1 terminée`},{width:35,type:`warning`,ariaLabel:`Étape 2 en cours`},{width:40,type:`danger`,ariaLabel:`Étape 3 restante`}]}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source},description:{story:`Cas d'usage par défaut avec une simple barre de progression.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 35
  },
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <small>Info</small>
          <lib-progress-bar [value]="75" [bars]="[{ width: 100, type: 'info' }]" showLabels />
        </div>
        <div>
          <small>Success</small>
          <lib-progress-bar [value]="100" [bars]="[{ width: 100, type: 'success' }]" showLabels />
        </div>
        <div>
          <small>Warning</small>
          <lib-progress-bar [value]="45" [bars]="[{ width: 100, type: 'warning' }]" showLabels />
        </div>
        <div>
          <small>Danger</small>
          <lib-progress-bar [value]="25" [bars]="[{ width: 100, type: 'danger' }]" showLabels />
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source},description:{story:"Variantes de couleurs de fond gérées par le composant (`info`, `success`, `warning`, `danger`).",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 85,
    showLabels: true
  }
}`,..._.parameters?.docs?.source},description:{story:`Barre de progression avec affichage explicite des pourcentages.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    striped: true,
    animated: true,
    bars: [{
      width: 100,
      type: 'success'
    }]
  }
}`,...v.parameters?.docs?.source},description:{story:`Barre avec style hachuré et animé.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    showLabels: true,
    bars: [{
      width: 25,
      type: 'success',
      ariaLabel: 'Étape 1 terminée'
    }, {
      width: 35,
      type: 'warning',
      ariaLabel: 'Étape 2 en cours'
    }, {
      width: 40,
      type: 'danger',
      ariaLabel: 'Étape 3 restante'
    }] as LibProgressBar[]
  }
}`,...y.parameters?.docs?.source},description:{story:`Barre de progression empilée (multi-segments) permettant de représenter plusieurs étapes ou états.`,...y.parameters?.docs?.description}}},b=[`Default`,`Variants`,`WithLabels`,`StripedAndAnimated`,`MultiBars`]}))();export{h as Default,y as MultiBars,v as StripedAndAnimated,g as Variants,_ as WithLabels,b as __namedExportsOrder,m as default};