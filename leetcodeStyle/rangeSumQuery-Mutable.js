class NumArray {
  constructor(nums) {
      this.nums = nums;
      this.tree = Array(4 * nums.length).fill(0);
      this.build(0, 0, nums.length - 1);
  }
  
  build(node, start, end) {
      if (start === end) {
          this.tree[node] = this.nums[start];
      } else {
          const mid = Math.floor((start + end) / 2);
          this.build(2 * node + 1, start, mid);
          this.build(2 * node + 2, mid + 1, end);
          this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
      }
  }
  
  update(index, val, node = 0, start = 0, end = this.nums.length - 1) {
      if (start === end) {
          this.tree[node] = val;
          this.nums[start] = val;
      } else {
          const mid = Math.floor((start + end) / 2);
          if (index <= mid) {
              this.update(index, val, 2 * node + 1, start, mid);
          } else {
              this.update(index, val, 2 * node + 2, mid + 1, end);
          }
          this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
      }
  }
  
  sumRange(left, right, node = 0, start = 0, end = this.nums.length - 1) {
      if (start >= left && end <= right) {
          return this.tree[node];
      } else if (start > right || end < left) {
          return 0;
      } else {
          const mid = Math.floor((start + end) / 2);
          return this.sumRange(left, right, 2 * node + 1, start, mid) + this.sumRange(left, right, 2 * node + 2, mid + 1, end);
      }
  }
}
