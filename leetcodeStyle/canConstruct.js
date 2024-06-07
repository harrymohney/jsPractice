function canConstruct(ransomNote, magazine) {
  const count = {};
  for (const char of magazine) {
      count[char] = (count[char] || 0) + 1;
  }
  for (const char of ransomNote) {
      if (!count[char]) return false;
      count[char]--;
  }
  return true;
}
// Test
console.log(canConstruct("aa", "ab")); // Output: false
