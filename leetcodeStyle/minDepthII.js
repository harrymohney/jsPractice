function minDepth(root) {
  if (!root) return 0;
  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);
  if (!root.left) return 1 + rightDepth;
  if (!root.right) return 1 + leftDepth;
  return 1 + Math.min(leftDepth, rightDepth);
}
// Test
const minDepthTree = { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } };
console.log(minDepth(minDepthTree)); // Output: 2
