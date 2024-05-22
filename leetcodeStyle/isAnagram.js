function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (let char of s) {
      count[char] = count[char] ? count[char] + 1 : 1;
  }
  for (let char of t) {
      if (!count[char]) return false;
      count[char]--;
  }
  return true;
}
// Test
console.log(isAnagram("anagram", "nagaram")); // Output: true
