function isSymmetric(root) {
  if (!root) return true;
  function isMirror(t1, t2) {
      if (!t1 && !t2) return true;
      if (!t1 || !t2) return false;
      return (t1.val === t2.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
  }
  return isMirror(root.left, root.right);
}
// Test
const symmetricTree = new TreeNode(1);
symmetricTree.left = new TreeNode(2, new TreeNode(3), new TreeNode(4));
symmetricTree.right = new TreeNode(2, new TreeNode(4), new TreeNode(3));
console.log(isSymmetric(symmetricTree)); // Output: true
