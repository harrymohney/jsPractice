function minDepth(root) {
  if (!root) return 0;
  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);
  return (leftDepth === 0 || rightDepth === 0) ? leftDepth + rightDepth + 1 : Math.min(leftDepth, rightDepth) + 1;
}
// Test
const minDepthTree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(minDepth(minDepthTree)); // Output: 2
