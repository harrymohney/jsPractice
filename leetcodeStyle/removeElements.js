function removeElements(head, val) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;
  while (current.next) {
      if (current.next.val === val) {
          current.next = current.next.next;
      } else {
          current = current.next;
      }
  }
  return dummy.next;
}
// Test
const linkedList = { val: 1, next: { val: 2, next: { val: 6, next: { val: 3, next: { val: 4, next: { val: 5, next: { val: 6, next: null } } } } } } };
console.log(removeElements(linkedList, 6)); // Output: Linked list without value 6
