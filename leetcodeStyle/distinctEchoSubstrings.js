function distinctEchoSubstrings(text) {
  const n = text.length;
  const mod = 10 ** 9 + 7;
  const seen = new Set();
  for (let i = 0; i < n; i++) {
      let hash = 0, base = 1;
      for (let j = i; j < n; j++) {
          const offset = text.charCodeAt(j) - 'a'.charCodeAt(0);
          hash = (hash * 26 + offset) % mod;
          base = (base * 26) % mod;
          if (j - i + 1 > 1 && (j - i + 1) % 2 === 0) {
              const mid = (j - i + 1) / 2;
              const leftHash = hash % base;
              const rightHash = (hash - leftHash * Math.pow(26, mid) % mod + mod) % mod;
              if (leftHash === rightHash) {
                  seen.add(text.substring(i, j + 1));
              }
          }
      }
  }
  return seen.size;
}
