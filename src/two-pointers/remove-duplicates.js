function removeDuplicates(arr, key) {
  let nextNonDuplicate = 1;
  i = 0;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i]
      nextNonDuplicate++;
    }
    i++;
  }

  return nextNonDuplicate;
}