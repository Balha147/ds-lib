export type LibRatingMode = 'stars' | 'emojis';

export type LibRatingStarValue = number;

export type LibRatingEmojiValue = string;

export type LibRatingValue =
    | LibRatingStarValue
    | LibRatingEmojiValue;

export interface LibRatingEmoji {
    readonly value: LibRatingEmojiValue;
    readonly label: string;
}

export const LIB_RATING_DEFAULT_EMOJIS: readonly LibRatingEmoji[] = [
    {
        value: '😡',
        label: 'Très mauvais',
    },
    {
        value: '😕',
        label: 'Mauvais',
    },
    {
        value: '😐',
        label: 'Moyen',
    },
    {
        value: '🙂',
        label: 'Bien',
    },
    {
        value: '😍',
        label: 'Excellent',
    },
];