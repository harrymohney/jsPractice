function findMedianSortedArrays(nums1, nums2) {
  const merged = merge(nums1, nums2);
  const n = merged.length;
  if (n % 2 === 0) {
      return (merged[n / 2] + merged[n / 2 - 1]) / 2;
  } else {
      return merged[Math.floor(n / 2)];
  }
}

function merge(nums1, nums2) {
  const merged = [];
  let i = 0, j = 0;
  while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
          merged.push(nums1[i]);
          i++;
      } else {
          merged.push(nums2[j]);
          j++;
      }
  }
  while (i < nums1.length) {
      merged.push(nums1[i]);
      i++;
  }
  while (j < nums2.length) {
      merged.push(nums2[j]);
      j++;
  }
  return merged;
}
