function allPalindromicSubstrings(s) {
  const result = [];
  const isPalindrome = (str) => str === str.split('').reverse().join('');
  for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
          const substr = s.substring(i, j + 1);
          if (isPalindrome(substr)) {
              result.push(substr);
          }
      }
  }
  return result;
}
// Test
console.log(allPalindromicSubstrings("abc")); // Output: ["a", "b", "c"]
