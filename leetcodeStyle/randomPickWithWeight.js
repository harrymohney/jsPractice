class Solution {
  constructor(w) {
      this.prefixSums = [];
      let sum = 0;
      for (const weight of w) {
          sum += weight;
          this.prefixSums.push(sum);
      }
      this.totalSum = sum;
  }

  pickIndex() {
      const target = Math.floor(Math.random() * this.totalSum) + 1;
      let left = 0;
      let right = this.prefixSums.length - 1;

      while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (this.prefixSums[mid] < target) {
              left = mid + 1;
          } else {
              right = mid;
          }
      }

      return left;
  }
}
