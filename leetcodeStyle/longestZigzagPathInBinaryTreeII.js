function longestZigZag(root) {
  let maxLen = 0;

  const dfs = (node, isLeft, len) => {
      if (!node) return;

      maxLen = Math.max(maxLen, len);

      if (isLeft) {
          dfs(node.left, false, len + 1);
          dfs(node.right, true, 1);
      } else {
          dfs(node.right, true, len + 1);
          dfs(node.left, false, 1);
      }
  };

  dfs(root, true, 0);
  dfs(root, false, 0);

  return maxLen;
}
