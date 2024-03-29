function isPalindrome(x) {
  if (x < 0) return false;
  const reversed = parseInt(x.toString().split('').reverse().join(''));
  return x === reversed;
}
