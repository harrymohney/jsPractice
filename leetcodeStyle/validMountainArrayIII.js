function validMountainArray(A) {
  let i = 0;
  while (i < A.length - 1 && A[i] < A[i + 1]) i++;
  if (i === 0 || i === A.length - 1) return false;
  while (i < A.length - 1 && A[i] > A[i + 1]) i++;
  return i === A.length - 1;
}
// Test
console.log(validMountainArray([2,1])); // Output: false
console.log(validMountainArray([3,5,5])); // Output: false
console.log(validMountainArray([0,3,2,1])); // Output: true
