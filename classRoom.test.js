const { run } = require('./classRoom');

describe('classRoom', () => {
    test('should return unpaired classmate', () => {
        expect(run([2,3,2])).toBe(3);
    })
})