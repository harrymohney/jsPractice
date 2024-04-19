function findMinHeightTrees(n, edges) {
  if (n === 1) return [0];
  const adjList = Array(n).fill(null).map(() => []);
  const degrees = Array(n).fill(0);
  for (const [u, v] of edges) {
      adjList[u].push(v);
      adjList[v].push(u);
      degrees[u]++;
      degrees[v]++;
  }
  const queue = [];
  for (let i = 0; i < n; i++) {
      if (degrees[i] === 1) {
          queue.push(i);
      }
  }
  let remaining = n;
  while (remaining > 2) {
      const len = queue.length;
      remaining -= len;
      for (let i = 0; i < len; i++) {
          const node = queue.shift();
          for (const neighbor of adjList[node]) {
              degrees[neighbor]--;
              if (degrees[neighbor] === 1) {
                  queue.push(neighbor);
              }
          }
      }
  }
  return queue;
}
