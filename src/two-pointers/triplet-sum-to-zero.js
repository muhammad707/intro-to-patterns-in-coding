function searchPair(arr, targetSum,left, triplets) {
  let right = arr.length - 1
  while (left < right) {
    const current = arr[left] + arr[right]

    if (current === targetSum) {
      triplets.push([-targetSum, arr[left], arr[right]])
      left++;
      right--;
      while (left < right && arr[left] === arr[left-1]) {
        left++;
      }

      while (left < right && arr[right] === arr[right+1]) {
        right--
      }
    } else if (current > targetSum) {
      right--;
    } else {
      left++;
    }
  }
}

function searchTriplets(arr) {
  arr.sort((a,b) => a-b)
  let triplets = []
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i-1]) {
      continue
    }
    searchPair(arr, -arr[i], i+1, triplets)
  }

  return triplets
}

console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(searchTriplets([-5, 2, -1, -2, 3]));