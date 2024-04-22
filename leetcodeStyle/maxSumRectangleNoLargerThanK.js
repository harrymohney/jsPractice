function maxSumSubmatrix(matrix, k) {
  const m = matrix.length;
  const n = matrix[0].length;
  let maxSum = -Infinity;
  for (let left = 0; left < n; left++) {
      const rowSum = Array(m).fill(0);
      for (let right = left; right < n; right++) {
          for (let i = 0; i < m; i++) {
              rowSum[i] += matrix[i][right];
          }
          maxSum = Math.max(maxSum, maxSubarraySum(rowSum, k));
      }
  }
  return maxSum;
}

function maxSubarraySum(arr, k) {
  let maxSum = -Infinity, prefixSum = 0;
  const set = new Set();
  set.add(0);
  for (const num of arr) {
      prefixSum += num;
      const candidate = prefixSum - k;
      let prefixSumLessThanOrEqualK = Infinity;
      for (const pre of set) {
          if (pre >= candidate && pre <= k) {
              prefixSumLessThanOrEqualK = Math.min(prefixSumLessThanOrEqualK, pre);
          }
      }
      if (prefixSumLessThanOrEqualK !== Infinity) {
          maxSum = Math.max(maxSum, prefixSum - prefixSumLessThanOrEqualK);
      }
      set.add(prefixSum);
  }
  return maxSum;
}
