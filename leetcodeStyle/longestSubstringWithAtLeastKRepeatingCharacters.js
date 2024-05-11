function longestSubstring(s, k) {
  if (s.length < k) return 0;

  const charCount = new Map();
  for (const char of s) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const [char, count] of charCount) {
      if (count < k) {
          let maxLen = 0;
          for (const substr of s.split(char)) {
              maxLen = Math.max(maxLen, longestSubstring(substr, k));
          }
          return maxLen;
      }
  }

  return s.length;
}
