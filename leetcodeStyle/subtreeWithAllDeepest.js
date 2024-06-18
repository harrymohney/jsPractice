function subtreeWithAllDeepest(root) {
  function dfs(node) {
      if (!node) return { node: null, depth: 0 };
      const left = dfs(node.left);
      const right = dfs(node.right);
      if (left.depth > right.depth) return { node: left.node, depth: left.depth + 1 };
      if (right.depth > left.depth) return { node: right.node, depth: right.depth + 1 };
      return { node, depth: left.depth + 1 };
  }
  return dfs(root).node;
}
// Test
const tree8 = {
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
      left: { val: 0, left: null, right: null },
      right: { val: 8, left: null, right: null }
  }
};
console.log(subtreeWithAllDeepest(tree8)); // Output: Tree node with value 2
