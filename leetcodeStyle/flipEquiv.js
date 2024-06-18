function flipEquiv(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2 || root1.val !== root2.val) return false;
  return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
         (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left));
}
// Test
const tree9 = {
  val: 1,
  left: { val: 2, left: null, right: { val: 3, left: null, right: null } },
  right: { val: 4, left: null, right: { val: 5, left: null, right: null } }
};
const tree10 = {
  val: 1,
  left: { val: 2, left: { val: 3, left: null, right: null }, right: null },
  right: { val: 4, left: { val: 5, left: null, right: null }, right: null }
};
console.log(flipEquiv(tree9, tree10)); // Output: false
