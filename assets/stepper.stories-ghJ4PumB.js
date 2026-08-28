import{i as e}from"./preload-helper-G0Y2f6MP.js";import{An as t,E as n,Ei as r,En as i,G as a,Hn as o,In as s,Kn as c,L as l,M as u,N as d,R as f,St as p,T as m,Ti as h,bt as g,ct as _,et as v,f as y,g as ee,gt as b,jn as te,nt as x,rt as S,st as ne,v as C}from"./angular-platform-CkHGXGBq.js";import{i as re,t as ie}from"./public-api-CB813VaT.js";import{a as w,i as ae,n as oe,o as se,r as ce}from"./signals-C2mKSRCS.js";import{i as le,t as ue}from"./dist-_fqtV9zk.js";import{n as de,t as fe}from"./layout-DoML5fL9.js";import{o as pe,t as me}from"./overlay-KOe7q9o-.js";import{n as he,t as ge}from"./public-api-CfHzAJFF.js";import{i as _e,t as ve}from"./public-api-CWMmK9Gv.js";import{n as ye,t as be}from"./rxjs-interop-CYdFoEUP.js";import{n as xe,t as Se}from"./public-api-DdhVy8_M.js";import{n as Ce,t as we}from"./public-api-BnCkdoK3.js";var T,Te=e((()=>{T=`<div class="lib-form-stepper-container">
    @if (hasMainOverride()) {
    <div class="lib-form-stepper-container__main">
        <ng-container [ngTemplateOutlet]="mainOverrideTemplate() ?? null"
            [ngTemplateOutletInjector]="stepTemplateInjector">
        </ng-container>
    </div>
    } @else {
    <div class="lib-form-stepper-container__main">
        <lib-form-stepper-main [libFormStepperNoSubmitButton]="libFormStepperNoSubmitButton()"
            [libFormStepperDisabled]="libFormStepperDisabled()" />
    </div>
    }

    <lib-form-stepper-nav [libFormStepperNoStepsNav]="libFormStepperNoStepsNav()"
        [libFormStepperNoOnboardingNav]="libFormStepperNoOnboardingNav()" class="lib-form-stepper-container__nav" />
</div>`})),E,Ee=e((()=>{E=`.lib-form-stepper-container{justify-content:center;display:flex}.lib-form-stepper-container__main{flex-grow:1}.lib-form-stepper-container__nav{margin-left:2rem}@media (width<=1023px){.lib-form-stepper-container{flex-direction:column-reverse}.lib-form-stepper-container__nav{margin-bottom:1.5rem;margin-left:0}}`})),D,De=e((()=>{D=`@let currentMain = main();

@if (currentMain) {

<a href="#prev" libFormStepperPrev class="lib-form-stepper-main__prev color-bleu_dark lib-ff-regular lib-fs-6"
    [class]="config.css.prev">
    <i class="libicon-fleche-gauche lib-form-stepper-main__prev-icon" aria-hidden="true"></i>
    <span class="lib-form-stepper-main__prev-text">{{ config.translations.prev }}</span>
</a>

<h3 class="lib-form-stepper-main__title lib-ff-bold" [class]="config.css.stepTitle">
    {{ currentMain.stepTitle }}
</h3>

<div class="lib-form-stepper-main__content">
    <ng-container [ngTemplateOutlet]="currentMain.stepTemplate" [ngTemplateOutletInjector]="stepTemplateInjector">
    </ng-container>
</div>

@if (!currentMain.isLastStep) {
<button libFormStepperNext type="button" class="lib-form-stepper-main__next btn btn-primary btn-rounded"
    [class]="config.css.next">
    {{ currentMain.isOnboarding ? config.translations.start : config.translations.next }}
</button>
} @else if (!libFormStepperNoSubmitButton()) {
<button type="submit" [disabled]="!isFormValid() || libFormStepperDisabled()"
    class="lib-form-stepper-main__submit btn btn-primary btn-rounded" [class]="config.css.submit">
    {{ config.translations.submit }}
</button>
}
}`})),O,Oe=e((()=>{O=`.lib-form-stepper-main__prev{text-decoration:none!important}.lib-form-stepper-main__prev-icon{vertical-align:middle}.lib-form-stepper-main__prev-text{margin-left:.33rem;font-size:.875rem}.lib-form-stepper-main__title{margin:1.5rem 0 1rem}.lib-form-stepper-main__content{margin-bottom:1.5rem}a.lib-form-stepper-prev--disabled,a.lib-form-stepper-prev--disabled:hover,a.lib-form-stepper-prev--disabled:active,a.lib-form-stepper-prev--disabled:focus{color:var(--gris_light)!important}`})),k,A=e((()=>{r(),l(),k=class LibStepperStore{controlElementsByPath=new Map;onboarding=c(void 0);summary=c(void 0);sections=c([]);rawStepIndex=c(void 0);firstIndex=a(()=>this.onboarding()?-1:0);lastIndex=a(()=>this.summary()?this.steps().length:this.steps().length-1);stepIndex=a(()=>this.rawStepIndex()??this.firstIndex());steps=a(()=>this.sections().flatMap(e=>e.steps()).filter(e=>!e.hidden?.()));currentStep=a(()=>{let e=this.stepIndex();if(!(e<0||e>=this.steps().length))return this.steps()[e]});currentSection=a(()=>this.sections()[this.currentStep()?.sectionIndex??0]);isOnboardingPage=a(()=>this.stepIndex()===-1);isSummaryPage=a(()=>this.stepIndex()===this.steps().length);isFirstStep=a(()=>this.stepIndex()===this.firstIndex());isLastStep=a(()=>this.stepIndex()===this.lastIndex());canGoPrevious=a(()=>!this.isFirstStep());canGoNext=a(()=>this.isOnboardingPage()?!0:this.currentStep()?.field.valid()??!1);progress=a(()=>this.steps().length?(this.stepIndex()-this.firstIndex()+1)/(this.lastIndex()-this.firstIndex()+1):0);isFormValid=a(()=>this.sections().every(e=>e.field.valid()));maxStepIndexViewed=c(-1);allStepsViewed=a(()=>this.maxStepIndexViewed()>=this.lastIndex());state=a(()=>({sectionIndex:this.currentStep()?.sectionIndex??-1,stepIndex:this.stepIndex(),isStepValid:this.canGoNext(),hasPrevStep:this.canGoPrevious(),hasNextStep:!this.isLastStep(),firstStepIndex:this.firstIndex(),lastStepIndex:this.lastIndex(),maxStepIndexViewed:this.maxStepIndexViewed(),allStepsViewed:this.allStepsViewed(),progress:this.progress(),onboardingInfo:this.onboarding()?{title:this.onboarding().title,icon:this.onboarding().icon,index:-1}:void 0,summaryInfo:this.summary()?{title:this.summary().title,icon:this.summary().icon,index:this.steps().length}:void 0,nav:this.sections()}));main=a(()=>{if(this.isOnboardingPage()){let e=this.onboarding();return{sectionTitle:``,stepTitle:e?.title??``,stepTemplate:e.template,isFirstStep:!0,isLastStep:!1,isOnboarding:!0,isSummary:!1}}if(this.isSummaryPage()){let e=this.summary();return{sectionTitle:``,stepTitle:e?.title??``,stepTemplate:e.template,isFirstStep:!1,isLastStep:!0,isOnboarding:!1,isSummary:!0}}return{sectionTitle:this.currentSection()?.title??``,stepTitle:this.currentStep()?.title??``,stepTemplate:this.currentStep().template,isFirstStep:this.isFirstStep(),isLastStep:this.isLastStep(),isOnboarding:!1,isSummary:!1}});constructor(){s(()=>{let e=this.stepIndex();this.maxStepIndexViewed.update(t=>Math.max(t,e))}),s(()=>{let e=this.currentStep();e&&e.autoNext&&e.field.valid()&&queueMicrotask(()=>this.next())}),s(()=>{let e=this.currentStep();e&&queueMicrotask(()=>this.focusFirstControlIfEmpty(e.path))})}registerSection(e){this.sections.update(t=>[...t,e])}next(){this.isLastStep()||this.rawStepIndex.set(this.stepIndex()+1)}previous(){this.isFirstStep()||this.rawStepIndex.set(this.stepIndex()-1)}goTo(e){e<this.firstIndex()||e>this.lastIndex()||this.rawStepIndex.set(e)}goToPath(e){if(this.onboarding()?.path===e){this.goTo(-1);return}if(this.summary()?.path===e){this.goTo(this.steps().length);return}let t=this.steps().findIndex(t=>t.path===e);t>=0&&this.goTo(t)}registerControlElement(e,t){let n=this.controlElementsByPath.get(e)??[];n.push(t),this.controlElementsByPath.set(e,n)}unregisterControlElement(e,t){let n=this.controlElementsByPath.get(e);if(!n)return;let r=n.indexOf(t);r>=0&&n.splice(r,1)}focusFirstControlIfEmpty(e){let t=this.currentStep();if(!t||t.path!==e||t.field.value())return;let[n]=this.controlElementsByPath.get(e)??[];n?.focus()}static ctorParameters=()=>[]},k=h([ne()],k)})),j,M=e((()=>{r(),l(),A(),j=class StepperNext{store=o(k);elementRef=o(S);renderer=o(b);inactiveClass=f(``,{alias:`libFormStepperInactive`});isDisabled=a(()=>{let e=this.store.state();return!e.hasNextStep||!e.isStepValid});constructor(){s(()=>{let e=this.inactiveClass();e&&(this.isDisabled()?this.renderer.addClass(this.elementRef.nativeElement,e):this.renderer.removeClass(this.elementRef.nativeElement,e))})}onClick(){this.isDisabled()||this.store.next()}static ctorParameters=()=>[];static propDecorators={inactiveClass:[{type:_,args:[{isSignal:!0,alias:`libFormStepperInactive`,required:!1,transform:void 0}]}]}},j=h([x({selector:`[libFormStepperNext]`,host:{"[attr.disabled]":`isDisabled() ? true : null`,"(click)":`onClick()`}})],j)})),N,P=e((()=>{r(),l(),A(),N=class StepperPrev{store=o(k);elementRef=o(S);renderer=o(b);inactiveClass=f(``,{alias:`libFormStepperInactive`});isDisabled=a(()=>!this.store.state().hasPrevStep);constructor(){s(()=>{let e=this.inactiveClass();e&&(this.isDisabled()?this.renderer.addClass(this.elementRef.nativeElement,e):this.renderer.removeClass(this.elementRef.nativeElement,e))})}onClick(e){e.preventDefault(),!this.isDisabled()&&this.store.previous()}static ctorParameters=()=>[];static propDecorators={inactiveClass:[{type:_,args:[{isSignal:!0,alias:`libFormStepperInactive`,required:!1,transform:void 0}]}]}},N=h([x({selector:`[libFormStepperPrev]`,host:{class:`lib-form-stepper-prev`,"[class.lib-form-stepper-prev--disabled]":`isDisabled()`,"(click)":`onClick($event)`}})],N)})),ke,F,I=e((()=>{l(),ke={translations:{start:`Commencer`,prev:`Précédent`,next:`Suivant`,submit:`Envoyer`,yes:`Oui`,no:`Non`},css:{stepTitle:``,prev:``,next:``,submit:``}},F=new t(`LibFormStepperConfig`)})),L,Ae=e((()=>{r(),De(),Oe(),y(),l(),M(),P(),I(),A(),L=class StepperMain{store=o(k);injector=o(te);config=o(F);libIsFormValid=f();libFormStepperNoSubmitButton=f(!1);libFormStepperDisabled=f(!1);main=a(()=>this.store.main());isFormValid=a(()=>this.libIsFormValid()??this.store.isFormValid());stepTemplateInjector=this.injector;static propDecorators={libIsFormValid:[{type:_,args:[{isSignal:!0,alias:`libIsFormValid`,required:!1,transform:void 0}]}],libFormStepperNoSubmitButton:[{type:_,args:[{isSignal:!0,alias:`libFormStepperNoSubmitButton`,required:!1,transform:void 0}]}],libFormStepperDisabled:[{type:_,args:[{isSignal:!0,alias:`libFormStepperDisabled`,required:!1,transform:void 0}]}]}},L=h([v({selector:`lib-form-stepper-main`,imports:[C,N,j],template:D,host:{class:`lib-form-stepper-main`},styles:[O]})],L)})),R,je=e((()=>{r(),l(),R=class StepperMainDirective{templateRef=o(g);template=this.templateRef},R=h([x({selector:`[libFormStepperMain]`})],R)})),Me,Ne=e((()=>{Me=`@let currentState = state();

<div class="lib-form-stepper-nav-inner">
    <div class="lib-form-stepper-nav-inner__content">
        <nav class="lib-form-stepper-nav-sections">

            @if (currentState.onboardingInfo && !libFormStepperNoOnboardingNav()) {
            <div class="lib-form-stepper-nav-section"
                [class.lib-form-stepper-nav-section--valid]="currentState.maxStepIndexViewed >= 0"
                [class.lib-form-stepper-nav-section--current]="currentState.stepIndex === -1">
                <span class="lib-form-stepper-nav-section__bullet"></span>

                <button type="button" tabindex="-1" class="lib-form-stepper-nav-section__btn"
                    (click)="navigateByStepIndex($event, currentState.onboardingInfo.index)">
                    <lib-form-stepper-section-icon class="lib-form-stepper-nav-section__icon"
                        [libFormStepperIcon]="currentState.onboardingInfo.icon"
                        [libFormStepperIsValid]="currentState.maxStepIndexViewed >= 0">
                    </lib-form-stepper-section-icon>

                    <span class="lib-form-stepper-nav-section__title lib-form-stepper-nav-section__title--width"
                        [class.lib-form-stepper-nav-section__title--expanded]="!isMobile() || currentState.stepIndex === currentState.onboardingInfo.index">
                        {{ currentState.onboardingInfo.title }}
                    </span>
                </button>
            </div>
            }

            @for (section of currentState.nav; track section.id; let sectionIndex = $index, isLastSectionIndex = $last)
            {
            @let offset = sectionStepOffset(sectionIndex);
            @let sectionValid = isSectionValid(section, offset, currentState.maxStepIndexViewed);
            @let steps = section.steps();
            @let currentStepInSection = currentState.sectionIndex === sectionIndex
            ? steps[currentState.stepIndex - offset]
            : undefined;

            <div class="lib-form-stepper-nav-section" [class.lib-form-stepper-nav-section--valid]="sectionValid"
                [class.lib-form-stepper-nav-section--current]="currentState.sectionIndex === sectionIndex"
                [class.lib-form-stepper-nav-section--last]="!currentState.summaryInfo && isLastSectionIndex">
                <span class="lib-form-stepper-nav-section__bullet"></span>

                <button type="button" tabindex="-1" class="lib-form-stepper-nav-section__btn"
                    [attr.disabled]="(!steps.length || (offset > currentState.maxStepIndexViewed && !steps[0].field.dirty())) ? true : null"
                    (click)="navigateByStepIndex($event, offset, sectionIndex)" cdkOverlayOrigin
                    #mobileOverlayOrigin="cdkOverlayOrigin">

                    @if (currentStepInSection?.sectionProgression) {
                    <span class="lib-form-stepper-nav-section__progression">
                        {{ currentStepInSection.sectionProgression.count }}/{{
                        currentStepInSection.sectionProgression.total }}
                    </span>
                    }

                    <lib-form-stepper-section-icon class="lib-form-stepper-nav-section__icon"
                        [libFormStepperIcon]="section.icon" [libFormStepperIsValid]="sectionValid" />

                    <span class="lib-form-stepper-nav-section__title lib-form-stepper-nav-section__title--width"
                        [class.lib-form-stepper-nav-section__title--expanded]="!isMobile() || currentState.sectionIndex === sectionIndex">
                        {{ section.title }}

                        @if (!(section.noStepsNav ?? libFormStepperNoStepsNav()) && isMobile() && steps.length >= 2 &&
                        currentState.sectionIndex === sectionIndex) {
                        <i class="lib-form-stepper-nav-section__arrow libicon-fleche-dropdown-texte"
                            [class.lib-form-stepper-nav-section__arrow--open]="isMobileOverlayOpen()"
                            aria-hidden="true">
                        </i>
                        }
                    </span>
                </button>

                @if (!(section.noStepsNav ?? libFormStepperNoStepsNav()) && currentState.sectionIndex === sectionIndex)
                {
                @if (!isMobile()) {
                <ng-container [ngTemplateOutlet]="stepsTemplate"></ng-container>
                } @else {
                <ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="mobileOverlayOrigin"
                    [cdkConnectedOverlayOpen]="isMobileOverlayOpen()"
                    [cdkConnectedOverlayPositions]="sectionIndex < currentState.nav.length / 2 ? mobileOverlayPosition.left : mobileOverlayPosition.right">
                    <div class="lib-form-stepper-nav lib-form-stepper-nav--overlay" animate.leave="nav-fade-out">
                        <ng-container [ngTemplateOutlet]="stepsTemplate"></ng-container>
                    </div>
                </ng-template>
                }
                }

                <ng-template #stepsTemplate>
                    @if (steps.length >= 2) {
                    <div class="lib-form-stepper-nav-steps" [class.lib-form-stepper-nav-steps--expanded]="true"
                        [class.lib-form-stepper-nav-steps--left]="sectionIndex < currentState.nav.length / 2"
                        [class.lib-form-stepper-nav-steps--right]="sectionIndex >= currentState.nav.length / 2">
                        <div class="lib-form-stepper-nav-steps__inner">
                            @for (step of steps; track step.id; let relativeIndex = $index) {
                            @let globalIndex = offset + relativeIndex;
                            @let stepValid = isStepValid(step, globalIndex, currentState.maxStepIndexViewed);

                            <div class="lib-form-stepper-nav-step" [class.lib-form-stepper-nav-step--valid]="stepValid"
                                [class.lib-form-stepper-nav-step--current]="currentState.stepIndex === globalIndex">
                                <i class="libicon-cercle-check lib-form-stepper-nav-step__icon" aria-hidden="true"></i>

                                <button type="button" tabindex="-1" class="lib-form-stepper-nav-step__btn"
                                    [attr.disabled]="isStepDisabled(step, globalIndex, currentState.maxStepIndexViewed) ? true : null"
                                    (click)="navigateByStepIndex($event, globalIndex)">
                                    {{ step.shortTitle || step.title }}
                                </button>
                            </div>
                            }
                        </div>
                    </div>
                    }
                </ng-template>
            </div>
            }

            @if (currentState.summaryInfo) {
            <div class="lib-form-stepper-nav-section lib-form-stepper-nav-section--last"
                [class.lib-form-stepper-nav-section--valid]="currentState.allStepsViewed"
                [class.lib-form-stepper-nav-section--current]="currentState.stepIndex === currentState.lastStepIndex">
                <span class="lib-form-stepper-nav-section__bullet"></span>

                <button type="button" tabindex="-1" class="lib-form-stepper-nav-section__btn"
                    [attr.disabled]="!currentState.allStepsViewed ? true : null"
                    (click)="navigateByStepIndex($event, currentState.summaryInfo.index)">
                    <lib-form-stepper-section-icon class="lib-form-stepper-nav-section__icon"
                        [libFormStepperIcon]="currentState.summaryInfo.icon"
                        [libFormStepperIsValid]="currentState.allStepsViewed" />

                    <span class="lib-form-stepper-nav-section__title lib-form-stepper-nav-section__title--width"
                        [class.lib-form-stepper-nav-section__title--expanded]="!isMobile() || currentState.stepIndex === currentState.summaryInfo.index">
                        {{ currentState.summaryInfo.title }}
                    </span>
                </button>
            </div>
            }
        </nav>
    </div>
</div>`})),Pe,Fe=e((()=>{Pe=`.lib-form-stepper-nav{--bg-color:var(--blanc);--timeline-color:var(--gris_light);--bullet-color:var(--gris_light);--text-color__default:var(--gris_dark);--text-color__valid:var(--noir);--valid__bg-color:var(--vert_positif);--valid__text-color:var(--blanc);--section-current__bg-color:var(--bleu_turquoise_light);--section-current__text-color:var(--bleu_dark);--step__underline-color:var(--gris_light);--section__margin:1.5rem;--section__timeline-width:4px;--section__timeline-offset:3.5rem;--section-btn__line-height:1.5rem;--section-btn__padding-v:1.25rem;--section-btn__height:calc(var(--section-btn__line-height) + var(--section-btn__padding-v) * 2);--section__bullet-offset:calc(var(--section__timeline-offset) - var(--section-btn__height) / 2);--mobile-timeline-width:.5rem;--mobile-steps__box-shadow:0 6px 12px 0 #2222224d;--mobile-steps__border-color:var(--gris_light);--mobile-steps__bg-color:var(--blanc);--anim-duration:.25s}.lib-form-stepper-nav-section__btn,.lib-form-stepper-nav-step__btn{text-align:left;background:0 0;border:none;padding:0;font-family:inherit;font-size:100%;display:block}.lib-form-stepper-nav-section__btn:not([disabled]),.lib-form-stepper-nav-step__btn:not([disabled]){cursor:pointer}.lib-form-stepper-nav-sections{position:relative}.lib-form-stepper-nav-sections:before{content:"";top:calc(var(--section-btn__height) / 2);bottom:calc(var(--section-btn__height) / 2 + var(--section__margin));left:calc(var(--section__timeline-offset) - var(--section__timeline-width) / 2);border-left:var(--section__timeline-width) solid var(--timeline-color);position:absolute}.lib-form-stepper-nav-section{padding-bottom:var(--section__margin);position:relative}.lib-form-stepper-nav-section:not(.lib-form-stepper-nav-section--last):before{content:"";top:calc(var(--section-btn__height) / 2);left:calc(var(--section__timeline-offset) - var(--section__timeline-width) / 2);border-left:var(--section__timeline-width) solid var(--valid__bg-color);height:0%;transition:height var(--anim-duration) ease;position:absolute}.lib-form-stepper-nav-section__bullet{content:"";top:0;left:var(--section__bullet-offset);width:var(--section-btn__height);height:var(--section-btn__height);line-height:var(--section-btn__height);text-align:center;box-sizing:border-box;border-radius:calc(var(--section-btn__height) / 2);border:4px solid var(--bg-color);background-color:var(--bullet-color);transition:left var(--anim-duration) ease, width var(--anim-duration) ease, background-color var(--anim-duration) ease;position:absolute}.lib-form-stepper-nav-section__btn{z-index:1;width:100%;padding:var(--section-btn__padding-v) 0;padding-left:calc(var(--section__timeline-offset) + var(--section-btn__height) / 2 + 1rem);padding-right:calc(var(--section-btn__height) / 2 + 1rem);line-height:var(--section-btn__line-height);white-space:nowrap;text-overflow:ellipsis;color:var(--text-color__default);transition:color var(--anim-duration) ease;font-size:1rem;position:relative;overflow:hidden}.lib-form-stepper-nav-section__progression{opacity:0;font-size:.825rem;position:absolute;left:1rem}.lib-form-stepper-nav-section__icon{top:0;left:var(--section__bullet-offset);width:var(--section-btn__height);height:var(--section-btn__height);line-height:var(--section-btn__height);text-align:center;font-size:1rem;transition:none;position:absolute}.lib-form-stepper-nav-steps{padding-top:calc(var(--section__margin) * 2 / 3)}.lib-form-stepper-nav-step{padding-left:calc(var(--section__timeline-offset) + var(--section-btn__height) / 2 + 1rem);position:relative}.lib-form-stepper-nav-step+.lib-form-stepper-nav-step{padding-top:calc(var(--section__margin) * 2 / 3)}.lib-form-stepper-nav-step__icon{left:calc(var(--section__timeline-offset) + var(--section-btn__height) / 2 - .5rem);color:var(--valid__bg-color);opacity:0;transition:opacity var(--anim-duration) ease;margin-top:0;position:absolute}.lib-form-stepper-nav-step__btn{color:var(--text-color__default);text-underline-offset:.3em;transition:color var(--anim-duration) ease, text-decoration-color var(--anim-duration) ease;font-size:.875rem;line-height:1.5rem;-webkit-text-decoration:underline #0000;text-decoration:underline #0000;text-decoration-thickness:3px}.lib-form-stepper-nav-section{font-family:var(--lib-ff-regular,inherit)}.lib-form-stepper-nav-section--current .lib-form-stepper-nav-section__bullet{background-color:var(--section-current__bg-color);width:100%;left:0}.lib-form-stepper-nav-section--current .lib-form-stepper-nav-section__btn{font-family:var(--lib-ff-regular,inherit);color:var(--section-current__text-color);font-weight:700}.lib-form-stepper-nav-section--valid .lib-form-stepper-nav-section__btn{color:var(--text-color__valid)}.lib-form-stepper-nav-section--valid:not(.lib-form-stepper-nav-section--last):before{height:100%}.lib-form-stepper-nav-section--valid.lib-form-stepper-nav-section--current .lib-form-stepper-nav-section__btn{color:var(--valid__text-color)}.lib-form-stepper-nav-section--current .lib-form-stepper-nav-section__progression{animation:formStepperNavFadeIn var(--anim-duration) ease calc(var(--anim-duration) / 2) forwards}.lib-form-stepper-nav-section--valid .lib-form-stepper-nav-section__bullet{background-color:var(--valid__bg-color)}.lib-form-stepper-nav-section--valid .lib-form-stepper-nav-section__icon{color:var(--valid__text-color)}.lib-form-stepper-nav-step--current .lib-form-stepper-nav-step__btn{-webkit-text-decoration-color:var(--step__underline-color);text-decoration-color:var(--step__underline-color)}.lib-form-stepper-nav-step--valid .lib-form-stepper-nav-step__btn{color:var(--text-color__valid)}.lib-form-stepper-nav-step--valid .lib-form-stepper-nav-step__icon{opacity:1}.lib-form-stepper-nav-step--valid.lib-form-stepper-nav-step--current .lib-form-stepper-nav-step__btn{-webkit-text-decoration-color:var(--valid__bg-color);text-decoration-color:var(--valid__bg-color)}@media (width<=1023px){.lib-form-stepper-nav{--section-btn__line-height:1.25rem;--section-btn__padding-v:.825rem;--section-btn__height:calc(var(--section-btn__line-height) + var(--section-btn__padding-v) * 2);opacity:0;animation:formStepperNavFadeIn var(--anim-duration) ease var(--anim-duration) forwards}.lib-form-stepper-nav--overlay{opacity:1;margin:0 4px;animation:none}.lib-form-stepper-nav-inner{position:relative}.lib-form-stepper-nav-inner:before,.lib-form-stepper-nav-inner:after{content:"";z-index:1;width:5px;position:absolute;top:0;bottom:0}.lib-form-stepper-nav-inner:before{background-image:linear-gradient(to left, transparent, var(--bg-color));left:0}.lib-form-stepper-nav-inner:after{background-image:linear-gradient(to right, transparent, var(--bg-color));right:0}.lib-form-stepper-nav-inner__content{text-align:center;overflow-x:auto}.lib-form-stepper-nav-inner__content::-webkit-scrollbar{display:none}.lib-form-stepper-nav-inner__content{-ms-overflow-style:none;scrollbar-width:none}.lib-form-stepper-nav-sections{display:inline-flex}.lib-form-stepper-nav-sections:before{left:calc(var(--section-btn__height) / 2);right:calc(var(--section-btn__height) / 2);top:calc(var(--section-btn__height) / 2 - var(--section__timeline-width) / 2);border-top:var(--section__timeline-width) solid var(--timeline-color);border-left:none}.lib-form-stepper-nav-section{padding-bottom:0}.lib-form-stepper-nav-section+.lib-form-stepper-nav-section{margin-left:var(--mobile-timeline-width)}.lib-form-stepper-nav-section:not(.lib-form-stepper-nav-section--last):before{top:calc(var(--section-btn__height) / 2 - var(--section__timeline-width) / 2);left:calc(var(--section-btn__height) / 2);border-top:var(--section__timeline-width) solid var(--valid__bg-color);width:0%;height:auto;transition:width var(--anim-duration) ease}.lib-form-stepper-nav-section__bullet{left:0}.lib-form-stepper-nav-section__btn{min-width:var(--section-btn__height);padding-left:calc(var(--section-btn__height) * .3);transition:padding calc(var(--anim-duration)) ease;justify-content:center;align-items:center;padding-right:0;font-size:.875rem;display:flex}.lib-form-stepper-nav-section__progression{opacity:0;margin-right:.625rem;animation:none;position:relative;left:auto;overflow:hidden}.lib-form-stepper-nav-section__icon{vertical-align:middle;justify-content:center;align-items:center;width:1rem;height:1rem;line-height:1rem;display:inline-flex;position:relative;top:auto;left:auto}.lib-form-stepper-nav-section__title{opacity:0;margin-left:.625rem;overflow:hidden}.lib-form-stepper-nav-section__arrow{vertical-align:middle;transition:transform var(--anim-duration) ease;display:inline-block}.lib-form-stepper-nav-section__arrow--open{transform:scale(-1)}.lib-form-stepper-nav-section--valid:not(.lib-form-stepper-nav-section--last):before{width:100%}.lib-form-stepper-nav-section--current .lib-form-stepper-nav-section__btn{padding-left:1.25rem;padding-right:1.25rem}.lib-form-stepper-nav-section--current .lib-form-stepper-nav-section__title{animation:formStepperNavFadeIn var(--anim-duration) ease calc(var(--anim-duration) / 2) forwards}.lib-form-stepper-nav-steps{box-sizing:border-box;max-width:50vw;box-shadow:var(--mobile-steps__box-shadow);border:1px solid var(--mobile-steps__border-color);background-color:var(--mobile-steps__bg-color);border-radius:4px;margin-top:6px;padding:1.125rem 0}.lib-form-stepper-nav-steps:after{content:"";z-index:1;border-style:solid;border-width:1px 1px 0 0;border-color:var(--mobile-steps__border-color);background-color:var(--mobile-steps__bg-color);border-top-right-radius:4px;width:11px;height:11px;position:absolute;top:.4px;transform:rotate(-45deg)}.lib-form-stepper-nav-steps--left:after{left:1.125rem}.lib-form-stepper-nav-steps--right:after{right:1.125rem}.lib-form-stepper-nav-step{align-items:baseline;display:flex;padding:0 2.5rem 0 1rem!important}.lib-form-stepper-nav-step__icon{margin-top:0;margin-right:.5rem;position:relative;top:0;left:0}.lib-form-stepper-nav-step__btn{text-overflow:ellipsis;white-space:nowrap;padding:.375rem 0;overflow:hidden}}@keyframes formStepperNavFadeIn{0%{opacity:0}to{opacity:1}}`})),Ie,Le=e((()=>{Ie=`@if (libFormStepperIsValid()) {
<span class="lib-form-stepper-section-icon__wrapper" [class.no-animation]="libFormStepperDisableAnimation()"
  animate.enter="fade-in" animate.leave="fade-out">
  <lib-icon name="libicon-check"></lib-icon>
</span>
} @else {
<span class="lib-form-stepper-section-icon__wrapper" [class.no-animation]="libFormStepperDisableAnimation()"
  animate.enter="fade-in" animate.leave="fade-out">
  <lib-icon [name]="libFormStepperIcon() || 'libicon-crayon'"></lib-icon>
</span>
}`})),Re,ze=e((()=>{Re=`:host{--lib-icon-font-size:1em;justify-content:center;align-items:center;line-height:1;display:inline-flex}.lib-form-stepper-section-icon__wrapper{transform-origin:50%;justify-content:center;align-items:center;width:100%;height:100%;line-height:1;display:inline-flex}.fade-in{animation:.25s ease-in-out forwards fade-in-animation}.fade-out{animation:.25s ease-in-out forwards fade-out-animation}@keyframes fade-in-animation{0%{opacity:0;transform:scaleX(0)}50%{opacity:0;transform:scaleX(0)}to{opacity:1;transform:scaleX(1)}}@keyframes fade-out-animation{0%{opacity:1;transform:scaleX(1)}49%{opacity:0;transform:scaleX(0)}to{opacity:0;transform:scaleX(0)}}.no-animation{animation:none!important}`})),z,B=e((()=>{r(),Le(),ze(),l(),ie(),z=class StepperSectionIcon{libFormStepperIcon=f();libFormStepperIsValid=f();libFormStepperDisableAnimation=f();static propDecorators={libFormStepperIcon:[{type:_,args:[{isSignal:!0,alias:`libFormStepperIcon`,required:!1,transform:void 0}]}],libFormStepperIsValid:[{type:_,args:[{isSignal:!0,alias:`libFormStepperIsValid`,required:!1,transform:void 0}]}],libFormStepperDisableAnimation:[{type:_,args:[{isSignal:!0,alias:`libFormStepperDisableAnimation`,required:!1,transform:void 0}]}]}},z=h([v({selector:`lib-form-stepper-section-icon`,template:Ie,imports:[re],encapsulation:p.None,styles:[Re]})],z)})),Be,V,Ve=e((()=>{r(),Ne(),Fe(),l(),me(),B(),fe(),be(),A(),y(),Be=`(max-width: 1023px)`,V=class StepperNav{store=o(k);breakpointObserver=o(de);destroyRef=o(i);libFormStepperNoStepsNav=f(!1);libFormStepperNoOnboardingNav=f(!1);breakpointState=ye(this.breakpointObserver.observe(Be));isMobile=a(()=>this.breakpointState()?.matches??!1);isMobileOverlayOpen=c(!1);mobileOverlayPosition={left:[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`center`,originY:`bottom`,overlayX:`start`,overlayY:`top`}],right:[{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`center`,originY:`bottom`,overlayX:`end`,overlayY:`top`}]};state=a(()=>this.store.state());constructor(){let e,closeOnNavigate=()=>{let t=this.store.stepIndex();e!==void 0&&e!==t&&this.isMobileOverlayOpen.set(!1),e=t};this.destroyRef.onDestroy(()=>{}),this.__closeEffect=closeOnNavigate}sectionStepOffset(e){return this.store.steps().findIndex(t=>t.sectionIndex===e)}navigateByStepIndex(e,t,n){e.stopPropagation(),n===this.state().sectionIndex?this.libFormStepperNoStepsNav()||this.isMobileOverlayOpen.update(e=>!e):this.store.goTo(t)}isSectionValid(e,t,n){return t<=n&&e.field.valid()}isStepValid(e,t,n){return t<=n&&e.field.valid()}isStepDisabled(e,t,n){return t>n&&!e.field.dirty()}static ctorParameters=()=>[];static propDecorators={libFormStepperNoStepsNav:[{type:_,args:[{isSignal:!0,alias:`libFormStepperNoStepsNav`,required:!1,transform:void 0}]}],libFormStepperNoOnboardingNav:[{type:_,args:[{isSignal:!0,alias:`libFormStepperNoOnboardingNav`,required:!1,transform:void 0}]}]}},V=h([v({selector:`lib-form-stepper-nav`,imports:[pe,z,C],template:Me,encapsulation:p.None,host:{class:`lib-form-stepper-nav`,"[class.lib-form-stepper-nav--mobile]":`isMobile()`},styles:[Pe]})],V)})),H,He=e((()=>{r(),l(),H=class Onboarding{templateRef=o(g);title=f(``,{alias:`libFormStepperOnboardingTitle`});icon=f(`libicon-ampoule`,{alias:`libFormStepperOnboardingIcon`});path=f(`onboarding`,{alias:`libFormStepperOnboardingPath`});page=a(()=>({title:this.title(),icon:this.icon(),path:this.path(),template:this.templateRef}));static propDecorators={title:[{type:_,args:[{isSignal:!0,alias:`libFormStepperOnboardingTitle`,required:!1,transform:void 0}]}],icon:[{type:_,args:[{isSignal:!0,alias:`libFormStepperOnboardingIcon`,required:!1,transform:void 0}]}],path:[{type:_,args:[{isSignal:!0,alias:`libFormStepperOnboardingPath`,required:!1,transform:void 0}]}]}},H=h([x({selector:`[libFormStepperOnboarding]`})],H)})),U,Ue=e((()=>{r(),l(),U=class StepperSummary{templateRef=o(g);title=f.required({alias:`libFormStepperSummaryTitle`});icon=f.required({alias:`libFormStepperSummaryIcon`});path=f.required({alias:`libFormStepperSummaryPath`});page=a(()=>({title:this.title(),icon:this.icon(),path:this.path(),template:this.templateRef}));static propDecorators={title:[{type:_,args:[{isSignal:!0,alias:`libFormStepperSummaryTitle`,required:!0,transform:void 0}]}],icon:[{type:_,args:[{isSignal:!0,alias:`libFormStepperSummaryIcon`,required:!0,transform:void 0}]}],path:[{type:_,args:[{isSignal:!0,alias:`libFormStepperSummaryPath`,required:!0,transform:void 0}]}]}},U=h([x({selector:`[libFormStepperSummary]`})],U)}));function adaptField(e){return{valid:a(()=>e().valid()),invalid:a(()=>e().invalid()),errors:a(()=>e().errors()),value:a(()=>e().value()),touched:a(()=>e().touched()),dirty:a(()=>e().dirty()),pending:a(()=>e().pending())}}var W=e((()=>{l()}));function nextStepperId(e){return`${e}-${++We}`}var We,G=e((()=>{We=0})),K,Ge=e((()=>{r(),l(),W(),G(),K=class StepperStep{templateRef=o(g);libFormStepperStepField=f();libFormStepperOptions=f();libFormStepperTitle=f();libFormStepperShortTitle=f();libFormStepperAutoNextOnValueChange=f(!1);libFormStepperPath=f();path=a(()=>{let e=this.libFormStepperOptions()?.path??this.libFormStepperPath();if(!e)throw Error(`[libFormStepperStep] "path" is required: provide it via [libFormStepperPath] or via [libFormStepperOptions].path.`);return e});template=this.templateRef;id=nextStepperId(`lib-step`);field=a(()=>{let e=this.libFormStepperStepField();return e?adaptField(e):void 0});title=a(()=>this.libFormStepperOptions()?.title??this.libFormStepperTitle());shortTitle=a(()=>this.libFormStepperOptions()?.shortTitle??this.libFormStepperShortTitle());autoNext=a(()=>this.libFormStepperOptions()?.autoNextOnValueChange??this.libFormStepperAutoNextOnValueChange());static propDecorators={libFormStepperStepField:[{type:_,args:[{isSignal:!0,alias:`libFormStepperStepField`,required:!1,transform:void 0}]}],libFormStepperOptions:[{type:_,args:[{isSignal:!0,alias:`libFormStepperOptions`,required:!1,transform:void 0}]}],libFormStepperTitle:[{type:_,args:[{isSignal:!0,alias:`libFormStepperTitle`,required:!1,transform:void 0}]}],libFormStepperShortTitle:[{type:_,args:[{isSignal:!0,alias:`libFormStepperShortTitle`,required:!1,transform:void 0}]}],libFormStepperAutoNextOnValueChange:[{type:_,args:[{isSignal:!0,alias:`libFormStepperAutoNextOnValueChange`,required:!1,transform:void 0}]}],libFormStepperPath:[{type:_,args:[{isSignal:!0,alias:`libFormStepperPath`,required:!1,transform:void 0}]}]}},K=h([x({selector:`[libFormStepperStep]`})],K)})),q,Ke=e((()=>{r(),l(),W(),Ge(),G(),q=class StepperSection{libFormStepperSectionField=f();libFormStepperOptions=f();libFormStepperTitle=f();libFormStepperIcon=f();libFormStepperNoQuicknav=f(!1);libFormStepperNoStepsNav=f(!1);id=nextStepperId(`lib-section`);stepDirectives=d(K);title=a(()=>this.libFormStepperOptions()?.title??this.libFormStepperTitle()??``);icon=a(()=>this.libFormStepperOptions()?.icon??this.libFormStepperIcon()??`libicon-crayon`);hasQuicknav=a(()=>!this.libFormStepperNoQuicknav());noStepsNav=a(()=>this.libFormStepperNoStepsNav());explicitField=a(()=>{let e=this.libFormStepperSectionField();return e?adaptField(e):void 0});stepFields=a(()=>this.stepDirectives().map(e=>e.field()).filter(e=>!!e));aggregatedField={valid:a(()=>this.stepFields().every(e=>e.valid())),invalid:a(()=>this.stepFields().some(e=>e.invalid())),errors:a(()=>this.stepFields().flatMap(e=>e.errors())),value:a(()=>this.stepFields().map(e=>e.value())),touched:a(()=>this.stepFields().every(e=>e.touched())),dirty:a(()=>this.stepFields().some(e=>e.dirty())),pending:a(()=>this.stepFields().some(e=>e.pending()))};field=a(()=>this.explicitField()??this.aggregatedField);static propDecorators={libFormStepperSectionField:[{type:_,args:[{isSignal:!0,alias:`libFormStepperSectionField`,required:!1,transform:void 0}]}],libFormStepperOptions:[{type:_,args:[{isSignal:!0,alias:`libFormStepperOptions`,required:!1,transform:void 0}]}],libFormStepperTitle:[{type:_,args:[{isSignal:!0,alias:`libFormStepperTitle`,required:!1,transform:void 0}]}],libFormStepperIcon:[{type:_,args:[{isSignal:!0,alias:`libFormStepperIcon`,required:!1,transform:void 0}]}],libFormStepperNoQuicknav:[{type:_,args:[{isSignal:!0,alias:`libFormStepperNoQuicknav`,required:!1,transform:void 0}]}],libFormStepperNoStepsNav:[{type:_,args:[{isSignal:!0,alias:`libFormStepperNoStepsNav`,required:!1,transform:void 0}]}],stepDirectives:[{type:n,args:[K,{isSignal:!0}]}]}},q=h([x({selector:`[libFormStepperSection]`})],q)})),J,qe=e((()=>{r(),Te(),Ee(),y(),l(),Ae(),je(),Ve(),A(),He(),Ue(),Ke(),J=class StepperContainer{store=o(k);elementRef=o(S);injector=o(te);libFormStepperUseRouting=f(!0);libFormStepperNoScrollToTopOnNavigation=f(!0);libFormStepperNoSubmitButton=f(!1);libFormStepperNoStepsNav=f(!1);libFormStepperNoOnboardingNav=f(!1);libFormStepperDisabled=f(!1);mainDirective=u(R);onboardingDirective=u(H);summaryDirective=u(U);sectionDirectives=d(q);stepTemplateInjector=this.injector;hasMainOverride=a(()=>!!this.mainDirective());mainOverrideTemplate=a(()=>this.mainDirective()?.template);main=a(()=>this.store.main());assembledSections=a(()=>this.sectionDirectives().map((e,t)=>({id:e.id,title:e.title(),icon:e.icon(),field:e.field(),hasQuicknav:e.hasQuicknav(),noStepsNav:e.noStepsNav(),steps:a(()=>{let n=e.stepDirectives(),r=n.length;return n.map((n,i)=>({id:n.id,title:n.title()||e.title(),shortTitle:n.shortTitle()??``,path:n.path(),field:n.field()??e.field(),template:n.template,sectionIndex:t,sectionProgression:r>=2?{count:i+1,total:r}:void 0,autoNext:n.autoNext()}))})})));constructor(){s(()=>{this.store.onboarding.set(this.onboardingDirective()?.page())}),s(()=>{this.store.summary.set(this.summaryDirective()?.page())}),s(()=>{this.store.sections.set(this.assembledSections())});let e=!0;s(()=>{if(this.store.stepIndex(),e){e=!1;return}this.libFormStepperNoScrollToTopOnNavigation()||this.elementRef.nativeElement.scrollIntoView({behavior:`smooth`})})}static ctorParameters=()=>[];static propDecorators={libFormStepperUseRouting:[{type:_,args:[{isSignal:!0,alias:`libFormStepperUseRouting`,required:!1,transform:void 0}]}],libFormStepperNoScrollToTopOnNavigation:[{type:_,args:[{isSignal:!0,alias:`libFormStepperNoScrollToTopOnNavigation`,required:!1,transform:void 0}]}],libFormStepperNoSubmitButton:[{type:_,args:[{isSignal:!0,alias:`libFormStepperNoSubmitButton`,required:!1,transform:void 0}]}],libFormStepperNoStepsNav:[{type:_,args:[{isSignal:!0,alias:`libFormStepperNoStepsNav`,required:!1,transform:void 0}]}],libFormStepperNoOnboardingNav:[{type:_,args:[{isSignal:!0,alias:`libFormStepperNoOnboardingNav`,required:!1,transform:void 0}]}],libFormStepperDisabled:[{type:_,args:[{isSignal:!0,alias:`libFormStepperDisabled`,required:!1,transform:void 0}]}],mainDirective:[{type:m,args:[R,{isSignal:!0}]}],onboardingDirective:[{type:m,args:[H,{isSignal:!0}]}],summaryDirective:[{type:m,args:[U,{isSignal:!0}]}],sectionDirectives:[{type:n,args:[q,{isSignal:!0}]}]}},J=h([v({selector:`lib-form-stepper-container`,imports:[C,L,V],template:T,providers:[k],encapsulation:p.None,styles:[E]})],J)})),Je,Ye=e((()=>{Je=`@let currentNav = nav();

<div class="lib-form-stepper-quicknav__wrapper d-flex flex-wrap flex-sm-column flex-md-row">

    @if (!libFormStepperCompact()) {
    @for (section of currentNav; track section.id) {
    @if (section.hasQuicknav) {
    <div
        class="lib-form-stepper-quicknav__section bg-beige_sable lib-form-stepper-quicknav__section--multi rounded-4 gris_sable_light_bg p-4">
        <h4 class="lib-form-stepper-quicknav__section-title mb-3">
            <lib-form-stepper-section-icon
                class="lib-form-stepper-quicknav__section-icon rounded-circle gris_sable_dark_bg"
                [libFormStepperIcon]="section.icon" [libFormStepperIsValid]="!section.icon"
                [libFormStepperDisableAnimation]="true">
            </lib-form-stepper-section-icon>

            {{ section.title }}
        </h4>

        <ng-container [ngTemplateOutlet]="steps" [ngTemplateOutletContext]="{ section: section }">
        </ng-container>
    </div>
    }
    }
    } @else {
    <div class="lib-form-stepper-quicknav__section rounded-4 bg-gris_sable_light p-4">
        @for (section of currentNav; track section.id) {
        @if (section.hasQuicknav) {
        <ng-container [ngTemplateOutlet]="steps" [ngTemplateOutletContext]="{ section: section }">
        </ng-container>
        }
        }
    </div>
    }
</div>

<ng-template #steps let-section="section">
    @for (step of section.steps(); track step.id) {
    <div class="mb-2 titre-16">
        @if (libFormStepperCompact() || step.title !== section.title || section.steps().length >= 2) {
        <strong class="mr-1">{{ step.shortTitle || step.title }}&nbsp;:&nbsp;</strong>
        }

        <span>{{ getStepValue(step) }}</span>

        <button type="button" tabindex="-1" [attr.aria-label]="'Modifier ' + (step.shortTitle || step.title)"
            class="px-3 lib-button-unstyled gris_dark libicon-crayon" (click)="goToStep(step)">
        </button>
    </div>
    }
</ng-template>`})),Xe,Ze=e((()=>{Xe=`.lib-form-stepper-quicknav__wrapper{margin-bottom:-16px}.lib-form-stepper-quicknav__section{flex-grow:1;margin-bottom:1rem}.lib-form-stepper-quicknav__section--multi{margin-right:1rem}.lib-form-stepper-quicknav__section-title{align-items:center;display:flex}.lib-form-stepper-quicknav__section-icon{text-align:center;width:2.5rem;height:2.5rem;margin-right:.5rem;font-size:1rem;line-height:2.5rem}`})),Y,Qe=e((()=>{r(),Ye(),Ze(),l(),B(),y(),I(),A(),Y=class StepperQuicknav{store=o(k);config=o(F);libFormStepperCompact=f(!1);libFormStepperFormat=f();nav=a(()=>this.store.state().nav);goToStep(e){this.store.goToPath(e.path)}getStepValue(e){let t=this.libFormStepperFormat();if(t){let n=t(e.path,e.field.value());if(n!==void 0)return n}return this.format(e.field.value())}format(e){if(Array.isArray(e))return this.formatArray(e);if(typeof e==`object`&&e)return this.formatArray(Object.values(e));let{yes:t,no:n}=this.config.translations;return e===!0?t:e===!1?n:(e??``).toString()}formatArray(e){return e.map(e=>this.format(e)).filter(e=>!!e).join(`, `)}static propDecorators={libFormStepperCompact:[{type:_,args:[{isSignal:!0,alias:`libFormStepperCompact`,required:!1,transform:void 0}]}],libFormStepperFormat:[{type:_,args:[{isSignal:!0,alias:`libFormStepperFormat`,required:!1,transform:void 0}]}]}},Y=h([v({selector:`lib-form-stepper-quicknav`,imports:[C,z],template:Je,encapsulation:p.None,host:{class:`lib-form-stepper-quicknav`},styles:[Xe]})],Y)})),X,$e,et=e((()=>{r(),l(),A(),X=class StepperControl{store=o(k);elementRef=o(S);destroyRef=o(i);libFormStepperOnEnter=f({});onEnterConfig=a(()=>({...$e,...this.libFormStepperOnEnter()}));constructor(){let e=this.store.currentStep();e&&(this.store.registerControlElement(e.path,this.elementRef.nativeElement),this.destroyRef.onDestroy(()=>this.store.unregisterControlElement(e.path,this.elementRef.nativeElement)))}onEnter(e){let{preventDefault:t,nextStep:n}=this.onEnterConfig();t&&e.preventDefault(),n&&this.store.state().isStepValid&&this.store.next()}static ctorParameters=()=>[];static propDecorators={libFormStepperOnEnter:[{type:_,args:[{isSignal:!0,alias:`libFormStepperOnEnter`,required:!1,transform:void 0}]}]}},X=h([x({selector:`[libFormStepperControl]`,host:{"(keydown.enter)":`onEnter($event)`}})],X),$e={preventDefault:!0,nextStep:!0}})),tt=e((()=>{})),nt=e((()=>{})),rt=e((()=>{qe(),Ae(),Ve(),Qe(),B(),He(),et(),je(),M(),P(),Ke(),Ge(),Ue(),I(),A(),tt(),nt(),W(),G()})),it,at,Z,ot,Q,$;e((()=>{r(),y(),l(),ae(),ue(),rt(),ge(),ve(),Se(),we(),it=[{value:`email`,label:`Email`,icon:`libicon-mail`},{value:`sms`,label:`SMS`,icon:`libicon-tel`}],at=[{value:`paris`,label:`Paris`},{value:`lyon`,label:`Lyon`},{value:`marseille`,label:`Marseille`},{value:`bordeaux`,label:`Bordeaux`}],Z=class FormStepperHostComponent{channelItems=it;cityItems=at;model=c({identity:{firstName:``,lastName:``,birthDate:null},contact:{email:``},address:{street:``,city:``},preferences:{channels:[]}});demoForm=se(this.model,e=>{w(e.identity.firstName),w(e.identity.lastName),w(e.contact.email),ce(e.contact.email),w(e.address.street),w(e.address.city)});isSubmitting=c(!1)},Z=h([v({selector:`story-form-stepper-host`,standalone:!0,imports:[J,Y,H,U,q,K,X,oe,xe,_e,Ce,he,ee],providers:[{provide:F,useValue:ke}],template:`
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
        padding: 2rem;
        box-sizing: border-box;
      "
    >
      <lib-form-stepper-container
        [libFormStepperNoSubmitButton]="false"
        [libFormStepperDisabled]="isSubmitting()"
      >

        <ng-template
          libFormStepperOnboarding
          libFormStepperOnboardingTitle="Bienvenue"
          libFormStepperOnboardingIcon="libicon-vague"
          libFormStepperOnboardingPath="bienvenue"
        >
          <h2>Créons votre profil</h2>

          <p>
            Ce petit formulaire prend environ 2 minutes.
          </p>
        </ng-template>

        <div
          libFormStepperSection
          [libFormStepperSectionField]="demoForm.identity"
          libFormStepperTitle="Identité"
          libFormStepperIcon="libicon-compte"
        >

          <!-- Prénom -->

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.identity.firstName"
            libFormStepperTitle="Prénom"
            libFormStepperShortTitle="Prénom"
            libFormStepperPath="prenom"
          >
            <lib-form-input
              libFormStepperControl
              [formField]="demoForm.identity.firstName"
              label="Prénom"
            />
          </ng-template>

          <!-- Nom -->

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.identity.lastName"
            libFormStepperTitle="Nom"
            libFormStepperShortTitle="Nom"
            libFormStepperPath="nom"
          >
            <lib-form-input
              libFormStepperControl
              [formField]="demoForm.identity.lastName"
              label="Nom"
            />
          </ng-template>

          <!-- Date de naissance -->

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.identity.birthDate"
            libFormStepperTitle="Date de naissance"
            libFormStepperShortTitle="Naissance"
            libFormStepperPath="naissance"
          >
            <lib-form-datepicker
              libFormStepperControl
              [formField]="demoForm.identity.birthDate"
              label="Date de naissance"
            />
          </ng-template>

        </div>

        <div
          libFormStepperSection
          [libFormStepperSectionField]="demoForm.contact"
          libFormStepperTitle="Contact"
          libFormStepperIcon="libicon-mail"
        >

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.contact.email"
            libFormStepperTitle="Adresse email"
            libFormStepperShortTitle="Email"
            libFormStepperPath="email"
          >
            <lib-form-input
              libFormStepperControl
              type="email"
              [formField]="demoForm.contact.email"
              label="Adresse email"
            />
          </ng-template>

        </div>

        <div
          libFormStepperSection
          [libFormStepperSectionField]="demoForm.address"
          libFormStepperTitle="Adresse"
          libFormStepperIcon="libicon-pin-geoloc"
        >

          <!-- Rue -->

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.address.street"
            libFormStepperTitle="Rue"
            libFormStepperShortTitle="Rue"
            libFormStepperPath="rue"
          >
            <lib-form-input
              libFormStepperControl
              [formField]="demoForm.address.street"
              label="Rue"
            />
          </ng-template>

          <!-- Ville -->

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.address.city"
            libFormStepperTitle="Ville"
            libFormStepperShortTitle="Ville"
            libFormStepperPath="ville"
          >
            <lib-form-select
              libFormStepperControl
              [formField]="demoForm.address.city"
              [items]="cityItems"
              label="Ville"
            />
          </ng-template>

        </div>

        <div
          libFormStepperSection
          [libFormStepperSectionField]="demoForm.preferences"
          libFormStepperTitle="Préférences"
          libFormStepperIcon="libicon-parametres"
        >

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.preferences.channels"
            libFormStepperTitle="Canaux de notification"
            libFormStepperShortTitle="Notifications"
            libFormStepperPath="notifications"
          >
            <lib-form-checkbox-card
              libFormStepperControl
              [formField]="demoForm.preferences.channels"
              [items]="channelItems"
              label="Comment souhaitez-vous être notifié ?"
            />
          </ng-template>

        </div>

        <ng-template
          libFormStepperSummary
          libFormStepperSummaryTitle="Récapitulatif"
          libFormStepperSummaryIcon="libicon-check"
          libFormStepperSummaryPath="recapitulatif"
        >
          <h2>Vérifiez vos informations</h2>

          <lib-form-stepper-quicknav
            [libFormStepperCompact]="false"
          />
        </ng-template>

      </lib-form-stepper-container>

      <div
        style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
          overflow: auto;
        "
      >
        <strong>Form Model Value:</strong>

        <pre style="margin: 8px 0 0 0;">{{
          model() | json
        }}</pre>
      </div>
    </div>
  `})],Z),ot={title:`Forms/Stepper`,component:J,tags:[`autodocs`],decorators:[le({imports:[Z]})],parameters:{docs:{description:{component:`Stepper multi-étapes intégrant les contrôles du Design System avec Angular Signal Forms. La démonstration contient les étapes Identité, Contact, Adresse, Préférences et Récapitulatif.`}}}},Q={render:()=>({template:`
      <story-form-stepper-host />
    `}),parameters:{docs:{description:{story:`Exemple complet d’un parcours multi-étapes utilisant Signal Forms.`},source:{type:`code`,language:`html`,code:`<lib-form-stepper-container
  [libFormStepperNoSubmitButton]="false"
  [libFormStepperDisabled]="isSubmitting()">

  <ng-template
    libFormStepperOnboarding
    libFormStepperOnboardingTitle="Bienvenue"
    libFormStepperOnboardingIcon="libicon-vague"
    libFormStepperOnboardingPath="bienvenue">

    <h2>Créons votre profil</h2>

    <p>
      Ce petit formulaire prend environ 2 minutes.
    </p>
  </ng-template>

  <div
    libFormStepperSection
    [libFormStepperSectionField]="demoForm.identity"
    libFormStepperTitle="Identité"
    libFormStepperIcon="libicon-compte">

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.identity.firstName"
      libFormStepperTitle="Prénom"
      libFormStepperShortTitle="Prénom"
      libFormStepperPath="prenom">

      <lib-form-input
        libFormStepperControl
        [formField]="demoForm.identity.firstName"
        label="Prénom">
      </lib-form-input>

    </ng-template>

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.identity.lastName"
      libFormStepperTitle="Nom"
      libFormStepperShortTitle="Nom"
      libFormStepperPath="nom">

      <lib-form-input
        libFormStepperControl
        [formField]="demoForm.identity.lastName"
        label="Nom">
      </lib-form-input>

    </ng-template>

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.identity.birthDate"
      libFormStepperTitle="Date de naissance"
      libFormStepperShortTitle="Naissance"
      libFormStepperPath="naissance">

      <lib-form-datepicker
        libFormStepperControl
        [formField]="demoForm.identity.birthDate"
        label="Date de naissance">
      </lib-form-datepicker>

    </ng-template>

  </div>

  <div
    libFormStepperSection
    [libFormStepperSectionField]="demoForm.contact"
    libFormStepperTitle="Contact"
    libFormStepperIcon="libicon-mail">

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.contact.email"
      libFormStepperTitle="Adresse email"
      libFormStepperShortTitle="Email"
      libFormStepperPath="email">

      <lib-form-input
        libFormStepperControl
        type="email"
        [formField]="demoForm.contact.email"
        label="Adresse email">
      </lib-form-input>

    </ng-template>

  </div>

  <div
    libFormStepperSection
    [libFormStepperSectionField]="demoForm.address"
    libFormStepperTitle="Adresse"
    libFormStepperIcon="libicon-pin-geoloc">

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.address.street"
      libFormStepperTitle="Rue"
      libFormStepperShortTitle="Rue"
      libFormStepperPath="rue">

      <lib-form-input
        libFormStepperControl
        [formField]="demoForm.address.street"
        label="Rue">
      </lib-form-input>

    </ng-template>

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.address.city"
      libFormStepperTitle="Ville"
      libFormStepperShortTitle="Ville"
      libFormStepperPath="ville">

      <lib-form-select
        libFormStepperControl
        [formField]="demoForm.address.city"
        [items]="cityItems"
        label="Ville">
      </lib-form-select>

    </ng-template>

  </div>

  <div
    libFormStepperSection
    [libFormStepperSectionField]="demoForm.preferences"
    libFormStepperTitle="Préférences"
    libFormStepperIcon="libicon-parametres">

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.preferences.channels"
      libFormStepperTitle="Canaux de notification"
      libFormStepperShortTitle="Notifications"
      libFormStepperPath="notifications">

      <lib-form-checkbox-card
        libFormStepperControl
        [formField]="demoForm.preferences.channels"
        [items]="channelItems"
        label="Comment souhaitez-vous être notifié ?">
      </lib-form-checkbox-card>

    </ng-template>

  </div>

  <ng-template
    libFormStepperSummary
    libFormStepperSummaryTitle="Récapitulatif"
    libFormStepperSummaryIcon="libicon-check"
    libFormStepperSummaryPath="recapitulatif">

    <h2>Vérifiez vos informations</h2>

    <lib-form-stepper-quicknav
      [libFormStepperCompact]="false">
    </lib-form-stepper-quicknav>

  </ng-template>

</lib-form-stepper-container>`}}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <story-form-stepper-host />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Exemple complet d’un parcours multi-étapes utilisant Signal Forms.'
      },
      source: {
        type: 'code',
        language: 'html',
        code: \`
<lib-form-stepper-container
  [libFormStepperNoSubmitButton]="false"
  [libFormStepperDisabled]="isSubmitting()">

  <ng-template
    libFormStepperOnboarding
    libFormStepperOnboardingTitle="Bienvenue"
    libFormStepperOnboardingIcon="libicon-vague"
    libFormStepperOnboardingPath="bienvenue">

    <h2>Créons votre profil</h2>

    <p>
      Ce petit formulaire prend environ 2 minutes.
    </p>
  </ng-template>

  <div
    libFormStepperSection
    [libFormStepperSectionField]="demoForm.identity"
    libFormStepperTitle="Identité"
    libFormStepperIcon="libicon-compte">

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.identity.firstName"
      libFormStepperTitle="Prénom"
      libFormStepperShortTitle="Prénom"
      libFormStepperPath="prenom">

      <lib-form-input
        libFormStepperControl
        [formField]="demoForm.identity.firstName"
        label="Prénom">
      </lib-form-input>

    </ng-template>

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.identity.lastName"
      libFormStepperTitle="Nom"
      libFormStepperShortTitle="Nom"
      libFormStepperPath="nom">

      <lib-form-input
        libFormStepperControl
        [formField]="demoForm.identity.lastName"
        label="Nom">
      </lib-form-input>

    </ng-template>

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.identity.birthDate"
      libFormStepperTitle="Date de naissance"
      libFormStepperShortTitle="Naissance"
      libFormStepperPath="naissance">

      <lib-form-datepicker
        libFormStepperControl
        [formField]="demoForm.identity.birthDate"
        label="Date de naissance">
      </lib-form-datepicker>

    </ng-template>

  </div>

  <div
    libFormStepperSection
    [libFormStepperSectionField]="demoForm.contact"
    libFormStepperTitle="Contact"
    libFormStepperIcon="libicon-mail">

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.contact.email"
      libFormStepperTitle="Adresse email"
      libFormStepperShortTitle="Email"
      libFormStepperPath="email">

      <lib-form-input
        libFormStepperControl
        type="email"
        [formField]="demoForm.contact.email"
        label="Adresse email">
      </lib-form-input>

    </ng-template>

  </div>

  <div
    libFormStepperSection
    [libFormStepperSectionField]="demoForm.address"
    libFormStepperTitle="Adresse"
    libFormStepperIcon="libicon-pin-geoloc">

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.address.street"
      libFormStepperTitle="Rue"
      libFormStepperShortTitle="Rue"
      libFormStepperPath="rue">

      <lib-form-input
        libFormStepperControl
        [formField]="demoForm.address.street"
        label="Rue">
      </lib-form-input>

    </ng-template>

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.address.city"
      libFormStepperTitle="Ville"
      libFormStepperShortTitle="Ville"
      libFormStepperPath="ville">

      <lib-form-select
        libFormStepperControl
        [formField]="demoForm.address.city"
        [items]="cityItems"
        label="Ville">
      </lib-form-select>

    </ng-template>

  </div>

  <div
    libFormStepperSection
    [libFormStepperSectionField]="demoForm.preferences"
    libFormStepperTitle="Préférences"
    libFormStepperIcon="libicon-parametres">

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.preferences.channels"
      libFormStepperTitle="Canaux de notification"
      libFormStepperShortTitle="Notifications"
      libFormStepperPath="notifications">

      <lib-form-checkbox-card
        libFormStepperControl
        [formField]="demoForm.preferences.channels"
        [items]="channelItems"
        label="Comment souhaitez-vous être notifié ?">
      </lib-form-checkbox-card>

    </ng-template>

  </div>

  <ng-template
    libFormStepperSummary
    libFormStepperSummaryTitle="Récapitulatif"
    libFormStepperSummaryIcon="libicon-check"
    libFormStepperSummaryPath="recapitulatif">

    <h2>Vérifiez vos informations</h2>

    <lib-form-stepper-quicknav
      [libFormStepperCompact]="false">
    </lib-form-stepper-quicknav>

  </ng-template>

</lib-form-stepper-container>
        \`.trim()
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`]}))();export{Q as Default,$ as __namedExportsOrder,ot as default};