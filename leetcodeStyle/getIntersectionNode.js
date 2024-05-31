function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;
  let a = headA;
  let b = headB;
  while (a !== b) {
      a = a === null ? headB : a.next;
      b = b === null ? headA : b.next;
  }
  return a;
}
// Test
const intersectedList = new ListNode(8, new ListNode(4, new ListNode(5)));
const headA = new ListNode(4, new ListNode(1, intersectedList));
const headB = new ListNode(5, new ListNode(6, new ListNode(1, intersectedList)));
console.log(getIntersectionNode(headA, headB).val); // Output: 8
