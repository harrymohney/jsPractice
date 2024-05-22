function isValidSudoku(board) {
  const isValid = (arr) => {
      const set = new Set();
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== '.') {
              if (set.has(arr[i])) return false;
              set.add(arr[i]);
          }
      }
      return true;
  };
  for (let i = 0; i < 9; i++) {
      if (!isValid(board[i])) return false;
      const col = [];
      for (let j = 0; j < 9; j++) {
          col.push(board[j][i]);
      }
      if (!isValid(col)) return false;
  }
  for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
          const box = [];
          for (let x = i; x < i + 3; x++) {
              for (let y = j; y < j + 3; y++) {
                  box.push(board[x][y]);
              }
          }
          if (!isValid(box)) return false;
      }
  }
  return true;
}
// Test
const sudokuBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
console.log(isValidSudoku(sudokuBoard)); // Output: true
