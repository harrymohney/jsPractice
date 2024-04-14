function minWindow(s, t) {
  const map = new Map();
  for (const char of t) {
      map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  }
  let left = 0, minLen = Infinity, minStart = 0, count = t.length;
  for (let right = 0; right < s.length; right++) {
      const char = s[right];
      if (map.has(char)) {
          map.set(char, map.get(char) - 1);
          if (map.get(char) >= 0) count--;
      }
      while (count === 0) {
          if (right - left + 1 < minLen) {
              minLen = right - left + 1;
              minStart = left;
          }
          const leftChar = s[left];
          if (map.has(leftChar)) {
              map.set(leftChar, map.get(leftChar) + 1);
              if (map.get(leftChar) > 0) count++;
          }
          left++;
      }
  }
  return minLen === Infinity ? "" : s.substr(minStart, minLen);
}
