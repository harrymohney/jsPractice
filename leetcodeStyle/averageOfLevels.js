function averageOfLevels(root) {
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
      const levelSize = queue.length;
      let levelSum = 0;
      for (let i = 0; i < levelSize; i++) {
          const node = queue.shift();
          levelSum += node.val;
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      result.push(levelSum / levelSize);
  }
  return result;
}
// Test
const tree3 = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null }
  }
};
console.log(averageOfLevels(tree3)); // Output: [3, 14.5, 11]
