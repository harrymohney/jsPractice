function findTheDifference(s, t) {
  let charCode = 0;
  for (const char of s) {
      charCode ^= char.charCodeAt(0);
  }
  for (const char of t) {
      charCode ^= char.charCodeAt(0);
  }
  return String.fromCharCode(charCode);
}
// Test
console.log(findTheDifference("abcd", "abcde")); // Output: "e"
