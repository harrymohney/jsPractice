function inorderTraversal(root) {
  const result = [];
  const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
  };
  traverse(root);
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
const tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);
console.log(inorderTraversal(tree)); // Output: [1, 3, 2]
