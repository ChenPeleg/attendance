/**
 * Child avatar colours.
 *
 * The colour is derived only from the child's name (never the id), so the same
 * name gets the same colour on every device, after sorting, after a reset and
 * for manually added children.
 *
 * All palette colours have at least 3:1 contrast against bold white text and
 * read well on both the light and dark row backgrounds.
 */
export const CHILD_PALETTE = [
    '#E5484D', '#2F7DE1', '#8E4EC6', '#D9730D', '#0F9488', '#D6409F',
    '#2E9E4F', '#4C5FD5', '#B7791F', '#C2410C', '#0284C7', '#7C3AED',
] as const;

/** djb2 hash over the Unicode code points of the trimmed, NFC-normalised name. */
export function hashName(name: string): number {
    let hash = 5381;
    for (const char of name.trim().normalize('NFC')) {
        hash = ((hash << 5) + hash + (char.codePointAt(0) as number)) >>> 0;
    }
    return hash;
}

export function colorForName(name: string): string {
    return CHILD_PALETTE[hashName(name) % CHILD_PALETTE.length];
}

export function initialOf(name: string): string {
    return [...name.trim()][0] ?? '';
}
