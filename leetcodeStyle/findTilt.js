function findTilt(root) {
  let totalTilt = 0;

  function sumTree(node) {
      if (!node) return 0;
      const leftSum = sumTree(node.left);
      const rightSum = sumTree(node.right);
      const tilt = Math.abs(leftSum - rightSum);
      totalTilt += tilt;
      return node.val + leftSum + rightSum;
  }

  sumTree(root);
  return totalTilt;
}
// Test
const tree2 = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null }
};
console.log(findTilt(tree2)); // Output: 1
