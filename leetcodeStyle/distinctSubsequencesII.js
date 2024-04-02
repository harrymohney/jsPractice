function distinctSubseqII(S) {
  const MOD = 1e9 + 7;
  const end = Array(26).fill(0);
  let result = 0;
  for (let i = 0; i < S.length; i++) {
      const x = S.charCodeAt(i) - 97;
      const newCount = (result * 2 % MOD + 1 - end[x] + MOD) % MOD;
      result = (result + newCount) % MOD;
      end[x] = (end[x] + newCount) % MOD;
  }
  return result;
}
