class NumArray {
  constructor(nums) {
      this.prefixSums = [0];
      for (const num of nums) {
          this.prefixSums.push(this.prefixSums[this.prefixSums.length - 1] + num);
      }
  }
  
  sumRange(i, j) {
      return this.prefixSums[j + 1] - this.prefixSums[i];
  }
}
// Test
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // Output: 1
console.log(numArray.sumRange(2, 5)); // Output: -1
console.log(numArray.sumRange(0, 5)); // Output: -3
