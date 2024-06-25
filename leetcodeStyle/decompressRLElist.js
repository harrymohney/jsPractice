function decompressRLElist(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
      const [freq, val] = [nums[i], nums[i + 1]];
      result.push(...Array(freq).fill(val));
  }
  return result;
}
// Test
console.log(decompressRLElist([1,2,3,4])); // Output: [2,4,4,4]
