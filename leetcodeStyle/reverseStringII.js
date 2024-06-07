function reverseString(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
  }
}
// Test
const strArr = ["h", "e", "l", "l", "o"];
reverseString(strArr);
console.log(strArr); // Output: ["o", "l", "l", "e", "h"]
