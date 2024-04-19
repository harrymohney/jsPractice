function strobogrammaticInRange(low, high) {
  const strobos = ['00', '11', '69', '96', '88'];
  let count = 0;
  const dfs = (left, right, path) => {
      if (left > right) {
          if ((path.length === low.length && path < low) || (path.length === high.length && path > high)) return;
          if (!(path.length > 1 && path[0] === '0')) count++;
          return;
      }
      for (const st of strobos) {
          if (left === right && st[0] !== st[1]) continue;
          dfs(left + 1, right - 1, st[0] + path + st[1]);
      }
  };
  for (let len = low.length; len <= high.length; len++) {
      if (len === low.length || len === high.length) {
          dfs(0, len - 1, '');
      } else {
          count += 4 * Math.pow(5, len - 2);
      }
  }
  return count;
}
