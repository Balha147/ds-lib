let counter = 0;

export function nextStepperId(prefix: string): string {
    return `${prefix}-${++counter}`;
}