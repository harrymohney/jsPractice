function largestPerimeter(A) {
  A.sort((a, b) => b - a);
  for (let i = 0; i < A.length - 2; i++) {
      if (A[i] < A[i + 1] + A[i + 2]) {
          return A[i] + A[i + 1] + A[i + 2];
      }
  }
  return 0;
}
// Test
console.log(largestPerimeter([2,1,2])); // Output: 5
console.log(largestPerimeter([1,2,1])); // Output: 0
