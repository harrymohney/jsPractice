function shortestPalindrome(s) {
  const rev_s = s.split('').reverse().join('');
  const new_s = s + '#' + rev_s;
  const kmp = new Array(new_s.length).fill(0);
  for (let i = 1; i < new_s.length; i++) {
      let j = kmp[i - 1];
