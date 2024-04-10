function insertionSortList(head) {
  const dummy = new ListNode();
  let current = head;
  let prev = dummy;
  while (current) {
      let nextNode = current.next;
      while (prev.next && prev.next.val < current.val) {
          prev = prev.next;
      }
      current.next = prev.next;
      prev.next = current;
      prev = dummy;
      current = nextNode;
  }
  return dummy.next;
}
