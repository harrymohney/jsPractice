function subdomainVisits(cpdomains) {
  const count = {};
  for (const cpdomain of cpdomains) {
      const [num, domain] = cpdomain.split(' ');
      const frags = domain.split('.');
      for (let i = 0; i < frags.length; i++) {
          const subdomain = frags.slice(i).join('.');
          count[subdomain] = (count[subdomain] || 0) + parseInt(num);
      }
  }
  return Object.entries(count).map(([domain, num]) => `${num} ${domain}`);
}
// Test
console.log(subdomainVisits(["9001 discuss.leetcode.com"])); // Output: ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
