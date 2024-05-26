function longestConsecutive(nums) {
  const set = new Set(nums);
  let maxLength = 0;
  for (const num of set) {
      if (!set.has(num - 1)) {
          let currentNum = num;
          let currentStreak = 1;
          while (set.has(currentNum + 1)) {
              currentNum++;
              currentStreak++;
          }
          maxLength = Math.max(maxLength, currentStreak);
      }
  }
  return maxLength;
}
// Test
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
