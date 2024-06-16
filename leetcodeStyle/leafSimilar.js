function leafSimilar(root1, root2) {
  function dfs(node, leaves) {
      if (!node) return;
      if (!node.left && !node.right) leaves.push(node.val);
      dfs(node.left, leaves);
      dfs(node.right, leaves);
  }
  const leaves1 = [], leaves2 = [];
  dfs(root1, leaves1);
  dfs(root2, leaves2);
  return leaves1.join() === leaves2.join();
}
// Test
const tree5 = {
  val: 3,
  left: {
      val: 5,
      left: { val: 6, left: null, right: null },
      right: {
          val: 2,
          left: { val: 7, left: null, right: null },
          right: { val: 4, left: null, right: null }
      }
  },
  right: {
      val: 1,
      left: { val: 9, left: null, right: null },
      right: { val: 8, left: null, right: null }
  }
};
const tree6 = {
  val: 3,
  left: {
      val: 5,
      left: { val: 6, left: null, right: null },
      right: {
          val: 7,
          left: { val: 4, left: null, right: null },
          right: { val: 2, left: null, right: null }
      }
  },
  right: {
      val: 1,
      left: { val: 9, left: null, right: null },
      right: { val: 8, left: null, right: null }
  }
};
console.log(leafSimilar(tree5, tree6)); // Output: false
