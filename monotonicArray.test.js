const { monotonicArray } = require('./monotonicArray')

describe('monotonicArray', () => {
    test('should', () => {
        const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
        const expected = true;
        expect(monotonicArray(array)).toEqual(expected);
    })
})