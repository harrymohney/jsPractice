function smallestRangeII(A, K) {
  A.sort((a, b) => a - b);
  const n = A.length;
  let minDiff = A[n - 1] - A[0];

  for (let i = 0; i < n - 1; i++) {
      const max = Math.max(A[i] + K, A[n - 1] - K);
      const min = Math.min(A[0] + K, A[i + 1] - K);
      minDiff = Math.min(minDiff, max - min);
  }

  return minDiff;
}
