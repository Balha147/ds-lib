import { SearchOptions, SearchResult, SearchStrategy } from './ai-search.types';

export interface FuzzySearchStrategyOptions extends SearchOptions {
    readonly normalize?: (value: string) => string;
}

export class FuzzySearchStrategy<T extends { readonly label: string }>
    implements SearchStrategy<T> {
    private readonly normalize: (value: string) => string;

    constructor(private readonly defaultOptions: FuzzySearchStrategyOptions = {}) {
        this.normalize = defaultOptions.normalize ?? FuzzySearchStrategy.defaultNormalize;
    }

    search(query: string, items: readonly T[], options: SearchOptions = {}): readonly SearchResult<T>[] {
        const normalizedQuery = this.normalize(query);

        if (!normalizedQuery) {
            return items.map(item => ({ item, score: 1, distance: 0 }));
        }

        const { maxDistance, minSimilarity = 0.55, prioritizeSubstring = true } = {
            ...this.defaultOptions,
            ...options,
        };

        const effectiveMaxDistance = maxDistance ?? this.getDefaultMaxDistance(normalizedQuery.length);

        return items
            .map(item => {
                const normalizedLabel = this.normalize(item.label);
                const isSubstring = normalizedLabel.includes(normalizedQuery);

                const distance = isSubstring
                    ? 0
                    : FuzzySearchStrategy.levenshtein(normalizedQuery, normalizedLabel);

                const score = isSubstring
                    ? this.getSubstringScore(normalizedQuery, normalizedLabel)
                    : this.getSimilarity(normalizedQuery, normalizedLabel, distance);

                return { item, score, distance, isSubstring };
            })
            .filter(result => {
                if (result.isSubstring) return true;
                return result.distance <= effectiveMaxDistance && result.score >= minSimilarity;
            })
            .sort((a, b) => {
                if (prioritizeSubstring) {
                    if (a.isSubstring && !b.isSubstring) return -1;
                    if (!a.isSubstring && b.isSubstring) return 1;
                }
                if (a.score !== b.score) return b.score - a.score;
                return a.distance - b.distance;
            })
            .map(({ item, score, distance }) => ({ item, score, distance }));
    }

    static levenshtein(a: string, b: string): number {
        if (a === b) return 0;
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
        if (a.length > b.length) [a, b] = [b, a];

        let previous = Array.from({ length: a.length + 1 }, (_, index) => index);
        let current = new Array<number>(a.length + 1);

        for (let row = 1; row <= b.length; row++) {
            current[0] = row;
            for (let column = 1; column <= a.length; column++) {
                const insertion = current[column - 1] + 1;
                const deletion = previous[column] + 1;
                const substitution = previous[column - 1] + (a[column - 1] === b[row - 1] ? 0 : 1);
                current[column] = Math.min(insertion, deletion, substitution);
            }
            [previous, current] = [current, previous];
        }

        return previous[a.length];
    }

    private static defaultNormalize(value: string): string {
        return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLocaleLowerCase();
    }

    private getSubstringScore(query: string, label: string): number {
        const startsWith = label.startsWith(query);
        const lengthRatio = query.length / label.length;
        return startsWith ? 0.9 + lengthRatio * 0.1 : 0.6 + lengthRatio * 0.2;
    }

    private getSimilarity(query: string, label: string, distance: number): number {
        const maxLength = Math.max(query.length, label.length);
        if (maxLength === 0) return 1;
        return 1 - distance / maxLength;
    }

    private getDefaultMaxDistance(queryLength: number): number {
        if (queryLength <= 3) return 1;
        if (queryLength <= 5) return 2;
        if (queryLength <= 8) return 3;
        return Math.max(3, Math.floor(queryLength * 0.35));
    }
}