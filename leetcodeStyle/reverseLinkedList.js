function reverseList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
      const nextTemp = current.next;
      current.next = prev;
      prev = current;
      current = nextTemp;
  }
  return prev;
}
