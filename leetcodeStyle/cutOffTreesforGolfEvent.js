function cutOffTree(forest) {
  const trees = [];
  const m = forest.length;
  const n = forest[0].length;

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (forest[i][j] > 1) {
              trees.push([forest[i][j], i, j]);
          }
      }
  }

  trees.sort((a, b) => a[0] - b[0]);
  let totalSteps = 0;
  let currentRow = 0;
  let currentCol = 0;

  const bfs = (startRow, startCol, targetRow, targetCol) => {
      const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      const queue = [[startRow, startCol, 0]];
      const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
      visited[startRow][startCol] = true;

      while (queue.length > 0) {
          const [row, col, steps] = queue.shift();
          if (row === targetRow && col === targetCol) {
              return steps;
          }
          for (const [dr, dc] of directions) {
              const newRow = row + dr;
              const newCol = col + dc;
              if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && forest[newRow][newCol] !== 0 && !visited[newRow][newCol]) {
                  visited[newRow][newCol] = true;
                  queue.push([newRow, newCol, steps + 1]);
              }
          }
      }

      return -1;
  };

  for (const [_, targetRow, targetCol] of trees) {
      const steps = bfs(currentRow, currentCol, targetRow, targetCol);
      if (steps === -1) return -1;
      totalSteps += steps;
      currentRow = targetRow;
      currentCol = targetCol;
  }

  return totalSteps;
}
