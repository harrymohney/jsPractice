class TreeNode {
  constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function preorderTraversal(root) {
  const result = [];
  const traverse = (node) => {
      if (!node) return;
      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
  };
  traverse(root);
  return result;
}
// Test
const tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);
console.log(preorderTraversal(tree)); // Output: [1, 2, 3]
