function replaceElements(arr) {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
      const temp = arr[i];
      arr[i] = max;
      max = Math.max(max, temp);
  }
  return arr;
}
// Test
console.log(replaceElements([17,18,5,4,6,1])); // Output: [18,6,6,6,1,-1]
