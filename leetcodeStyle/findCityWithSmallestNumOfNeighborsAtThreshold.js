function findTheCity(n, edges, distanceThreshold) {
  const dist = Array(n).fill(null).map(() => Array(n).fill(Infinity));
  for (const [from, to, weight] of edges) {
      dist[from][to] = weight;
      dist[to][from] = weight;
  }
  for (let i = 0; i < n; i++) dist[i][i] = 0;
  for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
              dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
          }
      }
  }
  let minCount = Infinity;
  let result = -1;
  for (let i = 0; i < n; i++) {
      let count = 0;
      for (let j = 0; j < n; j++) {
          if (dist[i][j] <= distanceThreshold) count++;
      }
      if (count <= minCount) {
          minCount = count;
          result = i;
      }
  }
  return result;
}
