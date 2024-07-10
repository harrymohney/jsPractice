function getIntersectionNode(headA, headB) {
  let a = headA, b = headB;
  while (a !== b) {
      a = a ? a.next : headB;
      b = b ? b.next : headA;
  }
  return a;
}
// Test
const intersectedNode = { val: 8, next: { val: 4, next: { val: 5, next: null } } };
const headA = { val: 4, next: { val: 1, next: intersectedNode } };
const headB = { val: 5, next: { val: 6, next: { val: 1, next: intersectedNode } } };
console.log(getIntersectionNode(headA, headB)); // Output: Intersection node
