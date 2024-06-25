function findUnsortedSubarray(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  let start = nums.length, end = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== sorted[i]) {
          start = Math.min(start, i);
          end = Math.max(end, i);
      }
  }
  return end >= start ? end - start + 1 : 0;
}
// Test
console.log(findUnsortedSubarray([2,6,4,8,10,9,15])); // Output: 5
console.log(findUnsortedSubarray([1,2,3,4])); // Output: 0
