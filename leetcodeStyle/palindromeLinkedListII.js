function isPalindrome(head) {
  let fast = head;
  let slow = head;
  const stack = [];
  while (fast !== null && fast.next !== null) {
      stack.push(slow.val);
      slow = slow.next;
      fast = fast.next.next;
  }
  if (fast !== null) slow = slow.next;
  while (slow !== null) {
      if (stack.pop() !== slow.val) return false;
      slow = slow.next;
  }
  return true;
}
// Test
const palindromeList = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(palindromeList)); // Output: true
