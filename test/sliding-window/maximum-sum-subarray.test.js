const maximumSumOfSubarray = require("../../src/sliding-window/maximum-sum-subarray");

xdescribe("Sliding window", function () {
  it("Find the maximum subarray sum", () => {
    expect(maximumSumOfSubarray(3, [2, 1, 5, 1, 3, 2])).toEqual(9);
  });
});
