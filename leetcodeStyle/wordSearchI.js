class TrieNode {
  constructor() {
      this.children = {};
      this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
      this.root = new TrieNode();
  }
  
  insert(word) {
      let node = this.root;
      for (const char of word) {
          if (!node.children[char]) {
              node.children[char] = new TrieNode();
          }
          node = node.children[char];
      }
      node.isEndOfWord = true;
  }
}

function findWords(board, words) {
  const trie = new Trie();
  for (const word of words) {
      trie.insert(word);
  }
  
  const result = [];
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  function backtrack(node, x, y, path) {
      if (node.isEndOfWord) {
          result.push(path);
          node.isEndOfWord = false; // Mark as visited
      }
      
      if (x < 0 || x >= board.length || y < 0 || y >= board[0].length || !node.children[board[x][y]]) {
          return;
      }
      
      const char = board[x][y];
      board[x][y] = '#'; // Mark as visited
      
      for (const [dx, dy] of directions) {
          backtrack(node.children[char], x + dx, y + dy, path + char);
      }
      
      board[x][y] = char; // Reset
  }
  
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          backtrack(trie.root, i, j, '');
      }
  }
  
  return result;
}
