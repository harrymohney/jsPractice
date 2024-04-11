function minWindow(s, t) {
  const charMap = {};
  for (const char of t) {
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }
  let left = 0, right = 0;
  let minWindow = '';
  let minWindowLength = Infinity;
  let count = Object.keys(charMap).length;
  while (right < s.length) {
      const char = s[right];
      if (charMap[char] !== undefined) {
          charMap[char]--;
          if (charMap[char] === 0) count--;
      }
      while (count === 0) {
          if (right - left + 1 < minWindowLength) {
              minWindowLength = right - left + 1;
              minWindow = s.substring(left, right + 1);
          }
          const leftChar = s[left];
          if (charMap[leftChar] !== undefined) {
              charMap[leftChar]++;
              if (charMap[leftChar] > 0) count++;
          }
          left++;
      }
      right++;
  }
  return minWindow;
}
