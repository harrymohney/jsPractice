function findDuplicates(nums) {
  const duplicates = [];
  for (const num of nums) {
      const index = Math.abs(num) - 1;
      if (nums[index] < 0) {
          duplicates.push(index + 1);
      }
      nums[index] = -nums[index];
  }
  return duplicates;
}
