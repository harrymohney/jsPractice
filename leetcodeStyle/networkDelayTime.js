function networkDelayTime(times, N, K) {
  const distances = Array(N + 1).fill(Infinity);
  distances[K] = 0;
  for (let i = 1; i < N; i++) {
      for (const [u, v, w] of times) {
          if (distances[u] + w < distances[v]) distances[v] = distances[u] + w;
      }
  }
  const result = Math.max(...distances.slice(1));
  return result === Infinity ? -1 : result;
}
// Test
const times = [[2,1,1],[2,3,1],[3,4,1]];
const N = 4;
const K = 2;
console.log(networkDelayTime(times, N, K)); // Output: 2
