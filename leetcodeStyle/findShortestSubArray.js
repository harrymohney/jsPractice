function findShortestSubArray(nums) {
  const counts = {}, first = {}, last = {};
  for (let i = 0; i < nums.length; i++) {
      if (first[nums[i]] === undefined) first[nums[i]] = i;
      last[nums[i]] = i;
      counts[nums[i]] = (counts[nums[i]] || 0) + 1;
  }
  const degree = Math.max(...Object.values(counts));
  let minLength = nums.length;
  for (const num in counts) {
      if (counts[num] === degree) {
          minLength = Math.min(minLength, last[num] - first[num] + 1);
      }
  }
  return minLength;
}
// Test
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])); // Output: 6
