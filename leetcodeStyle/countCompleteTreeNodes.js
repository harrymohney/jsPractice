function countNodes(root) {
  if (!root) return 0;
  const leftDepth = getDepth(root.left);
  const rightDepth = getDepth(root.right);
  if (leftDepth === rightDepth) {
      return Math.pow(2, leftDepth) + countNodes(root.right);
  } else {
      return Math.pow(2, rightDepth) + countNodes(root.left);
  }
}

function getDepth(node) {
  let depth = 0;
  while (node) {
      depth++;
      node = node.left;
  }
  return depth;
}
