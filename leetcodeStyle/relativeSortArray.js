function relativeSortArray(arr1, arr2) {
  const count = {};
  arr1.forEach(x => count[x] = (count[x] || 0) + 1);
  const result = [];
  for (const num of arr2) {
      while (count[num] > 0) {
          result.push(num);
          count[num]--;
      }
  }
  const remaining = Object.keys(count).filter(x => count[x] > 0).sort((a, b) => a - b);
  for (const num of remaining) {
      while (count[num] > 0) {
          result.push(parseInt(num));
          count[num]--;
      }
  }
  return result;
}
// Test
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])); // Output: [2,2,2,1,4,3,3,9,6,7,19]
