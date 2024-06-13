function countAndSay(n) {
  if (n === 1) return '1';
  let prev = countAndSay(n - 1);
  let result = '';
  let count = 1;
  for (let i = 1; i < prev.length; i++) {
      if (prev[i] === prev[i - 1]) {
          count++;
      } else {
          result += count + prev[i - 1];
          count = 1;
      }
  }
  result += count + prev[prev.length - 1];
  return result;
}
// Test
console.log(countAndSay(4)); // Output: "1211"
