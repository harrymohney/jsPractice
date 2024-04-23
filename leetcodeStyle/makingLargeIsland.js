function largestIsland(grid) {
  const n = grid.length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const dfs = (i, j, index) => {
      if (i < 0 || i >= n || j < 0 || j >= n || grid[i][j] !== 1) return 0;
      grid[i][j] = index;
      let area = 1;
      for (const [dx, dy] of directions) {
          area += dfs(i + dx, j + dy, index);
      }
      return area;
  };
  const areas = { 0: 0 };
  let index = 2;
  let maxArea = 0;
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 1) {
              areas[index] = dfs(i, j, index);
              maxArea = Math.max(maxArea, areas[index]);
              index++;
          }
      }
  }
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 0) {
              const neighbors = new Set();
              for (const [dx, dy] of directions) {
                  const x = i + dx;
                  const y = j + dy;
                  if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] !== 0) {
                      neighbors.add(grid[x][y]);
                  }
              }
              let area = 1;
              for (const neighbor of neighbors) {
                  area += areas[neighbor];
              }
              maxArea = Math.max(maxArea, area);
          }
      }
  }
  return maxArea;
}
