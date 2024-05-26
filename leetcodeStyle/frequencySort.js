function frequencySort(s) {
  const count = {};
  for (const char of s) {
      count[char] = (count[char] || 0) + 1;
  }
  return s.split('').sort((a, b) => count[b] - count[a] || a.localeCompare(b)).join('');
}
// Test
console.log(frequencySort("tree")); // Output: "eert" or "rtee"
