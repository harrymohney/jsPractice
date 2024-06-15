function isBipartite(graph) {
  const color = {};
  for (let node = 0; node < graph.length; node++) {
      if (!(node in color) && !dfs(node, 0)) return false;
  }
  function dfs(node, c) {
      if (node in color) return color[node] === c;
      color[node] = c;
      for (const neighbor of graph[node]) {
          if (!dfs(neighbor, 1 - c)) return false;
      }
      return true;
  }
  return true;
}
// Test
console.log(isBipartite([[1,3],[0,2],[1,3],[0,2]])); // Output: true
