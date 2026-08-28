import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,Kn as r,L as i,R as a,Ti as o,ct as s,et as c}from"./angular-platform-CkHGXGBq.js";var l,u=e((()=>{l=`@if (items().length > 0) {
<section class="lib-carousel__wrapper" [attr.aria-label]="ariaLabel()" (keydown)="onKeydown($event)">
    <div class="lib-carousel" [class.lib-carousel--sm]="size() === 'sm'" [class.lib-carousel--md]="size() === 'md'"
        [class.lib-carousel--lg]="size() === 'lg'" [class.lib-carousel--fade]="transition() === 'fade'"
        [class.lib-carousel--slide]="transition() === 'slide'" tabindex="0" role="region"
        [attr.aria-roledescription]="'carousel'">
        <!-- Slides -->
        <div class="lib-carousel__viewport">
            @for (item of items(); track item.id; let index = $index) {
            <article class="lib-carousel__slide" [class.lib-carousel__slide--active]="
              index === currentIndex()
            " [attr.aria-hidden]="index !== currentIndex()">
                @if (item.href) {
                <a class="lib-carousel__link" [href]="item.href" [attr.tabindex]="
                  index === currentIndex() ? 0 : -1
                ">
                    <img class="lib-carousel__image" [src]="item.src" [alt]="item.alt" loading="lazy" />
                </a>
                } @else {
                <img class="lib-carousel__image" [src]="item.src" [alt]="item.alt" />
                }

                @if (item.title || item.description) {
                <div class="lib-carousel__caption">
                    <div class="lib-carousel__caption-content">
                        @if (item.title) {
                        <h3 class="lib-carousel__title">
                            {{ item.title }}
                        </h3>
                        }

                        @if (item.description) {
                        <p class="lib-carousel__description">
                            {{ item.description }}
                        </p>
                        }
                    </div>
                </div>
                }
            </article>
            }
        </div>

        <!-- Previous -->
        @if (showControls() && hasMultipleSlides()) {
        <button type="button" class="btn btn-light btn-rounded lib-carousel__control lib-carousel__control--prev"
            [disabled]="!canGoPrevious()" aria-label="Image précédente" (click)="previous()">
            <span aria-hidden="true">‹</span>
        </button>

        <!-- Next -->
        <button type="button" class="btn btn-light btn-rounded lib-carousel__control lib-carousel__control--next"
            [disabled]="!canGoNext()" aria-label="Image suivante" (click)="next()">
            <span aria-hidden="true">›</span>
        </button>
        }

        <!-- Counter -->
        @if (showCounter() && hasMultipleSlides()) {
        <div class="lib-carousel__counter" aria-live="polite" aria-atomic="true">
            {{ currentIndex() + 1 }} / {{ slideCount() }}
        </div>
        }

        <!-- Indicators -->
        @if (showIndicators() && hasMultipleSlides()) {
        <div class="lib-carousel__indicators" role="tablist" aria-label="Navigation entre les images">
            @for (item of items(); track item.id; let index = $index) {
            <button type="button" class="lib-carousel__indicator" [class.lib-carousel__indicator--active]="
                index === currentIndex()
              " role="tab" [attr.aria-selected]="index === currentIndex()"
                [attr.aria-label]="'Afficher l’image ' + (index + 1)" [attr.aria-current]="
                index === currentIndex() ? 'true' : null
              " (click)="goTo(index)">
                <span class="lib-carousel__indicator-dot"></span>
            </button>
            }
        </div>
        }
    </div>
</section>
}`})),d,f=e((()=>{t(),u(),i(),d=class Carousel{items=a([]);size=a(`md`);transition=a(`slide`);autoplay=a(!1);interval=a(5e3);showControls=a(!0);showIndicators=a(!0);showCounter=a(!0);loop=a(!0);ariaLabel=a(`Galerie`);currentIndex=r(0);hasMultipleSlides=n(()=>this.items().length>1);currentItem=n(()=>this.items()[this.currentIndex()]);slideCount=n(()=>this.items().length);canGoPrevious=n(()=>this.loop()?this.hasMultipleSlides():this.currentIndex()>0);canGoNext=n(()=>this.loop()?this.hasMultipleSlides():this.currentIndex()<this.slideCount()-1);carouselClasses=n(()=>[`lib-carousel`,`lib-carousel--${this.size()}`,`lib-carousel--${this.transition()}`]);previous(){if(!this.canGoPrevious())return;let e=this.slideCount();if(this.currentIndex()===0){this.currentIndex.set(e-1);return}this.currentIndex.update(e=>e-1)}next(){if(!this.canGoNext())return;let e=this.slideCount()-1;if(this.currentIndex()===e){this.currentIndex.set(0);return}this.currentIndex.update(e=>e+1)}goTo(e){e<0||e>=this.slideCount()||this.currentIndex.set(e)}onKeydown(e){switch(e.key){case`ArrowLeft`:e.preventDefault(),this.previous();break;case`ArrowRight`:e.preventDefault(),this.next();break;case`Home`:e.preventDefault(),this.goTo(0);break;case`End`:e.preventDefault(),this.goTo(this.slideCount()-1);break}}static propDecorators={items:[{type:s,args:[{isSignal:!0,alias:`items`,required:!1,transform:void 0}]}],size:[{type:s,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}],transition:[{type:s,args:[{isSignal:!0,alias:`transition`,required:!1,transform:void 0}]}],autoplay:[{type:s,args:[{isSignal:!0,alias:`autoplay`,required:!1,transform:void 0}]}],interval:[{type:s,args:[{isSignal:!0,alias:`interval`,required:!1,transform:void 0}]}],showControls:[{type:s,args:[{isSignal:!0,alias:`showControls`,required:!1,transform:void 0}]}],showIndicators:[{type:s,args:[{isSignal:!0,alias:`showIndicators`,required:!1,transform:void 0}]}],showCounter:[{type:s,args:[{isSignal:!0,alias:`showCounter`,required:!1,transform:void 0}]}],loop:[{type:s,args:[{isSignal:!0,alias:`loop`,required:!1,transform:void 0}]}],ariaLabel:[{type:s,args:[{isSignal:!0,alias:`ariaLabel`,required:!1,transform:void 0}]}]}},d=o([c({selector:`lib-carousel`,template:l})],d)})),p=e((()=>{f()})),m,h,g,_,v,y,b,x,S,C;e((()=>{p(),m={title:`Components/Carousel`,component:d,tags:[`autodocs`],argTypes:{items:{control:!1,description:`Liste des slides du Carousel.`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`Taille du Carousel.`},transition:{control:`inline-radio`,options:[`slide`,`fade`],description:`Type de transition entre les slides.`},autoplay:{control:`boolean`,description:`Active la lecture automatique.`},interval:{control:`number`,description:`Intervalle entre les slides en millisecondes.`},showControls:{control:`boolean`,description:`Affiche les boutons précédent/suivant.`},showIndicators:{control:`boolean`,description:`Affiche les indicateurs.`},showCounter:{control:`boolean`,description:`Affiche le compteur.`},loop:{control:`boolean`,description:`Permet de revenir au premier slide.`},ariaLabel:{control:`text`,description:`Label accessible du Carousel.`}},args:{items:[{id:`paris`,src:`https://images.unsplash.com/photo-1502602898657-3e91760cbb34`,alt:`Vue de Paris avec la Tour Eiffel`,title:`Paris`,description:`Découvrez la ville lumière.`},{id:`london`,src:`https://images.unsplash.com/photo-1513635269975-59663e0ac1ad`,alt:`Vue de Londres`,title:`London`,description:`Une ville entre histoire et modernité.`},{id:`new-york`,src:`https://images.unsplash.com/photo-1485871981521-5b1fd3805eee`,alt:`Vue de New York`,title:`New York`,description:`La ville qui ne dort jamais.`},{id:`tokyo`,src:`https://images.unsplash.com/photo-1540959733332-eab4deabeeaf`,alt:`Vue de Tokyo`,title:`Tokyo`,description:`Tradition et technologie réunies.`}],size:`md`,transition:`slide`,autoplay:!1,interval:5e3,showControls:!0,showIndicators:!0,showCounter:!0,loop:!0,ariaLabel:`Galerie de destinations`},parameters:{docs:{description:{component:"Carousel accessible et responsive basé sur Angular Signals.\n\nLes contrôles de navigation réutilisent les boutons du Design System\n(`btn`, `btn-light`, `btn-rounded`) afin de conserver une expérience\nvisuelle cohérente avec les autres composants."}}}},h={},g={args:{transition:`fade`}},_={args:{size:`sm`}},v={args:{size:`lg`}},y={args:{showControls:!1}},b={args:{showIndicators:!1}},x={args:{showCounter:!1}},S={args:{showControls:!0,showIndicators:!0,showCounter:!0,autoplay:!1},parameters:{docs:{description:{story:`Galerie statique avec navigation manuelle et indicateurs.`}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source},description:{story:`Playground`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    transition: 'fade'
  }
}`,...g.parameters?.docs?.source},description:{story:`Fade`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,..._.parameters?.docs?.source},description:{story:`Small`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...v.parameters?.docs?.source},description:{story:`Large`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    showControls: false
  }
}`,...y.parameters?.docs?.source},description:{story:`WithoutControls`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    showIndicators: false
  }
}`,...b.parameters?.docs?.source},description:{story:`WithoutIndicators`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: false
  }
}`,...x.parameters?.docs?.source},description:{story:`WithoutCounter`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    showControls: true,
    showIndicators: true,
    showCounter: true,
    autoplay: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Galerie statique avec navigation manuelle et indicateurs.'
      }
    }
  }
}`,...S.parameters?.docs?.source},description:{story:`StaticGallery`,...S.parameters?.docs?.description}}},C=[`Playground`,`Fade`,`Small`,`Large`,`WithoutControls`,`WithoutIndicators`,`WithoutCounter`,`StaticGallery`]}))();export{g as Fade,v as Large,h as Playground,_ as Small,S as StaticGallery,y as WithoutControls,x as WithoutCounter,b as WithoutIndicators,C as __namedExportsOrder,m as default};