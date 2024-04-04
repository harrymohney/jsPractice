function mergeTwoLists(l1, l2) {
  const dummyHead = new ListNode(-1);
  let current = dummyHead;
  while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
          current.next = l1;
          l1 = l1.next;
      } else {
          current.next = l2;
          l2 = l2.next;
      }
      current = current.next;
  }
  current.next = l1 !== null ? l1 : l2;
  return dummyHead.next;
}
