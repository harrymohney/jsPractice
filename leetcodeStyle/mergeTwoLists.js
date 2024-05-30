function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;
  while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
          current.next = l1;
          l1 = l1.next;
      } else {
          current.next = l2;
          l2 = l2.next;
      }
      current = current.next;
  }
  current.next = l1 !== null ? l1 : l2;
  return dummy.next;
}
// Test
class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}
const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const merged = mergeTwoLists(l1, l2);
let curr = merged;
while (curr) {
  console.log(curr.val); // Output: 1 1 2 3 4 4
  curr = curr.next;
}
