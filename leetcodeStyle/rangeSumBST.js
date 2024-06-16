function rangeSumBST(root, low, high) {
  if (!root) return 0;
  if (root.val < low) return rangeSumBST(root.right, low, high);
  if (root.val > high) return rangeSumBST(root.left, low, high);
  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
}
// Test
const tree7 = {
  val: 10,
  left: {
      val: 5,
      left: { val: 3, left: null, right: null },
      right: { val: 7, left: null, right: null }
  },
  right: {
      val: 15,
      right: { val: 18, left: null, right: null }
  }
};
console.log(rangeSumBST(tree7, 7, 15)); // Output: 32
