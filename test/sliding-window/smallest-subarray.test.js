const smallestSubArrayWithGivenSum = require('../../src/sliding-window/smallest-subarray')

xdescribe('Sliding window', function() {
  it(' Find smallest subarray length with given number', () => {
    expect(smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 3, 2])).toEqual(2)
    expect(smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 8])).toEqual(1)
    expect(smallestSubArrayWithGivenSum(8, [3, 4, 1, 1, 6])).toEqual(3)
  })
})