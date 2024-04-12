function mergeKLists(lists) {
  if (lists.length === 0) return null;
  return mergeLists(lists, 0, lists.length - 1);
}

function mergeLists(lists, left, right) {
  if (left === right) return lists[left];
  const mid = Math.floor((left + right) / 2);
  const l1 = mergeLists(lists, left, mid);
  const l2 = mergeLists(lists, mid + 1, right);
  return mergeTwoLists(l1, l2);
}

function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
}
