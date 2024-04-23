function hasValidPath(grid) {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const validConnections = [
      [1, 3, 5],
      [1, 4, 6],
      [2, 3, 4],
      [2, 5, 6],
      [1, 3, 5],
      [1, 4, 6]
  ];
  const dfs = (i, j, visited) => {
      if (i === grid.length - 1 && j === grid[0].length - 1) return true;
      visited.add(`${i},${j}`);
      const street = grid[i][j];
      for (let k = 0; k < 4; k++) {
          const [dx, dy] = directions[k];
          const ni = i + dx;
          const nj = j + dy;
          if (
              ni >= 0 && ni < grid.length &&
              nj >= 0 && nj < grid[0].length &&
              !visited.has(`${ni},${nj}`)
          ) {
              const nextStreet = grid[ni][nj];
              if (validConnections[street - 1].includes(nextStreet)) {
                  if (dfs(ni, nj, visited)) return true;
              }
          }
      }
      return false;
  };
  return dfs(0, 0, new Set());
}
