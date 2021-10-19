function searchTriplet(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let diff = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let targetDiff = targetSum - arr[i] - arr[left] - arr[right];
      if (targetDiff === 0) {
        return targetSum - targetDiff;
      }

      if (Math.abs(targetDiff) < Math.abs(diff)) {
        diff = targetDiff;
      }

      if (
        Math.abs(targetDiff) < Math.abs(diff) ||
        (Math.abs(targetDiff) === Math.abs(diff) && targetDiff > diff)
      ) {
        diff = targetDiff;
      }

      if (targetDiff > 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return targetSum - diff
}
