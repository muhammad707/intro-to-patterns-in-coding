// Sliding window - it tracks all subarray sum. It doesn't recalculate when window slides. 
// Instead it subtracts first element of current subarray and adds next element

function findAverageOfSubarrays(k, arr) {
  const result = [];
  let sum = 0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (i >= k-1) {
      result.push(sum/k)
      sum -= arr[start]
      start++;
    }
  }
  return result
}

module.exports = findAverageOfSubarrays;