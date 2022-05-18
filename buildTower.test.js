const { buildTower }  = require('./buildTower');

describe('builTower', () => {
    test('3 floors tower', () => {
        expect(buildTower(3)).toEqual([
            "  *  ",
            " *** ", 
            "*****"
          ]);
    })

    test('5 floors tower', () => {
        expect(buildTower(3)).toEqual([ '    *    ', '   ***   ', '  *****  ', ' ******* ', '*********' ]);
    })
})

