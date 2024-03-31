function mergeKLists(lists) {
  if (lists.length === 0) return null;
  while (lists.length > 1) {
      const first = lists.shift();
      const second = lists.shift();
      lists.push(mergeTwoLists(first, second));
  }
  return lists[0];
}
