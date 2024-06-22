xfunction sumEvenAfterQueries(A, queries) {
  let sum = A.filter(x => x % 2 === 0).reduce((a, b) => a + b, 0);
  const result = [];
  for (const [val, index] of queries) {
      if (A[index] % 2 === 0) sum -= A[index];
      A[index] += val;
      if (A[index] % 2 === 0) sum += A[index];
      result.push(sum);
  }
  return result;
}
// Test
console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]])); // Output: [8,6,2,4]
