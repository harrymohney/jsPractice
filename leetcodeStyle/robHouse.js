function rob(nums) {
  let prev1 = 0, prev2 = 0;
  for (let num of nums) {
      const temp = Math.max(prev1, prev2 + num);
      prev2 = prev1;
      prev1 = temp;
  }
  return prev1;
}
// Test
console.log(rob([1, 2, 3, 1])); // Output: 4
