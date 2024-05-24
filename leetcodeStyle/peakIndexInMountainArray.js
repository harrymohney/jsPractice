function peakIndexInMountainArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < arr[mid + 1]) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }
  return left;
}
// Test
console.log(peakIndexInMountainArray([0, 1, 0])); // Output: 1
