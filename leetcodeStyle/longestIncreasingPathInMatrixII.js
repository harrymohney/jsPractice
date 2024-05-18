function longestIncreasingPath(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
  let maxLength = 0;
  
  function dfs(x, y, prevVal) {
      if (x < 0 || x >= rows || y < 0 || y >= cols || matrix[x][y] <= prevVal) {
          return 0;
      }
      
      if (dp[x][y] > 0) {
          return dp[x][y];
      }
      
      const currVal = matrix[x][y];
      let maxPathLength = 1;
      const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      
      for (const [dx, dy] of directions) {
          const newX = x + dx;
          const newY = y + dy;
          maxPathLength = Math.max(maxPathLength, 1 + dfs(newX, newY, currVal));
      }
      
      dp[x][y] = maxPathLength;
      return maxPathLength;
  }
  
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          maxLength = Math.max(maxLength, dfs(i, j, -Infinity));
      }
  }
  
  return maxLength;
}
