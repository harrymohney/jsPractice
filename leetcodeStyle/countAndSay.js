function countAndSay(n) {
  if (n === 1) return "1";
  const prevSeq = countAndSay(n - 1);
  let result = "";
  let count = 1;
  for (let i = 1; i < prevSeq.length; i++) {
      if (prevSeq[i] === prevSeq[i - 1]) {
          count++;
      } else {
          result += count + prevSeq[i - 1];
          count = 1;
      }
  }
  result += count + prevSeq[prevSeq.length - 1];
  return result;
}
// Test
console.log(countAndSay(4)); // Output: "1211"
