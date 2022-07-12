const {divCon} = require('./DivideAndConquer')

describe('Divide and Conquer', () => {
    test('should return expected value', () => {
        expect(divCon([9, 3, '7', '3'])).toBe(2)
    })

})