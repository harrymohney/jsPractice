function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(-1);
  let current = dummy;
  while (l1 && l2) {
      if (l1.val <= l2.val) {
          current.next = l1;
          l1 = l1.next;
      } else {
          current.next = l2;
          l2 = l2.next;
      }
      current = current.next;
  }
  current.next = l1 || l2;
  return dummy.next;
}
// Test
const list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
console.log(mergeTwoLists(list1, list2)); // Output: Merged list
