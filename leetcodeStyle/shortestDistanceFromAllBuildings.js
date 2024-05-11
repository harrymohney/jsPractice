function shortestDistance(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const distances = Array.from({ length: m }, () => Array(n).fill(0));
  const reachCounts = Array.from({ length: m }, () => Array(n).fill(0));
  let buildingCount = 0;

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 1) {
              bfs(grid, distances, reachCounts, i, j);
              buildingCount++;
          }
      }
  }

  let minDistance = Infinity;

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 0 && reachCounts[i][j] === buildingCount) {
              minDistance = Math.min(minDistance, distances[i][j]);
          }
      }
  }

  return minDistance === Infinity ? -1 : minDistance;
}

function bfs(grid, distances, reachCounts, startX, startY) {
  const m = grid.length;
  const n = grid[0].length;
  const queue = [[startX, startY]];
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  let distance = 0;

  while (queue.length > 0) {
      const size = queue.length;
      distance++;

      for (let i = 0; i < size; i++) {
          const [x, y] = queue.shift();

          for (const [dx, dy] of dirs) {
              const nx = x + dx;
              const ny = y + dy;

              if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny] && grid[nx][ny] === 0) {
                  visited[nx][ny] = true;
                  distances[nx][ny] += distance;
                  reachCounts[nx][ny]++;
                  queue.push([nx, ny]);
              }
          }
      }
  }
}
