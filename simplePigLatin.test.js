const { simplePigLatin } = require('./simplePigLatin');

describe('Should return first letter to the end and added ay', () => {
    test('should return first letter to the end', () => {
        expect(simplePigLatin('Pig latin is cool')).toBe('igPay atinlay siay oolcay')
    })
})