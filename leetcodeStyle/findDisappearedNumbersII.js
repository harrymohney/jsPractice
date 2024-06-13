function findDisappearedNumbers(nums) {
  const n = nums.length;
  const result = [];
  for (let i = 0; i < n; i++) {
      const val = Math.abs(nums[i]) - 1;
      if (nums[val] > 0) nums[val] = -nums[val];
  }
  for (let i = 0; i < n; i++) {
      if (nums[i] > 0) result.push(i + 1);
  }
  return result;
}
// Test
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // Output: [5, 6]
