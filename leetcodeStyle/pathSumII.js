function pathSum(root, sum) {
  const result = [];
  const backtrack = (node, currentSum, path) => {
      if (!node) return;
      path.push(node.val);
      currentSum += node.val;
      if (!node.left && !node.right && currentSum === sum) {
          result.push([...path]);
      } else {
          backtrack(node.left, currentSum, path);
          backtrack(node.right, currentSum, path);
      }
      path.pop();
  };
  backtrack(root, 0, []);
  return result;
}
