function deleteDuplicates(head) {
  const dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  let current = head;
  while (current !== null) {
      while (current.next !== null && current.val === current.next.val) {
          current = current.next;
      }
      if (prev.next === current) {
          prev = prev.next;
      } else {
          prev.next = current.next;
      }
      current = current.next;
  }
  return dummy.next;
}
