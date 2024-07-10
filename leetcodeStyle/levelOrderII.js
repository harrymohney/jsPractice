function levelOrder(root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
      const level = [];
      const size = queue.length;
      for (let i = 0; i < size; i++) {
          const node = queue.shift();
          level.push(node.val);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      result.push(level);
  }
  return result;
}
// Test
const levelOrderTree = { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } };
console.log(levelOrder(levelOrderTree)); // Output: [[3],[9,20],[15,7]]
