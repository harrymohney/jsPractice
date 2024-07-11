function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// Test
const tree1 = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
const tree2 = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
console.log(isSameTree(tree1, tree2)); // Output: true
