const { waterContainer } = require('./waterContainer')

describe('waterContainer', () => {
    test('waterContainer', () => {
        height = [1,8,6,2,5,4,8,3,7]
        expect(waterContainer(height)).toEqual(49)
    })
})