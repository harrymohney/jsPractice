function numUniqueEmails(emails) {
  const uniqueEmails = new Set();
  for (const email of emails) {
      const [local, domain] = email.split('@');
      const normalizedLocal = local.split('+')[0].replace(/\./g, '');
      uniqueEmails.add(`${normalizedLocal}@${domain}`);
  }
  return uniqueEmails.size;
}
// Test
console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])); // Output: 2
