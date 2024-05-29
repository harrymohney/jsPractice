function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

// Test
const tree = sortedArrayToBST([-10, -3, 0, 5, 9]);
const inorder = (root) => {
  if (!root) return [];
  return [...inorder(root.left), root.val, ...inorder(root.right)];
};
console.log(inorder(tree)); // Output: [-10, -3, 0, 5, 9]
