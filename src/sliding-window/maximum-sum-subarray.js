function maximumSumOfSubarray(k, arr) {
  let max = 0;
  let start = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      max = Math.max(sum, max);
      sum -= arr[start];
      start++;
    }
  }
  return max
}

module.exports = maximumSumOfSubarray;
