function moveZeroes(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          [nums[index], nums[i]] = [nums[i], nums[index]];
          index++;
      }
  }
}
// Test
const nums3 = [0, 1, 0, 3, 12];
moveZeroes(nums3);
console.log(nums3); // Output: [1, 3, 12, 0, 0]
