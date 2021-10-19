const findAverageOfSubarrays = require('../../src/sliding-window/contiguous-subarrays')

xdescribe('Sliding window', function() {
  it(' Find average of contiguous subarrays', () => {
    expect(findAverageOfSubarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])).toEqual([2.2, 2.8, 2.4, 3.6, 2.8])
  })
})