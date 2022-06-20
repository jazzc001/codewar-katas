const { validate } = require('./regexPasswordValidation');

describe('passwordValidation', () => {
    test('should validate', () => {
        expect(validate('djI38D55')).toBe(true);
    })
})