function longestConsecutive(root) {
  if (!root) return 0;
  let maxLen = 0;

  function dfs(node, parent, length) {
      if (!node) return;
      length = (parent && node.val === parent.val + 1) ? length + 1 : 1;
      maxLen = Math.max(maxLen, length);
      dfs(node.left, node, length);
      dfs(node.right, node, length);
  }

  dfs(root, null, 0);
  return maxLen;
}
// Test
const tree4 = {
  val: 1,
  left: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: null
  },
  right: { val: 2, left: null, right: null }
};
console.log(longestConsecutive(tree4)); // Output: 3
