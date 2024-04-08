function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;
  
  let len = 1;
  let tail = head;
  while (tail.next) {
      len++;
      tail = tail.next;
  }
  k = k % len;
  if (k === 0) return head;
  
  let newTail = head;
  for (let i = 0; i < len - k - 1; i++) {
      newTail = newTail.next;
  }
  
  const newHead = newTail.next;
  newTail.next = null;
  tail.next = head;
  
  return newHead;
}
