class Solution {
  constructor(rects) {
      this.rects = rects;
      this.totalArea = 0;
      this.areaPrefixSum = [];

      for (const [x1, y1, x2, y2] of rects) {
          const area = (x2 - x1 + 1) * (y2 - y1 + 1);
          this.totalArea += area;
          this.areaPrefixSum.push(this.totalArea);
      }
  }

  pick() {
      const randArea = Math.floor(Math.random() * this.totalArea) + 1;
      let low = 0;
      let high = this.rects.length - 1;

      while (low < high) {
          const mid = Math.floor((low + high) / 2);
          if (this.areaPrefixSum[mid] < randArea) {
              low = mid + 1;
          } else {
              high = mid;
          }
      }

      const [x1, y1, x2, y2] = this.rects[low];
      const width = x2 - x1 + 1;
      const height = y2 - y1 + 1;
      const base = x1 + Math.floor(Math.random() * width);
      const heightOffset = y1 + Math.floor(Math.random() * height);
      return [base, heightOffset];
  }
}
