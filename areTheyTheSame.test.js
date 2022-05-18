const { areTheyTheSame } = require('./areTheyTheSame')

describe('True cases', () => {
    test('test', () => {
        a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
        expect(areTheyTheSame(a1, a2)).toBe(true);
    })
})

describe('false cases', () => {
    test('test', () => {
        a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        a2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
        expect(areTheyTheSame(a1, a2)).toBe(false);
    })
})

