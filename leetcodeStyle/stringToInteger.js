function myAtoi(s) {
  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = -(2 ** 31);
  let i = 0, sign = 1, result = 0;
  while (s[i] === ' ') {
      i++;
  }
  if (s[i] === '+' || s[i] === '-') {
      sign = s[i++] === '+' ? 1 : -1;
  }
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
      result = result * 10 + (s[i] - '0');
      if (sign === 1 && result > MAX_INT) return MAX_INT;
      if (sign === -1 && result > -MIN_INT) return MIN_INT;
      i++;
  }
  return result * sign;
}
