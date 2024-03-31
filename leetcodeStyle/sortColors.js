function sortColors(nums) {
  let low = 0, high = nums.length - 1, i = 0;
  while (i <= high) {
      if (nums[i] === 0) {
          swap(nums, i, low);
          low++;
          i++;
      } else if (nums[i] === 2) {
          swap(nums, i, high);
          high--;
      } else {
          i++;
      }
  }
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
