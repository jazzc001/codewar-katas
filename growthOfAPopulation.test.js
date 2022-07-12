const {nbYear} = require('./growthOfAPopulation')

describe('Growth of A Population', () => {
    test('Should grow with expected amount', () => {
        expect(nbYear(1500, 5, 100, 5000)).toBe(15);
    })
})