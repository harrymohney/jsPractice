function minWindow(s, t) {
  let minStart = -1, minLength = Infinity;
  let i = 0, j = 0;
  while (i < s.length) {
      if (s[i] === t[j]) {
          if (++j === t.length) {
              let end = i + 1;
              while (--j >= 0) {
                  while (s[i--] !== t[j]);
              }
              ++i;
              ++j;
              if (end - i < minLength) {
                  minStart = i;
                  minLength = end - i;
              }
          }
      }
      ++i;
  }
  return minStart === -1 ? "" : s.substring(minStart, minStart + minLength);
}
