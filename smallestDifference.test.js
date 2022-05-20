const { smallestDifference } = require('./smallestDifference');

describe('smallestDifference', () => {
    test('smallestDifference', () => {
        const arrayOne = [-1, 5, 10, 20, 28, 3];
        const arrayTwo = [26, 134, 135, 15, 17];
        const expected = [28, 26];
        expect(smallestDifference(arrayOne, arrayTwo)).toEqual(expected);
    })
})