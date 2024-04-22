function maxProbability(n, edges, succProb, start, end) {
  const adjList = Array(n).fill(null).map(() => []);
  for (let i = 0; i < edges.length; i++) {
      const [a, b] = edges[i];
      const prob = succProb[i];
      adjList[a].push([b, prob]);
      adjList[b].push([a, prob]);
  }
  const visited = new Set();
  const probabilities = Array(n).fill(0);
  probabilities[start] = 1;
  const queue = [[start, 1]];
  while (queue.length > 0) {
      const [node, prob] = queue.shift();
      if (visited.has(node)) continue;
      visited.add(node);
      for (const [neighbor, neighborProb] of adjList[node]) {
          const newProb = prob * neighborProb;
          if (newProb > probabilities[neighbor]) {
              probabilities[neighbor] = newProb;
              queue.push([neighbor, newProb]);
          }
      }
  }
  return probabilities[end];
}
