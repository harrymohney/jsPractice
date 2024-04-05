function isPalindrome(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }
  let prev = null;
  while (slow !== null) {
      const next = slow.next;
      slow.next = prev;
      prev = slow;
      slow = next;
  }
  let first = head;
  let second = prev;
  while (second !== null) {
      if (first.val !== second.val) return false;
      first = first.next;
      second = second.next;
  }
  return true;
}
