function lengthOfLongestSubstringKDistinct(s, k) {
  const map = new Map();
  let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
      map.set(s[right], (map.get(s[right]) || 0) + 1);
      while (map.size > k) {
          map.set(s[left], map.get(s[left]) - 1);
          if (map.get(s[left]) === 0) map.delete(s[left]);
          left++;
      }
      maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
// Test
console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // Output: 3
