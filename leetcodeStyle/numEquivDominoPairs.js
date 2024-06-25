function numEquivDominoPairs(dominoes) {
  const count = {};
  let result = 0;
  for (const [a, b] of dominoes) {
      const key = [a, b].sort((x, y) => x - y).join('');
      count[key] = (count[key] || 0) + 1;
  }
  for (const key in count) {
      result += count[key] * (count[key] - 1) / 2;
  }
  return result;
}
// Test
console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])); // Output: 1
console.log(numEquivDominoPairs([[1,2],[2,1],[1,2],[2,1]])); // Output: 6
