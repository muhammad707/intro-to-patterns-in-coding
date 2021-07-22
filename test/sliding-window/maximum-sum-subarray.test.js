const maximumSumOfSubarray = require("../../src/sliding-window/maximum-sum-subarray");

describe("Sliding window", function () {
  it(" Find average of contiguous subarrays", () => {
    expect(maximumSumOfSubarray(3, [2, 1, 5, 1, 3, 2])).toEqual(9);
  });
});
