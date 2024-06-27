function findNumbers(nums) {
  return nums.filter(num => String(num).length % 2 === 0).length;
}
// Test
console.log(findNumbers([12,345,2,6,7896])); // Output: 2
