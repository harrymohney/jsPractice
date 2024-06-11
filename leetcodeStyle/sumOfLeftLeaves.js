function sumOfLeftLeaves(root) {
  if (!root) return 0;
  let sum = 0;
  if (root.left && !root.left.left && !root.left.right) {
      sum += root.left.val;
  }
  return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}
// Test
const tree = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null }
  }
};
console.log(sumOfLeftLeaves(tree)); // Output: 24
