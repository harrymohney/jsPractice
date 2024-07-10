function isPalindrome(head) {
  let fast = head, slow = head;
  const stack = [];
  while (fast && fast.next) {
      stack.push(slow.val);
      slow = slow.next;
      fast = fast.next.next;
  }
  if (fast) slow = slow.next;
  while (slow) {
      if (slow.val !== stack.pop()) return false;
      slow = slow.next;
  }
  return true;
}
// Test
const palindromeList = { val: 1, next: { val: 2, next: { val: 2, next: { val: 1, next: null } } } };
console.log(isPalindrome(palindromeList)); // Output: true
