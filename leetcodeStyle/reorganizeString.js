function reorganizeString(S) {
  const count = {};
  for (const char of S) {
      count[char] = (count[char] || 0) + 1;
  }
  const maxHeap = Object.keys(count).sort((a, b) => count[b] - count[a]);
  const result = Array(S.length);
  let index = 0;
  for (const char of maxHeap) {
      let times = count[char];
      if (times > Math.floor((S.length + 1) / 2)) return '';
      while (times > 0) {
          if (index >= S.length) index = 1;
          result[index] = char;
          index += 2;
          times--;
      }
  }
  return result.join('');
}
// Test
console.log(reorganizeString("aab")); // Output: "aba"
