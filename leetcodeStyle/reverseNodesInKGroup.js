class ListNode {
  constructor(val, next = null) {
      this.val = val;
      this.next = next;
  }
}

function reverseKGroup(head, k) {
  if (!head || k === 1) return head;
  const dummy = new ListNode(0);
  dummy.next = head;
  
  let prev = dummy;
  while (prev) {
      prev = reverseNextK(prev, k);
  }
  
  return dummy.next;
}

function reverseNextK(prev, k) {
  let last = prev;
  for (let i = 0; i <= k; i++) {
      last = last.next;
      if (i !== k && !last) return null;
  }
  
  const tail = prev.next;
  let curr = prev.next.next;
  while (curr !== last) {
      const next = curr.next;
      curr.next = prev.next;
      prev.next = curr;
      curr = next;
  }
  
  tail.next = last;
  return tail;
}
