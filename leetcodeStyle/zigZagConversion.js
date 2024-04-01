function convert(s, numRows) {
  if (numRows === 1) return s;
  const rows = Array.from({ length: Math.min(numRows, s.length) }, () => '');
  let currentRow = 0, goingDown = false;
  for (let char of s) {
      rows[currentRow] += char;
      if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
      currentRow += goingDown ? 1 : -1;
  }
  return rows.join('');
}
