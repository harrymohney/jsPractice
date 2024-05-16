function numIslands2(m, n, positions) {
  const parent = {};
  const rank = {};
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let count = 0;
  
  function find(x) {
      if (parent[x] !== x) {
          parent[x] = find(parent[x]);
      }
      return parent[x];
  }
  
  function union(x, y) {
      const rootX = find(x);
      const rootY = find(y);
      if (rootX !== rootY) {
          if (rank[rootX] > rank[rootY]) {
              parent[rootY] = rootX;
          } else if (rank[rootX] < rank[rootY]) {
              parent[rootX] = rootY;
          } else {
              parent[rootY] = rootX;
              rank[rootX]++;
          }
          count--;
      }
  }
  
  for (const [x, y] of positions) {
      const pos = x * n + y;
      if (!parent[pos]) {
          parent[pos] = pos;
          rank[pos] = 0;
          count++;
      }
      
      for (const [dx, dy] of directions) {
          const newX = x + dx;
          const newY = y + dy;
          const newPos = newX * n + newY;
          if (newX >= 0 && newX < m && newY >= 0 && newY < n && parent[newPos]) {
              union(pos, newPos);
          }
      }
  }
  
  return count;
}
