function verifyPostorder(postorder) {
  const stack = [];
  let root = Number.MAX_SAFE_INTEGER;
  for (let i = postorder.length - 1; i >= 0; i--) {
      if (postorder[i] > root) return false;
      while (stack.length > 0 && stack[stack.length - 1] > postorder[i]) {
          root = stack.pop();
      }
      stack.push(postorder[i]);
  }
  return true;
}
// Test
console.log(verifyPostorder([1, 3, 2, 6, 5])); // Output: true
