function findJudge(N, trust) {
  const trustCounts = new Array(N + 1).fill(0);
  for (const [a, b] of trust) {
      trustCounts[a]--;
      trustCounts[b]++;
  }
  for (let i = 1; i <= N; i++) {
      if (trustCounts[i] === N - 1) return i;
  }
  return -1;
}
// Test
console.log(findJudge(2, [[1,2]])); // Output: 2
console.log(findJudge(3, [[1,3],[2,3]])); // Output: 3
