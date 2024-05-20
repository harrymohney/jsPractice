function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) low = mid + 1;
      else high = mid - 1;
  }
  return -1;
}
// Test
console.log(binarySearch([1, 2, 3, 4, 5], 4)); // Output: 3
