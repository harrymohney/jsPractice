function shortestBridge(A) {
  const rows = A.length, cols = A[0].length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let firstIsland = [], queue = [];
  
  function dfs(x, y) {
      if (x < 0 || y < 0 || x >= rows || y >= cols || A[x][y] === 0 || A[x][y] === 2) return;
      A[x][y] = 2;
      firstIsland.push([x, y]);
      for (const [dx, dy] of directions) dfs(x + dx, y + dy);
  }

  outer: for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (A[i][j] === 1) {
              dfs(i, j);
              break outer;
          }
      }
  }
  
  queue = firstIsland;
  let flips = 0;
  
  while (queue.length) {
      const newQueue = [];
      for (const [x, y] of queue) {
          for (const [dx, dy] of directions) {
              const nx = x + dx, ny = y + dy;
              if (nx < 0 || ny < 0 || nx >= rows || ny >= cols || A[nx][ny] === 2) continue;
              if (A[nx][ny] === 1) return flips;
              A[nx][ny] = 2;
              newQueue.push([nx, ny]);
          }
      }
      queue = newQueue;
      flips++;
  }
}
// Test
console.log(shortestBridge([[0,1],[1,0]])); // Output: 1
