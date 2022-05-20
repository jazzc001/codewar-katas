const { sortedSquaredArray } = require('./sortedSquaredArray');

describe('sortedSquaredArray', () =>{
    test('should', () => {
        array = [1, 2, 3, 5, 6, 8, 9]
        expect(sortedSquaredArray(array)).toEqual([1, 4, 9, 25, 36, 64, 81])
    })
    test('edge cases', () => {
        array = [10, 5, 0, 5, 10]
        expect(sortedSquaredArray(array)).toEqual([0 ,25, 25, 100, 100])
    })
})