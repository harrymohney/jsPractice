function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return i + 1;
}
// Test
const nums = [1, 1, 2];
const length = removeDuplicates(nums);
console.log(nums.slice(0, length)); // Output: [1, 2]
