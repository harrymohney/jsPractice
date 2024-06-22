function repeatedNTimes(A) {
  const set = new Set();
  for (const num of A) {
      if (set.has(num)) return num;
      set.add(num);
  }
}
// Test
console.log(repeatedNTimes([1,2,3,3])); // Output: 3
console.log(repeatedNTimes([2,1,2,5,3,2])); // Output: 2
console.log(repeatedNTimes([5,1,5,2,5,3,5,4])); // Output: 5
