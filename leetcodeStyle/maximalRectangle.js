function maximalRectangle(matrix) {
  if (!matrix.length) return 0;
  const m = matrix.length, n = matrix[0].length;
  const heights = Array(n).fill(0);
  let maxArea = 0;
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
      }
      maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }
  return maxArea;
}

function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;
  for (let i = 0; i <= heights.length; i++) {
      while (stack.length && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
          const h = heights[stack.pop()];
          const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
          maxArea = Math.max(maxArea, h * w);
      }
      stack.push(i);
  }
  return maxArea;
}
