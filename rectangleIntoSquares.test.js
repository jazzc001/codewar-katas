const { sqInRect } = require('./rectangleIntoSquares')

describe('sqInRect', () => {
    test('should', () => {
        expect(sqInRect(5, 3)).toEqual([3, 2, 1, 1])
    })
})