function isMonotonic(A) {
  let increasing = true, decreasing = true;
  for (let i = 1; i < A.length; i++) {
      if (A[i] > A[i - 1]) decreasing = false;
      if (A[i] < A[i - 1]) increasing = false;
  }
  return increasing || decreasing;
}
// Test
console.log(isMonotonic([1,2,2,3])); // Output: true
console.log(isMonotonic([6,5,4,4])); // Output: true
console.log(isMonotonic([1,3,2])); // Output: false
