function arraysIntersection(arr1, arr2, arr3) {
  return arr1.filter(value => arr2.includes(value) && arr3.includes(value));
}
// Test
console.log(arraysIntersection([1,2,3,4,5], [1,2,5,7,9], [1,3,4,5,8])); // Output: [1, 5]
