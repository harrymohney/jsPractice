function maximalNetworkRank(n, roads) {
  const adj = Array(n).fill(null).map(() => new Set());
  for (const [a, b] of roads) {
      adj[a].add(b);
      adj[b].add(a);
  }
  let maxRank = 0;
  for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
          let rank = adj[i].size + adj[j].size;
          if (adj[i].has(j) || adj[j].has(i)) {
              rank--;
          }
          maxRank = Math.max(maxRank, rank);
      }
  }
  return maxRank;
}
