function sumRootToLeaf(root) {
  function dfs(node, val) {
      if (!node) return 0;
      val = (val << 1) | node.val;
      if (!node.left && !node.right) return val;
      return dfs(node.left, val) + dfs(node.right, val);
  }
  return dfs(root, 0);
}
// Test
const tree = { val: 1, left: { val: 0, left: { val: 0, left: null, right: null }, right: { val: 1, left: null, right: null } }, right: { val: 1, left: { val: 0, left: null, right: null }, right: { val: 1, left: null, right: null } } };
console.log(sumRootToLeaf(tree)); // Output: 22
