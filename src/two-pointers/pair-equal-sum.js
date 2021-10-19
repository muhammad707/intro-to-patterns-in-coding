function pairWithTargetSum(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if ((arr[start] + arr[end]) === target) {
      return [start, end]
    } else if (arr[start] + arr[end] > target) {
      end--;
    } else {
      start++;
    }
  }
  return [-1,-1]
}
module.exports = pairWithTargetSum;