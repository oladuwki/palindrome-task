const DEFAULT_SEPARATORS = [' ', ',', '.', '!', '?', ';', ':'];

/**
 * Check a string is palindrome or not by ignoring its case.
 * @param value: string
 * @return {boolean}
 */
const isPalindromeIgnoreCase = (value) => {
    if (typeof value !== 'string') {
        throw new Error(`Invalid argument: ${value}`);
    }
    let reverseValue = '';
    for (let i = value.length - 1; i >= 0; i--) {
        reverseValue = reverseValue.concat(value[i]);
    }
    return value.toLowerCase() === reverseValue.toLowerCase();
}

const isLastArrayElement = (size, index) => index === size - 1;

/**
 *
 * Get the longest palindrome substring
 *
 * @param value: string - text
 * @param separators - array for separate strings
 * @return {{value: string, index: number}}
 */
const getLongestPalindromicSubstring = (value, separators = DEFAULT_SEPARATORS) => {
    if (typeof value !== 'string') {
        throw new Error(`Invalid argument: ${value}`);
    }
    let result = { value: '', index: 0 };
    let word = '';
    for (let i = 0; i < value.length; i++) {
        const symbol = value[i];
        if (!separators.includes(symbol)) {
            word = word.concat(symbol);
        }
        if (separators.includes(symbol) || isLastArrayElement(value.length, i)) {
            const previousPalindromeLength = result.value.length;
            if (isPalindromeIgnoreCase(word) && word.length > previousPalindromeLength) {
                result = {
                    value: word,
                    index: i - word.length
                }
            }
            word = '';
        }
    }
    return result;
}

module.exports = {
    isPalindromeIgnoreCase,
    getLongestPalindromicSubstring
}

