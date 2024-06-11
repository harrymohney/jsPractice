function longestPalindrome(s) {
  const count = {};
  let length = 0;
  for (const char of s) {
      count[char] = (count[char] || 0) + 1;
  }
  let hasOdd = false;
  for (const char in count) {
      if (count[char] % 2 === 0) {
          length += count[char];
      } else {
          length += count[char] - 1;
          hasOdd = true;
      }
  }
  return hasOdd ? length + 1 : length;
}
// Test
console.log(longestPalindrome("abccccdd")); // Output: 7
