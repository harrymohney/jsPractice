function inorderTraversal(root) {
  const result = [];
  function inorder(node) {
      if (!node) return;
      inorder(node.left);
      result.push(node.val);
      inorder(node.right);
  }
  inorder(root);
  return result;
}
// Test
const inorderTree = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };
console.log(inorderTraversal(inorderTree)); // Output: [1,3,2]
