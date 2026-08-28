import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,Kn as r,L as i,R as a,Ti as o,ct as s,et as c}from"./angular-platform-CkHGXGBq.js";import{i as l,n as u,o as d}from"./signals-C2mKSRCS.js";import{i as f,t as p}from"./dist-_fqtV9zk.js";import{n as m,t as h}from"./public-api-ClneZIDV.js";var g,_=e((()=>{g=`<div class="lib-rating__field">

    @if (label()) {
    <label class="lib-rating__label" [attr.for]="id">
        {{ label() }}
    </label>
    }

    @if (mode() === 'stars') {

    <div class="lib-rating__stars" role="slider" [attr.id]="id"
        [attr.aria-label]="ariaLabel() || label() || 'Évaluation'" [attr.aria-valuemin]="0" [attr.aria-valuemax]="max()"
        [attr.aria-valuenow]="currentStarValue()" [attr.aria-valuetext]="currentRatingText()"
        [attr.aria-valuestep]="step()" [attr.aria-disabled]="disabled()" [attr.aria-readonly]="readonly()"
        [attr.tabindex]="disabled() || readonly() ? -1 : 0" [attr.aria-invalid]="isInvalid()"
        (keydown)="handleStarKeydown($event)">

        @for (star of starValues(); track star) {

        <button type="button" class="lib-rating__star" [class.lib-rating__star--full]="isStarFull(star)"
            [class.lib-rating__star--half]="isStarHalf(star)" [class.lib-rating__star--empty]="isStarEmpty(star)"
            [class.lib-rating__star--disabled]="disabled()" [disabled]="disabled() || readonly()"
            [attr.aria-label]="getStarAriaLabel(star)" tabindex="-1" (click)="selectStarFromClick($event, star)">
            <span class="lib-rating__star-icon" aria-hidden="true">★</span>
        </button>

        }

    </div>

    } @else {

    <div class="lib-rating__emojis" role="radiogroup" [attr.aria-label]="ariaLabel() || label()">

        @for (emoji of emojis(); track emoji.value) {

        <button type="button" class="lib-rating__emoji" [class.lib-rating__emoji--selected]="
                isEmojiSelected(emoji.value)
            " [disabled]="disabled() || readonly()" [attr.aria-label]="emoji.label"
            [attr.aria-checked]="isEmojiSelected(emoji.value)" role="radio" tabindex="0"
            (click)="selectEmoji(emoji.value)" (keydown)="handleEmojiKeydown($event, emoji.value)">
            <span class="lib-rating__emoji-icon" aria-hidden="true">
                {{ emoji.value }}
            </span>

            <span class="lib-rating__emoji-label">
                {{ emoji.label }}
            </span>

        </button>

        }

    </div>

    }

    @if (hint()) {
    <div class="lib-rating__hint">
        {{ hint() }}
    </div>
    }

    @if (isInvalid() && !noErrorMessages()) {
    <div class="lib-rating__error" role="alert">
        {{ firstErrorMessage() }}
    </div>
    }

</div>`})),v,y=e((()=>{v=`.lib-rating{width:100%;font-family:var(--lib-ff-regular,inherit);color:#343a40;display:block}.lib-rating__field{flex-direction:column;align-items:flex-start;width:100%;display:flex}.lib-rating__label{font-family:var(--lib-ff-bold,inherit);color:#343a40;margin-bottom:.625rem;font-size:.875rem;line-height:1.4;display:block}.lib-rating__stars{cursor:pointer;background:0 0;border-radius:.75rem;align-items:center;gap:.25rem;padding:.25rem;display:inline-flex}.lib-rating__stars:focus{outline:none}.lib-rating__stars:focus-visible{outline-offset:3px;outline:2px solid #ff4b33;box-shadow:0 0 0 4px #ff4b3338}.lib-rating__star{width:2.5rem;height:2.5rem;font:inherit;cursor:pointer;appearance:none;background:0 0;border:0;border-radius:50%;flex:none;justify-content:center;align-items:center;margin:0;padding:0;transition:background-color .16s,transform .16s,box-shadow .16s;display:inline-flex;position:relative}.lib-rating__star:focus{outline:none}.lib-rating__star:hover:not(:disabled){background:#ffc10714;transform:scale(1.08)}.lib-rating__star:disabled{cursor:not-allowed;opacity:.55;transform:none}.lib-rating__star--full .lib-rating__star-icon{color:#ffc107;filter:drop-shadow(0 2px 3px #ffc10740)}.lib-rating__star--full:hover:not(:disabled){background:#ffc1071a}.lib-rating__star--full:hover:not(:disabled) .lib-rating__star-icon{color:#ffb300}.lib-rating__star--half .lib-rating__star-icon{background:linear-gradient(90deg,#ffc107 50%,#b8bec5 50%);-webkit-text-fill-color:transparent;filter:drop-shadow(0 2px 3px #ffc10740);-webkit-background-clip:text}.lib-rating__star--empty .lib-rating__star-icon{color:#b8bec5}.lib-rating__star--disabled{cursor:not-allowed}.lib-rating__star-icon{-webkit-user-select:none;user-select:none;justify-content:center;align-items:center;width:1.75rem;height:1.75rem;font-size:1.75rem;line-height:1;transition:color .16s,transform .16s,filter .16s;display:flex}.lib-rating__emojis{flex-wrap:wrap;align-items:stretch;gap:.5rem;display:flex}.lib-rating__emoji{color:#343a40;min-width:5.75rem;min-height:5.25rem;font:inherit;cursor:pointer;appearance:none;background:#fff;border:1px solid #dee2e6;border-radius:1rem;flex-direction:column;flex:none;justify-content:center;align-items:center;margin:0;padding:.75rem .875rem;transition:border-color .16s,background-color .16s,box-shadow .16s,transform .16s;display:flex;box-shadow:0 1px 2px #0000000a,0 4px 10px #00000009}.lib-rating__emoji:hover:not(:disabled){background:#fff5f2;border-color:#ff4b3366;transform:translateY(-2px);box-shadow:0 2px 4px #0000000d,0 8px 18px #00000014}.lib-rating__emoji:focus{outline:none}.lib-rating__emoji:focus-visible{outline-offset:3px;outline:2px solid #ff4b33;box-shadow:0 0 0 4px #ff4b3338,0 8px 18px #00000014}.lib-rating__emoji:disabled{cursor:not-allowed;opacity:.55;box-shadow:none;transform:none}.lib-rating__emoji--selected{background:#fff0ec;border-color:#ff4b33;transform:translateY(-2px);box-shadow:0 0 0 3px #ff4b331a,0 6px 16px #ff4b331f}.lib-rating__emoji--selected .lib-rating__emoji-icon{transform:scale(1.12)}.lib-rating__emoji--selected .lib-rating__emoji-label{color:#db3924}.lib-rating__emoji--selected:hover:not(:disabled){background:#ffe9e4;border-color:#db3924;transform:translateY(-3px)}.lib-rating__emoji-icon{-webkit-user-select:none;user-select:none;justify-content:center;align-items:center;width:2rem;height:2rem;margin-bottom:.35rem;font-size:1.75rem;line-height:1;transition:transform .16s;display:flex}.lib-rating__emoji-label{font-family:var(--lib-ff-bold,inherit);color:#6c757d;white-space:nowrap;font-size:.75rem;line-height:1.2;display:block}.lib-rating__hint{color:#6c757d;margin-top:.5rem;font-size:.75rem;line-height:1.4;display:block}.lib-rating__error{color:#dc3545;margin-top:.5rem;font-size:.75rem;line-height:1.4;display:block}.lib-rating--invalid .lib-rating__stars:focus-visible{outline-color:#dc3545;box-shadow:0 0 0 4px #dc354526}.lib-rating--invalid .lib-rating__emoji{border-color:#dc354559}.lib-rating--disabled .lib-rating__stars,.lib-rating--disabled .lib-rating__emojis{opacity:.65}.lib-rating--disabled .lib-rating__stars{cursor:not-allowed}.lib-rating--readonly .lib-rating__star,.lib-rating--readonly .lib-rating__emoji{cursor:default;pointer-events:none}.lib-rating--readonly .lib-rating__stars{cursor:default}.lib-rating--readonly .lib-rating__star:hover{background:0 0;transform:none}.lib-rating--readonly .lib-rating__emoji:hover{background:#fff;transform:none;box-shadow:0 1px 2px #0000000a,0 4px 10px #00000009}@media (width<=576px){.lib-rating__stars{gap:.125rem}.lib-rating__star{width:2.25rem;height:2.25rem}.lib-rating__star-icon{width:1.5rem;height:1.5rem;font-size:1.5rem}.lib-rating__emojis{gap:.375rem}.lib-rating__emoji{border-radius:.875rem;min-width:4.75rem;min-height:4.75rem;padding:.625rem .5rem}.lib-rating__emoji-icon{width:1.75rem;height:1.75rem;font-size:1.5rem}.lib-rating__emoji-label{font-size:.6875rem}}@media (prefers-reduced-motion:reduce){.lib-rating__star,.lib-rating__star-icon,.lib-rating__emoji,.lib-rating__emoji-icon{transition:none}}`})),b,x=e((()=>{b=[{value:`😡`,label:`Très mauvais`},{value:`😕`,label:`Mauvais`},{value:`😐`,label:`Moyen`},{value:`🙂`,label:`Bien`},{value:`😍`,label:`Excellent`}]})),S,C=e((()=>{t(),_(),y(),i(),h(),x(),S=class Rating extends m{mode=a(`stars`);max=a(5);step=a(.5);emojis=a(b);starValues=n(()=>Array.from({length:Math.max(1,this.max())},(e,t)=>t+1));currentStarValue=n(()=>{let e=this.value();return typeof e!=`number`||Number.isNaN(e)?0:this.clampAndRoundValue(e)});currentEmojiValue=n(()=>{let e=this.value();return typeof e==`string`?e:``});isStarFull(e){return this.currentStarValue()>=e}isStarHalf(e){let t=this.currentStarValue();return this.step()===.5&&t>=e-.5&&t<e}isStarEmpty(e){return!this.isStarFull(e)&&!this.isStarHalf(e)}currentRatingText=n(()=>{let e=this.currentStarValue();return e===0?`Aucune évaluation sur ${this.max()}`:`${this.formatRatingValue(e)} sur ${this.max()}`});getStarAriaLabel(e){return`${e} sur ${this.max()}`}formatRatingValue(e){return Number.isInteger(e)?`${e}`:e.toFixed(1)}selectStarFromClick(e,t){if(this.disabled()||this.readonly())return;if(this.step()===1){this.selectStar(t);return}let n=e.currentTarget;if(!(n instanceof HTMLElement)){this.selectStar(t);return}let r=n.getBoundingClientRect(),i=e.clientX-r.left<r.width/2?t-.5:t;this.selectStar(i)}selectStar(e){this.disabled()||this.readonly()||this.value.set(this.clampAndRoundValue(e))}selectEmoji(e){this.disabled()||this.readonly()||this.value.set(e)}handleStarKeydown(e){if(this.disabled()||this.readonly())return;let t=this.currentStarValue(),n=this.step();switch(e.key){case`ArrowRight`:case`ArrowUp`:e.preventDefault(),this.selectStar(Math.min(this.max(),t+n));break;case`ArrowLeft`:case`ArrowDown`:e.preventDefault(),this.selectStar(Math.max(0,t-n));break;case`Home`:e.preventDefault(),this.selectStar(0);break;case`End`:e.preventDefault(),this.selectStar(this.max());break;case`Enter`:case` `:e.preventDefault();break;default:break}}handleEmojiKeydown(e,t){this.disabled()||this.readonly()||(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.selectEmoji(t))}isEmojiSelected(e){return e===this.currentEmojiValue()}clampAndRoundValue(e){let t=Math.max(1,this.max()),n=this.step(),r=Math.round(Math.min(Math.max(e,0),t)/n)*n;return Number(Math.min(r,t).toFixed(2))}static propDecorators={mode:[{type:s,args:[{isSignal:!0,alias:`mode`,required:!1,transform:void 0}]}],max:[{type:s,args:[{isSignal:!0,alias:`max`,required:!1,transform:void 0}]}],step:[{type:s,args:[{isSignal:!0,alias:`step`,required:!1,transform:void 0}]}],emojis:[{type:s,args:[{isSignal:!0,alias:`emojis`,required:!1,transform:void 0}]}]}},S=o([c({selector:`lib-rating`,template:g,host:{class:`lib-rating`,"[class.lib-rating--disabled]":`disabled()`,"[class.lib-rating--readonly]":`readonly()`,"[attr.aria-disabled]":`disabled()`},styles:[v]})],S)})),w=e((()=>{C(),x()})),T,E,D,O,k,A,j,M,N;e((()=>{t(),i(),l(),p(),w(),T=class RatingStarsFormStoryHost{ratingModel=r({rating:3.5});ratingForm=d(this.ratingModel)},T=o([c({selector:`lib-rating-form-story-host`,imports:[S,u],template:`
        <div class="rating-story">
            <section class="rating-story__section">
                <div class="rating-story__header">
                    <span class="rating-story__eyebrow">
                        Signal Form
                    </span>

                    <h2 class="rating-story__title">
                        Stars
                    </h2>

                    <p class="rating-story__description">
                        Rating connecté à un champ Signal Form avec
                        <code>[formField]</code>.
                    </p>
                </div>

                <div class="rating-story__card">
                    <lib-rating
                        mode="stars"
                        [formField]="ratingForm.rating"
                        max="5"
                        label="Votre satisfaction"
                        ariaLabel="Évaluer votre satisfaction"
                    />

                    <div class="rating-story__value">
                        <span>Valeur du formulaire :</span>

                        <strong>
                            {{ ratingModel().rating ?? 'Aucune' }} / 5
                        </strong>
                    </div>
                </div>
            </section>
        </div>
    `})],T),E=class RatingEmojiFormStoryHost{ratingModel=r({satisfaction:`😄`});ratingForm=d(this.ratingModel)},E=o([c({selector:`lib-rating-emoji-form-story-host`,imports:[S,u],template:`
        <div class="rating-story">
            <section class="rating-story__section">
                <div class="rating-story__header">
                    <span class="rating-story__eyebrow">
                        Signal Form
                    </span>

                    <h2 class="rating-story__title">
                        Emojis
                    </h2>

                    <p class="rating-story__description">
                        Rating connecté à un champ Signal Form avec
                        <code>[formField]</code>.
                    </p>
                </div>

                <div class="rating-story__card">
                    <lib-rating
                        mode="emojis"
                        [formField]="ratingForm.satisfaction"
                        label="Votre satisfaction"
                        ariaLabel="Évaluer votre satisfaction"
                    />

                    <div class="rating-story__value">
                        <span>Valeur du formulaire :</span>

                        <strong>
                            {{ ratingModel().satisfaction ?? 'Aucune' }}
                        </strong>
                    </div>
                </div>
            </section>
        </div>
    `})],E),D={title:`Forms/Rating`,component:S,tags:[`autodocs`],decorators:[f({imports:[S,T,E]})],parameters:{layout:`padded`,docs:{description:{component:`
Le composant **Rating** permet à l'utilisateur de sélectionner une
notation selon deux modes :

- **stars** : notation numérique avec des étoiles ;
- **emojis** : notation avec des emojis.

Le composant peut être utilisé :

- directement avec \`[(value)]\` ;
- avec Angular **Signal Forms** via \`[formField]\`.

## Stars

En mode \`stars\`, la valeur est numérique.

Le composant permet également d'utiliser des valeurs décimales,
par exemple \`3.5\` ou \`4.5\`.

\`\`\`html
<lib-rating
    mode="stars"
    [(value)]="rating"
/>
\`\`\`

Exemple avec une valeur décimale :

\`\`\`html
<lib-rating
    mode="stars"
    [(value)]="rating"
/>
\`\`\`

Avec :

\`\`\`ts
rating = 3.5;
\`\`\`

## Emojis

En mode \`emojis\`, la valeur est une chaîne correspondant à l'emoji
sélectionné.

\`\`\`html
<lib-rating
    mode="emojis"
    [(value)]="rating"
/>
\`\`\`

## Signal Forms

Le composant implémente \`FormValueControl\` et peut être connecté
directement à un champ Signal Form avec \`[formField]\`.

\`\`\`html
<lib-rating
    mode="stars"
    [formField]="form.rating"
/>
\`\`\`

Angular utilise \`FormField\` pour connecter un composant custom
implémentant \`FormValueControl\` à un \`FieldTree\`. :contentReference[oaicite:1]{index=1}

## Types de valeurs

| Mode | Type |
|------|------|
| \`stars\` | \`number \\| null\` |
| \`emojis\` | \`string \\| null\` |

En mode stars, les valeurs peuvent être entières ou décimales,
selon la granularité supportée par le composant.
                `}}},argTypes:{mode:{control:`inline-radio`,options:[`stars`,`emojis`],description:`Mode de notation du composant.`,table:{category:`Appearance`,type:{summary:`'stars' | 'emojis'`},defaultValue:{summary:`stars`}}},value:{control:`number`,description:`Valeur sélectionnée. En mode stars, la valeur peut être entière ou décimale. En mode emojis, il s’agit de la valeur de l’emoji sélectionné.`,table:{category:`Value`,type:{summary:`number | string | null`},defaultValue:{summary:`null`}}},max:{control:{type:`number`,min:1,max:10,step:1},description:`Nombre maximum d’étoiles disponibles en mode stars.`,table:{category:`Appearance`,type:{summary:`number`},defaultValue:{summary:`5`}}},emojis:{control:`object`,description:`Liste des emojis disponibles en mode emojis.`,table:{category:`Appearance`,type:{summary:`readonly LibRatingEmoji[]`}}},disabled:{control:`boolean`,description:`Désactive le composant et empêche toute modification.`,table:{category:`State`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},readonly:{control:`boolean`,description:`Affiche la valeur sans permettre sa modification.`,table:{category:`State`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},label:{control:`text`,description:`Label associé au composant.`,table:{category:`Accessibility`,type:{summary:`string`},defaultValue:{summary:``}}},ariaLabel:{control:`text`,description:`Label accessible utilisé par le groupe de notation.`,table:{category:`Accessibility`,type:{summary:`string | null`},defaultValue:{summary:`null`}}},errors:{table:{disable:!0}},invalid:{table:{disable:!0}},touched:{table:{disable:!0}},hint:{table:{disable:!0}},placeholder:{table:{disable:!0}},noErrorMessages:{table:{disable:!0}}},args:{mode:`stars`,value:3.5,max:5,disabled:!1,readonly:!1,label:`Évaluation`,ariaLabel:`Évaluation`}},O={name:`Without Form - Stars`,render:e=>({props:{...e},template:`
            <div class="rating-story">
                <section class="rating-story__section">

                    <div class="rating-story__header">
                        <span class="rating-story__eyebrow">
                            Without Form
                        </span>

                        <h2 class="rating-story__title">
                            Stars
                        </h2>

                        <p class="rating-story__description">
                            Utilisation directe du composant avec
                            <code>[(value)]</code>.
                        </p>
                    </div>

                    <div class="rating-story__card">

                        <lib-rating
                            mode="stars"
                            [(value)]="value"
                            [max]="max"
                            [disabled]="disabled"
                            [readonly]="readonly"
                            [label]="label"
                            [ariaLabel]="ariaLabel"
                        />

                        <div class="rating-story__value">
                            <span>
                                Valeur sélectionnée :
                            </span>

                            <strong>
                                {{ value ?? 'Aucune' }} / {{ max }}
                            </strong>
                        </div>

                        <div class="rating-story__hint">
                            Exemple de valeur décimale :
                            <strong>3.5</strong> ou <strong>4.5</strong>.
                        </div>

                    </div>

                </section>
            </div>
        `}),args:{mode:`stars`,value:3.5,max:5,disabled:!1,readonly:!1,label:`Évaluation`,ariaLabel:`Évaluation`},parameters:{docs:{description:{story:`
Utilisation du Rating en mode **stars**, sans formulaire.

La valeur est contrôlée directement avec :

\`[(value)]="value"\`

La valeur est de type :

\`number | null\`

Cette story utilise volontairement une valeur décimale :

\`3.5\`

afin de vérifier le rendu des demi-étoiles.
                `}}}},k={name:`Without Form - Emojis`,render:()=>({props:{emojiValue:`😊`},template:`
            <div class="rating-story">
                <section class="rating-story__section">

                    <div class="rating-story__header">
                        <span class="rating-story__eyebrow">
                            Without Form
                        </span>

                        <h2 class="rating-story__title">
                            Emojis
                        </h2>

                        <p class="rating-story__description">
                            Utilisation directe du composant avec
                            <code>[(value)]</code>.
                        </p>
                    </div>

                    <div class="rating-story__card">

                        <lib-rating
                            mode="emojis"
                            [(value)]="emojiValue"
                            label="Votre satisfaction"
                            ariaLabel="Votre satisfaction"
                        />

                        <div class="rating-story__value">
                            <span>
                                Valeur sélectionnée :
                            </span>

                            <strong>
                                {{ emojiValue ?? 'Aucune' }}
                            </strong>
                        </div>

                    </div>

                </section>
            </div>
        `}),args:{mode:`emojis`},parameters:{docs:{description:{story:`
Utilisation du Rating en mode **emojis**, sans formulaire.

La valeur est contrôlée directement avec :

\`[(value)]="emojiValue"\`

La valeur retournée est de type :

\`string | null\`
                `}}}},A={name:`With Form - Stars`,render:()=>({template:`
            <lib-rating-form-story-host />
        `}),parameters:{docs:{description:{story:`
Utilisation du Rating en mode **stars** avec Angular Signal Forms.

Le composant est connecté au champ :

\`[formField]="ratingForm.rating"\`

La valeur initiale est volontairement définie à :

\`3.5\`

Le composant communique donc directement avec le
\`FieldTree\` du Signal Form.

Signal Forms utilise un modèle basé sur un \`WritableSignal\`
et la fonction \`form()\` pour créer le \`FieldTree\`. :contentReference[oaicite:2]{index=2}
                `}}}},j={name:`With Form - Emojis`,render:()=>({template:`
            <lib-rating-emoji-form-story-host />
        `}),parameters:{docs:{description:{story:`
Utilisation du Rating en mode **emojis** avec Angular Signal Forms.

Le composant est connecté au champ :

\`[formField]="ratingForm.satisfaction"\`

La valeur du champ est de type :

\`string | null\`

Le composant custom est ainsi directement connecté au
Signal Form grâce à \`FormValueControl\`.
                `}}}},M={name:`Disabled`,render:()=>({template:`
            <div class="rating-story">

                <section class="rating-story__section">

                    <div class="rating-story__header">

                        <span class="rating-story__eyebrow">
                            State
                        </span>

                        <h2 class="rating-story__title">
                            Disabled
                        </h2>

                        <p class="rating-story__description">
                            Le composant est désactivé et ne peut
                            pas être modifié.
                        </p>

                    </div>

                    <div class="rating-story__grid">

                        <div class="rating-story__card">

                            <div class="rating-story__card-title">
                                Stars
                            </div>

                            <lib-rating
                                mode="stars"
                                [value]="3.5"
                                [max]="5"
                                [disabled]="true"
                                label="Évaluation"
                                ariaLabel="Évaluation désactivée"
                            />

                            <div class="rating-story__value">
                                <span>Valeur :</span>

                                <strong>
                                    3.5 / 5
                                </strong>
                            </div>

                        </div>

                        <div class="rating-story__card">

                            <div class="rating-story__card-title">
                                Emojis
                            </div>

                            <lib-rating
                                mode="emojis"
                                [value]="'😊'"
                                [disabled]="true"
                                label="Votre satisfaction"
                                ariaLabel="Votre satisfaction désactivée"
                            />

                            <div class="rating-story__value">
                                <span>Valeur :</span>

                                <strong>
                                    😊
                                </strong>
                            </div>

                        </div>

                    </div>

                </section>

            </div>
        `}),args:{disabled:!0},parameters:{docs:{description:{story:`
Démontre l'état **disabled** du composant dans les deux modes :

- stars ;
- emojis.

En mode stars, une valeur décimale de **3.5** est utilisée afin de
vérifier que l'état disabled conserve correctement le rendu de la
demi-étoile.

Lorsque \`disabled\` est à \`true\`, l'utilisateur ne peut plus
modifier la valeur.
                `}}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Without Form - Stars',
  render: args => ({
    props: {
      ...args
    },
    template: \`
            <div class="rating-story">
                <section class="rating-story__section">

                    <div class="rating-story__header">
                        <span class="rating-story__eyebrow">
                            Without Form
                        </span>

                        <h2 class="rating-story__title">
                            Stars
                        </h2>

                        <p class="rating-story__description">
                            Utilisation directe du composant avec
                            <code>[(value)]</code>.
                        </p>
                    </div>

                    <div class="rating-story__card">

                        <lib-rating
                            mode="stars"
                            [(value)]="value"
                            [max]="max"
                            [disabled]="disabled"
                            [readonly]="readonly"
                            [label]="label"
                            [ariaLabel]="ariaLabel"
                        />

                        <div class="rating-story__value">
                            <span>
                                Valeur sélectionnée :
                            </span>

                            <strong>
                                {{ value ?? 'Aucune' }} / {{ max }}
                            </strong>
                        </div>

                        <div class="rating-story__hint">
                            Exemple de valeur décimale :
                            <strong>3.5</strong> ou <strong>4.5</strong>.
                        </div>

                    </div>

                </section>
            </div>
        \`
  }),
  args: {
    mode: 'stars',
    value: 3.5,
    max: 5,
    disabled: false,
    readonly: false,
    label: 'Évaluation',
    ariaLabel: 'Évaluation'
  },
  parameters: {
    docs: {
      description: {
        story: \`
Utilisation du Rating en mode **stars**, sans formulaire.

La valeur est contrôlée directement avec :

\\\`[(value)]="value"\\\`

La valeur est de type :

\\\`number | null\\\`

Cette story utilise volontairement une valeur décimale :

\\\`3.5\\\`

afin de vérifier le rendu des demi-étoiles.
                \`
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Without Form - Emojis',
  render: () => ({
    props: {
      emojiValue: '😊'
    },
    template: \`
            <div class="rating-story">
                <section class="rating-story__section">

                    <div class="rating-story__header">
                        <span class="rating-story__eyebrow">
                            Without Form
                        </span>

                        <h2 class="rating-story__title">
                            Emojis
                        </h2>

                        <p class="rating-story__description">
                            Utilisation directe du composant avec
                            <code>[(value)]</code>.
                        </p>
                    </div>

                    <div class="rating-story__card">

                        <lib-rating
                            mode="emojis"
                            [(value)]="emojiValue"
                            label="Votre satisfaction"
                            ariaLabel="Votre satisfaction"
                        />

                        <div class="rating-story__value">
                            <span>
                                Valeur sélectionnée :
                            </span>

                            <strong>
                                {{ emojiValue ?? 'Aucune' }}
                            </strong>
                        </div>

                    </div>

                </section>
            </div>
        \`
  }),
  args: {
    mode: 'emojis'
  },
  parameters: {
    docs: {
      description: {
        story: \`
Utilisation du Rating en mode **emojis**, sans formulaire.

La valeur est contrôlée directement avec :

\\\`[(value)]="emojiValue"\\\`

La valeur retournée est de type :

\\\`string | null\\\`
                \`
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'With Form - Stars',
  render: () => ({
    template: \`
            <lib-rating-form-story-host />
        \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Utilisation du Rating en mode **stars** avec Angular Signal Forms.

Le composant est connecté au champ :

\\\`[formField]="ratingForm.rating"\\\`

La valeur initiale est volontairement définie à :

\\\`3.5\\\`

Le composant communique donc directement avec le
\\\`FieldTree\\\` du Signal Form.

Signal Forms utilise un modèle basé sur un \\\`WritableSignal\\\`
et la fonction \\\`form()\\\` pour créer le \\\`FieldTree\\\`. :contentReference[oaicite:2]{index=2}
                \`
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'With Form - Emojis',
  render: () => ({
    template: \`
            <lib-rating-emoji-form-story-host />
        \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Utilisation du Rating en mode **emojis** avec Angular Signal Forms.

Le composant est connecté au champ :

\\\`[formField]="ratingForm.satisfaction"\\\`

La valeur du champ est de type :

\\\`string | null\\\`

Le composant custom est ainsi directement connecté au
Signal Form grâce à \\\`FormValueControl\\\`.
                \`
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => ({
    template: \`
            <div class="rating-story">

                <section class="rating-story__section">

                    <div class="rating-story__header">

                        <span class="rating-story__eyebrow">
                            State
                        </span>

                        <h2 class="rating-story__title">
                            Disabled
                        </h2>

                        <p class="rating-story__description">
                            Le composant est désactivé et ne peut
                            pas être modifié.
                        </p>

                    </div>

                    <div class="rating-story__grid">

                        <div class="rating-story__card">

                            <div class="rating-story__card-title">
                                Stars
                            </div>

                            <lib-rating
                                mode="stars"
                                [value]="3.5"
                                [max]="5"
                                [disabled]="true"
                                label="Évaluation"
                                ariaLabel="Évaluation désactivée"
                            />

                            <div class="rating-story__value">
                                <span>Valeur :</span>

                                <strong>
                                    3.5 / 5
                                </strong>
                            </div>

                        </div>

                        <div class="rating-story__card">

                            <div class="rating-story__card-title">
                                Emojis
                            </div>

                            <lib-rating
                                mode="emojis"
                                [value]="'😊'"
                                [disabled]="true"
                                label="Votre satisfaction"
                                ariaLabel="Votre satisfaction désactivée"
                            />

                            <div class="rating-story__value">
                                <span>Valeur :</span>

                                <strong>
                                    😊
                                </strong>
                            </div>

                        </div>

                    </div>

                </section>

            </div>
        \`
  }),
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Démontre l'état **disabled** du composant dans les deux modes :

- stars ;
- emojis.

En mode stars, une valeur décimale de **3.5** est utilisée afin de
vérifier que l'état disabled conserve correctement le rendu de la
demi-étoile.

Lorsque \\\`disabled\\\` est à \\\`true\\\`, l'utilisateur ne peut plus
modifier la valeur.
                \`
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N=[`WithoutFormStars`,`WithoutFormEmojis`,`WithFormStars`,`WithFormEmojis`,`Disabled`]}))();export{M as Disabled,j as WithFormEmojis,A as WithFormStars,k as WithoutFormEmojis,O as WithoutFormStars,N as __namedExportsOrder,D as default};