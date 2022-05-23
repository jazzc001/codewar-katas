const { moveElementToEnd }  = require('./moveElementToEnd')

describe('moveElementToEnd', () => {
    test('should move', () => {
        const array = [2, 1, 2, 2, 2, 3, 4, 2];
        const toMove = 2;
        const expected = [1, 3, 4, 2, 2, 2, 2, 2]
        expect(moveElementToEnd(array, toMove)).toEqual(expected);
    })
})