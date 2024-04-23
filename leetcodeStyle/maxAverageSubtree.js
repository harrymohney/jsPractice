function maximumAverageSubtree(root) {
  let maxAvg = 0;
  const dfs = (node) => {
      if (!node) return [0, 0];
      const [sumLeft, countLeft] = dfs(node.left);
      const [sumRight, countRight] = dfs(node.right);
      const sum = sumLeft + sumRight + node.val;
      const count = countLeft + countRight + 1;
      maxAvg = Math.max(maxAvg, sum / count);
      return [sum, count];
  };
  dfs(root);
  return maxAvg;
}
