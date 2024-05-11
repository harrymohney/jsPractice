function verticalOrder(root) {
  if (!root) return [];

  const columnMap = new Map();
  const queue = [[root, 0]];

  while (queue.length > 0) {
      const [node, column] = queue.shift();

      if (!columnMap.has(column)) {
          columnMap.set(column, []);
      }
      columnMap.get(column).push(node.val);

      if (node.left) {
          queue.push([node.left, column - 1]);
      }
      if (node.right) {
          queue.push([node.right, column + 1]);
      }
  }

  const sortedColumns = Array.from(columnMap.keys()).sort((a, b) => a - b);
  const result = [];

  for (const column of sortedColumns) {
      result.push(columnMap.get(column));
  }

  return result;
}
