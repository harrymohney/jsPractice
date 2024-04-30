function criticalConnections(n, connections) {
  const graph = buildGraph(n, connections);
  const ids = new Array(n).fill(-1);
  const lows = new Array(n).fill(-1);
  const visited = new Array(n).fill(false);
  const bridges = [];

  let id = 0;

  const dfs = (at, parent, bridges) => {
      visited[at] = true;
      id++;
      ids[at] = lows[at] = id;

      for (const to of graph[at]) {
          if (to === parent) continue;
          if (!visited[to]) {
              dfs(to, at, bridges);
              lows[at] = Math.min(lows[at], lows[to]);
              if (ids[at] < lows[to]) {
                  bridges.push([at, to]);
              }
          } else {
              lows[at] = Math.min(lows[at], ids[to]);
          }
      }
  };

  for (let i = 0; i < n; i++) {
      if (!visited[i]) {
          dfs(i, -1, bridges);
      }
  }

  return bridges;
}

function buildGraph(n, connections) {
  const graph = new Array(n).fill(null).map(() => []);
  for (const [from, to] of connections) {
      graph[from].push(to);
      graph[to].push(from);
  }
  return graph;
}
