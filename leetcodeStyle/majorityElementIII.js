function majorityElement(nums) {
  let count = 0, candidate = null;
  for (const num of nums) {
      if (count === 0) candidate = num;
      count += (num === candidate) ? 1 : -1;
  }
  return candidate;
}
// Test
console.log(majorityElement([3,2,3])); // Output: 3
