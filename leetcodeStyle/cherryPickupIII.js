function cherryPickup(grid) {
  const memo = {};
  const maxCherries = (row, col1, col2) => {
      if (row === grid.length) return 0;
      const key = `${row}-${col1}-${col2}`;
      if (memo.hasOwnProperty(key)) return memo[key];
      let cherries = grid[row][col1];
      if (col1 !== col2) cherries += grid[row][col2];
      let max = 0;
      for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
              const newCol1 = col1 + i;
              const newCol2 = col2 + j;
              if (newCol1 >= 0 && newCol1 < grid[0].length &&
                  newCol2 >= 0 && newCol2 < grid[0].length) {
                  max = Math.max(max, maxCherries(row + 1, newCol1, newCol2));
              }
          }
      }
      memo[key] = max + cherries;
      return memo[key];
  };
  return maxCherries(0, 0, grid[0].length - 1);
}
