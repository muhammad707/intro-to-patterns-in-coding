const permutationInString = require('../../src/sliding-window/permutation-in-string')

xdescribe('Sliding window challenge 1', () => {
  it('Permutation in a string', () => {
    expect(permutationInString("oidbcaf", "abc")).toEqual(true)
    expect(permutationInString("odicf", "dc")).toEqual(false)
    expect(permutationInString("bcdxabcdy", "bcdyabcdx")).toEqual(true)
  })
})