function rangeSumBST(root, L, R) {
  if (!root) return 0;
  if (root.val < L) return rangeSumBST(root.left, L, R);
  if (root.val > R) return rangeSumBST(root.right, L, R);
  return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
}
// Test
const bst = { val: 10, left: { val: 5, left: { val: 3, left: null, right: null }, right: { val: 7, left: null, right: null } }, right: { val: 15, left: null, right: { val: 18, left: null, right: null } } };
console.log(rangeSumBST(bst, 7, 15)); // Output: 32
