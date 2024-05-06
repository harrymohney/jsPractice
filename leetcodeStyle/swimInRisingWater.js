function swimInWater(grid) {
  const n = grid.length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let left = 0;
  let right = n * n - 1;

  while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (canReach(grid, mid)) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }

  return left;
}

function canReach(grid, threshold) {
  const n = grid.length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const queue = [[0, 0]];

  while (queue.length > 0) {
      const [row, col] = queue.shift();
      if (row === n - 1 && col === n - 1) return true;

      for (const [dr, dc] of directions) {
          const newRow = row + dr;
          const newCol = col + dc;

          if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && !visited[newRow][newCol] && grid[newRow][newCol] <= threshold) {
              visited[newRow][newCol] = true;
              queue.push([newRow, newCol]);
          }
      }
  }

  return false;
}
