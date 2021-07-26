const longestSubarrayWithOnesAfterReplacement = require('../../src/sliding-window/longest-subarray-after-replacement')

describe('Sliding window', function() {
  it('Longest subarray with ones after replacement', () => {
    expect(longestSubarrayWithOnesAfterReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)).toEqual(6)
    expect(longestSubarrayWithOnesAfterReplacement([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)).toEqual(9)
  })
})