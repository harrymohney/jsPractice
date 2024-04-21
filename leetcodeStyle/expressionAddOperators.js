function addOperators(num, target) {
  const res = [];
  const dfs = (index, prevOperand, currOperand, value, path) => {
      if (index === num.length) {
          if (value === target && currOperand === 0) {
              res.push(path.slice(1).join(''));
          }
          return;
      }
      currOperand = currOperand * 10 + Number(num[index]);
      const currStr = currOperand.toString();
      if (currOperand > 0) {
          dfs(index + 1, prevOperand, currOperand, value, [...path, '+' + currStr]);
          dfs(index + 1, prevOperand, -currOperand, value, [...path, '-' + currStr]);
          dfs(index + 1, prevOperand * currOperand, 0, value + prevOperand * (currOperand - 1), [...path, '*' + currStr]);
      } else {
          dfs(index + 1, prevOperand, 0, value + prevOperand * currOperand, [...path, currStr]);
      }
  };
  dfs(0, 0, 0, 0, []);
  return res;
}
