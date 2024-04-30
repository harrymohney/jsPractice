function criticalRouters(numRouters, links) {
  const graph = buildGraph(numRouters, links);
  const ids = new Array(numRouters).fill(-1);
  const lows = new Array(numRouters).fill(-1);
  const visited = new Array(numRouters).fill(false);
  const articulationPoints = new Set();
  let id = 0;

  const dfs = (at, parent, articulationPoints) => {
      visited[at] = true;
      id++;
      ids[at] = lows[at] = id;

      let children = 0;
      for (const to of graph[at]) {
          if (to === parent) continue;
          if (!visited[to]) {
              children++;
              dfs(to, at, articulationPoints);
              lows[at] = Math.min(lows[at], lows[to]);
              if ((parent === -1 && children > 1) || (parent !== -1 && lows[to] >= ids[at])) {
                  articulationPoints.add(at);
              }
          } else {
              lows[at] = Math.min(lows[at], ids[to]);
          }
      }
  };

  for (let i = 0; i < numRouters; i++) {
      if (!visited[i]) {
          dfs(i, -1, articulationPoints);
      }
  }

  return Array.from(articulationPoints);
}

function buildGraph(numRouters, links) {
  const graph = new Array(numRouters).fill(null).map(() => []);
  for (const [from, to] of links) {
      graph[from].push(to);
      graph[to].push(from);
  }
  return graph;
}
