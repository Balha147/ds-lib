import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,L as r,R as i,Ti as a,ct as o,et as s,j as c}from"./angular-platform-CkHGXGBq.js";import{i as l,t as u}from"./public-api-CB813VaT.js";var d,f=e((()=>{d=`<div class="lib-spinner__icon-container" [class]="'lib-spinner__icon-container--' + currentSize()">
    <lib-icon name="libicon-spinner" [size]="currentSize()" class="lib-spinner__icon" />
</div>

<div class="lib-spinner__content lib-ff-regular">
    <ng-content />
</div>`})),p,m=e((()=>{t(),f(),r(),u(),p=class Spinner{centered=i(!1,{transform:c});fullScreen=i(!1,{transform:c});size=i();isCentered=n(()=>this.centered()||this.fullScreen());currentSize=n(()=>this.size()??(this.fullScreen()?`lg`:`sm`));static propDecorators={centered:[{type:o,args:[{isSignal:!0,alias:`centered`,required:!1,transform:void 0}]}],fullScreen:[{type:o,args:[{isSignal:!0,alias:`fullScreen`,required:!1,transform:void 0}]}],size:[{type:o,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}]}},p=a([s({selector:`lib-spinner`,template:d,imports:[l],host:{class:`lib-spinner`,"[class.lib-spinner--centered]":`isCentered()`,"[class.lib-spinner--full-screen]":`fullScreen()`,"[class.lib-fs-6]":`currentSize() === "lg"`,"[class.lib-fs-7]":`currentSize() === "md"`,"[class.lib-fs-8]":`currentSize() === "sm"`}})],p)})),h=e((()=>{m()})),g,_,v,y,b,x;e((()=>{h(),g={title:`Components/Spinner`,component:p,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Taille du spinner (sm, md, lg)`,table:{defaultValue:{summary:`sm`}}},centered:{control:`boolean`,description:`Centre le spinner dans son conteneur parent`,table:{defaultValue:{summary:`false`}}},fullScreen:{control:`boolean`,description:`Affiche le spinner en plein écran`,table:{defaultValue:{summary:`false`}}}},args:{centered:!1,fullScreen:!1}},_={args:{size:`md`}},v={args:{centered:!0,size:`md`},render:e=>({props:e,template:`
      <div style="height: 200px; border: 1px dashed #ccc; position: relative;">
        <lib-spinner [centered]="centered" [size]="size"></lib-spinner>
      </div>
    `}),parameters:{docs:{description:{story:"Centre le spinner au milieu de son élément conteneur (`position: relative`)."}}}},y={render:e=>({props:e,template:`
      <lib-spinner [size]="size">
        <span>Chargement des données en cours...</span>
      </lib-spinner>
    `}),parameters:{docs:{description:{story:"Le contenu projeté via `ng-content` s'affiche à côté du spinner."}}}},b={render:()=>({template:`
      <div style="display: flex; align-items: center; gap: 2rem;">
        <lib-spinner size="sm"></lib-spinner>
        <lib-spinner size="md"></lib-spinner>
        <lib-spinner size="lg"></lib-spinner>
      </div>
    `}),parameters:{docs:{description:{story:"Aperçu de toutes les tailles disponibles (`sm`, `md`, `lg`)."}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    centered: true,
    size: 'md'
  },
  render: (args: any) => ({
    props: args,
    template: \`
      <div style="height: 200px; border: 1px dashed #ccc; position: relative;">
        <lib-spinner [centered]="centered" [size]="size"></lib-spinner>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Centre le spinner au milieu de son élément conteneur (\`position: relative\`).'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    props: args,
    template: \`
      <lib-spinner [size]="size">
        <span>Chargement des données en cours...</span>
      </lib-spinner>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Le contenu projeté via \`ng-content\` s\\'affiche à côté du spinner.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; align-items: center; gap: 2rem;">
        <lib-spinner size="sm"></lib-spinner>
        <lib-spinner size="md"></lib-spinner>
        <lib-spinner size="lg"></lib-spinner>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Aperçu de toutes les tailles disponibles (\`sm\`, \`md\`, \`lg\`).'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Centered`,`WithContent`,`AllSizes`]}))();export{b as AllSizes,v as Centered,_ as Default,y as WithContent,x as __namedExportsOrder,g as default};