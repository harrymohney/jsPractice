function isSymmetric(root) {
  function isMirror(t1, t2) {
      if (!t1 && !t2) return true;
      if (!t1 || !t2) return false;
      return (t1.val === t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
  }
  return isMirror(root, root);
}
// Test
const symmetricTree = { val: 1, left: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 4, left: null, right: null } }, right: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 3, left: null, right: null } } };
console.log(isSymmetric(symmetricTree)); // Output: true
