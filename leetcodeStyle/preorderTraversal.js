function preorderTraversal(root) {
  const result = [];
  function preorder(node) {
      if (!node) return;
      result.push(node.val);
      preorder(node.left);
      preorder(node.right);
  }
  preorder(root);
  return result;
}
// Test
const preorderTree = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };
console.log(preorderTraversal(preorderTree)); // Output: [1,2,3]
