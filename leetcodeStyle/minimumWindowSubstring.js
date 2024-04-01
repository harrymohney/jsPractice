function minWindow(s, t) {
  const map = new Map();
  for (let char of t) {
      map.set(char, (map.get(char) || 0) + 1);
  }
  let left = 0, right = 0, minLength = Infinity, minStart = 0, count = t.length;
  while (right < s.length) {
      const char = s[right];
      if (map.has(char)) {
          map.set(char, map.get(char) - 1);
          if (map.get(char) >= 0) count--;
      }
      while (count === 0) {
          if (right - left + 1 < minLength) {
              minLength = right - left + 1;
              minStart = left;
          }
          const leftChar = s[left];
          if (map.has(leftChar)) {
              map.set(leftChar, map.get(leftChar) + 1);
              if (map.get(leftChar) > 0) count++;
          }
          left++;
      }
      right++;
  }
  return minLength === Infinity ? '' : s.substr(minStart, minLength);
}
