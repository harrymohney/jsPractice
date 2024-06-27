function sortArrayByParity(A) {
  return A.filter(x => x % 2 === 0).concat(A.filter(x => x % 2 !== 0));
}
// Test
console.log(sortArrayByParity([3,1,2,4])); // Output: [2,4,3,1]
