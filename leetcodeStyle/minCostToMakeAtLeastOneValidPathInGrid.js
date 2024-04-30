function minCost(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const minHeap = new PriorityQueue({ comparator: (a, b) => a[0] - b[0] });
  minHeap.enqueue([0, 0, 0]); // [cost, row, col]
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const costs = Array.from({ length: m }, () => Array(n).fill(Infinity));
  costs[0][0] = 0;

  while (!minHeap.isEmpty()) {
      const [currentCost, r, c] = minHeap.dequeue();
      if (r === m - 1 && c === n - 1) return currentCost;
      for (const [dr, dc] of directions) {
          let nr = r + dr;
          let nc = c + dc;
          if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
              const newCost = currentCost + (dr === 0 && dc === 0 ? 0 : 1);
              if (newCost < costs[nr][nc]) {
                  costs[nr][nc] = newCost;
                  minHeap.enqueue([newCost, nr, nc]);
              }
          }
      }
  }

  return -1; // unreachable
}
