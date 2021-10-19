function makeSquares(arr) {
  const length = arr.length
  const sortedArr = Array(length).fill(0)
  highest = length-1
  start = 0
  end = length - 1

  while (start <= end) {
    let leftSqr = arr[start]**2
    let rightSqr = arr[end]**2
    if (leftSqr > rightSqr) {
      sortedArr[highest] = leftSqr
      start++;
    } else {
      sortedArr[highest] = rightSqr
      end--;
    }

    highest--;
  }

  return sortedArr
}

console.log(`Squares: ${makeSquares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${makeSquares([-3, -1, 0, 1, 2])}`);