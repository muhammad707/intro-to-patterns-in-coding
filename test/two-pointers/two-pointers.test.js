const pairWithTargetSum = require('../../src/two-pointers/pair-equal-sum')

describe('Two pointers', () => {
  it('pair with target sum', () => {
    expect(pairWithTargetSum([1,2,3,4,6], 6)).toEqual([1,3])
    expect(pairWithTargetSum([2,5,9,11], 11)).toEqual([0,2])
  })
})