function uniquePathsIII(grid) {
  let startX, startY, emptyCount = 1;
  
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 1) {
              startX = i;
              startY = j;
          } else if (grid[i][j] === 0) {
              emptyCount++;
          }
      }
  }
  
  return backtrack(grid, startX, startY, emptyCount);
}

function backtrack(grid, x, y, count) {
  if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === -1) {
      return 0;
  }
  
  if (grid[x][y] === 2) {
      return count === 0 ? 1 : 0;
  }
  
  grid[x][y] = -1; // Mark as visited
  count--;
  
  let paths = backtrack(grid, x + 1, y, count) +
              backtrack(grid, x - 1, y, count) +
              backtrack(grid, x, y + 1, count) +
              backtrack(grid, x, y - 1, count);
  
  grid[x][y] = 0; // Reset
  count++;
  
  return paths;
}
