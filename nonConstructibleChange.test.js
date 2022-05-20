const { nonConstructibleChange } = require('./nonConstructibleChange')

describe('nonConstructibleChange', () => {
    test('nonConstructibleChange', ()=> {
        const input = [5, 7, 1, 1, 2, 3, 22];
        const expected = 20;
        expect(nonConstructibleChange(input)).toEqual(expected);
    })
})