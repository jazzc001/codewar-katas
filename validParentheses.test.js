const { validParentheses } = require('./validParentheses');

describe('open and close pair parens', () => {
    test('one pair will be true', () => {

        expect(validParentheses('()')).toBe(true)
    })

    test('multiple pairs will be true', () => {

        expect(validParentheses('()()()()()')).toBe(true)
    })

    test('brackets of pairs will be true', () => {
        expect(validParentheses('((()))(())')).toBe(true)
    })
})

describe('Without closing brackets', () => {
    test('one pair with open paren will be false', () => {
        expect(validParentheses('()(')).toBe(false)
    })

    test('multiple pairs with open paren will be false', () => {
        expect(validParentheses('()()()()(')).toBe(false)
    })

    test('multiple pairs with open paren will be false', () => {
        expect(validParentheses('((()))))()()()(')).toBe(false)
    })
})
