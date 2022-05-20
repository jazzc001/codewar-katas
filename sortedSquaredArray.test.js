const { sortedSquaredArray } = require('./sortedSquaredArray');

describe('sortedSquaredArray', () =>{
    test('should', () => {
        array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        expect(sortedSquaredArray(array)).toEqual([1, 4, 9, 25, 36, 64, 81])
    })
})