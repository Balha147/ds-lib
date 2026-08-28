import{i as e}from"./preload-helper-G0Y2f6MP.js";import{E as t,Ei as n,G as r,Hn as i,In as a,L as o,N as s,R as c,Ti as l,W as u,bt as d,ct as f,et as p,f as m,j as h,k as g,nt as _,v}from"./angular-platform-CkHGXGBq.js";import{i as y,t as b}from"./public-api-CB813VaT.js";import{n as x,t as S}from"./public-api-ClneZIDV.js";import{n as C,o as w,t as T}from"./overlay-KOe7q9o-.js";import{i as E,t as D}from"./public-api-CpgCs3-l.js";var O,k=e((()=>{O=`@let currentItem = selectedItem();
@let items = resolvedItems();

@if (label() && !autocomplete()) {
<label [for]="id" class="form-label">{{ label() }}</label>
}

<div class="lib-form-select__box">
    <input #input type="text" autocomplete="off" class="lib-form-select__input" cdkOverlayOrigin [id]="id"
        [attr.aria-label]="ariaLabel()" [value]="formAutocomplete().inputValue() ?? ''"
        [readOnly]="!autocomplete() || formAutocomplete().inputValue() === undefined" [disabled]="disabled()"
        [placeholder]="currentItem ? '' : placeholder()" [libFormAutocomplete]="items"
        [libFormAutocompleteFilter]="formAutocompleteFilter"
        (libFormAutocompleteSelection)="onSuggestionClicked($event)" />

    <div class="lib-form-select__div form-select text-truncate" [class.lib-form-select__div--disabled]="disabled()"
        [class.lib-form-select__div--searching]="autocomplete() && formAutocomplete().inputValue() !== undefined && formAutocomplete().inputValue() !== ''"
        [class.is-invalid]="isInvalid()" [class.is-valid]="isValid()">
        @if (currentItem) {
        <ng-container [ngTemplateOutlet]="itemTemplate"
            [ngTemplateOutletContext]="{ $implicit: currentItem }"></ng-container>
        }
        &nbsp;
    </div>
</div>

@if (label() && autocomplete()) {
<label [for]="id" class="form-label">{{ label() }}</label>
}

@if (!noErrorMessages() && isInvalid()) {
<div class="invalid-feedback">{{ firstErrorMessage() }}</div>
} @else if (hint()) {
<div class="form-text">{{ hint() }}</div>
}

<ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="overlayOrigin()"
    [cdkConnectedOverlayOpen]="!readonly() && formAutocomplete().shouldShowSuggestions()">
    <div class="dropdown-menu show lib-form-select-menu" [style.width.px]="input.offsetWidth">
        @let suggestions = formAutocomplete().suggestions();

        @for (item of suggestions; track trackByValue($index, item); let suggestionIndex = $index) {
        <button type="button"
            class="lib-form-select-menu__item d-flex justify-content-between align-items-center dropdown-item"
            [class.lib-form-select-menu__item--focused]="suggestionIndex === formAutocomplete().focusedSuggestionIndex()"
            (click)="onSuggestionClicked(item)">
            <span class="text-truncate">
                <ng-container [ngTemplateOutlet]="itemTemplate"
                    [ngTemplateOutletContext]="{ $implicit: item }"></ng-container>
            </span>

            @if (value()?.code === item.value) {
            <lib-icon name="libicon-check" class="ms-3" aria-hidden="true"></lib-icon>
            }
        </button>
        }

        @if (!suggestions.length) {
        <button type="button" disabled
            class="lib-form-select-menu__item d-flex justify-content-between align-items-center dropdown-item disabled">
            <span class="text-truncate">Aucun résultat</span>
        </button>
        }
    </div>
</ng-template>

<ng-template #itemTemplate let-item>
    @if (item.template && templatePosition() === 'before') {
    <ng-container [ngTemplateOutlet]="item.template"></ng-container>
    }

    {{ item.label }}

    @if (item.template && templatePosition() === 'after') {
    <ng-container [ngTemplateOutlet]="item.template"></ng-container>
    }
</ng-template>`})),A,j=e((()=>{A=`.lib-form-select{cursor:pointer;width:100%;display:block}.lib-form-select__box{align-items:center;width:100%;min-height:48px;display:flex;position:relative}.lib-form-select__div{pointer-events:none;align-items:center;width:100%;min-height:48px;margin:0;display:flex}.lib-form-select__div--disabled{background-color:var(--gris_light)}.lib-form-select__div--searching{color:#0000}.lib-form-select__div--searching *{visibility:hidden}.lib-form-select__input{width:100%;height:100%;box-shadow:none;color:var(--noir);z-index:5;background:0 0;border:none;outline:none;margin:0;padding:0 36px 0 12px;font-size:.875rem;position:absolute;inset:0}.lib-form-select__input[readonly]{color:#0000;cursor:pointer}.lib-form-select-menu{z-index:1050;max-height:44vh;position:relative;overflow:auto}.lib-form-select-menu__item{outline:none}.lib-form-select-menu__item--focused{background-color:rgba(var(--corail_lib_brand), .08)}`})),M,N=e((()=>{n(),o(),M=class LibFormSelectItemDirective{value=c.required();label=c.required();template=i(d);static propDecorators={value:[{type:f,args:[{isSignal:!0,alias:`value`,required:!0,transform:void 0}]}],label:[{type:f,args:[{isSignal:!0,alias:`label`,required:!0,transform:void 0}]}]}},M=l([_({selector:`[libFormSelectItem]`})],M)})),P=e((()=>{})),F,I=e((()=>{F=class FuzzySearchStrategy{defaultOptions;normalize;constructor(e={}){this.defaultOptions=e,this.normalize=e.normalize??FuzzySearchStrategy.defaultNormalize}search(e,t,n={}){let r=this.normalize(e);if(!r)return t.map(e=>({item:e,score:1,distance:0}));let{maxDistance:i,minSimilarity:a=.55,prioritizeSubstring:o=!0}={...this.defaultOptions,...n},s=i??this.getDefaultMaxDistance(r.length);return t.map(e=>{let t=this.normalize(e.label),n=t.includes(r),i=n?0:FuzzySearchStrategy.levenshtein(r,t);return{item:e,score:n?this.getSubstringScore(r,t):this.getSimilarity(r,t,i),distance:i,isSubstring:n}}).filter(e=>e.isSubstring?!0:e.distance<=s&&e.score>=a).sort((e,t)=>{if(o){if(e.isSubstring&&!t.isSubstring)return-1;if(!e.isSubstring&&t.isSubstring)return 1}return e.score===t.score?e.distance-t.distance:t.score-e.score}).map(({item:e,score:t,distance:n})=>({item:e,score:t,distance:n}))}static levenshtein(e,t){if(e===t)return 0;if(e.length===0)return t.length;if(t.length===0)return e.length;e.length>t.length&&([e,t]=[t,e]);let n=Array.from({length:e.length+1},(e,t)=>t),r=Array(e.length+1);for(let i=1;i<=t.length;i++){r[0]=i;for(let a=1;a<=e.length;a++){let o=r[a-1]+1,s=n[a]+1,c=n[a-1]+(e[a-1]===t[i-1]?0:1);r[a]=Math.min(o,s,c)}[n,r]=[r,n]}return n[e.length]}static defaultNormalize(e){return e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).trim().toLocaleLowerCase()}getSubstringScore(e,t){let n=t.startsWith(e),r=e.length/t.length;return n?.9+r*.1:.6+r*.2}getSimilarity(e,t,n){let r=Math.max(e.length,t.length);return r===0?1:1-n/r}getDefaultMaxDistance(e){return e<=3?1:e<=5?2:e<=8?3:Math.max(3,Math.floor(e*.35))}}})),L=e((()=>{P(),I()})),R,z=e((()=>{n(),k(),j(),T(),m(),o(),b(),S(),N(),D(),L(),R=class Select extends x{items=c([]);autocomplete=c(!1,{transform:h});allowUncheck=c(!0,{transform:h});templatePosition=c(`before`);fuzzySearch=c(!1,{transform:h});searchStrategy=c(new F);searchMaxDistance=c(void 0);projectedItemDirectives=s(M);resolvedItems=r(()=>{let e=this.projectedItemDirectives();return e.length>0?e.map(e=>({value:e.value(),label:e.label(),template:e.template})):this.items()});itemsMap=r(()=>{let e=new Map;for(let t of this.resolvedItems())e.set(t.value,t);return e});selectedItem=r(()=>this.value()?.code?this.itemsMap().get(this.value().code):void 0);formAutocomplete=u.required(E);overlayOrigin=u.required(C);fuzzyMatchingKeys=r(()=>{if(!this.fuzzySearch())return null;let e=this.formAutocomplete().inputValue();if(!e)return null;let t=this.searchStrategy().search(e,this.resolvedItems(),{maxDistance:this.searchMaxDistance()});return new Set(t.map(e=>e.item.value))});formAutocompleteFilter=(e,t)=>{if(!e)return!0;if(!this.fuzzySearch())return this.normalizeLabel(t.label).includes(this.normalizeLabel(e));let n=this.fuzzyMatchingKeys();return!n||n.has(t.value)};constructor(){super();let e=!1;a(()=>{let t=this.formAutocomplete().shouldShowSuggestions();e&&!t&&this.onBlur(),e=t})}trackByValue(e,t){return t.value}onSuggestionClicked(e){let t=e.value===this.value()?.code;if(!(t&&!this.allowUncheck())){if(t&&this.allowUncheck()){this.value.set(null);return}this.value.set({code:e.value,label:e.label})}}normalizeLabel(e){return e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).trim().toLocaleLowerCase()}static ctorParameters=()=>[];static propDecorators={items:[{type:f,args:[{isSignal:!0,alias:`items`,required:!1,transform:void 0}]}],autocomplete:[{type:f,args:[{isSignal:!0,alias:`autocomplete`,required:!1,transform:void 0}]}],allowUncheck:[{type:f,args:[{isSignal:!0,alias:`allowUncheck`,required:!1,transform:void 0}]}],templatePosition:[{type:f,args:[{isSignal:!0,alias:`templatePosition`,required:!1,transform:void 0}]}],fuzzySearch:[{type:f,args:[{isSignal:!0,alias:`fuzzySearch`,required:!1,transform:void 0}]}],searchStrategy:[{type:f,args:[{isSignal:!0,alias:`searchStrategy`,required:!1,transform:void 0}]}],searchMaxDistance:[{type:f,args:[{isSignal:!0,alias:`searchMaxDistance`,required:!1,transform:void 0}]}],projectedItemDirectives:[{type:t,args:[M,{isSignal:!0}]}],formAutocomplete:[{type:g,args:[E,{isSignal:!0}]}],overlayOrigin:[{type:g,args:[C,{isSignal:!0}]}]}},R=l([p({selector:`lib-form-select`,template:O,imports:[v,w,y,E],host:{class:`lib-form-container lib-form-select`},styles:[A]})],R)})),B=e((()=>{})),V=e((()=>{z(),N(),B()}));export{N as a,M as i,R as n,z as r,V as t};