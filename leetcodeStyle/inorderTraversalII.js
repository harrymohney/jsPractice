function inorderTraversal(root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current !== null || stack.length !== 0) {
      while (current !== null) {
          stack.push(current);
          current = current.left;
      }
      current = stack.pop();
      result.push(current.val);
      current = current.right;
  }
  return result;
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

// Test
const tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);
console.log(inorderTraversal(tree)); // Output: [1, 3, 2]
