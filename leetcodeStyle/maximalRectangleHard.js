function maximalRectangle(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  const n = matrix.length;
  const m = matrix[0].length;
  const heights = Array(m).fill(0);
  let maxArea = 0;
  const updateHeights = () => {
      for (let j = 0; j < m; j++) {
          heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
      }
  };
  const calculateMaxArea = () => {
      const stack = [];
      stack.push(-1);
      for (let j = 0; j < m; j++) {
          while (stack.length > 1 && heights[j] < heights[stack[stack.length - 1]]) {
              const top = stack.pop();
              maxArea = Math.max(maxArea, heights[top] * (j - stack[stack.length - 1] - 1));
          }
          stack.push(j);
      }
      while (stack.length > 1) {
          const top = stack.pop();
          maxArea = Math.max(maxArea, heights[top] * (m - stack[stack.length - 1] - 1));
      }
  };
  for (let i = 0; i < n; i++) {
      updateHeights();
      calculateMaxArea();
  }
  return maxArea;
}
