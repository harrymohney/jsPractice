function smallestRangeII(A, K) {
  A.sort((a, b) => a - b);
  let result = A[A.length - 1] - A[0];
  for (let i = 0; i < A.length - 1; i++) {
      const high = Math.max(A[i] + K, A[A.length - 1] - K);
      const low = Math.min(A[0] + K, A[i + 1] - K);
      result = Math.min(result, high - low);
  }
  return result;
}
// Test
console.log(smallestRangeII([1,3,6], 3)); // Output: 3
