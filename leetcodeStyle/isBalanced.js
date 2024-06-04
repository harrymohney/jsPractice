function isBalanced(root) {
  function checkHeight(node) {
      if (!node) return 0;
      const leftHeight = checkHeight(node.left);
      const rightHeight = checkHeight(node.right);
      if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) return -1;
      return 1 + Math.max(leftHeight, rightHeight);
  }
  return checkHeight(root) !== -1;
}
// Test
const balancedTree = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(3)), new TreeNode(2));
console.log(isBalanced(balancedTree)); // Output: true
