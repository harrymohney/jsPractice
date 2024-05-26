function swapPairs(head) {
  if (!head || !head.next) return head;
  const newHead = head.next;
  head.next = swapPairs(head.next.next);
  newHead.next = head;
  return newHead;
}

class ListNode {
  constructor(val, next = null) {
      this.val = val;
      this.next = next;
  }
}

// Test
const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
let swapped = swapPairs(list);
while (swapped) {
  console.log(swapped.val); // Output: 2 1 4 3
  swapped = swapped.next;
}
