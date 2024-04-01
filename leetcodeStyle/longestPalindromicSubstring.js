function longestPalindrome(s) {
  let maxLength = 0, start = 0;
  for (let i = 0; i < s.length; i++) {
      const len1 = expandAroundCenter(s, i, i);
      const len2 = expandAroundCenter(s, i, i + 1);
      const len = Math.max(len1, len2);
      if (len > maxLength) {
          maxLength = len;
          start = i - Math.floor((len - 1) / 2);
      }
  }
  return s.substring(start, start + maxLength);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
  }
  return right - left - 1;
}