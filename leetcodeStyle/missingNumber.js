function missingNumber(nums) {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
  return totalSum - actualSum;
}
// Test
console.log(missingNumber([3, 0, 1])); // Output: 2
