function reverseBetween(head, m, n) {
  if (!head || m === n) return head;
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  for (let i = 1; i < m; i++) {
      prev = prev.next;
  }
  let current = prev.next;
  for (let i = m; i < n; i++) {
      const nextNode = current.next;
      current.next = nextNode.next;
      nextNode.next = prev.next;
      prev.next = nextNode;
  }
  return dummy.next;
}
