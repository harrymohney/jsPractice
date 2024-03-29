function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let left = 0, right = 0, maxLength = 0;
  while (right < s.length) {
      if (!seen.has(s[right])) {
          seen.add(s[right]);
          maxLength = Math.max(maxLength, right - left + 1);
          right++;
      } else {
          seen.delete(s[left]);
          left++;
      }
  }
  return maxLength;
}
