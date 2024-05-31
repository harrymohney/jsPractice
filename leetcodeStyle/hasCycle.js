function hasCycle(head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
      if (!fast || !fast.next) return false;
      slow = slow.next;
      fast = fast.next.next;
  }
  return true;
}
// Test
const cycleList = new ListNode(3);
cycleList.next = new ListNode(2, new ListNode(0, new ListNode(-4, cycleList.next)));
console.log(hasCycle(cycleList)); // Output: true
