function numUniqueEmails(emails) {
  const seen = new Set();
  for (const email of emails) {
      const [local, domain] = email.split('@');
      const normalizedLocal = local.split('+')[0].replace(/\./g, '');
      seen.add(`${normalizedLocal}@${domain}`);
  }
  return seen.size;
}
// Test
console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"])); // Output: 2
