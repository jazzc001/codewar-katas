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

