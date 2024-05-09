function calcEquation(equations, values, queries) {
  const graph = {};

  for (let i = 0; i < equations.length; i++) {
      const [A, B] = equations[i];
      const value = values[i];

      if (!graph[A]) graph[A] = {};
      if (!graph[B]) graph[B] = {};

      graph[A][B] = value;
      graph[B][A] = 1 / value;
  }

  const dfs = (start, end, visited) => {
      if (!graph[start] || !graph[end]) return -1;
      if (start === end) return 1;

      visited.add(start);

      for (const neighbor in graph[start]) {
          if (!visited.has(neighbor)) {
              const result = dfs(neighbor, end, visited);
              if (result !== -1) {
                  return graph[start][neighbor] * result;
              }
          }
      }

      return -1;
  };

  const results = [];

  for (const [queryA, queryB] of queries) {
      results.push(dfs(queryA, queryB, new Set()));
  }

  return results;
}
