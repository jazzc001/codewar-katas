const { directionsReduction } = require('./directionsReduction')

describe('Directions', () => {
    test('Minimize the direction ', () => {
        expect(directionsReduction(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toEqual(["WEST"]);
    })
    test('Minimize the direction ', () => {
        expect(directionsReduction(["NORTH", "WEST", "SOUTH", "EAST"])).toEqual(["NORTH", "WEST", "SOUTH", "EAST"]);
    })
    test('Minimize the direction ', () => {
        expect(directionsReduction(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])).toEqual([]);
    })
})