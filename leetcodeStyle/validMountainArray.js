function validMountainArray(arr) {
  if (arr.length < 3) return false;
  let i = 0, j = arr.length - 1;
  while (i < arr.length - 1 && arr[i] < arr[i + 1]) {
      i++;
  }
  while (j > 0 && arr[j] < arr[j - 1]) {
      j--;
  }
  return i > 0 && j < arr.length - 1 && i === j;
}
