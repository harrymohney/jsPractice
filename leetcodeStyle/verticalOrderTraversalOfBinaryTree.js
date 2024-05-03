function verticalTraversal(root) {
  const map = new Map();

  const dfs = (node, row, col) => {
      if (!node) return;
      if (!map.has(col)) map.set(col, new Map());
      if (!map.get(col).has(row)) map.get(col).set(row, []);

      map.get(col).get(row).push(node.val);

      dfs(node.left, row + 1, col - 1);
      dfs(node.right, row + 1, col + 1);
  };

  dfs(root, 0, 0);

  const sortedCols = [...map.keys()].sort((a, b) => a - b);
  const result = [];

  for (const col of sortedCols) {
      const sortedRows = [...map.get(col).keys()].sort((a, b) => a - b);
      const values = [];

      for (const row of sortedRows) {
          values.push(...map.get(col).get(row).sort((a, b) => a - b));
      }

      result.push(values);
  }

  return result;
}
