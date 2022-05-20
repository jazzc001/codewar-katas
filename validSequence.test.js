const { validSequence } = require('./validSequenc')

describe('validSequenc', () => {
    test('validSequenc', () => {
        array = [5, 1, 22, 25, 6, -1, 8, 10];
        sequence = [1, 6, -1, 10];
        expect(validSequenc(array, sequence)).toBe(true);
    })
})