export interface SearchOptions {
    /**
     * Maximum allowed Levenshtein distance.
     *
     * When omitted, the strategy computes a threshold
     * according to the query length.
     */
    readonly maxDistance?: number;

    /**
     * Minimum similarity score between 0 and 1.
     */
    readonly minSimilarity?: number;

    /**
     * Substring matches are ranked before fuzzy matches.
     *
     * Default: true.
     */
    readonly prioritizeSubstring?: boolean;
}

export interface SearchResult<T> {
    readonly item: T;
    readonly score: number;
    readonly distance: number;
}

export interface SearchStrategy<T> {
    search(
        query: string,
        items: readonly T[],
        options?: SearchOptions,
    ): readonly SearchResult<T>[];
}