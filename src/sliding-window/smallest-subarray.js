function smallestSubArrayWithGivenSum(s, arr) {
  let windowStart = 0;
  let sum = 0;
  let minLength = Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum >= s) {
      minLength = Math.min(minLength, i - windowStart + 1)
      sum -= arr[windowStart]
      windowStart++;
    }
  }
  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}

module.exports = smallestSubArrayWithGivenSum;