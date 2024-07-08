function checkIfExist(arr) {
  const set = new Set(arr);
  for (const num of arr) {
      if (set.has(num * 2) || (num % 2 === 0 && set.has(num / 2))) {
          return true;
      }
  }
  return false;
}
// Test
console.log(checkIfExist([10,2,5,3])); // Output: true
console.log(checkIfExist([3,1,7,11])); // Output: false
