function minPushBox(grid) {
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const m = grid.length;
  const n = grid[0].length;
  let sx, sy, bx, by, tx, ty;
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 'S') {
              sx = i;
              sy = j;
          } else if (grid[i][j] === 'B') {
              bx = i;
              by = j;
          } else if (grid[i][j] === 'T') {
              tx = i;
              ty = j;
          }
      }
  }
  const visited = new Set();
  const queue = [[sx, sy, bx, by, 0]];
  while (queue.length > 0) {
      const [cx, cy, bx, by, steps] = queue.shift();
      if (bx === tx && by === ty) return steps;
      if (visited.has(`${bx},${by}`)) continue;
      visited.add(`${bx},${by}`);
      for (const [dx, dy] of dirs) {
          const nx = cx + dx;
          const ny = cy + dy;
          if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] !== '#') {
              let nx2 = bx - dx;
              let ny2 = by - dy;
              if (nx2 >= 0 && nx2 < m && ny2 >= 0 && ny2 < n && grid[nx2][ny2] !== '#') {
                  queue.push([nx, ny, nx2, ny2, steps + 1]);
              }
          }
      }
  }
  return -1;
}
