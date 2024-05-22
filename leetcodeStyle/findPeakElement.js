function findPeakElement(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[mid + 1]) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }
  return left;
}
// Test
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 5
