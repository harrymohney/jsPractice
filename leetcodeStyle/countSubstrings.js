function countSubstrings(s) {
  let count = 0;

  function extendPalindrome(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          count++;
          left--;
          right++;
      }
  }

  for (let i = 0; i < s.length; i++) {
      extendPalindrome(i, i); // odd-length palindromes
      extendPalindrome(i, i + 1); // even-length palindromes
  }

  return count;
}
// Test
console.log(countSubstrings("aaa")); // Output: 6
