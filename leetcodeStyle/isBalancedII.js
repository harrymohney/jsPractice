function isBalanced(root) {
  function height(node) {
      if (!node) return 0;
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);
      if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) return -1;
      return 1 + Math.max(leftHeight, rightHeight);
  }
  return height(root) !== -1;
}
// Test
const balancedTree = { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } };
console.log(isBalanced(balancedTree)); // Output: true
