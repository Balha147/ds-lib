import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,L as r,Q as i,R as a,Ti as o,ct as s,et as c}from"./angular-platform-CkHGXGBq.js";var l,u=e((()=>{t(),r(),l=class Skeleton{variant=a(`text`);width=a();height=a();radius=a();animation=a(`shimmer`);resolvedHeight=n(()=>{let e=this.height();if(e)return e;switch(this.variant()){case`text`:return`1em`;case`circular`:return this.width()??`40px`;default:return`40px`}});resolvedWidth=n(()=>this.width()||(this.variant()===`circular`?this.resolvedHeight():`100%`));resolvedRadius=n(()=>{let e=this.radius();if(e)return e;switch(this.variant()){case`circular`:return`50%`;case`text`:return`4px`;case`rounded`:return`12px`;default:return`2px`}});static propDecorators={variant:[{type:s,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}],width:[{type:s,args:[{isSignal:!0,alias:`width`,required:!1,transform:void 0}]}],height:[{type:s,args:[{isSignal:!0,alias:`height`,required:!1,transform:void 0}]}],radius:[{type:s,args:[{isSignal:!0,alias:`radius`,required:!1,transform:void 0}]}],animation:[{type:s,args:[{isSignal:!0,alias:`animation`,required:!1,transform:void 0}]}]}},l=o([c({selector:`lib-skeleton`,template:``,changeDetection:i.OnPush,host:{class:`lib-skeleton`,role:`presentation`,"aria-hidden":`true`,"[class]":`"lib-skeleton--" + variant() + " lib-skeleton--" + animation()`,"[style.width]":`resolvedWidth()`,"[style.height]":`resolvedHeight()`,"[style.border-radius]":`resolvedRadius()`}})],l)})),d,f=e((()=>{t(),r(),u(),d=class SkeletonGroup{lines=a(3);animation=a(`shimmer`);lineWidths=n(()=>{let e=this.lines();return Array.from({length:e},(t,n)=>n===e-1?`65%`:`100%`)});static propDecorators={lines:[{type:s,args:[{isSignal:!0,alias:`lines`,required:!1,transform:void 0}]}],animation:[{type:s,args:[{isSignal:!0,alias:`animation`,required:!1,transform:void 0}]}]}},d=o([c({selector:`lib-skeleton-group`,imports:[l],template:`
    @for (line of lineWidths(); track $index) {
      <lib-skeleton variant="text" [width]="line" [animation]="animation()"></lib-skeleton>
    }
  `,changeDetection:i.OnPush,host:{class:`lib-skeleton-group`}})],d)})),p=e((()=>{u(),f()})),m,h,g,_,v,y,b,x,S;e((()=>{p(),m={title:`Components/Skeleton`,component:l,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`text`,`circular`,`rectangular`,`rounded`]},animation:{control:`select`,options:[`shimmer`,`pulse`,`none`]}}},h={args:{variant:`text`,width:`240px`}},g={args:{variant:`circular`,width:`48px`}},_={args:{variant:`rectangular`,width:`320px`,height:`180px`}},v={args:{variant:`rounded`,width:`320px`,height:`120px`}},y={args:{variant:`rectangular`,width:`320px`,height:`120px`,animation:`pulse`}},b={render:()=>({template:`<lib-skeleton-group [lines]="4" style="max-width:400px;"></lib-skeleton-group>`,moduleMetadata:{imports:[d]}})},x={render:()=>({template:`
      <div style="display:flex; gap:1rem; align-items:center; max-width:400px; padding:1rem; border:1px solid var(--lib-border); border-radius:12px;">
        <lib-skeleton variant="circular" width="56px"></lib-skeleton>
        <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
          <lib-skeleton variant="text" width="60%"></lib-skeleton>
          <lib-skeleton variant="text" width="40%"></lib-skeleton>
        </div>
      </div>
    `,moduleMetadata:{imports:[l]}})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '240px'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: '48px'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '320px',
    height: '180px'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    width: '320px',
    height: '120px'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '320px',
    height: '120px',
    animation: 'pulse'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<lib-skeleton-group [lines]="4" style="max-width:400px;"></lib-skeleton-group>\`,
    moduleMetadata: {
      imports: [SkeletonGroup]
    }
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display:flex; gap:1rem; align-items:center; max-width:400px; padding:1rem; border:1px solid var(--lib-border); border-radius:12px;">
        <lib-skeleton variant="circular" width="56px"></lib-skeleton>
        <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
          <lib-skeleton variant="text" width="60%"></lib-skeleton>
          <lib-skeleton variant="text" width="40%"></lib-skeleton>
        </div>
      </div>
    \`,
    moduleMetadata: {
      imports: [Skeleton]
    }
  })
}`,...x.parameters?.docs?.source}}},S=[`Text`,`Circular`,`Rectangular`,`Rounded`,`PulseAnimation`,`TextLines`,`ProfileCard`]}))();export{g as Circular,x as ProfileCard,y as PulseAnimation,_ as Rectangular,v as Rounded,h as Text,b as TextLines,S as __namedExportsOrder,m as default};