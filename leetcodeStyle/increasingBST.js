function increasingBST(root) {
  const nodes = [];
  function inorder(node) {
      if (!node) return;
      inorder(node.left);
      nodes.push(node.val);
      inorder(node.right);
  }
  inorder(root);
  const dummy = new TreeNode(0);
  let current = dummy;
  for (const val of nodes) {
      current.right = new TreeNode(val);
      current = current.right;
  }
  return dummy.right;
}
// Test
const bst = { val: 5, left: { val: 3, left: { val: 2, left: { val: 1, left: null, right: null }, right: null }, right: { val: 4, left: null, right: null } }, right: { val: 6, left: null, right: { val: 8, left: { val: 7, left: null, right: null }, right: { val: 9, left: null, right: null } } } };
console.log(increasingBST(bst)); // Output: Tree with nodes in increasing order
