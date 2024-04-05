function checkValidString(s) {
  let minOpen = 0, maxOpen = 0;
  for (let char of s) {
      if (char === '(') {
          minOpen++;
          maxOpen++;
      } else if (char === ')') {
          minOpen = Math.max(minOpen - 1, 0);
          maxOpen--;
          if (maxOpen < 0) return false;
      } else { // char === '*'
          minOpen = Math.max(minOpen - 1, 0);
          maxOpen++;
      }
  }
  return minOpen === 0;
}
