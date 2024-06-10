function findLHS(nums) {
  const count = {};
  let maxLength = 0;
  for (const num of nums) {
      count[num] = (count[num] || 0) + 1;
  }
  for (const num in count) {
      if (count[+num + 1]) {
          maxLength = Math.max(maxLength, count[num] + count[+num + 1]);
      }
  }
  return maxLength;
}
// Test
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // Output: 5

