const { isPalindromeIgnoreCase, getLongestPalindromicSubstring } = require('./palindrome');

describe("Palindrome ignore case function", () => {
    test('Passed value should be a palindrome', () => {
        expect(isPalindromeIgnoreCase("ALla")).toBeTruthy()
    });

    test('Passed value should not be a palindrome', () => {
        expect(isPalindromeIgnoreCase("nikita")).toBeFalsy()
    });
})

describe("The longest palindrome substring function", () => {
    const getErrorMessage = (value) => `Invalid argument: ${value}`;

    test('Should return a palindrome substring with maximum length', () => {
        const testData = '998899!madam,asap?mom.';
        const expectedResult = { value: '998899', index: 0 }
        expect(getLongestPalindromicSubstring(testData)).toEqual(expectedResult);
    });

    test('Should throw an error with #null value', () => {
        const passedValue = null;
        expect(() => getLongestPalindromicSubstring(null)).toThrow(getErrorMessage(passedValue));
    });

    test('Should throw an error with #number value', () => {
        const passedValue = 928292;
        expect(() => getLongestPalindromicSubstring(passedValue)).toThrow(getErrorMessage(passedValue));
    });

    test('Should throw an error with #undefined value', () => {
        const passedValue = undefined;
        expect(() => getLongestPalindromicSubstring(passedValue)).toThrow(getErrorMessage(passedValue));
    });
})
