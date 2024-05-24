function lengthOfLongestSubstringKDistinct(s, k) {
  const charMap = new Map();
  let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
      charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);
      while (charMap.size > k) {
          charMap.set(s[left], charMap.get(s[left]) - 1);
          if (charMap.get(s[left]) === 0) charMap.delete(s[left]);
          left++;
      }
      maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
// Test
console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // Output: 3
