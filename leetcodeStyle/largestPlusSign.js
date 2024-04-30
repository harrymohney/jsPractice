function orderOfLargestPlusSign(n, mines) {
  const grid = new Array(n).fill(null).map(() => new Array(n).fill(1));
  for (const [row, col] of mines) {
      grid[row][col] = 0;
  }

  const left = new Array(n).fill(null).map(() => new Array(n).fill(0));
  const right = new Array(n).fill(null).map(() => new Array(n).fill(0));
  const up = new Array(n).fill(null).map(() => new Array(n).fill(0));
  const down = new Array(n).fill(null).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 1) {
              left[i][j] = j > 0 ? left[i][j - 1] + 1 : 1;
              up[i][j] = i > 0 ? up[i - 1][j] + 1 : 1;
          }
      }
  }

  for (let i = n - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
          if (grid[i][j] === 1) {
              right[i][j] = j < n - 1 ? right[i][j + 1] + 1 : 1;
              down[i][j] = i < n - 1 ? down[i + 1][j] + 1 : 1;
          }
      }
  }

  let maxOrder = 0;
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 1) {
              const order = Math.min(left[i][j], right[i][j], up[i][j], down[i][j]);
              maxOrder = Math.max(maxOrder, order);
          }
      }
  }

  return maxOrder;
}
