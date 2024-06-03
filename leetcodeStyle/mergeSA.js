function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
      if (i >= 0 && nums1[i] > nums2[j]) {
          nums1[k--] = nums1[i--];
      } else {
          nums1[k--] = nums2[j--];
      }
  }
}
// Test
const nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
