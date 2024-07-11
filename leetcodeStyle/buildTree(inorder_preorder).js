function buildTree(inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;
  const root = new TreeNode(postorder.pop());
  const mid = inorder.indexOf(root.val);
  root.right = buildTree(inorder.slice(mid + 1), postorder);
  root.left = buildTree(inorder.slice(0, mid), postorder);
  return root;
}
// Test
const inorderTraversal = [9,3,15,20,7];
const postorderTraversal = [9,15,7,20,3];
console.log(buildTree(inorderTraversal, postorderTraversal)); // Output: Binary tree from given traversals
