function longestZigZag(root) {
  let maxZigZag = 0;
  const dfs = (node, isLeft, length) => {
      if (!node) return;
      maxZigZag = Math.max(maxZigZag, length);
      dfs(node.left, true, isLeft ? 1 : length + 1);
      dfs(node.right, false, !isLeft ? 1 : length + 1);
  };
  dfs(root.left, true, 1);
  dfs(root.right, false, 1);
  return maxZigZag;
}
