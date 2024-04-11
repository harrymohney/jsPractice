function lengthOfLongestSubstring(s) {
  const charMap = {};
  let maxLength = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
      const char = s[end];
      if (charMap[char] >= start) {
          start = charMap[char] + 1;
      }
      charMap[char] = end;
      maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}
