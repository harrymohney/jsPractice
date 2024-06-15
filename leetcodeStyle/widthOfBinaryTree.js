function widthOfBinaryTree(root) {
  if (!root) return 0;
  let maxWidth = 0;
  const queue = [[root, 0]];
  while (queue.length > 0) {
      const levelSize = queue.length;
      const leftmost = queue[0][1];
      for (let i = 0; i < levelSize; i++) {
          const [node, index] = queue.shift();
          if (node.left) queue.push([node.left, 2 * index]);
          if (node.right) queue.push([node.right, 2 * index + 1]);
      }
      const rightmost = queue[queue.length - 1]?.[1] ?? leftmost;
      maxWidth = Math.max(maxWidth, rightmost - leftmost + 1);
  }
  return maxWidth;
}
// Test
const tree1 = {
  val: 1,
  left: {
      val: 3,
      left: { val: 5, left: null, right: null },
      right: { val: 3, left: null, right: null }
  },
  right: {
      val: 2,
      right: { val: 9, left: null, right: null }
  }
};
console.log(widthOfBinaryTree(tree1)); // Output: 4
