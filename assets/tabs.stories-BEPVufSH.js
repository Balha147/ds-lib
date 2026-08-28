import{i as e}from"./preload-helper-G0Y2f6MP.js";import{E as t,Ei as n,G as r,In as i,L as a,N as o,R as s,Ti as c,V as l,W as u,_ as d,ct as f,et as p,f as m,k as h,m as g,pt as _,v}from"./angular-platform-CkHGXGBq.js";import{i as y,t as b}from"./dist-_fqtV9zk.js";import{r as x,t as S}from"./coercion-Bp8xdHJz.js";var C,w=e((()=>{C=`<nav class="nav gap-2 lib-fs-7" [class.flex-column]="breakpoint()" [class]="'flex-' + breakpoint() + '-row'" [ngClass]="{
    'lib-nav-pills': !classic(),
    'nav-pills': !classic(),

    'lib-nav-tabs': classic(),
    'nav-tabs': classic(),

    'justify-content-center': position() === 'center',
    'justify-content-end': position() === 'end',
    'nav-fill': position() === 'fill',
    'nav-justified': position() === 'justified'
  }">

    @for (tab of tabs(); track tab) {

    <a [href]="'#' + tab.label()" class="nav-link" [class.active]="tab === activeTab()"
        [class.disabled]="tab.disabled()" [class.lib-droplet]="!classic() && tab === activeTab()"
        [class.lib-droplet--bottom]="!classic() && tab === activeTab()"
        [attr.aria-current]="tab === activeTab() ? 'page' : null" (click)="$event.preventDefault(); selectTab(tab)">

        @if (tab.icon()) {

        <i class="{{ tab.icon() }} me-1" aria-hidden="true">
        </i>

        }

        {{ tab.label() }}

    </a>

    }

</nav>

@if (activeTemplate(); as template) {

<ng-container [ngTemplateOutlet]="template">
</ng-container>

}`})),T,E=e((()=>{T=`<ng-template #templateRef>\r
    <div class="lib-tab-content">\r
        <ng-content />\r
    </div>\r
</ng-template>`})),D,O=e((()=>{D=`.lib-tab-content{animation:.25s ease-in-out fade-in}@keyframes fade-in{0%{opacity:0}to{opacity:1}}`})),k,A=e((()=>{n(),E(),O(),x(),a(),k=class Tab{label=s.required();icon=s();disabled=s(!1,{transform:e=>S(e)});templateRef=u.required(`templateRef`);static propDecorators={label:[{type:f,args:[{isSignal:!0,alias:`label`,required:!0,transform:void 0}]}],icon:[{type:f,args:[{isSignal:!0,alias:`icon`,required:!1,transform:void 0}]}],disabled:[{type:f,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],templateRef:[{type:h,args:[`templateRef`,{isSignal:!0}]}]}},k=c([p({selector:`lib-tab`,template:T,styles:[D]})],k)})),j,M=e((()=>{n(),w(),x(),a(),A(),m(),j=class TabsGroup{tabs=o(k);position=s(`start`);breakpoint=s();classic=s(!1,{transform:e=>S(e)});activeIndex=l();activeTab=r(()=>{let e=this.tabs(),t=this.activeIndex();if(!(t===void 0||t<0||t>=e.length))return e[t]});activeTemplate=r(()=>this.activeTab()?.templateRef());firstEnabledTab=r(()=>this.tabs().find(e=>!e.disabled()));constructor(){i(()=>{let e=this.tabs();e.forEach(e=>{e.label(),e.icon(),e.disabled()});let t=this.activeTab();if(!t||t.disabled()){let t=this.firstEnabledTab();t&&this.activeIndex.set(e.indexOf(t))}})}selectTab(e){if(e.disabled())return;let t=this.tabs().indexOf(e);t!==this.activeIndex()&&this.activeIndex.set(t)}static ctorParameters=()=>[];static propDecorators={tabs:[{type:t,args:[k,{isSignal:!0}]}],position:[{type:f,args:[{isSignal:!0,alias:`position`,required:!1,transform:void 0}]}],breakpoint:[{type:f,args:[{isSignal:!0,alias:`breakpoint`,required:!1,transform:void 0}]}],classic:[{type:f,args:[{isSignal:!0,alias:`classic`,required:!1,transform:void 0}]}],activeIndex:[{type:f,args:[{isSignal:!0,alias:`activeIndex`,required:!1}]},{type:_,args:[`activeIndexChange`]}]}},j=c([p({selector:`lib-tab-group`,template:C,imports:[d,v]})],j)})),N=e((()=>{})),P=e((()=>{M(),A(),N()})),F,I,L,R,z,B,V,H,U,W,G;e((()=>{b(),m(),P(),F={title:`Components/Tabs`,component:j,tags:[`autodocs`],decorators:[y({imports:[g,j,k]})],argTypes:{classic:{control:`boolean`,description:`Display tabs using Bootstrap tab style.`},position:{control:`select`,options:[`start`,`center`,`end`,`fill`,`justified`]},breakpoint:{control:`select`,options:[void 0,`sm`,`md`,`lg`,`xl`,`xxl`]},activeIndex:{control:{type:`number`,min:0}}},render:e=>({props:e,template:`
      <lib-tab-group
        [classic]="classic"
        [position]="position"
        [breakpoint]="breakpoint"
        [(activeIndex)]="activeIndex"
      >

        <lib-tab label="Home">
          <h3>Home</h3>
          <p>Welcome to the home tab.</p>
        </lib-tab>

        <lib-tab label="Profile">
          <h3>Profile</h3>
          <p>User profile information.</p>
        </lib-tab>

        <lib-tab label="Settings">
          <h3>Settings</h3>
          <p>Application settings.</p>
        </lib-tab>

      </lib-tab-group>
    `})},I={args:{classic:!1,position:`start`}},L={args:{classic:!0}},R={args:{position:`center`}},z={args:{position:`end`}},B={args:{position:`fill`}},V={args:{position:`justified`}},H={args:{activeIndex:1}},U={args:{breakpoint:`lg`}},W={args:{classic:!1,position:`start`,breakpoint:void 0,activeIndex:0}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    classic: false,
    position: 'start'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    classic: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'center'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'end'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'fill'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'justified'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    activeIndex: 1
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    breakpoint: 'lg'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    classic: false,
    position: 'start',
    breakpoint: undefined,
    activeIndex: 0
  }
}`,...W.parameters?.docs?.source}}},G=[`Default`,`Classic`,`Center`,`End`,`Fill`,`Justified`,`ActiveSecondTab`,`Responsive`,`Playground`]}))();export{H as ActiveSecondTab,R as Center,L as Classic,I as Default,z as End,B as Fill,V as Justified,W as Playground,U as Responsive,G as __namedExportsOrder,F as default};