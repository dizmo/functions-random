import "./String";

/**
 * Returns a random string for the provided length and range.
 *
 * @param length of returned string in [0..8]
 * @param range of characters in [2..36]
 *
 * @returns a random string
 */
export function random(length: number = 0, range: number = 36): string {
    return String.random(length, range);
}

export default random;
