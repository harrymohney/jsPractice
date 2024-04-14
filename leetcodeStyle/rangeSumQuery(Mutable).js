class NumArray {
  constructor(nums) {
      this.nums = nums;
      this.tree = Array(4 * nums.length).fill(0);
      this.build(0, nums.length - 1, 0);
  }

  build(start, end, idx) {
      if (start === end) {
          this.tree[idx] = this.nums[start];
          return;
      }
      const mid = Math.floor((start + end) / 2);
      this.build(start, mid, 2 * idx + 1);
      this.build(mid + 1, end, 2 * idx + 2);
      this.tree[idx] = this.tree[2 * idx + 1] + this.tree[2 * idx + 2];
  }

  update(i, val) {
      this.updateHelper(0, this.nums.length - 1, i, val, 0);
  }

  updateHelper(start, end, i, val, idx) {
      if (start === end) {
          this.nums[i] = val;
          this.tree[idx] = val;
          return;
      }
      const mid = Math.floor((start + end) / 2);
      if (i <= mid) {
          this.updateHelper(start, mid, i, val, 2 * idx + 1);
      } else {
          this.updateHelper(mid + 1, end, i, val, 2 * idx + 2);
      }
      this.tree[idx] = this.tree[2 * idx + 1] + this.tree[2 * idx + 2];
  }

  sumRange(i, j) {
      return this.sumRangeHelper(0, this.nums.length - 1, i, j, 0);
  }

  sumRangeHelper(start, end, i, j, idx) {
      if (i <= start && j >= end) {
          return this.tree[idx];
      }
      if (i > end || j < start) {
          return 0;
      }
      const mid = Math.floor((start + end) / 2);
      return this.sumRangeHelper(start, mid, i, j, 2 * idx + 1) + this.sumRangeHelper(mid + 1, end, i, j, 2 * idx + 2);
  }
}
