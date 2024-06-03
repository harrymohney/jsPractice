function hasPathSum(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right && root.val === targetSum) return true;
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}
// Test
const pathSumTree = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));
console.log(hasPathSum(pathSumTree, 22)); // Output: true
