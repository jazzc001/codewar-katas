const { directionsReduction } = require('./directionsReduction')

describe('Directions', () => {
    test('Minimize the direction ', () => {
        expect(directionsReduction(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toBe(["WEST"]);
    })
})