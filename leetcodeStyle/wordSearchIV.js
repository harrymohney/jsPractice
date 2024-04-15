function findWords(board, words) {
  const trie = buildTrie(words);
  const result = [];
  const dfs = (node, i, j) => {
      if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] === '#') return;
      const char = board[i][j];
      if (!node.children.has(char)) return;
      const nextNode = node.children.get(char);
      if (nextNode.word !== null) {
          result.push(nextNode.word);
          nextNode.word = null;
      }
      board[i][j] = '#';
      dfs(nextNode, i + 1, j);
      dfs(nextNode, i - 1, j);
      dfs(nextNode, i, j + 1);
      dfs(nextNode, i, j - 1);
      board[i][j] = char;
  };
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          dfs(trie, i, j);
      }
  }
  return result;
}

class TrieNode {
  constructor() {
      this.children = new Map();
      this.word = null;
  }
}

function buildTrie(words) {
  const root = new TrieNode();
  for (const word of words) {
      let node = root;
      for (const char of word) {
          if (!node.children.has(char)) {
              node.children.set(char, new TrieNode());
          }
          node = node.children.get(char);
      }
      node.word = word;
  }
  return root;
}
