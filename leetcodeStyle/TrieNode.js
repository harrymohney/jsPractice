class TrieNode {
  constructor() {
      this.children = {};
      this.isWord = false;
  }
}
function findWords(board, words) {
  const root = new TrieNode();
  for (const word of words) {
      let node = root;
      for (const char of word) {
          if (!node.children[char]) node.children[char] = new TrieNode();
          node = node.children[char];
      }
      node.isWord = true;
  }
  const result = [];
  function dfs(i, j, node, str) {
      if (node.isWord) {
          result.push(str);
          node.isWord = false;
      }
      if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || !node.children[board[i][j]]) return;
      const char = board[i][j];
      board[i][j] = '#';
      for (const [dx, dy] of [[0,1], [1,0], [0,-1], [-1,0]]) dfs(i + dx, j + dy, node.children[char], str + char);
      board[i][j] = char;
  }
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (root.children[board[i][j]]) dfs(i, j, root, '');
      }
  }
  return result;
}
// Test
const board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
];
const words = ["oath","pea","eat","rain"];
console.log(findWords(board, words)); // Output: ["oath","eat"]
