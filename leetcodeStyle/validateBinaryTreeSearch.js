class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function isValidBST(root) {
  return validate(root, -Infinity, Infinity);
}

function validate(node, min, max) {
  if (!node) return true;
  if (node.val <= min || node.val >= max) return false;
  return validate(node.left, min, node.val) && validate(node.right, node.val, max);
}
