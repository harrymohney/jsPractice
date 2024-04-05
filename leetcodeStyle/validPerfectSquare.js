function isPerfectSquare(num) {
  let left = 1, right = Math.floor(num / 2) + 1;
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const square = mid * mid;
      if (square === num) return true;
      if (square < num) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return false;
}
