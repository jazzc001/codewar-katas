const { whereIsMyParent } = require('./whereIsMyParent')

describe('Find Parents', () => {
    test('in alphabetical order', () => {
        expect(whereIsMyParent("beeeEBb")).toBe("BbbEeee");
    })
})