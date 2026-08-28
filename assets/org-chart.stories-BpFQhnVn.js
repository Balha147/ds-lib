import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,In as r,Kn as i,L as a,R as o,Rn as s,Ti as c,U as l,ct as u,et as d,pt as f}from"./angular-platform-CkHGXGBq.js";import{i as p,t as m}from"./public-api-CB813VaT.js";import{i as h,t as g}from"./dist-_fqtV9zk.js";var _,v=e((()=>{_=`<div class="lib-org-chart__scroll" role="tree" [attr.aria-orientation]="orientation()"
    [attr.aria-label]="'Organigramme'">
    <lib-org-chart-node [node]="root()" [orientation]="orientation()" [initialExpandDepth]="initialExpandDepth()"
        [depth]="0" (nodeClick)="nodeClick.emit($event)" />
</div>`})),y,b=e((()=>{y=`@let currentNode = node();\r
\r
<div class="lib-org-chart__card" [class.lib-org-chart__card--disabled]="currentNode.disabled"\r
    [class.lib-org-chart__card--expanded]="\r
    hasChildren() && expanded()\r
  " [attr.tabindex]="currentNode.disabled ? null : 0" role="button" [attr.aria-label]="currentNode.label"\r
    (click)="onClick()" (keydown.enter)="onClick()" (keydown.space)="$event.preventDefault(); onClick()">\r
    <div class="lib-org-chart__avatar">\r
        @if (currentNode.avatarUrl) {\r
        <img [src]="currentNode.avatarUrl" [alt]="currentNode.label" class="lib-org-chart__avatar-img" />\r
        } @else if (currentNode.icon) {\r
        <lib-icon [name]="currentNode.icon" size="md" aria-hidden="true" />\r
        } @else {\r
        <span class="lib-org-chart__initials">\r
            {{ initials(currentNode.label) }}\r
        </span>\r
        }\r
    </div>\r
\r
    <div class="lib-org-chart__info">\r
        <span class="lib-org-chart__label">\r
            {{ currentNode.label }}\r
        </span>\r
\r
        @if (currentNode.role) {\r
        <span class="lib-org-chart__role">\r
            {{ currentNode.role }}\r
        </span>\r
        }\r
    </div>\r
\r
    @if (hasChildren()) {\r
    <button type="button" class="lib-org-chart__toggle" [class.lib-org-chart__toggle--collapsed]="!expanded()"\r
        [attr.aria-expanded]="expanded()" [attr.aria-label]="\r
        expanded()\r
          ? 'Réduire ' + currentNode.label\r
          : 'Développer ' + currentNode.label\r
      " (click)="$event.stopPropagation(); toggle()">\r
        <lib-icon name="libicon-chevron-bas" size="sm" aria-hidden="true" />\r
    </button>\r
    }\r
</div>\r
\r
@if (hasChildren() && expanded()) {\r
<ul class="lib-org-chart__children">\r
    @for (\r
    child of currentNode.children!;\r
    track child.id\r
    ) {\r
    <li class="lib-org-chart__child">\r
        <lib-org-chart-node [node]="child" [orientation]="orientation()" [initialExpandDepth]="initialExpandDepth()"\r
            [depth]="depth() + 1" (nodeClick)="nodeClick.emit($event)" />\r
    </li>\r
    }\r
</ul>\r
}`})),x,S=e((()=>{t(),b(),a(),m(),x=class OrgChartNode{node=o.required();orientation=o(`vertical`);initialExpandDepth=o(-1);depth=o(0);nodeClick=l();expanded=i(!0);hasChildren=n(()=>(this.node().children?.length??0)>0);initialExpansionEffect=r(()=>{let e=this.initialExpandDepth(),t=this.depth();e>=0?this.expanded.set(t<e):this.expanded.set(!0)});toggle(){!this.hasChildren()||this.node().disabled||this.expanded.update(e=>!e)}onClick(){this.node().disabled||this.nodeClick.emit(this.node())}initials(e){return e.trim().split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0)).join(``).toUpperCase()}static propDecorators={node:[{type:u,args:[{isSignal:!0,alias:`node`,required:!0,transform:void 0}]}],orientation:[{type:u,args:[{isSignal:!0,alias:`orientation`,required:!1,transform:void 0}]}],initialExpandDepth:[{type:u,args:[{isSignal:!0,alias:`initialExpandDepth`,required:!1,transform:void 0}]}],depth:[{type:u,args:[{isSignal:!0,alias:`depth`,required:!1,transform:void 0}]}],nodeClick:[{type:f,args:[`nodeClick`]}]}},x=c([d({selector:`lib-org-chart-node`,template:y,imports:[p,s(()=>x)],host:{class:`lib-org-chart__branch`,"[class.lib-org-chart__branch--horizontal]":`orientation() === "horizontal"`}})],x)})),C,w=e((()=>{t(),v(),a(),S(),C=class OrgChart{root=o.required();orientation=o(`vertical`);initialExpandDepth=o(-1);nodeClick=l();static propDecorators={root:[{type:u,args:[{isSignal:!0,alias:`root`,required:!0,transform:void 0}]}],orientation:[{type:u,args:[{isSignal:!0,alias:`orientation`,required:!1,transform:void 0}]}],initialExpandDepth:[{type:u,args:[{isSignal:!0,alias:`initialExpandDepth`,required:!1,transform:void 0}]}],nodeClick:[{type:f,args:[`nodeClick`]}]}},C=c([d({selector:`lib-org-chart`,template:_,imports:[x],host:{class:`lib-org-chart`,"[class.lib-org-chart--horizontal]":`orientation() === "horizontal"`}})],C)})),T=e((()=>{})),E=e((()=>{w(),T(),S()})),D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{t(),a(),g(),E(),D={id:`ceo`,label:`Alice Martin`,role:`CEO`,children:[{id:`cto`,label:`Bruno Petit`,role:`CTO`},{id:`cfo`,label:`Claire Dubois`,role:`CFO`}]},O={id:`ceo`,label:`Alice Martin`,role:`CEO`,icon:`libicon-compte`,children:[{id:`cto`,label:`Bruno Petit`,role:`CTO`,children:[{id:`lead-fe`,label:`Diane Roy`,role:`Lead Frontend`},{id:`lead-be`,label:`Eric Nguyen`,role:`Lead Backend`},{id:`lead-devops`,label:`Fatou Diallo`,role:`Lead DevOps`}]},{id:`cfo`,label:`Claire Dubois`,role:`CFO`,children:[{id:`compta`,label:`Gérard Blanc`,role:`Comptabilité`},{id:`paie`,label:`Hélène Moreau`,role:`Paie`}]},{id:`coo`,label:`Ivan Leroy`,role:`COO`,disabled:!0}]},k={id:`ceo`,label:`Alice Martin`,role:`CEO`,children:[{id:`cto`,label:`Bruno Petit`,role:`CTO`,children:[{id:`lead-fe`,label:`Diane Roy`,role:`Lead Frontend`,children:[{id:`dev1`,label:`Julien Faure`,role:`Développeur`},{id:`dev2`,label:`Karim Aziz`,role:`Développeur`}]},{id:`lead-be`,label:`Eric Nguyen`,role:`Lead Backend`,children:[{id:`dev3`,label:`Léa Simon`,role:`Développeuse`},{id:`dev4`,label:`Marc Girard`,role:`Développeur`}]}]},{id:`cfo`,label:`Claire Dubois`,role:`CFO`}]},A={id:`ceo`,label:`Alice Martin`,role:`CEO`,avatarUrl:`https://i.pravatar.cc/100?img=1`,children:[{id:`cto`,label:`Bruno Petit`,role:`CTO`,avatarUrl:`https://i.pravatar.cc/100?img=2`},{id:`cfo`,label:`Claire Dubois`,role:`CFO`,avatarUrl:`https://i.pravatar.cc/100?img=3`}]},j={title:`Components/OrgChart`,component:C,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
The **OrgChart** component provides a hierarchical
visual representation of organizational structures.

## Features

- recursive tree rendering;
- vertical orientation;
- horizontal orientation;
- expand/collapse nodes;
- configurable initial expansion depth;
- avatars;
- Design System icons;
- automatic initials;
- disabled nodes;
- keyboard accessibility;
- node click event;
- responsive layout.
        `}}},argTypes:{root:{control:`object`,description:`Root node of the organizational hierarchy.`,table:{category:`Data`,type:{summary:`LibOrgChartNode`}}},orientation:{control:`select`,options:[`vertical`,`horizontal`],description:`Controls the direction of the organizational hierarchy.`,table:{category:`Appearance`,defaultValue:{summary:`vertical`}}},initialExpandDepth:{control:{type:`number`,min:-1,step:1},description:`Depth initially expanded. Use -1 to expand the entire tree.`,table:{category:`Behavior`,defaultValue:{summary:`-1`}}},nodeClick:{action:`nodeClick`,description:`Emitted when an enabled node is clicked.`}}},M={args:{root:D}},N={args:{root:O}},P={args:{root:A}},F={args:{root:k}},I={args:{root:k,initialExpandDepth:1},parameters:{docs:{description:{story:`Only the root level is expanded initially. Deeper levels remain collapsed.`}}}},L={args:{root:O,orientation:`horizontal`},parameters:{docs:{description:{story:`Horizontal layout for wide organizational structures.`}}}},R={args:{root:O},parameters:{docs:{description:{story:`Demonstrates a disabled organizational node. The COO node is visually muted and cannot be selected.`}}}},z=class OrgChartInteractiveHost{root=O;selected=null;onNodeClick(e){this.selected=e}},z=c([d({selector:`story-org-chart-interactive`,imports:[C],template:`
    <div class="org-chart-interactive">

      <lib-org-chart
        [root]="root"
        (nodeClick)="onNodeClick($event)"
      />

      @if (selected) {
        <div class="org-chart-interactive__result">

          <strong>
            Nœud sélectionné
          </strong>

          <span>
            {{ selected.label }}
          </span>

          @if (selected.role) {
            <small>
              {{ selected.role }}
            </small>
          }

        </div>
      }

    </div>
  `})],z),B={render:()=>({template:`
      <story-org-chart-interactive />
    `}),decorators:[h({imports:[z]})],parameters:{docs:{description:{story:`Click an enabled node to display the selected organizational node.`}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    root: SMALL_TREE
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    root: MEDIUM_TREE
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    root: AVATAR_TREE
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    root: DEEP_TREE
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    root: DEEP_TREE,
    initialExpandDepth: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Only the root level is expanded initially. Deeper levels remain collapsed.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    root: MEDIUM_TREE,
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal layout for wide organizational structures.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    root: MEDIUM_TREE
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a disabled organizational node. The COO node is visually muted and cannot be selected.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <story-org-chart-interactive />
    \`
  }),
  decorators: [moduleMetadata({
    imports: [OrgChartInteractiveHost]
  })],
  parameters: {
    docs: {
      description: {
        story: 'Click an enabled node to display the selected organizational node.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V=[`Small`,`Medium`,`WithAvatars`,`DeepHierarchy`,`CollapsedByDefault`,`Horizontal`,`WithDisabledNode`,`Interactive`]}))();export{I as CollapsedByDefault,F as DeepHierarchy,L as Horizontal,B as Interactive,N as Medium,M as Small,P as WithAvatars,R as WithDisabledNode,V as __namedExportsOrder,j as default};