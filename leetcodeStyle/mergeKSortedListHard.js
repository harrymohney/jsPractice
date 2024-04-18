function mergeKLists(lists) {
  if (lists.length === 0) return null;
  return mergeLists(lists, 0, lists.length - 1);
}

function mergeLists(lists, start, end) {
  if (start === end) return lists[start];
  const mid = Math.floor((start + end) / 2);
  const left = mergeLists(lists, start, mid);
  const right = mergeLists(lists, mid + 1, end);
  return merge(left, right);
}

function merge(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
      list1.next = merge(list1.next, list2);
      return list1;
  } else {
      list2.next = merge(list1, list2.next);
      return list2;
  }
}
