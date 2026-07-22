import { Component, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';

import { Rating } from '@ds-design-system/ui-components/rating';

@Component({
    selector: 'lib-rating-form-story-host',
    imports: [Rating, FormField],
    template: `
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
    `,
})
class RatingStarsFormStoryHost {
    readonly ratingModel = signal<{
        rating: number | null;
    }>({
        rating: 3.5,
    });

    readonly ratingForm = form(this.ratingModel);
}

@Component({
    selector: 'lib-rating-emoji-form-story-host',
    imports: [Rating, FormField],
    template: `
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
    `,
})
class RatingEmojiFormStoryHost {
    readonly ratingModel = signal<{
        satisfaction: string | null;
    }>({
        satisfaction: '😄',
    });

    readonly ratingForm = form(this.ratingModel);
}

const meta: Meta<Rating> = {
    title: 'Forms/Rating',
    component: Rating,

    tags: ['autodocs'],

    decorators: [
        moduleMetadata({
            imports: [
                Rating,
                RatingStarsFormStoryHost,
                RatingEmojiFormStoryHost,
            ],
        }),
    ],

    parameters: {
        layout: 'padded',

        docs: {
            description: {
                component: `
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
                `,
            },
        },
    },

    argTypes: {
        mode: {
            control: 'inline-radio',
            options: ['stars', 'emojis'],

            description:
                'Mode de notation du composant.',

            table: {
                category: 'Appearance',

                type: {
                    summary: "'stars' | 'emojis'",
                },

                defaultValue: {
                    summary: 'stars',
                },
            },
        },

        value: {
            control: 'number',

            description:
                'Valeur sélectionnée. En mode stars, la valeur peut être entière ou décimale. En mode emojis, il s’agit de la valeur de l’emoji sélectionné.',

            table: {
                category: 'Value',

                type: {
                    summary: 'number | string | null',
                },

                defaultValue: {
                    summary: 'null',
                },
            },
        },

        max: {
            control: {
                type: 'number',
                min: 1,
                max: 10,
                step: 1,
            },

            description:
                'Nombre maximum d’étoiles disponibles en mode stars.',

            table: {
                category: 'Appearance',

                type: {
                    summary: 'number',
                },

                defaultValue: {
                    summary: '5',
                },
            },
        },

        emojis: {
            control: 'object',

            description:
                'Liste des emojis disponibles en mode emojis.',

            table: {
                category: 'Appearance',

                type: {
                    summary: 'readonly LibRatingEmoji[]',
                },
            },
        },

        disabled: {
            control: 'boolean',

            description:
                'Désactive le composant et empêche toute modification.',

            table: {
                category: 'State',

                type: {
                    summary: 'boolean',
                },

                defaultValue: {
                    summary: 'false',
                },
            },
        },

        readonly: {
            control: 'boolean',

            description:
                'Affiche la valeur sans permettre sa modification.',

            table: {
                category: 'State',

                type: {
                    summary: 'boolean',
                },

                defaultValue: {
                    summary: 'false',
                },
            },
        },

        label: {
            control: 'text',

            description:
                'Label associé au composant.',

            table: {
                category: 'Accessibility',

                type: {
                    summary: 'string',
                },

                defaultValue: {
                    summary: '',
                },
            },
        },

        ariaLabel: {
            control: 'text',

            description:
                'Label accessible utilisé par le groupe de notation.',

            table: {
                category: 'Accessibility',

                type: {
                    summary: 'string | null',
                },

                defaultValue: {
                    summary: 'null',
                },
            },
        },

        errors: {
            table: {
                disable: true,
            },
        },

        invalid: {
            table: {
                disable: true,
            },
        },

        touched: {
            table: {
                disable: true,
            },
        },

        hint: {
            table: {
                disable: true,
            },
        },

        placeholder: {
            table: {
                disable: true,
            },
        },

        noErrorMessages: {
            table: {
                disable: true,
            },
        },
    },

    args: {
        mode: 'stars',
        value: 3.5,
        max: 5,
        disabled: false,
        readonly: false,
        label: 'Évaluation',
        ariaLabel: 'Évaluation',
    },
};

export default meta;

type Story = StoryObj<Rating>;

/* ==========================================================================
   WITHOUT FORM - STARS
   ========================================================================== */

export const WithoutFormStars: Story = {
    name: 'Without Form - Stars',

    render: (args) => ({
        props: {
            ...args,
        },

        template: `
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
        `,
    }),

    args: {
        mode: 'stars',
        value: 3.5,
        max: 5,
        disabled: false,
        readonly: false,
        label: 'Évaluation',
        ariaLabel: 'Évaluation',
    },

    parameters: {
        docs: {
            description: {
                story: `
Utilisation du Rating en mode **stars**, sans formulaire.

La valeur est contrôlée directement avec :

\`[(value)]="value"\`

La valeur est de type :

\`number | null\`

Cette story utilise volontairement une valeur décimale :

\`3.5\`

afin de vérifier le rendu des demi-étoiles.
                `,
            },
        },
    },
};

/* ==========================================================================
   WITHOUT FORM - EMOJIS
   ========================================================================== */

export const WithoutFormEmojis: Story = {
    name: 'Without Form - Emojis',

    render: () => ({
        props: {
            emojiValue: '😊',
        },

        template: `
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
        `,
    }),

    args: {
        mode: 'emojis',
    },

    parameters: {
        docs: {
            description: {
                story: `
Utilisation du Rating en mode **emojis**, sans formulaire.

La valeur est contrôlée directement avec :

\`[(value)]="emojiValue"\`

La valeur retournée est de type :

\`string | null\`
                `,
            },
        },
    },
};

/* ==========================================================================
   WITH FORM - STARS
   ========================================================================== */

export const WithFormStars: Story = {
    name: 'With Form - Stars',

    render: () => ({
        template: `
            <lib-rating-form-story-host />
        `,
    }),

    parameters: {
        docs: {
            description: {
                story: `
Utilisation du Rating en mode **stars** avec Angular Signal Forms.

Le composant est connecté au champ :

\`[formField]="ratingForm.rating"\`

La valeur initiale est volontairement définie à :

\`3.5\`

Le composant communique donc directement avec le
\`FieldTree\` du Signal Form.

Signal Forms utilise un modèle basé sur un \`WritableSignal\`
et la fonction \`form()\` pour créer le \`FieldTree\`. :contentReference[oaicite:2]{index=2}
                `,
            },
        },
    },
};

/* ==========================================================================
   WITH FORM - EMOJIS
   ========================================================================== */

export const WithFormEmojis: Story = {
    name: 'With Form - Emojis',

    render: () => ({
        template: `
            <lib-rating-emoji-form-story-host />
        `,
    }),

    parameters: {
        docs: {
            description: {
                story: `
Utilisation du Rating en mode **emojis** avec Angular Signal Forms.

Le composant est connecté au champ :

\`[formField]="ratingForm.satisfaction"\`

La valeur du champ est de type :

\`string | null\`

Le composant custom est ainsi directement connecté au
Signal Form grâce à \`FormValueControl\`.
                `,
            },
        },
    },
};

/* ==========================================================================
   DISABLED
   ========================================================================== */

export const Disabled: Story = {
    name: 'Disabled',

    render: () => ({
        template: `
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
        `,
    }),

    args: {
        disabled: true,
    },

    parameters: {
        docs: {
            description: {
                story: `
Démontre l'état **disabled** du composant dans les deux modes :

- stars ;
- emojis.

En mode stars, une valeur décimale de **3.5** est utilisée afin de
vérifier que l'état disabled conserve correctement le rendu de la
demi-étoile.

Lorsque \`disabled\` est à \`true\`, l'utilisateur ne peut plus
modifier la valeur.
                `,
            },
        },
    },
};