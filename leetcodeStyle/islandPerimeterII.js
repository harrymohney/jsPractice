function islandPerimeter(grid) {
  let perimeter = 0;
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 1) {
              perimeter += 4;
              if (i > 0 && grid[i - 1][j] === 1) perimeter--;
              if (i < m - 1 && grid[i + 1][j] === 1) perimeter--;
              if (j > 0 && grid[i][j - 1] === 1) perimeter--;
              if (j < n - 1 && grid[i][j + 1] === 1) perimeter--;
          }
      }
  }
  return perimeter;
}
// Test
console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])); // Output: 16
