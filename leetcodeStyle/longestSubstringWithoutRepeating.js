function longestSubstringWithoutRepeating(s) {
  let longest = 0, start = 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
      if (map.has(s[i]) && map.get(s[i]) >= start) {
          start = map.get(s[i]) + 1;
      }
      longest = Math.max(longest, i - start + 1);
      map.set(s[i], i);
  }
  return longest;
}
// Test
console.log(longestSubstringWithoutRepeating("abcabcbb")); // Output: 3
