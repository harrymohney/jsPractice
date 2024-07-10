function reverseList(head) {
  let prev = null, current = head;
  while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }
  return prev;
}
// Test
const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
console.log(reverseList(list)); // Output: Reversed linked list
