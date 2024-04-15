function minTotalDistance(grid) {
  const rows = [], cols = [];
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 1) {
              rows.push(i);
              cols.push(j);
          }
      }
  }
  rows.sort((a, b) => a - b);
  cols.sort((a, b) => a - b);
  const medianRow = rows[Math.floor(rows.length / 2)];
  const medianCol = cols[Math.floor(cols.length / 2)];
  let totalDistance = 0;
  for (const row of rows) {
      totalDistance += Math.abs(row - medianRow);
  }
  for (const col of cols) {
      totalDistance += Math.abs(col - medianCol);
  }
  return totalDistance;
}
