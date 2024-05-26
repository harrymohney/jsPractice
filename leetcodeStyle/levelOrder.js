function levelOrder(root) {
  const result = [];
  if (!root) return result;
  const queue = [root];
  while (queue.length) {
      const level = [];
      const size = queue.length;
      for (let i = 0; i < size; i++) {
          const node = queue.shift();
          level.push(node.val);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      result.push(level);
  }
  return result;
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

// Test
const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);
console.log(levelOrder(tree)); // Output: [[3], [9, 20], [15, 7]]
