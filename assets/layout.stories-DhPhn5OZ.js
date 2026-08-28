import{i as e}from"./preload-helper-G0Y2f6MP.js";import{A as t,Ct as n,Ei as r,En as i,Fr as ee,G as a,Hn as o,In as s,Kn as c,L as l,On as te,R as u,Ti as d,Tn as ne,W as f,Xr as p,ct as m,er as h,et as g,gt as _,k as v,nt as y,yt as re}from"./angular-platform-CkHGXGBq.js";import{i as ie,t as ae}from"./dist-_fqtV9zk.js";import{n as oe,t as se}from"./layout-DoML5fL9.js";import{n as b,t as x}from"./rxjs-interop-CYdFoEUP.js";import{n as S,r as C,t as w}from"./router-C23mlqTZ.js";var T,E=e((()=>{T=`<lib-layout-header class="lib-layout-container__top lib-layout-header"></lib-layout-header>

<div class="lib-layout-container__main lib-layout-container__main--centered lib-layout-main">
    <div class="lib-layout-main__content">
        <ng-content></ng-content>
    </div>

    <div class="lib-layout-main__footer">
        <ng-content select="[libLayoutFooter]"></ng-content>
    </div>
</div>

<div #navRef class="lib-layout-container__nav lib-layout-nav rounded-3"
    [class.lib-layout-container__nav--opened]="isNavOpened()" [class.lib-layout-container__nav--fixed]="hasFixedMenu()">
    <div class="lib-layout-nav__inner rounded-3" #navInnerRef>
        <lib-layout-header class="lib-layout-nav__header lib-layout-header"></lib-layout-header>

        <div class="lib-layout-nav__content lib-layout-nav-content">
            <div class="lib-layout-nav-content__main">
                <ng-content select="[libLayoutNav]"></ng-content>
            </div>

            <div class="lib-layout-nav-content__footer">
                <ng-content select="[libLayoutNavFooter]"></ng-content>
            </div>
        </div>
    </div>
</div>

@if (isSubnavOpened()) {
<lib-layout-subnav animate.enter="lib-layout-fade-in" animate.leave="lib-layout-fade-out"
    class="lib-layout-container__subnav lib-layout-subnav rounded-3"
    [class.lib-layout-container__subnav--opened]="isSubnavOpened()"
    [class.lib-layout-container__subnav--fixed]="hasFixedMenu()" [style.height]="subnavHeight()">
    <ng-content select="[libLayoutSubnav]"></ng-content>
</lib-layout-subnav>
}

@if (isNavOpened()) {
<div animate.enter="lib-layout-fade-in" animate.leave="lib-layout-fade-out"
    class="lib-layout-container__backdrop lib-layout-container__backdrop--opened" (click)="closeMenu()">
</div>
}`})),D,ce=e((()=>{D=`<lib-layout-logo class="lib-layout-header__logo lib-layout-logo"></lib-layout-logo>\r
\r
<div class="lib-layout-header__toggle">\r
    <button type="button" class="lib-button-unstyled lib-fs-8" (click)="toggleNav()">\r
        @if (isNavOpened()) {\r
        Fermer\r
        <i class="libicon-close fs-6 ms-1" aria-hidden="true"></i>\r
        } @else {\r
        Menu\r
        <i class="libicon-burger-menu fs-6 ms-1" aria-hidden="true"></i>\r
        }\r
    </button>\r
</div>`})),O,le=e((()=>{O=`@if (logoConfig(); as config) {\r
<button type="button" class="lib-button-unstyled lib-layout-logo__btn" (click)="onClick()">\r
    <img [src]="config.src" [attr.alt]="config.alt" class="lib-layout-logo__img"\r
        [class.lib-layout-logo__img--compact-on-desktop]="config.compactOnDesktop" />\r
</button>\r
}`})),k=e((()=>{})),hasNavlessInRoutesData,A=e((()=>{k(),hasNavlessInRoutesData=e=>e.map(({data:e,children:t})=>e.LIB_LAYOUT_NAVLESS===!0||hasNavlessInRoutesData(t)).find(e=>e===!0)===!0})),j,M=e((()=>{r(),l(),x(),w(),h(),A(),j=class LibLayoutService{router=o(C);_isNavOpened=c(!1);isNavOpened=this._isNavOpened.asReadonly();_subnavContentId=c(null);subnavContentId=this._subnavContentId.asReadonly();isSubnavOpened=a(()=>this._subnavContentId()!==null);_isNavLess=c(!1);isNavLess=this._isNavLess.asReadonly();state=a(()=>({isNavLess:this._isNavLess(),isNavOpened:this._isNavOpened(),isSubnavOpened:this.isSubnavOpened(),subnavContentId:this._subnavContentId()}));_logoConfig=c(void 0);logoConfig=this._logoConfig.asReadonly();logoClicked=new te;navigationEnd=b(this.router.events.pipe(ee(e=>e instanceof S)));constructor(){s(()=>{this.navigationEnd()&&(this.closeMenu(),this.setNavLessFromRoutesData())})}toggleNav(e=!this._isNavOpened()){this._isNavOpened.set(e),!e&&this._subnavContentId()!==null&&this.closeSubnav()}closeSubnav(){this._subnavContentId.set(null)}openMenu(e){this._isNavOpened.set(!0),this._subnavContentId.set(e)}closeMenu(){this._isNavOpened.set(!1),this._subnavContentId.set(null)}toggleMenu(e){this._isNavOpened()?this._subnavContentId()===e?this.closeMenu():this._subnavContentId.set(e):this.openMenu(e)}toggleNavLess(e=!this._isNavLess()){this._isNavLess.set(e)}setLogoConfig(e){this._logoConfig.set(e)}setNavLessFromRoutesData(){let e=hasNavlessInRoutesData([this.router.routerState.snapshot.root]);this._isNavLess()!==e&&this._isNavLess.set(e)}static ctorParameters=()=>[]},j=d([re()],j)})),N,P=e((()=>{r(),le(),l(),M(),N=class LibLayoutLogoComponent{libLayoutService=o(j);logoConfig=this.libLayoutService.logoConfig;onClick(){this.libLayoutService.logoClicked.emit()}},N=d([g({selector:`lib-layout-logo`,template:O})],N)})),F,I=e((()=>{r(),ce(),l(),P(),M(),F=class LibLayoutHeaderComponent{libLayoutService=o(j);isNavOpened=this.libLayoutService.isNavOpened;toggleNav(){this.libLayoutService.toggleNav()}},F=d([g({selector:`lib-layout-header`,imports:[N],template:D})],F)})),L,R=e((()=>{L=`<div class="lib-layout-subnav__buttons">\r
    <button type="button" class="lib-button-unstyled lib-fs-8" (click)="closeSubnav()">\r
        <i class="libicon-fleche-gauche me-1 fs-6" aria-hidden="true"></i>\r
        Retour\r
    </button>\r
\r
    <button type="button" class="lib-button-unstyled lib-fs-8" (click)="toggleNav()">\r
        Fermer\r
        <i class="libicon-close ms-1 fs-6" aria-hidden="true"></i>\r
    </button>\r
</div>\r
\r
<div class="lib-layout-subnav__content">\r
    <ng-content></ng-content>\r
</div>`})),z,B=e((()=>{r(),R(),l(),M(),z=class LibLayoutSubnavComponent{libLayoutService=o(j);toggleNav(){this.libLayoutService.toggleNav()}closeSubnav(){this.libLayoutService.closeSubnav()}},z=d([g({selector:`lib-layout-subnav`,template:L})],z)})),V,H=e((()=>{r(),E(),l(),x(),se(),h(),I(),B(),M(),V=class LibLayoutComponent{libLayoutService=o(j);breakpointObserver=o(oe);renderer=o(_);document=o(ne);destroyRef=o(i);isNavLess=u();navRef=f.required(`navRef`);navInnerRef=f.required(`navInnerRef`);isNavOpened=this.libLayoutService.isNavOpened;isSubnavOpened=this.libLayoutService.isSubnavOpened;isDesktop=b(this.breakpointObserver.observe(`(min-width: 1280px)`).pipe(p(e=>e.matches)),{initialValue:!1});navInnerHeight=c(`auto`);windowHasMinHeight=c(!1);hasFixedMenu=a(()=>this.isDesktop()&&this.windowHasMinHeight());subnavHeight=a(()=>this.isDesktop()?this.navInnerHeight():`auto`);constructor(){s(()=>{let e=this.isNavLess();e!==void 0&&this.libLayoutService.toggleNavLess(e)}),t(()=>{this.isDesktop(),this.navInnerHeight(),this.recomputeWindowHasMinHeight()}),s(()=>{let e=this.isNavOpened()&&(!this.isDesktop()||this.windowHasMinHeight()),t=this.document.documentElement;e?this.renderer.setStyle(t,`overflow`,`hidden`):this.renderer.removeStyle(t,`overflow`)}),n(()=>{let e=new ResizeObserver(([e])=>{this.navInnerHeight.set(`${e.contentRect.height}px`)});e.observe(this.navInnerRef().nativeElement),this.destroyRef.onDestroy(()=>e.disconnect())})}closeMenu(){this.libLayoutService.closeMenu()}recomputeWindowHasMinHeight(){let e=this.document.defaultView;if(!e){this.windowHasMinHeight.set(!1);return}let{marginTop:t,marginBottom:n}=e.getComputedStyle(this.navRef().nativeElement),{height:r}=e.getComputedStyle(this.navInnerRef().nativeElement),i=parseFloat(t)+parseFloat(n)+parseFloat(r);this.windowHasMinHeight.set(e.innerHeight>=i)}static ctorParameters=()=>[];static propDecorators={isNavLess:[{type:m,args:[{isSignal:!0,alias:`isNavLess`,required:!1,transform:void 0}]}],navRef:[{type:v,args:[`navRef`,{isSignal:!0}]}],navInnerRef:[{type:v,args:[`navInnerRef`,{isSignal:!0}]}]}},V=d([g({selector:`lib-layout`,template:T,imports:[F,z],host:{class:`lib-layout-container`,"[class.lib-layout-container--nav-less]":`libLayoutService.state().isNavLess`}})],V)})),U,ue=e((()=>{U=`<div class="lib-layout-menu-item-content">\r
    @if (icon()) {\r
    <i class="lib-layout-menu-item-content__icon lib-fs-4" [class]="'libicon-' + icon()" aria-hidden="true"></i>\r
    }\r
    <ng-content></ng-content>\r
</div>\r
\r
<i class="lib-layout-menu-item__chevron ms-2 libicon-chevron-droit" aria-hidden="true"\r
    style="color: var(--lib-primary);"></i>`})),W,de=e((()=>{r(),ue(),l(),M(),W=class LibLayoutMenuItemComponent{libLayoutService=o(j);contentId=u();icon=u(``);isOpened=a(()=>this.contentId()===this.libLayoutService.state().subnavContentId);onClick(){let e=this.contentId();e&&this.libLayoutService.toggleMenu(e)}static propDecorators={contentId:[{type:m,args:[{isSignal:!0,alias:`contentId`,required:!1,transform:void 0}]}],icon:[{type:m,args:[{isSignal:!0,alias:`icon`,required:!1,transform:void 0}]}]}},W=d([g({selector:`lib-layout-menu-item`,template:U,host:{class:`lib-layout-menu-item lib-droplet lib-droplet--right`,role:`button`,tabindex:`0`,"[class.lib-layout-menu-item--opened]":`isOpened()`,"(click)":`onClick()`}})],W)})),fe=e((()=>{})),G,K,q,J,pe=e((()=>{r(),l(),G=class LibLayoutFooterDirective{},G=d([y({selector:`[libLayoutFooter]`})],G),K=class LibLayoutNavDirective{},K=d([y({selector:`[libLayoutNav]`})],K),q=class LibLayoutNavFooterDirective{},q=d([y({selector:`[libLayoutNavFooter]`})],q),J=class LibLayoutSubnavDirective{},J=d([y({selector:`[libLayoutSubnav]`})],J)})),Y=e((()=>{H(),I(),P(),de(),B(),M(),fe(),k(),A(),pe()})),X,Z,Q,$;e((()=>{r(),l(),ae(),Y(),X=class LayoutDemoHost{layoutService=o(j);subnavContentId=this.layoutService.subnavContentId;ngOnInit(){this.layoutService.setLogoConfig({src:`https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/1280px-Angular_gradient_logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=thumbnail`,alt:`Logo`})}},X=d([g({selector:`story-layout-demo`,imports:[V,W,K,q,J,G],template:`
    <lib-layout>
      <p>Contenu principal de la page.</p>

      <div libLayoutNav>
        <lib-layout-menu-item contentId="contentA" icon="compte">Content A</lib-layout-menu-item>
        <lib-layout-menu-item contentId="contentB" icon="avion">Content B</lib-layout-menu-item>
      </div>

      <div libLayoutNavFooter>NAV FOOTER</div>

      <div libLayoutSubnav>
        @switch (subnavContentId()) {
          @case ('contentA') { <h1>Content A</h1> }
          @case ('contentB') { <h1>Content B</h1> }
        }
      </div>

      <div libLayoutFooter>FOOTER</div>
    </lib-layout>
  `})],X),Z={title:`Layout/Layout`,component:X,decorators:[ie({imports:[X]})],tags:[`autodocs`]},Q={},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{}`,...Q.parameters?.docs?.source}}},$=[`Default`]}))();export{Q as Default,$ as __namedExportsOrder,Z as default};