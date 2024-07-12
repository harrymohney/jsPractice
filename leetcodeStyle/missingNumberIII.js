function missingNumber(nums) {
  let sum = nums.length * (nums.length + 1) / 2;
  for (const num of nums) sum -= num;
  return sum;
}
// Test
console.log(missingNumber([3,0,1])); // Output: 2
