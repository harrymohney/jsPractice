class TrieNode {
  constructor() {
      this.children = {};
      this.word = null;
  }
}

function buildTrie(words) {
  const root = new TrieNode();
  for (let word of words) {
      let node = root;
      for (let char of word) {
          if (!node.children[char]) {
              node.children[char] = new TrieNode();
          }
          node = node.children[char];
      }
      node.word = word;
  }
  return root;
}

function findWords(board, words) {
  const result = [];
  const trie = buildTrie(words);
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  
  function dfs(row, col, node) {
      const char = board[row][col];
      const nextNode = node.children[char];
      if (!nextNode) return;
      if (nextNode.word) {
          result.push(nextNode.word);
          nextNode.word = null;
      }
      
      board[row][col] = '#';
      for (const [dx, dy] of directions) {
          const newRow = row + dx;
          const newCol = col + dy;
          if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length) {
              dfs(newRow, newCol, nextNode);
          }
      }
      board[row][col] = char;
  }
  
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          dfs(i, j, trie);
      }
  }
  
  return result;
}
