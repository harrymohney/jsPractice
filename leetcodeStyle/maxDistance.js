function maxDistance(arrays) {
  let minVal = arrays[0][0], maxVal = arrays[0][arrays[0].length - 1];
  let result = 0;
  for (let i = 1; i < arrays.length; i++) {
      result = Math.max(result, Math.abs(arrays[i][arrays[i].length - 1] - minVal), Math.abs(maxVal - arrays[i][0]));
      minVal = Math.min(minVal, arrays[i][0]);
      maxVal = Math.max(maxVal, arrays[i][arrays[i].length - 1]);
  }
  return result;
}
// Test
console.log(maxDistance([[1,2,3],[4,5],[1,2,3]])); // Output: 4
