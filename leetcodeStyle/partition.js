function partition(s) {
  const result = [];
  function isPalindrome(str) {
      let left = 0, right = str.length - 1;
      while (left < right) {
          if (str[left] !== str[right]) return false;
          left++;
          right--;
      }
      return true;
  }
  function backtrack(start, path) {
      if (start === s.length) result.push([...path]);
      for (let end = start + 1; end <= s.length; end++) {
          const substr = s.slice(start, end);
          if (isPalindrome(substr)) {
              path.push(substr);
              backtrack(end, path);
              path.pop();
          }
      }
  }
  backtrack(0, []);
  return result;
}
// Test
console.log(partition("aab")); // Output: [["a","a","b"],["aa","b"]]
