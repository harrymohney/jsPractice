function sumOfUnique(nums) {
  const count = {};
  for (const num of nums) {
      count[num] = (count[num] || 0) + 1;
  }
  return Object.keys(count).reduce((sum, num) => count[num] === 1 ? sum + parseInt(num) : sum, 0);
}
// Test
console.log(sumOfUnique([1,2,3,2])); // Output: 4
console.log(sumOfUnique([1,1,1,1,1])); // Output: 0
