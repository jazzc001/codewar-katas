const { trap } = require('./trappingRainwater')

describe('Rainwater', () => {
    test('should', () => {
        expect(trap([0,1,0,2,1,0,3,1,0,1,2])).toBe(8)
    })
})