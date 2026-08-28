import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,Kn as r,L as i,R as a,Ti as o,U as s,V as c,ct as l,et as u,f as d,g as f,j as p,pt as m}from"./angular-platform-CkHGXGBq.js";import{i as h,t as g}from"./public-api-CB813VaT.js";import{i as _,t as v}from"./dist-_fqtV9zk.js";var y,b=e((()=>{y=`<div class="lib-paginator__info">
    @if (showRangeLabel()) {
    <span class="lib-paginator__range">
        {{ rangeStart() }}–{{ rangeEnd() }} sur {{ totalItems() }} résultats
    </span>
    }

    @if (showPageSizeSelector()) {
    <label class="lib-paginator__page-size">
        Par page :
        <select class="lib-paginator__page-size-select" [disabled]="disabled()" [value]="pageSize()"
            (change)="onPageSizeChange($any($event.target).value)">
            @for (size of pageSizeOptions(); track size) {
            <option [value]="size">
                {{ size }}
            </option>
            }
        </select>
    </label>
    }
</div>

<ul class="lib-paginator__pages">
    <li>
        <button type="button" class="lib-paginator__btn lib-paginator__btn--nav"
            [disabled]="disabled() || !canGoPrevious()" aria-label="Page précédente" (click)="goTo(currentPage() - 1)">
            <lib-icon name="libicon-chevron-gauche" size="sm" aria-hidden="true" />
        </button>
    </li>

    @for (item of visiblePages(); track $index) {
    <li>
        @if (item === ellipsis) {
        <span class="lib-paginator__ellipsis" aria-hidden="true">
            …
        </span>
        } @else {
        <button type="button" class="lib-paginator__btn" [class.lib-paginator__btn--active]="item === currentPage()"
            [disabled]="disabled()" [attr.aria-current]="
            item === currentPage() ? 'page' : null
          " [attr.aria-label]="'Page ' + item" (click)="goTo(item)">
            {{ item }}
        </button>
        }
    </li>
    }

    <li>
        <button type="button" class="lib-paginator__btn lib-paginator__btn--nav" [disabled]="disabled() || !canGoNext()"
            aria-label="Page suivante" (click)="goTo(currentPage() + 1)">
            <lib-icon name="libicon-chevron-droit" size="sm" aria-hidden="true" />
        </button>
    </li>
</ul>`})),x,S,C=e((()=>{t(),b(),i(),g(),x=-1,S=class Paginator{totalItems=a.required();pageSize=a(10);currentPage=c(1);disabled=a(!1,{transform:p});showPageSizeSelector=a(!1,{transform:p});pageSizeOptions=a([10,25,50,100]);showRangeLabel=a(!0,{transform:p});siblingCount=a(1);pageChange=s();pageSizeChange=s();totalPages=n(()=>Math.max(1,Math.ceil(this.totalItems()/this.pageSize())));rangeStart=n(()=>this.totalItems()===0?0:(this.currentPage()-1)*this.pageSize()+1);rangeEnd=n(()=>Math.min(this.currentPage()*this.pageSize(),this.totalItems()));canGoPrevious=n(()=>this.currentPage()>1);canGoNext=n(()=>this.currentPage()<this.totalPages());visiblePages=n(()=>{let e=this.totalPages(),t=this.currentPage(),n=this.siblingCount();if(e<=5+n*2)return Array.from({length:e},(e,t)=>t+1);let r=Math.max(t-n,2),i=Math.min(t+n,e-1),a=[1];r>2&&a.push(x);for(let e=r;e<=i;e++)a.push(e);return i<e-1&&a.push(x),a.push(e),a});ellipsis=x;goTo(e){this.disabled()||e<1||e>this.totalPages()||e===this.currentPage()||(this.currentPage.set(e),this.emitPageChange())}onPageSizeChange(e){let t=Number(e);this.pageSizeChange.emit(t),this.currentPage.set(1),this.emitPageChange()}emitPageChange(){this.pageChange.emit({page:this.currentPage(),pageSize:this.pageSize(),totalPages:this.totalPages()})}static propDecorators={totalItems:[{type:l,args:[{isSignal:!0,alias:`totalItems`,required:!0,transform:void 0}]}],pageSize:[{type:l,args:[{isSignal:!0,alias:`pageSize`,required:!1,transform:void 0}]}],currentPage:[{type:l,args:[{isSignal:!0,alias:`currentPage`,required:!1}]},{type:m,args:[`currentPageChange`]}],disabled:[{type:l,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],showPageSizeSelector:[{type:l,args:[{isSignal:!0,alias:`showPageSizeSelector`,required:!1,transform:void 0}]}],pageSizeOptions:[{type:l,args:[{isSignal:!0,alias:`pageSizeOptions`,required:!1,transform:void 0}]}],showRangeLabel:[{type:l,args:[{isSignal:!0,alias:`showRangeLabel`,required:!1,transform:void 0}]}],siblingCount:[{type:l,args:[{isSignal:!0,alias:`siblingCount`,required:!1,transform:void 0}]}],pageChange:[{type:m,args:[`pageChange`]}],pageSizeChange:[{type:m,args:[`pageSizeChange`]}]}},S=o([u({selector:`lib-paginator`,template:y,imports:[h],host:{class:`lib-paginator`,role:`navigation`,"[attr.aria-label]":`"Pagination"`}})],S)})),w=e((()=>{})),T=e((()=>{C(),w()})),E,D,O,k,A,j,M,N,P,F,I;e((()=>{t(),i(),d(),v(),T(),E={title:`Components/Paginator`,component:S,tags:[`autodocs`],argTypes:{totalItems:{control:`number`},pageSize:{control:`number`},disabled:{control:`boolean`},showPageSizeSelector:{control:`boolean`},showRangeLabel:{control:`boolean`},siblingCount:{control:`number`}}},D={args:{totalItems:234,pageSize:10,page:3,showRangeLabel:!0,showPageSizeSelector:!1}},O=class PaginatorInteractiveHost{currentPage=r(1);lastEvent=null;onPageChange(e){this.lastEvent=e}},O=o([u({selector:`story-paginator-interactive`,imports:[S,f],template:`
    <div style="display:flex; flex-direction:column; gap:16px; max-width:600px; padding:2rem;">
      <lib-paginator
        [(page)]="currentPage"
        [totalItems]="234"
        [pageSize]="10"
        [showPageSizeSelector]="true"
        (pageChange)="onPageChange($event)">
      </lib-paginator>

      <pre style="background:#f8f9fa; padding:12px; border-radius:6px; font-family:monospace; font-size:13px;">{{ { currentPage: currentPage(), lastEvent } | json }}</pre>
    </div>
  `})],O),k={render:()=>({template:`<story-paginator-interactive></story-paginator-interactive>`}),decorators:[_({imports:[O]})],parameters:{docs:{description:{story:"Navigue entre les pages : `[(page)]` se met à jour, `(pageChange)` émet un événement complet à chaque changement."}}}},A={args:{totalItems:4820,pageSize:20,page:47,showRangeLabel:!0},parameters:{docs:{description:{story:`Avec beaucoup de pages, des ellipses (…) remplacent les numéros intermédiaires non pertinents.`}}}},j={args:{totalItems:35,pageSize:10,page:2}},M={args:{totalItems:500,pageSize:25,page:1,showPageSizeSelector:!0,pageSizeOptions:[10,25,50,100]}},N={args:{totalItems:1e3,pageSize:10,page:50,siblingCount:3},parameters:{docs:{description:{story:"`siblingCount: 3` affiche plus de pages autour de la page courante."}}}},P={args:{totalItems:234,pageSize:10,page:3,disabled:!0}},F={args:{totalItems:8,pageSize:10,page:1}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    totalItems: 234,
    pageSize: 10,
    page: 3,
    showRangeLabel: true,
    showPageSizeSelector: false
  }
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-paginator-interactive></story-paginator-interactive>\`
  }),
  decorators: [moduleMetadata({
    imports: [PaginatorInteractiveHost]
  })],
  parameters: {
    docs: {
      description: {
        story: 'Navigue entre les pages : \`[(page)]\` se met à jour, \`(pageChange)\` émet un événement complet à chaque changement.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    totalItems: 4820,
    pageSize: 20,
    page: 47,
    showRangeLabel: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Avec beaucoup de pages, des ellipses (…) remplacent les numéros intermédiaires non pertinents.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    totalItems: 35,
    pageSize: 10,
    page: 2
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    totalItems: 500,
    pageSize: 25,
    page: 1,
    showPageSizeSelector: true,
    pageSizeOptions: [10, 25, 50, 100]
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    totalItems: 1000,
    pageSize: 10,
    page: 50,
    siblingCount: 3
  },
  parameters: {
    docs: {
      description: {
        story: '\`siblingCount: 3\` affiche plus de pages autour de la page courante.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    totalItems: 234,
    pageSize: 10,
    page: 3,
    disabled: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    totalItems: 8,
    pageSize: 10,
    page: 1
  }
}`,...F.parameters?.docs?.source}}},I=[`Playground`,`Interactive`,`ManyPages`,`FewPages`,`WithPageSizeSelector`,`WideSiblingRange`,`Disabled`,`SinglePage`]}))();export{P as Disabled,j as FewPages,k as Interactive,A as ManyPages,D as Playground,F as SinglePage,N as WideSiblingRange,M as WithPageSizeSelector,I as __namedExportsOrder,E as default};