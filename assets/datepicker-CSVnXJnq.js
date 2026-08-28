import{i as e}from"./preload-helper-G0Y2f6MP.js";import{$n as t,$t as n,An as r,At as i,Bt as a,Ci as o,Cn as s,Cr as c,Ct as l,D as ee,Dr as te,Er as ne,Fr as re,Ft as u,Gt as d,H as ie,Hn as f,Ht as p,It as m,Jn as ae,Jt as h,Kn as g,Kt as _,L as v,Lt as y,Mn as b,Mt as x,Nt as S,On as C,Pt as oe,Qn as w,Qt as T,R as se,Rn as ce,Rr as le,Rt as ue,Sn as de,Tn as E,Vt as fe,Wn as pe,Wt as D,Xn as me,Xr as he,Xt as O,Yn as ge,Yt as _e,Zn as ve,Zt as k,_n as ye,_t as be,an as A,bn as j,bt as xe,c as Se,cn as M,dn as Ce,en as we,er as Te,fn as Ee,fr as De,gn as Oe,gt as ke,hi as N,hn as Ae,ii as je,in as P,j as F,jn as I,jt as Me,kt as L,ln as Ne,lt as Pe,mn as R,nn as z,o as Fe,on as B,or as Ie,pi as Le,pn as V,qn as Re,qt as ze,rn as H,rt as U,sn as W,tn as Be,un as Ve,ur as He,vn as Ue,vt as We,w as G,xn as Ge,xt as Ke,yi as qe,yn as Je,zt as K}from"./angular-platform-CkHGXGBq.js";import{c as Ye,d as Xe,f as Ze,h as Qe,i as $e,l as et,m as tt,p as nt,t as rt,u as it}from"./signals-C2mKSRCS.js";import{i as at,r as q}from"./_array-chunk-CY4XOrlq.js";import{i as ot,n as st,r as ct,t as lt}from"./layout-DoML5fL9.js";import{A as ut,C as dt,D as ft,E as pt,F as mt,M as ht,N as gt,O as _t,P as vt,S as yt,T as bt,_ as xt,a as St,b as Ct,c as wt,d as Tt,g as Et,h as Dt,j as Ot,k as J,l as kt,m as At,o as jt,p as Mt,r as Nt,s as Pt,t as Ft,u as It,v as Lt,x as Rt,y as zt}from"./overlay-KOe7q9o-.js";import{n as Bt,r as Vt,t as Ht}from"./_element-chunk-DWskQ0Xp.js";import{n as Ut,r as Wt,t as Gt}from"./coercion-Bp8xdHJz.js";import{A as Kt,E as qt,H as Jt,J as Yt,K as Xt,L as Zt,M as Qt,O as $t,P as en,S as tn,W as nn,b as rn,d as an,g as on,h as sn,l as cn,p as ln,v as un,w as dn,z as fn}from"./public-api-CpgCs3-l.js";var pn,mn,DateAdapter,Y,hn=e((()=>{v(),Te(),pn=new r(`MAT_DATE_LOCALE`,{providedIn:`root`,factory:()=>f(Pe)}),mn=`Method not implemented`,DateAdapter=class{locale;_localeChanges=new N;localeChanges=this._localeChanges;setTime(e,t,n,r){throw Error(mn)}getHours(e){throw Error(mn)}getMinutes(e){throw Error(mn)}getSeconds(e){throw Error(mn)}parseTime(e,t){throw Error(mn)}addSeconds(e,t){throw Error(mn)}getValidDateOrNull(e){return this.isDateInstance(e)&&this.isValid(e)?e:null}deserialize(e){return e==null||this.isDateInstance(e)&&this.isValid(e)?e:this.invalid()}setLocale(e){this.locale=e,this._localeChanges.next()}compareDate(e,t){return this.getYear(e)-this.getYear(t)||this.getMonth(e)-this.getMonth(t)||this.getDate(e)-this.getDate(t)}compareTime(e,t){return this.getHours(e)-this.getHours(t)||this.getMinutes(e)-this.getMinutes(t)||this.getSeconds(e)-this.getSeconds(t)}sameDate(e,t){if(e&&t){let n=this.isValid(e),r=this.isValid(t);return n&&r?!this.compareDate(e,t):n==r}return e==t}sameTime(e,t){if(e&&t){let n=this.isValid(e),r=this.isValid(t);return n&&r?!this.compareTime(e,t):n==r}return e==t}clampDate(e,t,n){return t&&this.compareDate(e,t)<0?t:n&&this.compareDate(e,n)>0?n:e}},Y=new r(`mat-date-formats`)})),gn,_n=e((()=>{v(),gn=(()=>{class ErrorStateMatcher{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),n=e().touched();return t&&n}static ɵfac=function ErrorStateMatcher_Factory(e){return new(e||ErrorStateMatcher)};static ɵprov=p({token:ErrorStateMatcher,factory:ErrorStateMatcher.ɵfac})}return ErrorStateMatcher})()}));function _getAnimationsState(){return f(vn,{optional:!0})?.animationsDisabled||f(de,{optional:!0})===`NoopAnimations`?`di-disabled`:(yn??=f(ct).matchMedia(`(prefers-reduced-motion)`).matches,yn?`reduced-motion`:`enabled`)}function _animationsDisabled(){return _getAnimationsState()!==`enabled`}var vn,yn,bn=e((()=>{lt(),v(),vn=new r(`MATERIAL_ANIMATIONS`),yn=null}));function isFakeMousedownFromScreenReader(e){return e.buttons===0||e.detail===0}function isFakeTouchstartFromScreenReader(e){let t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var xn=e((()=>{}));function supportsPassiveEventListeners(){if(Sn==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Sn=!0}))}finally{Sn||=!1}return Sn}function normalizePassiveListenerOptions(e){return supportsPassiveEventListeners()?e:!!e.capture}var Sn,Cn=e((()=>{})),wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn=e((()=>{v(),Te(),Ge(),xn(),mt(),vt(),at(),Cn(),Vt(),wn=new r(`cdk-input-modality-detector-options`),Tn={ignoreKeys:[18,17,224,91,16]},En=650,Dn={passive:!0,capture:!0},On=(()=>{class InputModalityDetector{_platform=f(q);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Le(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=Ot(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<En||(this._modality.next(isFakeMousedownFromScreenReader(e)?`keyboard`:`mouse`),this._mostRecentTarget=Ot(e))};_onTouchstart=e=>{if(isFakeTouchstartFromScreenReader(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=Ot(e)};constructor(){let e=f(b),t=f(E),n=f(wn,{optional:!0});if(this._options={...Tn,...n},this.modalityDetected=this._modality.pipe(De(1)),this.modalityChanged=this.modalityDetected.pipe(c()),this._platform.isBrowser){let n=f(be).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[n.listen(t,`keydown`,this._onKeydown,Dn),n.listen(t,`mousedown`,this._onMousedown,Dn),n.listen(t,`touchstart`,this._onTouchstart,Dn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function InputModalityDetector_Factory(e){return new(e||InputModalityDetector)};static ɵprov=p({token:InputModalityDetector,factory:InputModalityDetector.ɵfac})}return InputModalityDetector})(),kn=function(e){return e[e.IMMEDIATE=0]=`IMMEDIATE`,e[e.EVENTUAL=1]=`EVENTUAL`,e}(kn||{}),An=new r(`cdk-focus-monitor-default-options`),jn=normalizePassiveListenerOptions({passive:!0,capture:!0}),Mn=(()=>{class FocusMonitor{_ngZone=f(b);_platform=f(q);_inputModalityDetector=f(On);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=f(E);_stopInputModalityDetector=new N;constructor(){let e=f(An,{optional:!0});this._detectionMode=e?.detectionMode||kn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Ot(e);for(let n=t;n;n=n.parentElement)e.type===`focus`?this._onFocus(e,n):this._onBlur(e,n)};monitor(e,t=!1){let n=Ht(e);if(!this._platform.isBrowser||n.nodeType!==1)return je();let r=gt(n)||this._document,i=this._elementInfo.get(n);if(i)return t&&(i.checkChildren=!0),i.subject;let a={checkChildren:t,subject:new N,rootNode:r};return this._elementInfo.set(n,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let t=Ht(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){let r=Ht(e);r===this._document.activeElement?this._getClosestElementsInfo(r).forEach(([e,n])=>this._originChanged(e,t,n)):(this._setOrigin(t),typeof r.focus==`function`&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===kn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle(`cdk-focused`,!!t),e.classList.toggle(`cdk-touch-focused`,t===`touch`),e.classList.toggle(`cdk-keyboard-focused`,t===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,t===`mouse`),e.classList.toggle(`cdk-program-focused`,t===`program`)}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&t,this._detectionMode===kn.IMMEDIATE){clearTimeout(this._originTimeoutId);let e=this._originFromTouchInteraction?En:1;this._originTimeoutId=setTimeout(()=>this._origin=null,e)}})}_onFocus(e,t){let n=this._elementInfo.get(t),r=Ot(e);!n||!n.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),n)}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,jn),t.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,jn)}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ie(this._stopInputModalityDetector)).subscribe(e=>{this._setOrigin(e,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let e=this._rootNodeFocusListenerCount.get(t);e>1?this._rootNodeFocusListenerCount.set(t,e-1):(t.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,jn),t.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,jn),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&t.push([r,n])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!==`mouse`||!t||t===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let r=e.labels;if(r){for(let e=0;e<r.length;e++)if(r[e].contains(t))return!0}return!1}static ɵfac=function FocusMonitor_Factory(e){return new(e||FocusMonitor)};static ɵprov=p({token:FocusMonitor,factory:FocusMonitor.ɵfac})}return FocusMonitor})(),Nn=(()=>{class CdkMonitorFocus{_elementRef=f(U);_focusMonitor=f(Mn);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new C;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(e=>{this._focusOrigin=e,this.cdkFocusChange.emit(e)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function CdkMonitorFocus_Factory(e){return new(e||CdkMonitorFocus)};static ɵdir=a({type:CdkMonitorFocus,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return CdkMonitorFocus})()}));function getPolicy(){if(In===void 0&&(In=null,typeof window<`u`)){let e=window;if(e.trustedTypes!==void 0)try{In=e.trustedTypes.createPolicy(`angular#components`,{createHTML:e=>e})}catch(e){console.error(e)}}return In}function trustedHTMLFromString(e){return getPolicy()?.createHTML(e)||e}function _setInnerHtml(e,t,n){e.innerHTML=trustedHTMLFromString(n.sanitize(We.HTML,t)||``)}var Fn,In,Ln=e((()=>{ut(),v(),Fn=(()=>{class _VisuallyHiddenLoader{static ɵfac=function _VisuallyHiddenLoader_Factory(e){return new(e||_VisuallyHiddenLoader)};static ɵcmp=K({type:_VisuallyHiddenLoader,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function _VisuallyHiddenLoader_Template(e,t){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return _VisuallyHiddenLoader})()}));function shouldIgnoreRecord(e){if(e.type===`characterData`&&e.target instanceof Comment)return!0;if(e.type===`childList`){for(let t=0;t<e.addedNodes.length;t++)if(!(e.addedNodes[t]instanceof Comment))return!1;for(let t=0;t<e.removedNodes.length;t++)if(!(e.removedNodes[t]instanceof Comment))return!1;return!0}return!1}var Rn,zn,Bn,Vn,Hn=e((()=>{v(),Te(),Ge(),Vt(),Rn=(()=>{class MutationObserverFactory{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function MutationObserverFactory_Factory(e){return new(e||MutationObserverFactory)};static ɵprov=p({token:MutationObserverFactory,factory:MutationObserverFactory.ɵfac})}return MutationObserverFactory})(),zn=(()=>{class ContentObserver{_mutationObserverFactory=f(Rn);_observedElements=new Map;_ngZone=f(b);ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=Ht(e);return new qe(e=>{let n=this._observeElement(t).pipe(he(e=>e.filter(e=>!shouldIgnoreRecord(e))),re(e=>!!e.length)).subscribe(t=>{this._ngZone.run(()=>{e.next(t)})});return()=>{n.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new N,n=this._mutationObserverFactory.create(e=>t.next(e));n&&n.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:n,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:n}=this._observedElements.get(e);t&&t.disconnect(),n.complete(),this._observedElements.delete(e)}}static ɵfac=function ContentObserver_Factory(e){return new(e||ContentObserver)};static ɵprov=p({token:ContentObserver,factory:ContentObserver.ɵfac})}return ContentObserver})(),Bn=(()=>{class CdkObserveContent{_contentObserver=f(zn);_elementRef=f(U);event=new C;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Bt(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(te(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function CdkObserveContent_Factory(e){return new(e||CdkObserveContent)};static ɵdir=a({type:CdkObserveContent,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,F],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return CdkObserveContent})(),Vn=(()=>{class ObserversModule{static ɵfac=function ObserversModule_Factory(e){return new(e||ObserversModule)};static ɵmod=fe({type:ObserversModule,imports:[Bn],exports:[Bn]});static ɵinj=ae({providers:[Rn]})}return ObserversModule})()}));function getFrameElement(e){try{return e.frameElement}catch{return null}}function hasGeometry(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects==`function`&&e.getClientRects().length)}function isNativeFormElement(e){let t=e.nodeName.toLowerCase();return t===`input`||t===`select`||t===`button`||t===`textarea`}function isHiddenInput(e){return isInputElement(e)&&e.type==`hidden`}function isAnchorWithHref(e){return isAnchorElement(e)&&e.hasAttribute(`href`)}function isInputElement(e){return e.nodeName.toLowerCase()==`input`}function isAnchorElement(e){return e.nodeName.toLowerCase()==`a`}function hasValidTabIndex(e){if(!e.hasAttribute(`tabindex`)||e.tabIndex===void 0)return!1;let t=e.getAttribute(`tabindex`);return!!(t&&!isNaN(parseInt(t,10)))}function getTabIndexValue(e){if(!hasValidTabIndex(e))return null;let t=parseInt(e.getAttribute(`tabindex`)||``,10);return isNaN(t)?-1:t}function isPotentiallyTabbableIOS(e){let t=e.nodeName.toLowerCase(),n=t===`input`&&e.type;return n===`text`||n===`password`||t===`select`||t===`textarea`}function isPotentiallyFocusable(e){return isHiddenInput(e)?!1:isNativeFormElement(e)||isAnchorWithHref(e)||e.hasAttribute(`contenteditable`)||hasValidTabIndex(e)}function getWindow(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var Un,FocusTrap,Wn,Gn,Kn,qn,Jn,Yn,Xn,X,Zn,Qn,$n,er,tr,nr=e((()=>{v(),Pn(),at(),vt(),ut(),Ln(),ot(),Se(),Hn(),Un=(()=>{class InteractivityChecker{_platform=f(q);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return hasGeometry(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=getFrameElement(getWindow(e));if(t&&(getTabIndexValue(t)===-1||!this.isVisible(t)))return!1;let n=e.nodeName.toLowerCase(),r=getTabIndexValue(e);return e.hasAttribute(`contenteditable`)?r!==-1:n===`iframe`||n===`object`||this._platform.WEBKIT&&this._platform.IOS&&!isPotentiallyTabbableIOS(e)?!1:n===`audio`?e.hasAttribute(`controls`)?r!==-1:!1:n===`video`?r===-1?!1:r!==null||this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,t){return isPotentiallyFocusable(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static ɵfac=function InteractivityChecker_Factory(e){return new(e||InteractivityChecker)};static ɵprov=p({token:InteractivityChecker,factory:InteractivityChecker.ɵfac})}return InteractivityChecker})(),FocusTrap=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_enabled=!0;constructor(e,t,n,r,i=!1,a){this._element=e,this._checker=t,this._ngZone=n,this._document=r,this._injector=a,i||this.attachAnchors()}destroy(){let e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener(`focus`,this.startAnchorListener),e.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let t=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let n=this._getFirstTabbableElement(t);return n?.focus(e),!!n}return t.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let t=this._getRegionBoundary(`start`);return t&&t.focus(e),!!t}focusLastTabbableElement(e){let t=this._getRegionBoundary(`end`);return t&&t.focus(e),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let e=0;e<t.length;e++){let n=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(n)return n}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let e=t.length-1;e>=0;e--){let n=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(n)return n}return null}_createAnchor(){let e=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add(`cdk-visually-hidden`),e.classList.add(`cdk-focus-trap-anchor`),e.setAttribute(`aria-hidden`,`true`),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){l(e,{injector:this._injector})}},Wn=(()=>{class FocusTrapFactory{_checker=f(Un);_ngZone=f(b);_document=f(E);_injector=f(I);constructor(){f(J).load(Fn)}create(e,t=!1){return new FocusTrap(e,this._checker,this._ngZone,this._document,t,this._injector)}static ɵfac=function FocusTrapFactory_Factory(e){return new(e||FocusTrapFactory)};static ɵprov=p({token:FocusTrapFactory,factory:FocusTrapFactory.ɵfac})}return FocusTrapFactory})(),Gn=(()=>{class CdkTrapFocus{_elementRef=f(U);_focusTrapFactory=f(Wn);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){f(q).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&=(this._previouslyFocusedElement.focus(),null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=ht(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function CdkTrapFocus_Factory(e){return new(e||CdkTrapFocus)};static ɵdir=a({type:CdkTrapFocus,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,F],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,F]},exportAs:[`cdkTrapFocus`],features:[i]})}return CdkTrapFocus})(),Kn=new r(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null}),qn=new r(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`),Jn=0,Yn=(()=>{class LiveAnnouncer{_ngZone=f(b);_defaultOptions=f(qn,{optional:!0});_liveElement;_document=f(E);_sanitizer=f(Fe);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=f(Kn,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let n=this._defaultOptions,r,i;return t.length===1&&typeof t[0]==`number`?i=t[0]:[r,i]=t,this.clear(),clearTimeout(this._previousTimeout),r||=n&&n.politeness?n.politeness:`polite`,i==null&&n&&(i=n.duration),this._liveElement.setAttribute(`aria-live`,r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||=new Promise(e=>this._currentResolve=e),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:_setInnerHtml(this._liveElement,e,this._sanitizer),typeof i==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),i)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,t=this._document.getElementsByClassName(e),n=this._document.createElement(`div`);for(let e=0;e<t.length;e++)t[e].remove();return n.classList.add(e),n.classList.add(`cdk-visually-hidden`),n.setAttribute(`aria-atomic`,`true`),n.setAttribute(`aria-live`,`polite`),n.id=`cdk-live-announcer-${Jn++}`,this._document.body.appendChild(n),n}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let n=0;n<t.length;n++){let r=t[n],i=r.getAttribute(`aria-owns`);i?i.indexOf(e)===-1&&r.setAttribute(`aria-owns`,i+` `+e):r.setAttribute(`aria-owns`,e)}}static ɵfac=function LiveAnnouncer_Factory(e){return new(e||LiveAnnouncer)};static ɵprov=p({token:LiveAnnouncer,factory:LiveAnnouncer.ɵfac})}return LiveAnnouncer})(),Xn=(()=>{class CdkAriaLive{_elementRef=f(U);_liveAnnouncer=f(Yn);_contentObserver=f(zn);_ngZone=f(b);get politeness(){return this._politeness}set politeness(e){this._politeness=e===`off`||e===`assertive`?e:`polite`,this._politeness===`off`?this._subscription&&=(this._subscription.unsubscribe(),void 0):this._subscription||=this._ngZone.runOutsideAngular(()=>this._contentObserver.observe(this._elementRef).subscribe(()=>{let e=this._elementRef.nativeElement.textContent;e!==this._previousAnnouncedText&&(this._liveAnnouncer.announce(e,this._politeness,this.duration),this._previousAnnouncedText=e)}))}_politeness=`polite`;duration;_previousAnnouncedText;_subscription;constructor(){f(J).load(Fn)}ngOnDestroy(){this._subscription?.unsubscribe()}static ɵfac=function CdkAriaLive_Factory(e){return new(e||CdkAriaLive)};static ɵdir=a({type:CdkAriaLive,selectors:[[``,`cdkAriaLive`,``]],inputs:{politeness:[0,`cdkAriaLive`,`politeness`],duration:[0,`cdkAriaLiveDuration`,`duration`]},exportAs:[`cdkAriaLive`]})}return CdkAriaLive})(),X=function(e){return e[e.NONE=0]=`NONE`,e[e.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,e[e.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,e}(X||{}),Zn=`cdk-high-contrast-black-on-white`,Qn=`cdk-high-contrast-white-on-black`,$n=`cdk-high-contrast-active`,er=(()=>{class HighContrastModeDetector{_platform=f(q);_hasCheckedHighContrastMode=!1;_document=f(E);_breakpointSubscription;constructor(){this._breakpointSubscription=f(st).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return X.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(n&&n.backgroundColor||``).replace(/ /g,``);switch(e.remove(),r){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return X.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return X.BLACK_ON_WHITE}return X.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove($n,Zn,Qn),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===X.BLACK_ON_WHITE?e.add($n,Zn):t===X.WHITE_ON_BLACK&&e.add($n,Qn)}}static ɵfac=function HighContrastModeDetector_Factory(e){return new(e||HighContrastModeDetector)};static ɵprov=p({token:HighContrastModeDetector,factory:HighContrastModeDetector.ɵfac})}return HighContrastModeDetector})(),tr=(()=>{class A11yModule{constructor(){f(er)._applyBodyHighContrastModeCssClasses()}static ɵfac=function A11yModule_Factory(e){return new(e||A11yModule)};static ɵmod=fe({type:A11yModule,imports:[Vn,Xn,Gn,Nn],exports:[Xn,Gn,Nn]});static ɵinj=ae({imports:[Vn]})}return A11yModule})()}));function addAriaReferencedId(e,t,n){let r=getAriaReferenceIds(e,t);n=n.trim(),!r.some(e=>e.trim()===n)&&(r.push(n),e.setAttribute(t,r.join(rr)))}function removeAriaReferencedId(e,t,n){let r=getAriaReferenceIds(e,t);n=n.trim();let i=r.filter(e=>e!==n);i.length?e.setAttribute(t,i.join(rr)):e.removeAttribute(t)}function getAriaReferenceIds(e,t){return e.getAttribute(t)?.match(/\S+/g)??[]}function getKey(e,t){return typeof e==`string`?`${t||``}/${e}`:e}function setMessageId(e,t){e.id||=`${ir}-${t}-${or++}`}var rr,ir,ar,or,sr,cr=e((()=>{nr(),v(),at(),ut(),Ln(),Pn(),pt(),xn(),rr=` `,ir=`cdk-describedby-message`,ar=`cdk-describedby-host`,or=0,sr=(()=>{class AriaDescriber{_platform=f(q);_document=f(E);_messageRegistry=new Map;_messagesContainer=null;_id=`${or++}`;constructor(){f(J).load(Fn),this._id=f(s)+`-`+or++}describe(e,t,n){if(!this._canBeDescribed(e,t))return;let r=getKey(t,n);typeof t==`string`?this._messageRegistry.has(r)||this._createMessageElement(t,n):(setMessageId(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,n){if(!t||!this._isElementNode(e))return;let r=getKey(t,n);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t==`string`){let e=this._messageRegistry.get(r);e&&e.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ar}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(ar);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let n=this._document.createElement(`div`);setMessageId(n,this._id),n.textContent=e,t&&n.setAttribute(`role`,t),this._createMessagesContainer(),this._messagesContainer.appendChild(n),this._messageRegistry.set(getKey(e,t),{messageElement:n,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let e=0;e<t.length;e++)t[e].remove();let n=this._document.createElement(`div`);n.style.visibility=`hidden`,n.classList.add(e),n.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||n.setAttribute(`platform`,`server`),this._document.body.appendChild(n),this._messagesContainer=n}_removeCdkDescribedByReferenceIds(e){let t=getAriaReferenceIds(e,`aria-describedby`).filter(e=>e.indexOf(ir)!=0);e.setAttribute(`aria-describedby`,t.join(` `))}_addMessageReference(e,t){let n=this._messageRegistry.get(t);addAriaReferencedId(e,`aria-describedby`,n.messageElement.id),e.setAttribute(ar,this._id),n.referenceCount++}_removeMessageReference(e,t){let n=this._messageRegistry.get(t);n.referenceCount--,removeAriaReferencedId(e,`aria-describedby`,n.messageElement.id),e.removeAttribute(ar)}_isElementDescribedByMessage(e,t){let n=getAriaReferenceIds(e,`aria-describedby`),r=this._messageRegistry.get(t),i=r&&r.messageElement.id;return!!i&&n.indexOf(i)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t==`object`)return!0;let n=t==null?``:`${t}`.trim(),r=e.getAttribute(`aria-label`);return n?!r||r.trim()!==n:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function AriaDescriber_Factory(e){return new(e||AriaDescriber)};static ɵprov=p({token:AriaDescriber,factory:AriaDescriber.ɵfac})}return AriaDescriber})()})),lr=e((()=>{at(),vt(),Cn()}));function distanceToFurthestCorner(e,t,n){let r=Math.max(Math.abs(e-n.left),Math.abs(e-n.right)),i=Math.max(Math.abs(t-n.top),Math.abs(t-n.bottom));return Math.sqrt(r*r+i*i)}var Z,RippleRef,ur,RippleEventManager,dr,fr,pr,mr,hr,gr,_r,vr,yr,br=e((()=>{lr(),v(),cr(),Wt(),Ln(),bn(),Z=function(e){return e[e.FADING_IN=0]=`FADING_IN`,e[e.VISIBLE=1]=`VISIBLE`,e[e.FADING_OUT=2]=`FADING_OUT`,e[e.HIDDEN=3]=`HIDDEN`,e}(Z||{}),RippleRef=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Z.HIDDEN;constructor(e,t,n,r=!1){this._renderer=e,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},ur=normalizePassiveListenerOptions({passive:!0,capture:!0}),RippleEventManager=class{_events=new Map;addHandler(e,t,n,r){let i=this._events.get(t);if(i){let e=i.get(n);e?e.add(r):i.set(n,new Set([r]))}else this._events.set(t,new Map([[n,new Set([r])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,ur)})}removeHandler(e,t,n){let r=this._events.get(e);if(!r)return;let i=r.get(t);i&&(i.delete(n),i.size===0&&r.delete(t),r.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,ur)))}_delegateEventHandler=e=>{let t=Ot(e);t&&this._events.get(e.type)?.forEach((n,r)=>{(r===t||r.contains(t))&&n.forEach(t=>t.handleEvent(e))})}},dr={enterDuration:225,exitDuration:150},fr=800,pr=normalizePassiveListenerOptions({passive:!0,capture:!0}),mr=[`mousedown`,`touchstart`],hr=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`],gr=(()=>{class _MatRippleStylesLoader{static ɵfac=function _MatRippleStylesLoader_Factory(e){return new(e||_MatRippleStylesLoader)};static ɵcmp=K({type:_MatRippleStylesLoader,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function _MatRippleStylesLoader_Template(e,t){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return _MatRippleStylesLoader})(),_r=class RippleRenderer{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new RippleEventManager;constructor(e,t,n,r,i){this._target=e,this._ngZone=t,this._platform=r,r.isBrowser&&(this._containerElement=Ht(n)),i&&i.get(J).load(gr)}fadeInRipple(e,t,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i={...dr,...n.animation};n.centered&&(e=r.left+r.width/2,t=r.top+r.height/2);let a=n.radius||distanceToFurthestCorner(e,t,r),o=e-r.left,s=t-r.top,c=i.enterDuration,l=document.createElement(`div`);l.classList.add(`mat-ripple-element`),l.style.left=`${o-a}px`,l.style.top=`${s-a}px`,l.style.height=`${a*2}px`,l.style.width=`${a*2}px`,n.color!=null&&(l.style.backgroundColor=n.color),l.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(l);let ee=window.getComputedStyle(l),te=ee.transitionProperty,ne=ee.transitionDuration,re=te===`none`||ne===`0s`||ne===`0s, 0s`||r.width===0&&r.height===0,u=new RippleRef(this,l,n,re);l.style.transform=`scale3d(1, 1, 1)`,u.state=Z.FADING_IN,n.persistent||(this._mostRecentTransientRipple=u);let d=null;return!re&&(c||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let onTransitionEnd=()=>{d&&(d.fallbackTimer=null),clearTimeout(e),this._finishRippleTransition(u)},onTransitionCancel=()=>this._destroyRipple(u),e=setTimeout(onTransitionCancel,c+100);l.addEventListener(`transitionend`,onTransitionEnd),l.addEventListener(`transitioncancel`,onTransitionCancel),d={onTransitionEnd,onTransitionCancel,fallbackTimer:e}}),this._activeRipples.set(u,d),(re||!c)&&this._finishRippleTransition(u),u}fadeOutRipple(e){if(e.state===Z.FADING_OUT||e.state===Z.HIDDEN)return;let t=e.element,n={...dr,...e.config.animation};t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,e.state=Z.FADING_OUT,(e._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=Ht(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,mr.forEach(e=>{RippleRenderer._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(e){e.type===`mousedown`?this._onMousedown(e):e.type===`touchstart`?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||=(this._ngZone.runOutsideAngular(()=>{hr.forEach(e=>{this._triggerElement.addEventListener(e,this,pr)})}),!0)}_finishRippleTransition(e){e.state===Z.FADING_IN?this._startFadeOutTransition(e):e.state===Z.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:n}=e.config;e.state=Z.VISIBLE,!n&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=Z.HIDDEN,t!==null&&(e.element.removeEventListener(`transitionend`,t.onTransitionEnd),e.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=isFakeMousedownFromScreenReader(e),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+fr;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!isFakeTouchstartFromScreenReader(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===Z.VISIBLE||e.config.terminateOnPointerUp&&e.state===Z.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(mr.forEach(t=>RippleRenderer._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&=(hr.forEach(t=>e.removeEventListener(t,this,pr)),!1))}},vr=new r(`mat-ripple-global-options`),yr=(()=>{class MatRipple{_elementRef=f(U);_animationsDisabled=_animationsDisabled();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=f(b),t=f(q),n=f(vr,{optional:!0}),r=f(I);this._globalOptions=n||{},this._rippleRenderer=new _r(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,...this._animationsDisabled?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,n){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,t,{...this.rippleConfig,...n}):this._rippleRenderer.fadeInRipple(0,0,{...this.rippleConfig,...e})}static ɵfac=function MatRipple_Factory(e){return new(e||MatRipple)};static ɵdir=a({type:MatRipple,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function MatRipple_HostBindings(e,t){e&2&&u(`mat-ripple-unbounded`,t.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return MatRipple})()})),xr,Sr=e((()=>{v(),xr=(()=>{class _StructuralStylesLoader{static ɵfac=function _StructuralStylesLoader_Factory(e){return new(e||_StructuralStylesLoader)};static ɵcmp=K({type:_StructuralStylesLoader,selectors:[[`structural-styles`]],decls:0,vars:0,template:function _StructuralStylesLoader_Template(e,t){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
    --mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return _StructuralStylesLoader})()})),Cr,wr=e((()=>{yt(),v(),br(),Cr=(()=>{class MatRippleModule{static ɵfac=function MatRippleModule_Factory(e){return new(e||MatRippleModule)};static ɵmod=fe({type:MatRippleModule,imports:[yr],exports:[yr,Rt]});static ɵinj=ae({imports:[Rt]})}return MatRippleModule})()})),Tr,Er,Dr,Or,kr,Ar,jr,Mr=e((()=>{v(),lr(),bn(),br(),Tr={capture:!0},Er=[`focus`,`mousedown`,`mouseenter`,`touchstart`],Dr=`mat-ripple-loader-uninitialized`,Or=`mat-ripple-loader-class-name`,kr=`mat-ripple-loader-centered`,Ar=`mat-ripple-loader-disabled`,jr=(()=>{class MatRippleLoader{_document=f(E);_animationsDisabled=_animationsDisabled();_globalRippleOptions=f(vr,{optional:!0});_platform=f(q);_ngZone=f(b);_injector=f(I);_eventCleanups;_hosts=new Map;constructor(){let e=f(be).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Er.map(t=>e.listen(this._document,t,this._onInteraction,Tr)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(e=>e())}configureRipple(e,t){e.setAttribute(Dr,this._globalRippleOptions?.namespace??``),(t.className||!e.hasAttribute(Or))&&e.setAttribute(Or,t.className||``),t.centered&&e.setAttribute(kr,``),t.disabled&&e.setAttribute(Ar,``)}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(Ar,``):e.removeAttribute(Ar)}_onInteraction=e=>{let t=Ot(e);if(t instanceof HTMLElement){let e=t.closest(`[${Dr}="${this._globalRippleOptions?.namespace??``}"]`);e&&this._createRipple(e)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let t=this._document.createElement(`span`);t.classList.add(`mat-ripple`,e.getAttribute(Or)),e.append(t);let n=this._globalRippleOptions,r=this._animationsDisabled?0:n?.animation?.enterDuration??dr.enterDuration,i=this._animationsDisabled?0:n?.animation?.exitDuration??dr.exitDuration,a={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(Ar),rippleConfig:{centered:e.hasAttribute(kr),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:i}}},o=new _r(a,this._ngZone,t,this._platform,this._injector),s=!a.rippleDisabled;s&&o.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:o,hasSetUpEvents:s}),e.removeAttribute(Dr)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function MatRippleLoader_Factory(e){return new(e||MatRippleLoader)};static ɵprov=p({token:MatRippleLoader,factory:MatRippleLoader.ɵfac})}return MatRippleLoader})()})),_ErrorStateTracker,Nr=e((()=>{v(),_ErrorStateTracker=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(e,t,n,r,i){this._defaultMatcher=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=i,t?pe(t.field)&&!t.updateValueAndValidity?(this.formField=t,this.ngControl=null):(this.formField=null,this.ngControl=t):this.ngControl=this.formField=null}updateErrorState(){let e=this.errorState,t=this._getCurrentErrorState(this.matcher||this._defaultMatcher);t!==e&&(this.errorState=t,this._stateChanges.next())}_getCurrentErrorState(e){if(this.formField&&e?.isSignalErrorState)return e.isSignalErrorState(this.formField.field())??!1;let t=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null;return e?.isErrorState(n,t)??!1}}})),Pr=e((()=>{hn(),_n(),bn(),cr(),br(),Sr(),Ln(),wr(),Mr(),Nr()}));function range(e,t){let n=Array(e);for(let r=0;r<e;r++)n[r]=t(r);return n}function provideDateFnsAdapter(e=Rr){return[{provide:DateAdapter,useClass:Lr},{provide:Y,useValue:e}]}var Fr,Ir,Lr,Rr,zr=e((()=>{v(),Pr(),cn(),Fr={long:`LLLL`,short:`LLL`,narrow:`LLLLL`},Ir={long:`EEEE`,short:`EEE`,narrow:`EEEEE`},Lr=(()=>{class DateFnsAdapter extends DateAdapter{constructor(){super();let e=f(pn,{optional:!0});this.setLocale(e)}getYear(e){return on(e)}getMonth(e){return rn(e)}getDate(e){return Kt(e)}getDayOfWeek(e){return $t(e)}getMonthNames(e){let t=Fr[e];return range(12,e=>this.format(new Date(2017,e,1),t))}getDateNames(){let e=typeof Intl<`u`?new Intl.DateTimeFormat(this.locale.code,{day:`numeric`,timeZone:`utc`}):null;return range(31,t=>{if(e){let n=new Date;return n.setUTCFullYear(2017,0,t+1),n.setUTCHours(0,0,0,0),e.format(n).replace(/[\u200e\u200f]/g,``)}return t+``})}getDayOfWeekNames(e){let t=Ir[e];return range(7,e=>this.format(new Date(2017,0,e+1),t))}getYearName(e){return this.format(e,`y`)}getFirstDayOfWeek(){return this.locale.options?.weekStartsOn??0}getNumDaysInMonth(e){return qt(e)}clone(e){return new Date(e.getTime())}createDate(e,t,n){let r=new Date;return r.setFullYear(e,t,n),r.setHours(0,0,0,0),r.getMonth(),r}today(){return new Date}parse(e,t){return this._parse(e,t)}format(e,t){if(!this.isValid(e))throw Error(`DateFnsAdapter: Cannot format invalid date.`);return en(e,t,{locale:this.locale})}addCalendarYears(e,t){return Jt(e,t)}addCalendarMonths(e,t){return Xt(e,t)}addCalendarDays(e,t){return Yt(e,t)}toIso8601(e){return Qt(e,{representation:`date`})}deserialize(e){if(typeof e==`string`){if(!e)return null;let t=ln(e);if(this.isValid(t))return t}return super.deserialize(e)}isDateInstance(e){return fn(e)}isValid(e){return Zt(e)}invalid(){return new Date(NaN)}setTime(e,t,n,r){return an(this.clone(e),{hours:t,minutes:n,seconds:r,milliseconds:0})}getHours(e){return dn(e)}getMinutes(e){return tn(e)}getSeconds(e){return un(e)}parseTime(e,t){return this._parse(e,t,!1)}addSeconds(e,t){return nn(e,t)}_parse(e,t,n=!0){if(typeof e==`string`&&e.length>0){if(n){let t=ln(e);if(this.isValid(t))return t}let r=Array.isArray(t)?t:[t];if(!t.length)throw Error(`Formats array must not be empty.`);for(let t of r){let n=sn(e,t,new Date,{locale:this.locale});if(this.isValid(n))return n}return this.invalid()}else if(typeof e==`number`)return new Date(e);else if(e instanceof Date)return this.clone(e);return null}static ɵfac=function DateFnsAdapter_Factory(e){return new(e||DateFnsAdapter)};static ɵprov=p({token:DateFnsAdapter,factory:DateFnsAdapter.ɵfac,autoProvided:!1})}return DateFnsAdapter})(),Rr={parse:{dateInput:`P`,timeInput:`p`},display:{dateInput:`P`,timeInput:`p`,monthYearLabel:`LLL uuuu`,dateA11yLabel:`PP`,monthYearA11yLabel:`LLLL uuuu`,timeOptionLabel:`p`}}}));function MatIconButton_Conditional_2_Template(e,t){e&1&&(_(0,`div`,1),A(1,1),d())}function transformTabIndex(e){return e==null?void 0:ie(e)}var Br,Vr,Hr,Ur,Wr,Gr=e((()=>{v(),cr(),Ln(),Mr(),bn(),Sr(),Br=[`*`,[[``,`progressIndicator`,``]]],Vr=[`*`,`[progressIndicator]`],Hr=new r(`MAT_BUTTON_CONFIG`),Ur=(()=>{class MatButtonBase{_elementRef=f(U);_ngZone=f(b);_animationsDisabled=_animationsDisabled();_config=f(Hr,{optional:!0});_focusMonitor=f(Mn);_cleanupClick;_renderer=f(ke);_rippleLoader=f(jr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=se(!1,{transform:F});constructor(){f(J).load(xr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled==null?this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null:this.ariaDisabled}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor&&this.disabled&&!this.disabledInteractive?-1:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function MatButtonBase_Factory(e){return new(e||MatButtonBase)};static ɵdir=a({type:MatButtonBase,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function MatButtonBase_HostBindings(e,t){e&2&&(S(`disabled`,t._getDisabledAttribute())(`aria-disabled`,t._getAriaDisabled())(`tabindex`,t._getTabIndex()),oe(t.color?`mat-`+t.color:``),u(`mat-mdc-button-progress-indicator-shown`,t.showProgress())(`mat-mdc-button-disabled`,t.disabled)(`mat-mdc-button-disabled-interactive`,t.disabledInteractive)(`mat-unthemed`,!t.color)(`_mat-animation-noopable`,t._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,F],disabled:[2,`disabled`,`disabled`,F],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,F],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,F],tabIndex:[2,`tabIndex`,`tabIndex`,transformTabIndex],_tabindex:[2,`tabindex`,`_tabindex`,transformTabIndex],showProgress:[1,`showProgress`]}})}return MatButtonBase})(),Wr=(()=>{class MatIconButton extends Ur{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function MatIconButton_Factory(e){return new(e||MatIconButton)};static ɵcmp=K({type:MatIconButton,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[L],ngContentSelectors:Vr,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function MatIconButton_Template(e,t){e&1&&(B(Br),D(0,`span`,0),A(1),y(2,MatIconButton_Conditional_2_Template,2,0,`div`,1),D(3,`span`,2)(4,`span`,3)),e&2&&(x(2),m(t.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return MatIconButton})()}));function MatButton_Conditional_5_Template(e,t){e&1&&(_(0,`div`,2),A(1,3),d())}function MatFabButton_Conditional_5_Template(e,t){e&1&&(_(0,`div`,2),A(1,3),d())}function MatMiniFabButton_Conditional_5_Template(e,t){e&1&&(_(0,`div`,2),A(1,3),d())}function _inferAppearance(e){return e.hasAttribute(`mat-raised-button`)?`elevated`:e.hasAttribute(`mat-stroked-button`)?`outlined`:e.hasAttribute(`mat-flat-button`)?`filled`:e.hasAttribute(`mat-button`)?`text`:null}var Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni=e((()=>{Gr(),v(),yt(),wr(),Kr=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]],qr=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`],Jr=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--mat-fab-container-shape, var(--mat-sys-corner-large)) + calc(var(--mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium)) + calc(var(--mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,Yr=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]),Xr=(()=>{class MatButton extends Ur{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=_inferAppearance(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,n=this._appearance?Yr.get(this._appearance):null,r=Yr.get(e);n&&t.remove(...n),t.add(...r),this._appearance=e}static ɵfac=function MatButton_Factory(e){return new(e||MatButton)};static ɵcmp=K({type:MatButton,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[L],ngContentSelectors:qr,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function MatButton_Template(e,t){e&1&&(B(Kr),D(0,`span`,0),A(1),_(2,`span`,1),A(3,1),d(),A(4,2),y(5,MatButton_Conditional_5_Template,2,0,`div`,2),D(6,`span`,3)(7,`span`,4)),e&2&&(u(`mdc-button__ripple`,!t._isFab)(`mdc-fab__ripple`,t._isFab),x(5),m(t.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return MatButton})(),Zr=new r(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>Qr}),Qr={color:`accent`},$r=(()=>{class MatFabButton extends Ur{_options=f(Zr,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Qr,this.color=this._options.color||Qr.color}static ɵfac=function MatFabButton_Factory(e){return new(e||MatFabButton)};static ɵcmp=K({type:MatFabButton,selectors:[[`button`,`mat-fab`,``],[`a`,`mat-fab`,``],[`button`,`matFab`,``],[`a`,`matFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mat-mdc-fab`],hostVars:4,hostBindings:function MatFabButton_HostBindings(e,t){e&2&&u(`mdc-fab--extended`,t.extended)(`mat-mdc-extended-fab`,t.extended)},inputs:{extended:[2,`extended`,`extended`,F]},exportAs:[`matButton`,`matAnchor`],features:[L],ngContentSelectors:qr,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function MatFabButton_Template(e,t){e&1&&(B(Kr),D(0,`span`,0),A(1),_(2,`span`,1),A(3,1),d(),A(4,2),y(5,MatFabButton_Conditional_5_Template,2,0,`div`,2),D(6,`span`,3)(7,`span`,4)),e&2&&(u(`mdc-button__ripple`,!t._isFab)(`mdc-fab__ripple`,t._isFab),x(5),m(t.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--mat-fab-container-shape, var(--mat-sys-corner-large)) + calc(var(--mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium)) + calc(var(--mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`],encapsulation:2})}return MatFabButton})(),ei=(()=>{class MatMiniFabButton extends Ur{_options=f(Zr,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||Qr,this.color=this._options.color||Qr.color}static ɵfac=function MatMiniFabButton_Factory(e){return new(e||MatMiniFabButton)};static ɵcmp=K({type:MatMiniFabButton,selectors:[[`button`,`mat-mini-fab`,``],[`a`,`mat-mini-fab`,``],[`button`,`matMiniFab`,``],[`a`,`matMiniFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mdc-fab--mini`,`mat-mdc-mini-fab`],exportAs:[`matButton`,`matAnchor`],features:[L],ngContentSelectors:qr,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function MatMiniFabButton_Template(e,t){e&1&&(B(Kr),D(0,`span`,0),A(1),_(2,`span`,1),A(3,1),d(),A(4,2),y(5,MatMiniFabButton_Conditional_5_Template,2,0,`div`,2),D(6,`span`,3)(7,`span`,4)),e&2&&(u(`mdc-button__ripple`,!t._isFab)(`mdc-fab__ripple`,t._isFab),x(5),m(t.showProgress()?5:-1))},styles:[Jr],encapsulation:2})}return MatMiniFabButton})(),ti=(()=>{class MatButtonModule{static ɵfac=function MatButtonModule_Factory(e){return new(e||MatButtonModule)};static ɵmod=fe({type:MatButtonModule,imports:[Cr,Xr,ei,Wr,$r],exports:[Rt,Xr,ei,Wr,$r]});static ɵinj=ae({imports:[Cr,Rt]})}return MatButtonModule})()})),ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi=e((()=>{Ge(),Wt(),_t(),v(),lr(),cr(),yt(),Ft(),xt(),lt(),Te(),bn(),ri=[`tooltip`],ii=new r(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let e=f(I);return()=>Tt(e,{scrollThrottle:20})}}),ai=new r(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})}),oi=`tooltip-panel`,si={passive:!0},ci=8,li=8,ui=24,di=200,fi=(()=>{class MatTooltip{_elementRef=f(U);_ngZone=f(b);_platform=f(q);_ariaDescriber=f(sr);_focusMonitor=f(Mn);_dir=f(dt);_injector=f(I);_viewContainerRef=f(Ke);_mediaMatcher=f(ct);_document=f(E);_renderer=f(ke);_animationsDisabled=_animationsDisabled();_defaultOptions=f(ai,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=pi;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Gt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Gt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Bt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Bt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e==null?``:String(e).trim(),!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new N;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=ci}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Ie(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new At(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=n.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(Ie(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let t=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&t._origin instanceof U)return this._overlayRef;this._detach()}let t=this._injector.get(zt).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${oi}`,r=wt(this._injector,this.positionAtOrigin&&e||this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return r.positionChanges.pipe(Ie(this._destroyed)).subscribe(e=>{this._updateCurrentPositionClass(e.connectionPair),this._tooltipInstance&&e.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=It(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(ii)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Ie(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Ie(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Ie(this._destroyed)).subscribe(e=>{e.preventDefault(),e.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Ie(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset({...n.main,...r.main}),this._addOffset({...n.fallback,...r.fallback})])}_addOffset(e){let t=li,n=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-8:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=n?-8:t:e.originX===`end`&&(e.offsetX=n?t:-8),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,n;t==`above`||t==`below`?n={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?n={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(n={originX:`end`,originY:`center`});let{x:r,y:i}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:r,originY:i}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,n;t==`above`?n={overlayX:`center`,overlayY:`bottom`}:t==`below`?n={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?n={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(n={overlayX:`start`,overlayY:`center`});let{x:r,y:i}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:r,overlayY:i}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),l(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:r}=e,i;if(i=t===`center`?this._dir&&this._dir.value===`rtl`?n===`end`?`left`:`right`:n===`start`?`left`:`right`:t===`bottom`&&r===`top`?`above`:`below`,i!==this._currentPosition){let e=this._overlayRef;if(e){let t=`${this._cssClassPrefix}-${oi}-`;e.removePanelClass(t+this._currentPosition),e.addPanelClass(t+i)}this._currentPosition=i}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??500)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let touchendListener=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,touchendListener),this._addListener(`touchcancel`,touchendListener)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,si))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,n=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(n.webkitUserDrag=`none`),n.touchAction=`none`,n.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||l({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type!==`keydown`||this._isTooltipVisible()&&e.keyCode===27&&!ft(e);static ɵfac=function MatTooltip_Factory(e){return new(e||MatTooltip)};static ɵdir=a({type:MatTooltip,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function MatTooltip_HostBindings(e,t){e&2&&u(`mat-mdc-tooltip-disabled`,t.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return MatTooltip})(),pi=(()=>{class TooltipComponent{_changeDetectorRef=f(G);_elementRef=f(U);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=_animationsDisabled();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new N;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>ui&&e.width>=di}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:n),t.classList.add(e?n:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let e=getComputedStyle(t);(e.getPropertyValue(`animation-duration`)===`0s`||e.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function TooltipComponent_Factory(e){return new(e||TooltipComponent)};static ɵcmp=K({type:TooltipComponent,selectors:[[`mat-tooltip-component`]],viewQuery:function TooltipComponent_Query(e,t){if(e&1&&j(ri,7),e&2){let e;M(e=H())&&(t._tooltip=e.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function TooltipComponent_HostBindings(e,t){e&1&&z(`mouseleave`,function TooltipComponent_mouseleave_HostBindingHandler(e){return t._handleMouseLeave(e)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function TooltipComponent_Template(e,t){e&1&&(_(0,`div`,1,0),ze(`animationend`,function TooltipComponent_Template_div_animationend_0_listener(e){return t._handleAnimationEnd(e)}),_(2,`div`,2),V(3),d()()),e&2&&(oe(t.tooltipClass),u(`mdc-tooltip--multiline`,t._isMultiline),x(3),R(t.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return TooltipComponent})()})),hi,gi=e((()=>{v(),hi=new r(`MAT_INPUT_VALUE_ACCESSOR`)})),_i,vi,yi=e((()=>{v(),_i=(()=>{class MatFormFieldControl{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function MatFormFieldControl_Factory(e){return new(e||MatFormFieldControl)};static ɵdir=a({type:MatFormFieldControl})}return MatFormFieldControl})(),vi=new r(`MatFormField`)}));function _forTrack0(e,t){return this._trackRow(t)}function MatCalendarBody_Conditional_0_Template(e,t){if(e&1&&(_(0,`tr`,0)(1,`td`,3),V(2),d()()),e&2){let e=P();x(),Ce(`padding-top`,e._cellPadding)(`padding-bottom`,e._cellPadding),S(`colspan`,e.numCols),x(),Ae(` `,e.label,` `)}}function MatCalendarBody_For_2_Conditional_1_Template(e,t){if(e&1&&(_(0,`td`,3),V(1),d()),e&2){let e=P(2);Ce(`padding-top`,e._cellPadding)(`padding-bottom`,e._cellPadding),S(`colspan`,e._firstRowOffset),x(),Ae(` `,e._firstRowOffset>=e.labelMinRequiredCells?e.label:``,` `)}}function MatCalendarBody_For_2_For_3_Template(e,r){if(e&1){let e=n();_(0,`td`,6)(1,`button`,7),ze(`click`,function MatCalendarBody_For_2_For_3_Template_button_click_1_listener(n){let r=t(e).$implicit;return w(P(2)._cellClicked(r,n))})(`focus`,function MatCalendarBody_For_2_For_3_Template_button_focus_1_listener(n){let r=t(e).$implicit;return w(P(2)._emitActiveDateChange(r,n))}),_(2,`span`,8),V(3),d(),D(4,`span`,9),d()()}if(e&2){let e=r.$implicit,t=r.$index,n=P().$index,i=P();Ce(`width`,i._cellWidth)(`padding-top`,i._cellPadding)(`padding-bottom`,i._cellPadding),S(`data-mat-row`,n)(`data-mat-col`,t),x(),oe(e.cssClasses),u(`mat-calendar-body-disabled`,!e.enabled)(`mat-calendar-body-active`,i._isActiveCell(n,t))(`mat-calendar-body-range-start`,i._isRangeStart(e.compareValue))(`mat-calendar-body-range-end`,i._isRangeEnd(e.compareValue))(`mat-calendar-body-in-range`,i._isInRange(e.compareValue))(`mat-calendar-body-comparison-bridge-start`,i._isComparisonBridgeStart(e.compareValue,n,t))(`mat-calendar-body-comparison-bridge-end`,i._isComparisonBridgeEnd(e.compareValue,n,t))(`mat-calendar-body-comparison-start`,i._isComparisonStart(e.compareValue))(`mat-calendar-body-comparison-end`,i._isComparisonEnd(e.compareValue))(`mat-calendar-body-in-comparison-range`,i._isInComparisonRange(e.compareValue))(`mat-calendar-body-preview-start`,i._isPreviewStart(e.compareValue))(`mat-calendar-body-preview-end`,i._isPreviewEnd(e.compareValue))(`mat-calendar-body-in-preview`,i._isInPreview(e.compareValue)),h(`tabIndex`,i._isActiveCell(n,t)?0:-1),S(`aria-label`,e.ariaLabel)(`aria-disabled`,!e.enabled||null)(`aria-pressed`,i._isSelected(e.compareValue))(`aria-current`,i.todayValue===e.compareValue?`date`:null)(`aria-describedby`,i._getDescribedby(e.compareValue)),x(),u(`mat-calendar-body-selected`,i._isSelected(e.compareValue))(`mat-calendar-body-comparison-identical`,i._isComparisonIdentical(e.compareValue))(`mat-calendar-body-today`,i.todayValue===e.compareValue),x(),Ae(` `,e.displayValue,` `)}}function MatCalendarBody_For_2_Template(e,t){if(e&1&&(_(0,`tr`,1),y(1,MatCalendarBody_For_2_Conditional_1_Template,2,6,`td`,4),Ve(2,MatCalendarBody_For_2_For_3_Template,5,49,`td`,5,_forTrack1),d()),e&2){let e=t.$implicit,n=t.$index,r=P();x(),m(n===0&&r._firstRowOffset?1:-1),x(),Ne(e)}}function MatMonthView_For_4_Template(e,t){if(e&1&&(T(0,`th`,2)(1,`span`,6),V(2),k(),T(3,`span`,3),V(4),k()()),e&2){let e=t.$implicit;x(2),R(e.long),x(2),R(e.narrow)}}function MatCalendar_ng_template_0_Template(e,t){}function MatCalendar_Case_2_Template(e,r){if(e&1){let e=n();T(0,`mat-month-view`,4),Ue(`activeDateChange`,function MatCalendar_Case_2_Template_mat_month_view_activeDateChange_0_listener(n){t(e);let r=P();return ye(r.activeDate,n)||(r.activeDate=n),w(n)}),z(`_userSelection`,function MatCalendar_Case_2_Template_mat_month_view__userSelection_0_listener(n){return t(e),w(P()._dateSelected(n))})(`dragStarted`,function MatCalendar_Case_2_Template_mat_month_view_dragStarted_0_listener(n){return t(e),w(P()._dragStarted(n))})(`dragEnded`,function MatCalendar_Case_2_Template_mat_month_view_dragEnded_0_listener(n){return t(e),w(P()._dragEnded(n))}),k()}if(e&2){let e=P();Je(`activeDate`,e.activeDate),W(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)(`comparisonStart`,e.comparisonStart)(`comparisonEnd`,e.comparisonEnd)(`startDateAccessibleName`,e.startDateAccessibleName)(`endDateAccessibleName`,e.endDateAccessibleName)(`activeDrag`,e._activeDrag)}}function MatCalendar_Case_3_Template(e,r){if(e&1){let e=n();T(0,`mat-year-view`,5),Ue(`activeDateChange`,function MatCalendar_Case_3_Template_mat_year_view_activeDateChange_0_listener(n){t(e);let r=P();return ye(r.activeDate,n)||(r.activeDate=n),w(n)}),z(`monthSelected`,function MatCalendar_Case_3_Template_mat_year_view_monthSelected_0_listener(n){return t(e),w(P()._monthSelectedInYearView(n))})(`selectedChange`,function MatCalendar_Case_3_Template_mat_year_view_selectedChange_0_listener(n){return t(e),w(P()._goToDateInView(n,`month`))}),k()}if(e&2){let e=P();Je(`activeDate`,e.activeDate),W(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)}}function MatCalendar_Case_4_Template(e,r){if(e&1){let e=n();T(0,`mat-multi-year-view`,6),Ue(`activeDateChange`,function MatCalendar_Case_4_Template_mat_multi_year_view_activeDateChange_0_listener(n){t(e);let r=P();return ye(r.activeDate,n)||(r.activeDate=n),w(n)}),z(`yearSelected`,function MatCalendar_Case_4_Template_mat_multi_year_view_yearSelected_0_listener(n){return t(e),w(P()._yearSelectedInMultiYearView(n))})(`selectedChange`,function MatCalendar_Case_4_Template_mat_multi_year_view_selectedChange_0_listener(n){return t(e),w(P()._goToDateInView(n,`year`))}),k()}if(e&2){let e=P();Je(`activeDate`,e.activeDate),W(`selected`,e.selected)(`dateFilter`,e.dateFilter)(`maxDate`,e.maxDate)(`minDate`,e.minDate)(`dateClass`,e.dateClass)}}function MatDatepickerContent_ng_template_2_Template(e,t){}function MatDatepickerToggle_Conditional_2_Template(e,t){e&1&&(ve(),T(0,`svg`,2),O(1,`path`,3),k())}function MatDatepickerActions_ng_template_0_Template(e,t){e&1&&(_(0,`div`,0),A(1),d())}function isTableCell(e){return e?.nodeName===`TD`}function getCellElement(e){let t;return isTableCell(e)?t=e:isTableCell(e.parentNode)?t=e.parentNode:isTableCell(e.parentNode?.parentNode)&&(t=e.parentNode.parentNode),t?.getAttribute(`data-mat-row`)==null?null:t}function isStart(e,t,n){return n!==null&&t!==n&&e<n&&e===t}function isEnd(e,t,n){return t!==null&&t!==n&&e>=t&&e===n}function isInRange(e,t,n,r){return r&&t!==null&&n!==null&&t!==n&&e>=t&&e<=n}function getActualTouchTarget(e){let t=e.changedTouches[0];return document.elementFromPoint(t.clientX,t.clientY)}function isSameMultiYearView(e,t,n,r,i){let a=e.getYear(t),o=e.getYear(n),s=getStartingYear(e,r,i);return Math.floor((a-s)/24)===Math.floor((o-s)/24)}function getActiveOffset(e,t,n,r){return euclideanModulo(e.getYear(t)-getStartingYear(e,n,r),24)}function getStartingYear(e,t,n){let r=0;return n?r=e.getYear(n)-24+1:t&&(r=e.getYear(t)),r}function euclideanModulo(e,t){return(e%t+t)%t}function dateInputsHaveChanged(e,t){let n=Object.keys(e);for(let r of n){let{previousValue:n,currentValue:i}=e[r];if(t.isDateInstance(n)&&t.isDateInstance(i)){if(!t.sameDate(n,i))return!0}else return!0}return!1}function _computeAriaAccessibleName(e){return _computeAriaAccessibleNameInternal(e,!0)}function ssrSafeIsElement(e){return e.nodeType===Node.ELEMENT_NODE}function ssrSafeIsHTMLInputElement(e){return e.nodeName===`INPUT`}function ssrSafeIsHTMLTextAreaElement(e){return e.nodeName===`TEXTAREA`}function _computeAriaAccessibleNameInternal(e,t){if(ssrSafeIsElement(e)&&t){let t=(e.getAttribute?.(`aria-labelledby`)?.split(/\s+/g)||[]).reduce((e,t)=>{let n=document.getElementById(t);return n&&e.push(n),e},[]);if(t.length)return t.map(e=>_computeAriaAccessibleNameInternal(e,!1)).join(` `)}if(ssrSafeIsElement(e)){let t=e.getAttribute(`aria-label`)?.trim();if(t)return t}if(ssrSafeIsHTMLInputElement(e)||ssrSafeIsHTMLTextAreaElement(e)){if(e.labels?.length)return Array.from(e.labels).map(e=>_computeAriaAccessibleNameInternal(e,!1)).join(` `);let t=e.getAttribute(`placeholder`)?.trim();if(t)return t;let n=e.getAttribute(`title`)?.trim();if(n)return n}return(e.textContent||``).replace(/\s+/g,` `).trim()}var _forTrack1,bi,xi,Si,Ci,wi,Ti,Ei,Di,MatCalendarCell,Oi,ki,Ai,Q,DateRange,$,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,MatDatepickerInputEvent,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la=e((()=>{v(),Te(),hn(),cr(),yt(),Wt(),_t(),Ft(),lr(),xt(),Ge(),Ln(),Sr(),ni(),Gr(),mi(),bn(),Qe(),gi(),yi(),Ct(),$e(),_n(),Nr(),_forTrack1=(e,t)=>t.id,bi=[`*`],xi=[`button`],Si=[[[``,`matDatepickerToggleIcon`,``]]],Ci=[`[matDatepickerToggleIcon]`],wi=[[[`input`,`matStartDate`,``]],[[`input`,`matEndDate`,``]]],Ti=[`input[matStartDate]`,`input[matEndDate]`],Ei=(()=>{class MatDatepickerIntl{changes=new N;calendarLabel=`Calendar`;openCalendarLabel=`Open calendar`;closeCalendarLabel=`Close calendar`;prevMonthLabel=`Previous month`;nextMonthLabel=`Next month`;prevYearLabel=`Previous year`;nextYearLabel=`Next year`;prevMultiYearLabel=`Previous 24 years`;nextMultiYearLabel=`Next 24 years`;switchToMonthViewLabel=`Choose date`;switchToMultiYearViewLabel=`Choose month and year`;startDateLabel=`Start date`;endDateLabel=`End date`;comparisonDateLabel=`Comparison range`;formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static ɵfac=function MatDatepickerIntl_Factory(e){return new(e||MatDatepickerIntl)};static ɵprov=p({token:MatDatepickerIntl,factory:MatDatepickerIntl.ɵfac})}return MatDatepickerIntl})(),Di=0,MatCalendarCell=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Di++;cssClasses;constructor(e,t,n,r,i,a=e,o){this.value=e,this.displayValue=t,this.ariaLabel=n,this.enabled=r,this.compareValue=a,this.rawValue=o,this.cssClasses=i instanceof Set?Array.from(i):i}},Oi={passive:!1,capture:!0},ki={passive:!0,capture:!0},Ai={passive:!0},Q=(()=>{class MatCalendarBody{_elementRef=f(U);_ngZone=f(b);_platform=f(q);_intl=f(Ei);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&=(this._focusActiveCell(),!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new C;previewChange=new C;activeDateChange=new C;dragStarted=new C;dragEnded=new C;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=f(I);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=f(ke),t=f(bt);this._startDateLabelId=t.getId(`mat-calendar-body-start-`),this._endDateLabelId=t.getId(`mat-calendar-body-end-`),this._comparisonStartDateLabelId=t.getId(`mat-calendar-body-comparison-start-`),this._comparisonEndDateLabelId=t.getId(`mat-calendar-body-comparison-end-`),f(J).load(xr),this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,n=[e.listen(t,`touchmove`,this._touchmoveHandler,Oi),e.listen(t,`mouseenter`,this._enterHandler,ki),e.listen(t,`focus`,this._enterHandler,ki),e.listen(t,`mouseleave`,this._leaveHandler,ki),e.listen(t,`blur`,this._leaveHandler,ki),e.listen(t,`mousedown`,this._mousedownHandler,Ai),e.listen(t,`touchstart`,this._mousedownHandler,Ai)];this._platform.isBrowser&&n.push(e.listen(`window`,`mouseup`,this._mouseupHandler),e.listen(`window`,`touchend`,this._touchendHandler)),this._eventCleanups=n})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:n,numCols:r}=this;(e.rows||t)&&(this._firstRowOffset=n&&n.length&&n[0].length?r-n[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/r}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/r}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let n=e*this.numCols+t;return e&&(n-=this._firstRowOffset),n==this.activeCell}_focusActiveCell(e=!0){l(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(`.mat-calendar-body-active`);t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return isStart(e,this.startValue,this.endValue)}_isRangeEnd(e){return isEnd(e,this.startValue,this.endValue)}_isInRange(e){return isInRange(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return isStart(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,n){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let r=this.rows[t][n-1];if(!r){let e=this.rows[t-1];r=e&&e[e.length-1]}return r&&!this._isRangeEnd(r.compareValue)}_isComparisonBridgeEnd(e,t,n){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let r=this.rows[t][n+1];if(!r){let e=this.rows[t+1];r=e&&e[0]}return r&&!this._isRangeStart(r.compareValue)}_isComparisonEnd(e){return isEnd(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return isInRange(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return isStart(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return isEnd(e,this.previewStart,this.previewEnd)}_isInPreview(e){return isInRange(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type===`focus`){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=getActualTouchTarget(e),n=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),getCellElement(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:n?.enabled?n:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!==`blur`&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=getCellElement(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(`.mat-calendar-body`)===this._elementRef.nativeElement&&this._ngZone.run(()=>{let n=this._getCellFromElement(t);this.dragEnded.emit({value:n?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=getActualTouchTarget(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=getCellElement(e);if(t){let e=t.getAttribute(`data-mat-row`),n=t.getAttribute(`data-mat-col`);if(e&&n)return this.rows[parseInt(e)]?.[parseInt(n)]||null}return null}static ɵfac=function MatCalendarBody_Factory(e){return new(e||MatCalendarBody)};static ɵcmp=K({type:MatCalendarBody,selectors:[[``,`mat-calendar-body`,``]],hostAttrs:[1,`mat-calendar-body`],inputs:{label:`label`,rows:`rows`,todayValue:`todayValue`,startValue:`startValue`,endValue:`endValue`,labelMinRequiredCells:`labelMinRequiredCells`,numCols:`numCols`,activeCell:`activeCell`,isRange:`isRange`,cellAspectRatio:`cellAspectRatio`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,previewStart:`previewStart`,previewEnd:`previewEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedValueChange:`selectedValueChange`,previewChange:`previewChange`,activeDateChange:`activeDateChange`,dragStarted:`dragStarted`,dragEnded:`dragEnded`},exportAs:[`matCalendarBody`],features:[i],decls:11,vars:11,consts:[[`aria-hidden`,`true`],[`role`,`row`],[1,`mat-calendar-body-hidden-label`,3,`id`],[1,`mat-calendar-body-label`],[1,`mat-calendar-body-label`,3,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`,3,`width`,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`],[`type`,`button`,1,`mat-calendar-body-cell`,3,`click`,`focus`,`tabindex`],[1,`mat-calendar-body-cell-content`,`mat-focus-indicator`],[`aria-hidden`,`true`,1,`mat-calendar-body-cell-preview`]],template:function MatCalendarBody_Template(e,t){e&1&&(y(0,MatCalendarBody_Conditional_0_Template,3,6,`tr`,0),Ve(1,MatCalendarBody_For_2_Template,4,1,`tr`,1,_forTrack0,!0),_(3,`span`,2),V(4),d(),_(5,`span`,2),V(6),d(),_(7,`span`,2),V(8),d(),_(9,`span`,2),V(10),d()),e&2&&(m(t._firstRowOffset<t.labelMinRequiredCells?0:-1),x(),Ne(t.rows),x(2),h(`id`,t._startDateLabelId),x(),Ae(` `,t.startDateAccessibleName,`
`),x(),h(`id`,t._endDateLabelId),x(),Ae(` `,t.endDateAccessibleName,`
`),x(),h(`id`,t._comparisonStartDateLabelId),x(),Oe(` `,t.comparisonDateAccessibleName,` `,t.startDateAccessibleName,`
`),x(),h(`id`,t._comparisonEndDateLabelId),x(),Oe(` `,t.comparisonDateAccessibleName,` `,t.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})}return MatCalendarBody})(),DateRange=class{start;end;_disableStructuralEquivalency;constructor(e,t){this.start=e,this.end=t}},$=(()=>{class MatDateSelectionModel{selection;_adapter;_selectionChanged=new N;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let n=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:n})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static ɵfac=function MatDateSelectionModel_Factory(e){Be()};static ɵprov=Re({token:MatDateSelectionModel,factory:MatDateSelectionModel.ɵfac})}return MatDateSelectionModel})(),ji=(()=>{class MatSingleDateSelectionModel extends ${constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new MatSingleDateSelectionModel(this._adapter);return e.updateSelection(this.selection,this),e}static ɵfac=function MatSingleDateSelectionModel_Factory(e){return new(e||MatSingleDateSelectionModel)(ge(DateAdapter))};static ɵprov=Re({token:MatSingleDateSelectionModel,factory:MatSingleDateSelectionModel.ɵfac})}return MatSingleDateSelectionModel})(),Mi=(()=>{class MatRangeDateSelectionModel extends ${constructor(e){super(new DateRange(null,null),e)}add(e){let{start:t,end:n}=this.selection;t==null?t=e:n==null?n=e:(t=e,n=null),super.updateSelection(new DateRange(t,n),this)}isValid(){let{start:e,end:t}=this.selection;return e==null&&t==null?!0:e!=null&&t!=null?this._isValidDateInstance(e)&&this._isValidDateInstance(t)&&this._adapter.compareDate(e,t)<=0:(e==null||this._isValidDateInstance(e))&&(t==null||this._isValidDateInstance(t))}isComplete(){return this.selection.start!=null&&this.selection.end!=null}clone(){let e=new MatRangeDateSelectionModel(this._adapter);return e.updateSelection(this.selection,this),e}static ɵfac=function MatRangeDateSelectionModel_Factory(e){return new(e||MatRangeDateSelectionModel)(ge(DateAdapter))};static ɵprov=Re({token:MatRangeDateSelectionModel,factory:MatRangeDateSelectionModel.ɵfac})}return MatRangeDateSelectionModel})(),Ni={provide:$,useFactory:()=>f($,{optional:!0,skipSelf:!0})||new ji(f(DateAdapter))},Pi={provide:$,useFactory:()=>f($,{optional:!0,skipSelf:!0})||new Mi(f(DateAdapter))},Fi=new r(`MAT_DATE_RANGE_SELECTION_STRATEGY`),Ii=(()=>{class DefaultMatCalendarRangeStrategy{_dateAdapter;constructor(e){this._dateAdapter=e}selectionFinished(e,t){let{start:n,end:r}=t;return n==null?n=e:r==null&&e&&this._dateAdapter.compareDate(e,n)>=0?r=e:(n=e,r=null),new DateRange(n,r)}createPreview(e,t){let n=null,r=null;return t.start&&!t.end&&e&&(n=t.start,r=e),new DateRange(n,r)}createDrag(e,t,n){let r=t.start,i=t.end;if(!r||!i)return null;let a=this._dateAdapter,o=a.compareDate(r,i)!==0,s=a.getYear(n)-a.getYear(e),c=a.getMonth(n)-a.getMonth(e),l=a.getDate(n)-a.getDate(e);return o&&a.sameDate(e,t.start)?(r=n,a.compareDate(n,i)>0&&(i=a.addCalendarYears(i,s),i=a.addCalendarMonths(i,c),i=a.addCalendarDays(i,l))):o&&a.sameDate(e,t.end)?(i=n,a.compareDate(n,r)<0&&(r=a.addCalendarYears(r,s),r=a.addCalendarMonths(r,c),r=a.addCalendarDays(r,l))):(r=a.addCalendarYears(r,s),r=a.addCalendarMonths(r,c),r=a.addCalendarDays(r,l),i=a.addCalendarYears(i,s),i=a.addCalendarMonths(i,c),i=a.addCalendarDays(i,l)),new DateRange(r,i)}static ɵfac=function DefaultMatCalendarRangeStrategy_Factory(e){return new(e||DefaultMatCalendarRangeStrategy)(ge(DateAdapter))};static ɵprov=Re({token:DefaultMatCalendarRangeStrategy,factory:DefaultMatCalendarRangeStrategy.ɵfac})}return DefaultMatCalendarRangeStrategy})(),Li=7,Ri=0,zi=(()=>{class MatMonthView{_changeDetectorRef=f(G);_dateFormats=f(Y,{optional:!0});_dateAdapter=f(DateAdapter,{optional:!0});_dir=f(dt,{optional:!0});_rangeStrategy=f(Fi,{optional:!0});_rerenderSubscription=o.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof DateRange?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new C;_userSelection=new C;dragStarted=new C;dragEnded=new C;activeDateChange=new C;_matCalendarBody;_monthLabel=g(``);_weeks=g([]);_firstWeekOffset=g(0);_rangeStart=g(null);_rangeEnd=g(null);_comparisonRangeStart=g(null);_comparisonRangeEnd=g(null);_previewStart=g(null);_previewEnd=g(null);_isRange=g(!1);_todayDate=g(null);_weekdays=g([]);constructor(){f(J).load(Fn),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(He(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,n=this._getDateFromDayOfMonth(t),r,i;this._selected instanceof DateRange?(r=this._getDateInCurrentMonth(this._selected.start),i=this._getDateInCurrentMonth(this._selected.end)):r=i=this._getDateInCurrentMonth(this._selected),(r!==t||i!==t)&&this.selectedChange.emit(n),this._userSelection.emit({value:n,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!ft(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames(`short`)[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Li+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Li),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let n=t?t.rawValue:null,r=this._rangeStrategy.createPreview(n,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)),this.activeDrag&&n){let t=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,n,e);t&&(this._previewStart.set(this._getCellCompareValue(t.start)),this._previewEnd.set(this._getCellCompareValue(t.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames(`narrow`),n=this._dateAdapter.getDayOfWeekNames(`long`).map((e,n)=>({long:e,narrow:t[n],id:Ri++}));this._weekdays.set(n.slice(e).concat(n.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),n=[[]];for(let r=0,i=this._firstWeekOffset();r<e;r++,i++){i==Li&&(n.push([]),i=0);let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),r+1),a=this._shouldEnableDate(e),o=this._dateAdapter.format(e,this._dateFormats.display.dateA11yLabel),s=this.dateClass?this.dateClass(e,`month`):void 0;n[n.length-1].push(new MatCalendarCell(r+1,t[r],o,a,s,this._getCellCompareValue(e),e))}this._weeks.set(n)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),n=this._dateAdapter.getMonth(e),r=this._dateAdapter.getDate(e);return new Date(t,n,r).getTime()}return null}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setRanges(e){e instanceof DateRange?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static ɵfac=function MatMonthView_Factory(e){return new(e||MatMonthView)};static ɵcmp=K({type:MatMonthView,selectors:[[`mat-month-view`]],viewQuery:function MatMonthView_Query(e,t){if(e&1&&j(Q,5),e&2){let e;M(e=H())&&(t._matCalendarBody=e.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`,activeDrag:`activeDrag`},outputs:{selectedChange:`selectedChange`,_userSelection:`_userSelection`,dragStarted:`dragStarted`,dragEnded:`dragEnded`,activeDateChange:`activeDateChange`},exportAs:[`matMonthView`],features:[i],decls:8,vars:14,consts:[[`role`,`grid`,1,`mat-calendar-table`],[1,`mat-calendar-table-header`],[`scope`,`col`],[`aria-hidden`,`true`],[`colspan`,`7`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`previewChange`,`dragStarted`,`dragEnded`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`comparisonStart`,`comparisonEnd`,`previewStart`,`previewEnd`,`isRange`,`labelMinRequiredCells`,`activeCell`,`startDateAccessibleName`,`endDateAccessibleName`],[1,`cdk-visually-hidden`]],template:function MatMonthView_Template(e,t){e&1&&(T(0,`table`,0)(1,`thead`,1)(2,`tr`),Ve(3,MatMonthView_For_4_Template,5,2,`th`,2,_forTrack1),k(),T(5,`tr`,3),O(6,`th`,4),k()(),T(7,`tbody`,5),z(`selectedValueChange`,function MatMonthView_Template_tbody_selectedValueChange_7_listener(e){return t._dateSelected(e)})(`activeDateChange`,function MatMonthView_Template_tbody_activeDateChange_7_listener(e){return t._updateActiveDate(e)})(`previewChange`,function MatMonthView_Template_tbody_previewChange_7_listener(e){return t._previewChanged(e)})(`dragStarted`,function MatMonthView_Template_tbody_dragStarted_7_listener(e){return t.dragStarted.emit(e)})(`dragEnded`,function MatMonthView_Template_tbody_dragEnded_7_listener(e){return t._dragEnded(e)})(`keyup`,function MatMonthView_Template_tbody_keyup_7_listener(e){return t._handleCalendarBodyKeyup(e)})(`keydown`,function MatMonthView_Template_tbody_keydown_7_listener(e){return t._handleCalendarBodyKeydown(e)}),k()()),e&2&&(x(3),Ne(t._weekdays()),x(4),W(`label`,t._monthLabel())(`rows`,t._weeks())(`todayValue`,t._todayDate())(`startValue`,t._rangeStart())(`endValue`,t._rangeEnd())(`comparisonStart`,t._comparisonRangeStart())(`comparisonEnd`,t._comparisonRangeEnd())(`previewStart`,t._previewStart())(`previewEnd`,t._previewEnd())(`isRange`,t._isRange())(`labelMinRequiredCells`,3)(`activeCell`,t._dateAdapter.getDate(t.activeDate)-1)(`startDateAccessibleName`,t.startDateAccessibleName)(`endDateAccessibleName`,t.endDateAccessibleName))},dependencies:[Q],encapsulation:2})}return MatMonthView})(),Bi=(()=>{class MatMultiYearView{_changeDetectorRef=f(G);_dateAdapter=f(DateAdapter,{optional:!0});_dir=f(dt,{optional:!0});_rerenderSubscription=o.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),isSameMultiYearView(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof DateRange?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new C;yearSelected=new C;activeDateChange=new C;_matCalendarBody;_years=g([]);_todayYear=g(0);_selectedYear=g(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(He(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let e=this._dateAdapter.getYear(this._activeDate)-getActiveOffset(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),t=[];for(let n=0,r=[];n<24;n++)r.push(e+n),r.length==4&&(t.push(r.map(e=>this._createCellForYear(e))),r=[]);this._years.set(t),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,n=this._dateAdapter.createDate(t,0,1),r=this._getDateFromYear(t);this.yearSelected.emit(n),this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-getActiveOffset(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,24-getActiveOffset(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-240:-24);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?240:24);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return getActiveOffset(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),n=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),n))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),n=this._dateAdapter.getYearName(t),r=this.dateClass?this.dateClass(t,`multi-year`):void 0;return new MatCalendarCell(e,n,n,this._shouldEnableYear(e),r)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let n=t;this._dateAdapter.getYear(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof DateRange){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static ɵfac=function MatMultiYearView_Factory(e){return new(e||MatMultiYearView)};static ɵcmp=K({type:MatMultiYearView,selectors:[[`mat-multi-year-view`]],viewQuery:function MatMultiYearView_Query(e,t){if(e&1&&j(Q,5),e&2){let e;M(e=H())&&(t._matCalendarBody=e.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,activeDateChange:`activeDateChange`},exportAs:[`matMultiYearView`],decls:5,vars:7,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`rows`,`todayValue`,`startValue`,`endValue`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function MatMultiYearView_Template(e,t){e&1&&(T(0,`table`,0)(1,`thead`,1)(2,`tr`),O(3,`th`,2),k()(),T(4,`tbody`,3),z(`selectedValueChange`,function MatMultiYearView_Template_tbody_selectedValueChange_4_listener(e){return t._yearSelected(e)})(`activeDateChange`,function MatMultiYearView_Template_tbody_activeDateChange_4_listener(e){return t._updateActiveDate(e)})(`keyup`,function MatMultiYearView_Template_tbody_keyup_4_listener(e){return t._handleCalendarBodyKeyup(e)})(`keydown`,function MatMultiYearView_Template_tbody_keydown_4_listener(e){return t._handleCalendarBodyKeydown(e)}),k()()),e&2&&(x(4),W(`rows`,t._years())(`todayValue`,t._todayYear())(`startValue`,t._selectedYear())(`endValue`,t._selectedYear())(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,t._getActiveCell()))},dependencies:[Q],encapsulation:2})}return MatMultiYearView})(),Vi=(()=>{class MatYearView{_changeDetectorRef=f(G);_dateFormats=f(Y,{optional:!0});_dateAdapter=f(DateAdapter,{optional:!0});_dir=f(dt,{optional:!0});_rerenderSubscription=o.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof DateRange?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new C;monthSelected=new C;activeDateChange=new C;_matCalendarBody;_months=g([]);_yearLabel=g(``);_todayMonth=g(null);_selectedMonth=g(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(He(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(n);let r=this._getDateFromMonth(t);this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames(`short`);this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(t=>this._createCellForMonth(t,e[t])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),n))}_createCellForMonth(e,t){let n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.format(n,this._dateFormats.display.monthYearA11yLabel),i=this.dateClass?this.dateClass(n,`year`):void 0;return new MatCalendarCell(e,t.toLocaleUpperCase(),r,this._shouldEnableMonth(e),i)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let n=this._dateAdapter.createDate(t,e,1);for(let t=n;this._dateAdapter.getMonth(t)==e;t=this._dateAdapter.addCalendarDays(t,1))if(this.dateFilter(t))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let n=this._dateAdapter.getYear(this.maxDate),r=this._dateAdapter.getMonth(this.maxDate);return e>n||e===n&&t>r}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let n=this._dateAdapter.getYear(this.minDate),r=this._dateAdapter.getMonth(this.minDate);return e<n||e===n&&t<r}return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedMonth(e){e instanceof DateRange?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static ɵfac=function MatYearView_Factory(e){return new(e||MatYearView)};static ɵcmp=K({type:MatYearView,selectors:[[`mat-year-view`]],viewQuery:function MatYearView_Query(e,t){if(e&1&&j(Q,5),e&2){let e;M(e=H())&&(t._matCalendarBody=e.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,monthSelected:`monthSelected`,activeDateChange:`activeDateChange`},exportAs:[`matYearView`],decls:5,vars:9,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`labelMinRequiredCells`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function MatYearView_Template(e,t){e&1&&(T(0,`table`,0)(1,`thead`,1)(2,`tr`),O(3,`th`,2),k()(),T(4,`tbody`,3),z(`selectedValueChange`,function MatYearView_Template_tbody_selectedValueChange_4_listener(e){return t._monthSelected(e)})(`activeDateChange`,function MatYearView_Template_tbody_activeDateChange_4_listener(e){return t._updateActiveDate(e)})(`keyup`,function MatYearView_Template_tbody_keyup_4_listener(e){return t._handleCalendarBodyKeyup(e)})(`keydown`,function MatYearView_Template_tbody_keydown_4_listener(e){return t._handleCalendarBodyKeydown(e)}),k()()),e&2&&(x(4),W(`label`,t._yearLabel())(`rows`,t._months())(`todayValue`,t._todayMonth())(`startValue`,t._selectedMonth())(`endValue`,t._selectedMonth())(`labelMinRequiredCells`,2)(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,t._dateAdapter.getMonth(t.activeDate)))},dependencies:[Q],encapsulation:2})}return MatYearView})(),Hi=(()=>{class MatCalendarHeader{_intl=f(Ei);calendar=f(Ui);_dateAdapter=f(DateAdapter,{optional:!0});_dateFormats=f(Y,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){f(J).load(Fn);let e=f(G);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView==`month`?`multi-year`:`month`}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?-1:-24))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?1:24))}previousEnabled(){return!this.calendar.minDate||!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate)}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,n=this._dateAdapter;e.currentView===`month`?(this._periodButtonText=n.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=n.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView===`year`?(this._periodButtonText=n.getYearName(e.activeDate),this._periodButtonDescription=n.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView==`month`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView==`year`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):isSameMultiYearView(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let e=this._dateAdapter.getYear(this.calendar.activeDate)-getActiveOffset(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),t=e+24-1;return[this._dateAdapter.getYearName(this._dateAdapter.createDate(e,0,1)),this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1))]}_periodButtonLabelId=f(bt).getId(`mat-calendar-period-label-`);static ɵfac=function MatCalendarHeader_Factory(e){return new(e||MatCalendarHeader)};static ɵcmp=K({type:MatCalendarHeader,selectors:[[`mat-calendar-header`]],exportAs:[`matCalendarHeader`],ngContentSelectors:bi,decls:17,vars:13,consts:[[1,`mat-calendar-header`],[1,`mat-calendar-controls`],[`aria-live`,`polite`,1,`cdk-visually-hidden`,3,`id`],[`matButton`,``,`type`,`button`,1,`mat-calendar-period-button`,3,`click`],[`aria-hidden`,`true`],[`viewBox`,`0 0 10 5`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-calendar-arrow`],[`points`,`0,0 5,5 10,0`],[1,`mat-calendar-spacer`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-previous-button`,3,`click`,`disabled`,`matTooltip`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-next-button`,3,`click`,`disabled`,`matTooltip`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`]],template:function MatCalendarHeader_Template(e,t){e&1&&(B(),T(0,`div`,0)(1,`div`,1)(2,`span`,2),V(3),k(),T(4,`button`,3),z(`click`,function MatCalendarHeader_Template_button_click_4_listener(){return t.currentPeriodClicked()}),T(5,`span`,4),V(6),k(),ve(),T(7,`svg`,5),O(8,`polygon`,6),k()(),me(),O(9,`div`,7),A(10),T(11,`button`,8),z(`click`,function MatCalendarHeader_Template_button_click_11_listener(){return t.previousClicked()}),ve(),T(12,`svg`,9),O(13,`path`,10),k()(),me(),T(14,`button`,11),z(`click`,function MatCalendarHeader_Template_button_click_14_listener(){return t.nextClicked()}),ve(),T(15,`svg`,9),O(16,`path`,12),k()()()()),e&2&&(x(2),W(`id`,t._periodButtonLabelId),x(),R(t.periodButtonDescription),x(),S(`aria-label`,t.periodButtonLabel)(`aria-describedby`,t._periodButtonLabelId),x(2),R(t.periodButtonText),x(),u(`mat-calendar-invert`,t.calendar.currentView!==`month`),x(4),W(`disabled`,!t.previousEnabled())(`matTooltip`,t.prevButtonLabel),S(`aria-label`,t.prevButtonLabel),x(3),W(`disabled`,!t.nextEnabled())(`matTooltip`,t.nextButtonLabel),S(`aria-label`,t.nextButtonLabel))},dependencies:[Xr,Wr,fi],encapsulation:2})}return MatCalendarHeader})(),Ui=(()=>{class MatCalendar{_dateAdapter=f(DateAdapter,{optional:!0});_dateFormats=f(Y,{optional:!0});_changeDetectorRef=f(G);_elementRef=f(U);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get selected(){return this._selected}set selected(e){e instanceof DateRange?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new C;yearSelected=new C;monthSelected=new C;viewChanged=new C(!0);_userSelection=new C;_userDragDrop=new C;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView===e?null:e;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new N;constructor(){this._intlChanges=f(Ei).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new At(this.headerComponent||Hi),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,n=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,r=t||n||e.dateFilter;if(r&&!r.firstChange){let e=this._getCurrentViewComponent();e&&(this._elementRef.nativeElement.contains(ht())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),e._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof DateRange||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&=(e.value&&this._userDragDrop.emit(e),null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static ɵfac=function MatCalendar_Factory(e){return new(e||MatCalendar)};static ɵcmp=K({type:MatCalendar,selectors:[[`mat-calendar`]],viewQuery:function MatCalendar_Query(e,t){if(e&1&&j(zi,5)(Vi,5)(Bi,5),e&2){let e;M(e=H())&&(t.monthView=e.first),M(e=H())&&(t.yearView=e.first),M(e=H())&&(t.multiYearView=e.first)}},hostAttrs:[1,`mat-calendar`],inputs:{headerComponent:`headerComponent`,startAt:`startAt`,startView:`startView`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,_userSelection:`_userSelection`,_userDragDrop:`_userDragDrop`},exportAs:[`matCalendar`],features:[Me([Ni]),i],decls:5,vars:2,consts:[[3,`cdkPortalOutlet`],[`cdkMonitorSubtreeFocus`,``,`tabindex`,`-1`,1,`mat-calendar-content`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`_userSelection`,`dragStarted`,`dragEnded`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDateChange`,`monthSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`yearSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`]],template:function MatCalendar_Template(e,t){if(e&1&&(Ee(0,MatCalendar_ng_template_0_Template,0,0,`ng-template`,0),T(1,`div`,1),y(2,MatCalendar_Case_2_Template,1,11,`mat-month-view`,2)(3,MatCalendar_Case_3_Template,1,6,`mat-year-view`,3)(4,MatCalendar_Case_4_Template,1,6,`mat-multi-year-view`,3),k()),e&2){let e;W(`cdkPortalOutlet`,t._calendarHeaderPortal),x(2),m((e=t.currentView)===`month`?2:e===`year`?3:e===`multi-year`?4:-1)}},dependencies:[Mt,Nn,zi,Vi,Bi],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return MatCalendar})(),Wi=new r(`mat-datepicker-scroll-strategy`,{providedIn:`root`,factory:()=>{let e=f(I);return()=>Tt(e)}}),Gi=(()=>{class MatDatepickerContent{_elementRef=f(U);_animationsDisabled=_animationsDisabled();_changeDetectorRef=f(G);_globalModel=f($);_dateAdapter=f(DateAdapter);_ngZone=f(b);_rangeSelectionStrategy=f(Fi,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new N;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(f(J).load(Fn),this._closeButtonText=f(Ei).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=f(ke);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,`animationstart`,this._handleAnimationEvent),t.listen(e,`animationend`,this._handleAnimationEvent),t.listen(e,`animationcancel`,this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,n=e.value,r=t instanceof DateRange;if(r&&this._rangeSelectionStrategy){let r=this._rangeSelectionStrategy.selectionFinished(n,t,e.event);this._model.updateSelection(r,this)}else n&&(r||!this._dateAdapter.sameDate(n,t))&&this._model.add(n);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add(`mat-datepicker-content-exit`),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith(`_mat-datepicker-content`)||(clearTimeout(this._animationFallback),this._isAnimating=e.type===`animationstart`,t.classList.toggle(`mat-datepicker-content-animating`,this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static ɵfac=function MatDatepickerContent_Factory(e){return new(e||MatDatepickerContent)};static ɵcmp=K({type:MatDatepickerContent,selectors:[[`mat-datepicker-content`]],viewQuery:function MatDatepickerContent_Query(e,t){if(e&1&&j(Ui,5),e&2){let e;M(e=H())&&(t._calendar=e.first)}},hostAttrs:[1,`mat-datepicker-content`],hostVars:6,hostBindings:function MatDatepickerContent_HostBindings(e,t){e&2&&(oe(t.color?`mat-`+t.color:``),u(`mat-datepicker-content-touch`,t.datepicker.touchUi)(`mat-datepicker-content-animations-enabled`,!t._animationsDisabled))},inputs:{color:`color`},exportAs:[`matDatepickerContent`],decls:5,vars:26,consts:[[`cdkTrapFocus`,``,`role`,`dialog`,1,`mat-datepicker-content-container`],[3,`yearSelected`,`monthSelected`,`viewChanged`,`_userSelection`,`_userDragDrop`,`id`,`startAt`,`startView`,`minDate`,`maxDate`,`dateFilter`,`headerComponent`,`selected`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`],[3,`cdkPortalOutlet`],[`type`,`button`,`matButton`,`elevated`,1,`mat-datepicker-close-button`,3,`focus`,`blur`,`click`,`color`]],template:function MatDatepickerContent_Template(e,t){e&1&&(T(0,`div`,0)(1,`mat-calendar`,1),z(`yearSelected`,function MatDatepickerContent_Template_mat_calendar_yearSelected_1_listener(e){return t.datepicker._selectYear(e)})(`monthSelected`,function MatDatepickerContent_Template_mat_calendar_monthSelected_1_listener(e){return t.datepicker._selectMonth(e)})(`viewChanged`,function MatDatepickerContent_Template_mat_calendar_viewChanged_1_listener(e){return t.datepicker._viewChanged(e)})(`_userSelection`,function MatDatepickerContent_Template_mat_calendar__userSelection_1_listener(e){return t._handleUserSelection(e)})(`_userDragDrop`,function MatDatepickerContent_Template_mat_calendar__userDragDrop_1_listener(e){return t._handleUserDragDrop(e)}),k(),Ee(2,MatDatepickerContent_ng_template_2_Template,0,0,`ng-template`,2),T(3,`button`,3),z(`focus`,function MatDatepickerContent_Template_button_focus_3_listener(){return t._closeButtonFocused=!0})(`blur`,function MatDatepickerContent_Template_button_blur_3_listener(){return t._closeButtonFocused=!1})(`click`,function MatDatepickerContent_Template_button_click_3_listener(){return t.datepicker.close()}),V(4),k()()),e&2&&(u(`mat-datepicker-content-container-with-custom-header`,t.datepicker.calendarHeaderComponent)(`mat-datepicker-content-container-with-actions`,t._actionsPortal),S(`aria-modal`,!0)(`aria-labelledby`,t._dialogLabelId??void 0),x(),oe(t.datepicker.panelClass),W(`id`,t.datepicker.id)(`startAt`,t.datepicker.startAt)(`startView`,t.datepicker.startView)(`minDate`,t.datepicker._getMinDate())(`maxDate`,t.datepicker._getMaxDate())(`dateFilter`,t.datepicker._getDateFilter())(`headerComponent`,t.datepicker.calendarHeaderComponent)(`selected`,t._getSelected())(`dateClass`,t.datepicker.dateClass)(`comparisonStart`,t.comparisonStart)(`comparisonEnd`,t.comparisonEnd)(`startDateAccessibleName`,t.startDateAccessibleName)(`endDateAccessibleName`,t.endDateAccessibleName),x(),W(`cdkPortalOutlet`,t._actionsPortal),x(),u(`cdk-visually-hidden`,!t._closeButtonFocused),W(`color`,t.color||`primary`),x(),R(t._closeButtonText))},dependencies:[Gn,Ui,Mt,Xr],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2})}return MatDatepickerContent})(),Ki=(()=>{class MatDatepickerBase{_injector=f(I);_viewContainerRef=f(Ke);_dateAdapter=f(DateAdapter,{optional:!0});_dir=f(dt,{optional:!0});_model=f($);_animationsDisabled=_animationsDisabled();_scrollStrategy=f(Wi);_inputStateChanges=o.EMPTY;_document=f(E);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition=`start`;yPosition=`below`;restoreFocus=!0;yearSelected=new C;monthSelected=new C;viewChanged=new C(!0);dateClass;openedStream=new C;closedStream=new C;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Ut(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=f(bt).getId(`mat-datepicker-`);_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new N;_changeDetectorRef=f(G);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let e=this._overlayRef.getConfig().positionStrategy;e instanceof Nt&&(this._setConnectedPositions(e),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=ht(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus==`function`,completeClose=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:t,location:n}=this._componentRef;t._animationDone.pipe(ne(1)).subscribe(()=>{let t=this._document.activeElement;e&&(!t||t===this._document.activeElement||n.nativeElement.contains(t))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),t._startExitAnimation()}e?setTimeout(completeClose):completeClose()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new At(Gi,this._viewContainerRef),n=this._overlayRef=It(this._injector,new St({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?`cdk-overlay-dark-backdrop`:`mat-overlay-transparent-backdrop`,this._backdropHarnessClass],direction:this._dir||`ltr`,scrollStrategy:e?Pt(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?`dialog`:`popup`}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(n).subscribe(e=>{e&&e.preventDefault(),this.close()}),n.keydownEvents().subscribe(e=>{let t=e.keyCode;(t===38||t===40||t===37||t===39||t===33||t===34)&&e.preventDefault()}),this._componentRef=n.attach(t),this._forwardContentValues(this._componentRef.instance),e||l(()=>{n.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&=(this._overlayRef.dispose(),this._componentRef=null)}_getDialogStrategy(){return kt(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=wt(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(`.mat-datepicker-content`).withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition===`end`?`end`:`start`,n=t===`start`?`end`:`start`,r=this.yPosition===`above`?`bottom`:`top`,i=r===`top`?`bottom`:`top`;return e.withPositions([{originX:t,originY:i,overlayX:t,overlayY:r},{originX:t,originY:r,overlayX:t,overlayY:i},{originX:n,originY:i,overlayX:n,overlayY:r},{originX:n,originY:r,overlayX:n,overlayY:i}])}_getCloseStream(e){let t=[`ctrlKey`,`shiftKey`,`metaKey`];return le(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(re(e=>e.keyCode===27&&!ft(e)||this.datepickerInput&&ft(e,`altKey`)&&e.keyCode===38&&t.every(t=>!ft(e,t)))))}static ɵfac=function MatDatepickerBase_Factory(e){return new(e||MatDatepickerBase)};static ɵdir=a({type:MatDatepickerBase,inputs:{calendarHeaderComponent:`calendarHeaderComponent`,startAt:`startAt`,startView:`startView`,color:`color`,touchUi:[2,`touchUi`,`touchUi`,F],disabled:[2,`disabled`,`disabled`,F],xPosition:`xPosition`,yPosition:`yPosition`,restoreFocus:[2,`restoreFocus`,`restoreFocus`,F],dateClass:`dateClass`,panelClass:`panelClass`,opened:[2,`opened`,`opened`,F]},outputs:{yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,openedStream:`opened`,closedStream:`closed`},features:[i]})}return MatDatepickerBase})(),qi=(()=>{class MatDatepicker extends Ki{static ɵfac=(()=>{let e;return function MatDatepicker_Factory(t){return(e||=we(MatDatepicker))(t||MatDatepicker)}})();static ɵcmp=K({type:MatDatepicker,selectors:[[`mat-datepicker`]],exportAs:[`matDatepicker`],features:[Me([Ni,{provide:Ki,useExisting:MatDatepicker}]),L],decls:0,vars:0,template:function MatDatepicker_Template(e,t){},encapsulation:2})}return MatDatepicker})(),MatDatepickerInputEvent=class{target;targetElement;value=null;constructor(e,t){this.target=e,this.targetElement=t,this.value=this.target.value}},Ji=(()=>{class MatDatepickerInputBase{_elementRef=f(U);_dateAdapter=f(DateAdapter,{optional:!0});_dateFormats=f(Y,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,n=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&n.blur&&n.blur()}_disabled;dateChange=new C;dateInput=new C;stateChanges=new N;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=o.EMPTY;_localeSubscription=o.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),n=this._getMinDate();return!n||!t||this._dateAdapter.compareDate(n,t)<=0?null:{matDatepickerMin:{min:n,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),n=this._getMaxDate();return!n||!t||this._dateAdapter.compareDate(n,t)>=0?null:{matDatepickerMax:{max:n,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(e=>{if(this._shouldHandleChangeEvent(e)){let t=this._getValueFromModel(e.selection);this._lastValueValid=this._isValidValue(t),this._cvaOnChange(t),this._onTouched(),this._formatValue(t),this.dateInput.emit(new MatDatepickerInputEvent(this,this._elementRef.nativeElement)),this.dateChange.emit(new MatDatepickerInputEvent(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){dateInputsHaveChanged(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){ft(e,`altKey`)&&e.keyCode===40&&[`ctrlKey`,`shiftKey`,`metaKey`].every(t=>!ft(e,t))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,n=this._lastValueValid,r=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(r),r=this._dateAdapter.getValidDateOrNull(r);let i=!this._dateAdapter.sameDate(r,this.value);!r||i?this._cvaOnChange(r):(t&&!this.value&&this._cvaOnChange(r),n!==this._lastValueValid&&this._validatorOnChange()),i&&(this._assignValue(r),this.dateInput.emit(new MatDatepickerInputEvent(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new MatDatepickerInputEvent(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e==null?``:this._dateAdapter.format(e,this._dateFormats.display.dateInput)}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static ɵfac=function MatDatepickerInputBase_Factory(e){return new(e||MatDatepickerInputBase)};static ɵdir=a({type:MatDatepickerInputBase,inputs:{value:`value`,disabled:[2,`disabled`,`disabled`,F]},outputs:{dateChange:`dateChange`,dateInput:`dateInput`},features:[i]})}return MatDatepickerInputBase})(),Yi={provide:Xe,useExisting:ce(()=>Zi),multi:!0},Xi={provide:it,useExisting:ce(()=>Zi),multi:!0},Zi=(()=>{class MatDatepickerInput extends Ji{_formField=f(vi,{optional:!0});_closedSubscription=o.EMPTY;_openedSubscription=o.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=g(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=tt.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute(`aria-labelledby`)}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static ɵfac=function MatDatepickerInput_Factory(e){return new(e||MatDatepickerInput)};static ɵdir=a({type:MatDatepickerInput,selectors:[[`input`,`matDatepicker`,``]],hostAttrs:[1,`mat-datepicker-input`],hostVars:6,hostBindings:function MatDatepickerInput_HostBindings(e,t){e&1&&z(`input`,function MatDatepickerInput_input_HostBindingHandler(e){return t._onInput(e)})(`change`,function MatDatepickerInput_change_HostBindingHandler(){return t._onChange()})(`blur`,function MatDatepickerInput_blur_HostBindingHandler(){return t._onBlur()})(`keydown`,function MatDatepickerInput_keydown_HostBindingHandler(e){return t._onKeydown(e)}),e&2&&(h(`disabled`,t.disabled),S(`aria-haspopup`,t._datepicker?`dialog`:null)(`aria-owns`,t._ariaOwns())(`min`,t.min?t._dateAdapter.toIso8601(t.min):null)(`max`,t.max?t._dateAdapter.toIso8601(t.max):null)(`data-mat-calendar`,t._datepicker?t._datepicker.id:null))},inputs:{matDatepicker:`matDatepicker`,min:`min`,max:`max`,dateFilter:[0,`matDatepickerFilter`,`dateFilter`]},exportAs:[`matDatepickerInput`],features:[Me([Yi,Xi,{provide:hi,useExisting:MatDatepickerInput}]),L]})}return MatDatepickerInput})(),Qi=(()=>{class MatDatepickerToggleIcon{static ɵfac=function MatDatepickerToggleIcon_Factory(e){return new(e||MatDatepickerToggleIcon)};static ɵdir=a({type:MatDatepickerToggleIcon,selectors:[[``,`matDatepickerToggleIcon`,``]]})}return MatDatepickerToggleIcon})(),$i=(()=>{class MatDatepickerToggle{_intl=f(Ei);_changeDetectorRef=f(G);_stateChanges=o.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=f(new ee(`tabindex`),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:je(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:je(),n=this.datepicker?le(this.datepicker.openedStream,this.datepicker.closedStream):je();this._stateChanges.unsubscribe(),this._stateChanges=le(this._intl.changes,e,t,n).subscribe(()=>this._changeDetectorRef.markForCheck())}static ɵfac=function MatDatepickerToggle_Factory(e){return new(e||MatDatepickerToggle)};static ɵcmp=K({type:MatDatepickerToggle,selectors:[[`mat-datepicker-toggle`]],contentQueries:function MatDatepickerToggle_ContentQueries(e,t,n){if(e&1&&ue(n,Qi,5),e&2){let e;M(e=H())&&(t._customIcon=e.first)}},viewQuery:function MatDatepickerToggle_Query(e,t){if(e&1&&j(xi,5),e&2){let e;M(e=H())&&(t._button=e.first)}},hostAttrs:[1,`mat-datepicker-toggle`],hostVars:8,hostBindings:function MatDatepickerToggle_HostBindings(e,t){e&1&&z(`click`,function MatDatepickerToggle_click_HostBindingHandler(e){return t._open(e)}),e&2&&(S(`tabindex`,null)(`data-mat-calendar`,t.datepicker?t.datepicker.id:null),u(`mat-datepicker-toggle-active`,t.datepicker&&t.datepicker.opened)(`mat-accent`,t.datepicker&&t.datepicker.color===`accent`)(`mat-warn`,t.datepicker&&t.datepicker.color===`warn`))},inputs:{datepicker:[0,`for`,`datepicker`],tabIndex:`tabIndex`,ariaLabel:[0,`aria-label`,`ariaLabel`],disabled:[2,`disabled`,`disabled`,F],disableRipple:`disableRipple`},exportAs:[`matDatepickerToggle`],features:[i],ngContentSelectors:Ci,decls:4,vars:7,consts:[[`button`,``],[`matIconButton`,``,`type`,`button`,3,`tabIndex`,`disabled`,`disableRipple`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-datepicker-toggle-default-icon`],[`d`,`M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z`]],template:function MatDatepickerToggle_Template(e,t){e&1&&(B(Si),T(0,`button`,1,0),y(2,MatDatepickerToggle_Conditional_2_Template,2,0,`:svg:svg`,2),A(3),k()),e&2&&(W(`tabIndex`,t.disabled?-1:t.tabIndex)(`disabled`,t.disabled)(`disableRipple`,t.disableRipple),S(`aria-haspopup`,t.datepicker?`dialog`:null)(`aria-label`,t.ariaLabel||t._intl.openCalendarLabel)(`aria-expanded`,t.datepicker?t.datepicker.opened:null),x(2),m(t._customIcon?-1:2))},dependencies:[Wr],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})}return MatDatepickerToggle})(),ea=(()=>{class MatDateRangeInput{_changeDetectorRef=f(G);_elementRef=f(U);_dateAdapter=f(DateAdapter,{optional:!0});_formField=f(vi,{optional:!0});_closedSubscription=o.EMPTY;_openedSubscription=o.EMPTY;_startInput;_endInput;get value(){return this._model?this._model.selection:null}id=f(bt).getId(`mat-date-range-input-`);focused=!1;get shouldLabelFloat(){return this.focused||!this.empty}controlType=`mat-date-range-input`;get placeholder(){let e=this._startInput?._getPlaceholder()||``,t=this._endInput?._getPlaceholder()||``;return e||t?`${e} ${this.separator} ${t}`:``}get rangePicker(){return this._rangePicker}set rangePicker(e){e&&(this._model=e.registerInput(this),this._rangePicker=e,this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe(),this._ariaOwns.set(this.rangePicker.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._startInput?._onTouched(),this._endInput?._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(this._model))}_rangePicker;_ariaOwns=g(null);get required(){return this._required??(this._isTargetRequired(this)||this._isTargetRequired(this._startInput)||this._isTargetRequired(this._endInput))??!1}set required(e){this._required=e}_required;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._startInput,n=this._endInput,r=t&&t._matchesFilter(t.value),i=n&&n._matchesFilter(t.value);this._dateFilter=e,t&&t._matchesFilter(t.value)!==r&&t._validatorOnChange(),n&&n._matchesFilter(n.value)!==i&&n._validatorOnChange()}_dateFilter;get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._revalidate())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._revalidate())}_max=null;get disabled(){return this._startInput&&this._endInput?this._startInput.disabled&&this._endInput.disabled:this._groupDisabled}set disabled(e){e!==this._groupDisabled&&(this._groupDisabled=e,this.stateChanges.next(void 0))}_groupDisabled=!1;get errorState(){return this._startInput&&this._endInput?this._startInput.errorState||this._endInput.errorState:!1}get empty(){let e=this._startInput?this._startInput.isEmpty():!1,t=this._endInput?this._endInput.isEmpty():!1;return e&&t}_ariaDescribedBy=null;_model;separator=`–`;comparisonStart=null;comparisonEnd=null;ngControl;stateChanges=new N;disableAutomaticLabeling=!0;constructor(){this._dateAdapter,this._formField?._elementRef.nativeElement.classList.contains(`mat-mdc-form-field`)&&this._elementRef.nativeElement.classList.add(`mat-mdc-input-element`,`mat-mdc-form-field-input-control`,`mdc-text-field__input`),this.ngControl=f(Ye,{optional:!0,self:!0})}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){this._ariaDescribedBy=e.length?e.join(` `):null}onContainerClick(){!this.focused&&!this.disabled&&(!this._model||!this._model.selection.start?this._startInput.focus():this._endInput.focus())}ngAfterContentInit(){this._model&&this._registerModel(this._model),le(this._startInput.stateChanges,this._endInput.stateChanges).subscribe(()=>{this.stateChanges.next(void 0)})}ngOnChanges(e){dateInputsHaveChanged(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe(),this.stateChanges.complete()}getStartValue(){return this.value?this.value.start:null}getThemePalette(){return this._formField?this._formField.color:void 0}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():null}_getInputMirrorValue(e){let t=e===`start`?this._startInput:this._endInput;return t?t.getMirrorValue():``}_shouldHidePlaceholders(){return this._startInput?!this._startInput.isEmpty():!1}_handleChildValueChange(){this.stateChanges.next(void 0),this._changeDetectorRef.markForCheck()}_openDatepicker(){this._rangePicker&&this._rangePicker.open()}_shouldHideSeparator(){return(!this._formField||this._formField.getLabelId()&&!this._formField._shouldLabelFloat())&&this.empty}_getAriaLabelledby(){let e=this._formField;return e&&e._hasFloatingLabel()?e._labelId:null}_getStartDateAccessibleName(){return this._startInput._getAccessibleName()}_getEndDateAccessibleName(){return this._endInput._getAccessibleName()}_updateFocus(e){this.focused=e!==null,this.stateChanges.next()}_revalidate(){this._startInput&&this._startInput._validatorOnChange(),this._endInput&&this._endInput._validatorOnChange()}_registerModel(e){this._startInput&&this._startInput._registerModel(e),this._endInput&&this._endInput._registerModel(e)}_isTargetRequired(e){return e?.ngControl?.control?.hasValidator(tt.required)}static ɵfac=function MatDateRangeInput_Factory(e){return new(e||MatDateRangeInput)};static ɵcmp=K({type:MatDateRangeInput,selectors:[[`mat-date-range-input`]],hostAttrs:[`role`,`group`,1,`mat-date-range-input`],hostVars:8,hostBindings:function MatDateRangeInput_HostBindings(e,t){e&2&&(S(`id`,t.id)(`aria-labelledby`,t._getAriaLabelledby())(`aria-describedby`,t._ariaDescribedBy)(`data-mat-calendar`,t.rangePicker?t.rangePicker.id:null),u(`mat-date-range-input-hide-placeholders`,t._shouldHidePlaceholders())(`mat-date-range-input-required`,t.required))},inputs:{rangePicker:`rangePicker`,required:[2,`required`,`required`,F],dateFilter:`dateFilter`,min:`min`,max:`max`,disabled:[2,`disabled`,`disabled`,F],separator:`separator`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`},exportAs:[`matDateRangeInput`],features:[Me([{provide:_i,useExisting:MatDateRangeInput}]),i],ngContentSelectors:Ti,decls:11,vars:5,consts:[[`cdkMonitorSubtreeFocus`,``,1,`mat-date-range-input-container`,3,`cdkFocusChange`],[1,`mat-date-range-input-wrapper`],[`aria-hidden`,`true`,1,`mat-date-range-input-mirror`],[1,`mat-date-range-input-separator`],[1,`mat-date-range-input-wrapper`,`mat-date-range-input-end-wrapper`]],template:function MatDateRangeInput_Template(e,t){e&1&&(B(wi),T(0,`div`,0),z(`cdkFocusChange`,function MatDateRangeInput_Template_div_cdkFocusChange_0_listener(e){return t._updateFocus(e)}),T(1,`div`,1),A(2),T(3,`span`,2),V(4),k()(),T(5,`span`,3),V(6),k(),T(7,`div`,4),A(8,1),T(9,`span`,2),V(10),k()()()),e&2&&(x(4),R(t._getInputMirrorValue(`start`)),x(),u(`mat-date-range-input-separator-hidden`,t._shouldHideSeparator()),x(),R(t.separator),x(4),R(t._getInputMirrorValue(`end`)))},dependencies:[Nn],styles:[`.mat-date-range-input {
  display: block;
  width: 100%;
}

.mat-date-range-input-container {
  display: flex;
  align-items: center;
}

.mat-date-range-input-separator {
  transition: opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0 4px;
  color: var(--mat-datepicker-range-input-separator-color, var(--mat-sys-on-surface));
}
.mat-form-field-disabled .mat-date-range-input-separator {
  color: var(--mat-datepicker-range-input-disabled-state-separator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
._mat-animation-noopable .mat-date-range-input-separator {
  transition: none;
}

.mat-date-range-input-separator-hidden {
  -webkit-user-select: none;
  user-select: none;
  opacity: 0;
  transition: none;
}

.mat-date-range-input-wrapper {
  position: relative;
  overflow: hidden;
  max-width: calc(50% - 4px);
}

.mat-date-range-input-end-wrapper {
  flex-grow: 1;
}

.mat-date-range-input-inner {
  position: absolute;
  top: 0;
  left: 0;
  font: inherit;
  background: transparent;
  color: currentColor;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  vertical-align: bottom;
  text-align: inherit;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
}
.mat-date-range-input-inner:-moz-ui-invalid {
  box-shadow: none;
}
.mat-date-range-input-inner::placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner::-moz-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner::-webkit-input-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner:-ms-input-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-date-range-input-inner[disabled] {
  color: var(--mat-datepicker-range-input-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder {
    opacity: 0;
  }
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder {
    opacity: 0;
  }
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder {
    opacity: 0;
  }
}
.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder {
  -webkit-user-select: none;
  user-select: none;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
  transition: none;
}
@media (forced-colors: active) {
  .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder, .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder {
    opacity: 0;
  }
}
._mat-animation-noopable .mat-date-range-input-inner::placeholder {
  transition: none;
}
._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder {
  transition: none;
}
._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder {
  transition: none;
}
._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder {
  transition: none;
}

.mat-date-range-input-mirror {
  -webkit-user-select: none;
  user-select: none;
  visibility: hidden;
  white-space: nowrap;
  display: inline-block;
  min-width: 2px;
}

.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix {
  width: 200px;
}
`],encapsulation:2})}return MatDateRangeInput})(),ta=(()=>{class MatDateRangeInputPartBase extends Ji{_rangeInput=f(ea);_elementRef=f(U);_defaultErrorStateMatcher=f(gn);_injector=f(I);_rawValue=g(``);_parentForm=f(nt,{optional:!0});_parentFormGroup=f(et,{optional:!0});ngControl;_dir=f(dt,{optional:!0});_errorStateTracker;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super(),this._errorStateTracker=new _ErrorStateTracker(this._defaultErrorStateMatcher,null,this._parentFormGroup,this._parentForm,this.stateChanges)}ngOnInit(){let e=this._injector.get(Ze,null,{optional:!0,self:!0});this._errorStateTracker.formField=this._injector.get(rt,null,{optional:!0,self:!0}),e&&(this.ngControl=e,this._errorStateTracker.ngControl=e)}ngAfterContentInit(){this._register()}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._rawValue.set(this._elementRef.nativeElement.value)}isEmpty(){return this._rawValue().length===0}_getPlaceholder(){return this._elementRef.nativeElement.placeholder}focus(){this._elementRef.nativeElement.focus()}getMirrorValue(){let e=this._rawValue();return e.length>0?e:this._getPlaceholder()}updateErrorState(){this._errorStateTracker.updateErrorState()}_onInput(e){super._onInput(e),this._rangeInput._handleChildValueChange()}_openPopup(){this._rangeInput._openDatepicker()}_getMinDate(){return this._rangeInput.min}_getMaxDate(){return this._rangeInput.max}_getDateFilter(){return this._rangeInput.dateFilter}_parentDisabled(){return this._rangeInput._groupDisabled}_shouldHandleChangeEvent({source:e}){return e!==this._rangeInput._startInput&&e!==this._rangeInput._endInput}_assignValueProgrammatically(e,t){super._assignValueProgrammatically(e,t),(this===this._rangeInput._startInput?this._rangeInput._endInput:this._rangeInput._startInput)?._validatorOnChange(),this._rawValue.set(this._elementRef.nativeElement.value)}_formatValue(e){super._formatValue(e),this._rangeInput._handleChildValueChange()}_getAccessibleName(){return _computeAriaAccessibleName(this._elementRef.nativeElement)}static ɵfac=function MatDateRangeInputPartBase_Factory(e){return new(e||MatDateRangeInputPartBase)};static ɵdir=a({type:MatDateRangeInputPartBase,inputs:{errorStateMatcher:`errorStateMatcher`},features:[L]})}return MatDateRangeInputPartBase})(),na=(()=>{class MatStartDate extends ta{_startValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),n=this._model?this._model.selection.end:null;return!t||!n||this._dateAdapter.compareDate(t,n)<=0?null:{matStartDateInvalid:{end:n,actual:t}}};_validator=tt.compose([...super._getValidators(),this._startValidator]);_register(){this._rangeInput._startInput=this}_getValueFromModel(e){return e.start}_shouldHandleChangeEvent(e){return super._shouldHandleChangeEvent(e)?e.oldValue?.start?!e.selection.start||!!this._dateAdapter.compareDate(e.oldValue.start,e.selection.start):!!e.selection.start:!1}_assignValueToModel(e){if(this._model){let t=new DateRange(e,this._model.selection.end);this._model.updateSelection(t,this),this._rangeInput._handleChildValueChange()}}_onKeydown(e){let t=this._rangeInput._endInput,n=this._elementRef.nativeElement,r=this._dir?.value!==`rtl`;(e.keyCode===39&&r||e.keyCode===37&&!r)&&n.selectionStart===n.value.length&&n.selectionEnd===n.value.length?(e.preventDefault(),t._elementRef.nativeElement.setSelectionRange(0,0),t.focus()):super._onKeydown(e)}static ɵfac=(()=>{let e;return function MatStartDate_Factory(t){return(e||=we(MatStartDate))(t||MatStartDate)}})();static ɵdir=a({type:MatStartDate,selectors:[[`input`,`matStartDate`,``]],hostAttrs:[`type`,`text`,1,`mat-start-date`,`mat-date-range-input-inner`],hostVars:5,hostBindings:function MatStartDate_HostBindings(e,t){e&1&&z(`input`,function MatStartDate_input_HostBindingHandler(e){return t._onInput(e)})(`change`,function MatStartDate_change_HostBindingHandler(){return t._onChange()})(`keydown`,function MatStartDate_keydown_HostBindingHandler(e){return t._onKeydown(e)})(`blur`,function MatStartDate_blur_HostBindingHandler(){return t._onBlur()}),e&2&&(h(`disabled`,t.disabled),S(`aria-haspopup`,t._rangeInput.rangePicker?`dialog`:null)(`aria-owns`,t._rangeInput._ariaOwns()||null)(`min`,t._getMinDate()?t._dateAdapter.toIso8601(t._getMinDate()):null)(`max`,t._getMaxDate()?t._dateAdapter.toIso8601(t._getMaxDate()):null))},outputs:{dateChange:`dateChange`,dateInput:`dateInput`},features:[Me([{provide:Xe,useExisting:MatStartDate,multi:!0},{provide:it,useExisting:MatStartDate,multi:!0}]),L]})}return MatStartDate})(),ra=(()=>{class MatEndDate extends ta{_endValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),n=this._model?this._model.selection.start:null;return!t||!n||this._dateAdapter.compareDate(t,n)>=0?null:{matEndDateInvalid:{start:n,actual:t}}};_register(){this._rangeInput._endInput=this}_validator=tt.compose([...super._getValidators(),this._endValidator]);_getValueFromModel(e){return e.end}_shouldHandleChangeEvent(e){return super._shouldHandleChangeEvent(e)?e.oldValue?.end?!e.selection.end||!!this._dateAdapter.compareDate(e.oldValue.end,e.selection.end):!!e.selection.end:!1}_assignValueToModel(e){if(this._model){let t=new DateRange(this._model.selection.start,e);this._model.updateSelection(t,this)}}_moveCaretToEndOfStartInput(){let e=this._rangeInput._startInput._elementRef.nativeElement,t=e.value;t.length>0&&e.setSelectionRange(t.length,t.length),e.focus()}_onKeydown(e){let t=this._elementRef.nativeElement,n=this._dir?.value!==`rtl`;e.keyCode===8&&!t.value?this._moveCaretToEndOfStartInput():(e.keyCode===37&&n||e.keyCode===39&&!n)&&t.selectionStart===0&&t.selectionEnd===0?(e.preventDefault(),this._moveCaretToEndOfStartInput()):super._onKeydown(e)}static ɵfac=(()=>{let e;return function MatEndDate_Factory(t){return(e||=we(MatEndDate))(t||MatEndDate)}})();static ɵdir=a({type:MatEndDate,selectors:[[`input`,`matEndDate`,``]],hostAttrs:[`type`,`text`,1,`mat-end-date`,`mat-date-range-input-inner`],hostVars:5,hostBindings:function MatEndDate_HostBindings(e,t){e&1&&z(`input`,function MatEndDate_input_HostBindingHandler(e){return t._onInput(e)})(`change`,function MatEndDate_change_HostBindingHandler(){return t._onChange()})(`keydown`,function MatEndDate_keydown_HostBindingHandler(e){return t._onKeydown(e)})(`blur`,function MatEndDate_blur_HostBindingHandler(){return t._onBlur()}),e&2&&(h(`disabled`,t.disabled),S(`aria-haspopup`,t._rangeInput.rangePicker?`dialog`:null)(`aria-owns`,t._rangeInput._ariaOwns()||null)(`min`,t._getMinDate()?t._dateAdapter.toIso8601(t._getMinDate()):null)(`max`,t._getMaxDate()?t._dateAdapter.toIso8601(t._getMaxDate()):null))},outputs:{dateChange:`dateChange`,dateInput:`dateInput`},features:[Me([{provide:Xe,useExisting:MatEndDate,multi:!0},{provide:it,useExisting:MatEndDate,multi:!0}]),L]})}return MatEndDate})(),ia=(()=>{class MatDateRangePicker extends Ki{_forwardContentValues(e){super._forwardContentValues(e);let t=this.datepickerInput;t&&(e.comparisonStart=t.comparisonStart,e.comparisonEnd=t.comparisonEnd,e.startDateAccessibleName=t._getStartDateAccessibleName(),e.endDateAccessibleName=t._getEndDateAccessibleName())}static ɵfac=(()=>{let e;return function MatDateRangePicker_Factory(t){return(e||=we(MatDateRangePicker))(t||MatDateRangePicker)}})();static ɵcmp=K({type:MatDateRangePicker,selectors:[[`mat-date-range-picker`]],exportAs:[`matDateRangePicker`],features:[Me([Pi,{provide:Fi,useFactory:()=>f(Fi,{optional:!0,skipSelf:!0})||new Ii(f(DateAdapter))},{provide:Ki,useExisting:MatDateRangePicker}]),L],decls:0,vars:0,template:function MatDateRangePicker_Template(e,t){},encapsulation:2})}return MatDateRangePicker})(),aa=(()=>{class MatDatepickerApply{_datepicker=f(Ki);_applySelection(){this._datepicker._applyPendingSelection(),this._datepicker.close()}static ɵfac=function MatDatepickerApply_Factory(e){return new(e||MatDatepickerApply)};static ɵdir=a({type:MatDatepickerApply,selectors:[[``,`matDatepickerApply`,``],[``,`matDateRangePickerApply`,``]],hostBindings:function MatDatepickerApply_HostBindings(e,t){e&1&&z(`click`,function MatDatepickerApply_click_HostBindingHandler(){return t._applySelection()})}})}return MatDatepickerApply})(),oa=(()=>{class MatDatepickerCancel{_datepicker=f(Ki);static ɵfac=function MatDatepickerCancel_Factory(e){return new(e||MatDatepickerCancel)};static ɵdir=a({type:MatDatepickerCancel,selectors:[[``,`matDatepickerCancel`,``],[``,`matDateRangePickerCancel`,``]],hostBindings:function MatDatepickerCancel_HostBindings(e,t){e&1&&z(`click`,function MatDatepickerCancel_click_HostBindingHandler(){return t._datepicker.close()})}})}return MatDatepickerCancel})(),sa=(()=>{class MatDatepickerActions{_datepicker=f(Ki);_viewContainerRef=f(Ke);_template;_portal;ngAfterViewInit(){this._portal=new Et(this._template,this._viewContainerRef),this._datepicker.registerActions(this._portal)}ngOnDestroy(){this._datepicker.removeActions(this._portal),this._portal&&this._portal.isAttached&&this._portal?.detach()}static ɵfac=function MatDatepickerActions_Factory(e){return new(e||MatDatepickerActions)};static ɵcmp=K({type:MatDatepickerActions,selectors:[[`mat-datepicker-actions`],[`mat-date-range-picker-actions`]],viewQuery:function MatDatepickerActions_Query(e,t){if(e&1&&j(xe,5),e&2){let e;M(e=H())&&(t._template=e.first)}},ngContentSelectors:bi,decls:1,vars:0,consts:[[1,`mat-datepicker-actions`]],template:function MatDatepickerActions_Template(e,t){e&1&&(B(),_e(0,MatDatepickerActions_ng_template_0_Template,2,0,`ng-template`))},styles:[`.mat-datepicker-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8px 8px 8px;
}
.mat-datepicker-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})}return MatDatepickerActions})(),ca=(()=>{class MatDatepickerModule{static ɵfac=function MatDatepickerModule_Factory(e){return new(e||MatDatepickerModule)};static ɵmod=fe({type:MatDatepickerModule,imports:[ti,jt,tr,Dt,Ui,Q,qi,Gi,Zi,$i,Qi,zi,Vi,Bi,Hi,ea,na,ra,ia,sa,oa,aa],exports:[Rt,Lt,Ui,Q,qi,Gi,Zi,$i,Qi,zi,Vi,Bi,Hi,ea,na,ra,ia,sa,oa,aa]});static ɵinj=ae({providers:[Ei],imports:[ti,jt,tr,Dt,Gi,$i,Hi,Rt,Lt]})}return MatDatepickerModule})()}));export{Rr as a,Pr as c,pn as d,hn as f,Lr as i,DateAdapter as l,ca as n,zr as o,la as r,provideDateFnsAdapter as s,qi as t,Y as u};