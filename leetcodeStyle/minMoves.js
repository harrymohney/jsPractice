function minMoves(nums) {
  const min = Math.min(...nums);
  return nums.reduce((acc, num) => acc + (num - min), 0);
}
// Test
console.log(minMoves([1,2,3])); // Output: 3
