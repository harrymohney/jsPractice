class FenwickTree {
  constructor(size) {
      this.tree = new Array(size + 1).fill(0);
  }

  update(index, delta) {
      index++; // convert to 1-based index
      while (index < this.tree.length) {
          this.tree[index] += delta;
          index += index & -index;
      }
  }

  query(index) {
      index++; // convert to 1-based index
      let sum = 0;
      while (index > 0) {
          sum += this.tree[index];
          index -= index & -index;
      }
      return sum;
  }
}

function countSmaller(nums) {
  const n = nums.length;
  const sortedNums = [...nums].sort((a, b) => a - b);
  const ranks = new Map();
  let rank = 0;

  for (const num of sortedNums) {
      if (!ranks.has(num)) {
          ranks.set(num, rank++);
      }
  }

  const fenwickTree = new FenwickTree(n);
  const result = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
      const r = ranks.get(nums[i]);
      result[i] = fenwickTree.query(r - 1);
      fenwickTree.update(r, 1);
  }

  return result;
}
