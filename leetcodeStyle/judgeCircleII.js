function judgeCircle(moves) {
  let x = 0, y = 0;
  for (const move of moves) {
      if (move === 'U') y++;
      if (move === 'D') y--;
      if (move === 'L') x--;
      if (move === 'R') x++;
  }
  return x === 0 && y === 0;
}
// Test
console.log(judgeCircle("UD")); // Output: true
console.log(judgeCircle("LL")); // Output: false
