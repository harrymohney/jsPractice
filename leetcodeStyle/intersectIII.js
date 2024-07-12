function intersect(nums1, nums2) {
  const map = {};
  for (const num of nums1) map[num] = (map[num] || 0) + 1;
  const result = [];
  for (const num of nums2) {
      if (map[num]) {
          result.push(num);
          map[num]--;
      }
  }
  return result;
}
// Test
console.log(intersect([1,2,2,1], [2,2])); // Output: [2,2]
