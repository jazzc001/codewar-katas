const { run } = require('./classRoom');

describe('classRoom', () => {
   
    test.concurrent.each`
  expected | input
  ${2}     | ${[1,2,1]}
  ${3}     | ${[2,3,2]}
  ${5}     | ${[4,5,4]}
`('return $expected when student list is $input', async ({ expected, input}) => {
	expect(run(input)).toBe(expected);
})
})