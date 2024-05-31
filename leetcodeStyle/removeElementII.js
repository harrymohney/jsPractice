function removeElement(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== val) {
          nums[i] = nums[j];
          i++;
      }
  }
  return i;
}
// Test
const nums2 = [3, 2, 2, 3];
const length2 = removeElement(nums2, 3);
console.log(nums2.slice(0, length2)); // Output: [2, 2]
