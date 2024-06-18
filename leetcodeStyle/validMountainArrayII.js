function validMountainArray(A) {
  const n = A.length;
  if (n < 3) return false;
  let i = 0;
  while (i < n - 1 && A[i] < A[i + 1]) i++;
  if (i === 0 || i === n - 1) return false;
  while (i < n - 1 && A[i] > A[i + 1]) i++;
  return i === n - 1;
}
// Test
console.log(validMountainArray([2,1])); // Output: false
console.log(validMountainArray([3,5,5])); // Output: false
console.log(validMountainArray([0,3,2,1])); // Output: true
