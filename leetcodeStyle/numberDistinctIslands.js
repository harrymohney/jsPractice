function numDistinctIslands(grid) {
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const visited = new Set();
  const shapes = new Set();
  const dfs = (i, j, shape, direction) => {
      if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0 || visited.has(`${i},${j}`)) return;
      visited.add(`${i},${j}`);
      shape += direction;
      for (const [dx, dy, dir] of directions) {
          dfs(i + dx, j + dy, shape, dir);
      }
      shape += 0; // to prevent implicit string conversion
  };
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 1 && !visited.has(`${i},${j}`)) {
              const shape = [];
              dfs(i, j, shape, 'o');
              shapes.add(shape.join(''));
          }
      }
  }
  return shapes.size;
}
