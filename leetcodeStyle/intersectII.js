function intersect(nums1, nums2) {
  const count = {};
  nums1.forEach(num => count[num] = (count[num] || 0) + 1);
  const result = [];
  nums2.forEach(num => {
      if (count[num] > 0) {
          result.push(num);
          count[num]--;
      }
  });
  return result;
}
// Test
console.log(intersect([1,2,2,1], [2,2])); // Output: [2, 2]
