function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
  }
  return false;
}
// Test
const cycleList = { val: 3, next: { val: 2, next: { val: 0, next: { val: -4, next: null } } } };
cycleList.next.next.next.next = cycleList.next;
console.log(hasCycle(cycleList)); // Output: true
