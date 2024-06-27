function maxDepth(root) {
  if (!root) return 0;
  let depth = 0;
  for (const child of root.children) {
      depth = Math.max(depth, maxDepth(child));
  }
  return depth + 1;
}
// Test
const naryTree = { val: 1, children: [{ val: 3, children: [{ val: 5, children: [] }, { val: 6, children: [] }] }, { val: 2, children: [] }, { val: 4, children: [] }] };
console.log(maxDepth(naryTree)); // Output: 3
