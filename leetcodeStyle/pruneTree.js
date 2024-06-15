function pruneTree(root) {
  if (!root) return null;
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  return root.val === 0 && !root.left && !root.right ? null : root;
}
// Test
const tree2 = {
  val: 1,
  left: {
      val: 0,
      left: { val: 0, left: null, right: null },
      right: { val: 0, left: null, right: null }
  },
  right: {
      val: 1,
      left: { val: 0, left: null, right: null },
      right: { val: 1, left: null, right: null }
  }
};
console.log(pruneTree(tree2)); // Output: [1,null,1,null,1]
