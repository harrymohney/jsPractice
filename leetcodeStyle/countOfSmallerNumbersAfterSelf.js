class TreeNode {
  constructor(val) {
      this.val = val;
      this.leftCount = 0;
      this.dup = 1;
      this.left = null;
      this.right = null;
  }
}

function countSmaller(nums) {
  if (nums.length === 0) return [];
  const result = new Array(nums.length).fill(0);
  let root = new TreeNode(nums[nums.length - 1]);
  for (let i = nums.length - 2; i >= 0; i--) {
      result[i] = insert(root, nums[i]);
  }
  return result;

  function insert(node, val) {
      let count = 0;
      while (true) {
          if (val < node.val) {
              node.leftCount++;
              if (node.left === null) {
                  node.left = new TreeNode(val);
                  break;
              } else {
                  node = node.left;
              }
          } else if (val > node.val) {
              count += node.leftCount + node.dup;
              if (node.right === null) {
                  node.right = new TreeNode(val);
                  break;
              } else {
                  node = node.right;
              }
          } else {
              count += node.leftCount;
              node.dup++;
              break;
          }
      }
      return count;
  }
}
