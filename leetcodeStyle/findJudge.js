function findJudge(n, trust) {
  const trustCounts = new Array(n + 1).fill(0);
  for (const [a, b] of trust) {
      trustCounts[a]--;
      trustCounts[b]++;
  }
  for (let i = 1; i <= n; i++) {
      if (trustCounts[i] === n - 1) return i;
  }
  return -1;
}
// Test
console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]])); // Output: -1
