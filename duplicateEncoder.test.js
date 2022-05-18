const {duplicateEncode} = require('./duplicateEncoder')

describe('Duplicate Encoder', () => {
    test('Testing for fixed tests', () => {
        expect(duplicateEncode('din')).toBe("(((");
        expect(duplicateEncode('recede')).toBe("()()()");
        expect(duplicateEncode('Success')).toBe(")())())");
        expect(duplicateEncode('(( @')).toBe("))((");
    })
})