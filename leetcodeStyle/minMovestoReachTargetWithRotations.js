function minimumMoves(grid) {
  const n = grid.length;
  const queue = [[0, 0, 0, 1]]; // [row1, col1, row2, col2]
  const visited = new Set(["0,0,0,1"]);

  let moves = 0;

  while (queue.length > 0) {
      const size = queue.length;

      for (let i = 0; i < size; i++) {
          const [r1, c1, r2, c2] = queue.shift();

          if (r1 === n - 1 && c1 === n - 2 && r2 === n - 1 && c2 === n - 1) {
              return moves;
          }

          if (r1 === r2) { // horizontal
              if (c2 + 1 < n && grid[r2][c2 + 1] === 0 && !visited.has(`${r2},${c2},${r2},${c2 + 1}`)) {
                  queue.push([r2, c2, r2, c2 + 1]);
                  visited.add(`${r2},${c2},${r2},${c2 + 1}`);
              }
              if (r2 + 1 < n && grid[r2 + 1][c2] === 0 && grid[r2 + 1][c2 - 1] === 0 &&
                  !visited.has(`${r2},${c2 - 1},${r2 + 1},${c2 - 1}`)) {
                  queue.push([r2, c2 - 1, r2 + 1, c2 - 1]);
                  visited.add(`${r2},${c2 - 1},${r2 + 1},${c2 - 1}`);
              }
          } else { // vertical
              if (r2 + 1 < n && grid[r2 + 1][c2] === 0 && !visited.has(`${r2},${c2},${r2 + 1},${c2}`)) {
                  queue.push([r2, c2, r2 + 1, c2]);
                  visited.add(`${r2},${c2},${r2 + 1},${c2}`);
              }
              if (c2 + 1 < n && grid[r2][c2 + 1] === 0 && grid[r2 - 1][c2 + 1] === 0 &&
                  !visited.has(`${r2 - 1},${c2},${r2 - 1},${c2 + 1}`)) {
                  queue.push([r2 - 1, c2, r2 - 1, c2 + 1]);
                  visited.add(`${r2 - 1},${c2},${r2 - 1},${c2 + 1}`);
              }
          }
      }

      moves++;
  }

  return -1;
}
