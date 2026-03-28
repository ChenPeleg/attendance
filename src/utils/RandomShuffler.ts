/**
 * Utility for shuffling arrays with optional seeded random number generation.
 * Uses the Mulberry32 algorithm for deterministic random sequences.
 */

/**
 * Shuffles an array using a seeded random number generator.
 * If seed is 0, returns the original array without shuffling.
 *
 * Uses Mulberry32 algorithm for deterministic pseudo-random number generation,
 * ensuring the same seed always produces the same shuffle order.
 *
 * @template T The type of array elements
 * @param array The array to shuffle
 * @param seed The random seed (0 = no shuffle, >0 = deterministic shuffle)
 * @returns A new shuffled array (does not modify original)
 *
 * @example
 * ```typescript
 * const items = [1, 2, 3, 4, 5];
 * const shuffled = shuffleWithSeed(items, 42);
 * // Same seed always produces same order
 * const shuffled2 = shuffleWithSeed(items, 42);
 * // shuffled === shuffled2
 * ```
 */
export function shuffleWithSeed<T>(array: T[], seed: number): T[] {
    if (seed === 0) {
        return array;
    }

    // Mulberry32 seeded random number generator
    let currentSeed = seed;
    const random = (): number => {
        let t = currentSeed += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };

    return array
        .map(value => ({
            value,
            sort: random()
        }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

/**
 * Creates a seeded random number generator function.
 *
 * @param seed The random seed
 * @returns A function that generates random numbers between 0 and 1
 *
 * @example
 * ```typescript
 * const random = seededRandom(42);
 * const num1 = random(); // 0.123...
 * const num2 = random(); // 0.456...
 * ```
 */
export function seededRandom(seed: number): () => number {
    let currentSeed = seed;
    return (): number => {
        let t = currentSeed += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
