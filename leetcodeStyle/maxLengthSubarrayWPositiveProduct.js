function getMaxLen(nums) {
  let maxLength = 0;
  let firstNegativeIndex = -1;
  let zeroIndex = -1;
  let negativeCount = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          firstNegativeIndex = -1;
          zeroIndex = i;
          negativeCount = 0;
      } else {
          if (nums[i] < 0) {
              negativeCount++;
              if (firstNegativeIndex === -1) firstNegativeIndex = i;
          }
          if (negativeCount % 2 === 0) {
              maxLength = Math.max(maxLength, i - zeroIndex);
          } else {
              maxLength = Math.max(maxLength, i - firstNegativeIndex);
          }
      }
  }
  return maxLength;
}
