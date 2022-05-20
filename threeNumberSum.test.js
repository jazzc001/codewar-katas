const { threeNumberSum } = require('./threeNumberSum')

describe('threeNumberSum', () => {
    test('should', () => {
        array = [12, 3, 1, 2, -6, 5, -8, 6]
        target = 0
        expected = [[-8, 2, 6],
        [-8, 3, 5],
        [-6, 1, 5],
        ]
        expect(threeNumberSum(array, target)).toEqual(expected)
    })
})