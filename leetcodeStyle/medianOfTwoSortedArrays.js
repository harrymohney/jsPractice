function findMedianSortedArrays(nums1, nums2) {
  const merged = mergeSortedArrays(nums1, nums2);
  const n = merged.length;
  if (n % 2 === 0) {
      return (merged[Math.floor(n / 2) - 1] + merged[Math.floor(n / 2)]) / 2;
  } else {
      return merged[Math.floor(n / 2)];
  }
}

function mergeSortedArrays(nums1, nums2) {
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
