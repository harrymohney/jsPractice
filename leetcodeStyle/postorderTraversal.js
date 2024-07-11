function postorderTraversal(root) {
  const result = [];
  function postorder(node) {
      if (!node) return;
      postorder(node.left);
      postorder(node.right);
      result.push(node.val);
  }
  postorder(root);
  return result;
}
// Test
const postorderTree = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };
console.log(postorderTraversal(postorderTree)); // Output: [3,2,1]
