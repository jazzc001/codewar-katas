const { validSequence } = require('./validSequence')

describe('validSequence', () => {
    test('validSequence', () => {
        array = [5, 1, 22, 25, 6, -1, 8, 10];
        sequence = [1, 6, -1, 10];
        expect(validSequence(array, sequence)).toBe(true);
    })
})