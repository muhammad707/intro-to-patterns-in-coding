function longestSubarrayWithOnesAfterReplacement(arr, k) {
  let max = 0;
  let maxFreqCount = 0;
  let freq = {
    0: 0,
    1: 0
  };
  let start = 0
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] += 1
    maxFreqCount = Math.max(maxFreqCount, freq[arr[i]])

    if(i - start - maxFreqCount + 1 > k) {
      let leftBit = arr[start]
      freq[leftBit] -= 1
      start++
    }
    max = Math.max(max, i - start + 1)
  }

  return max
}

module.exports = longestSubarrayWithOnesAfterReplacement;