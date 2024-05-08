function removeInvalidParentheses(s) {
  const result = [];
  const queue = [s];
  const visited = new Set();
  let found = false;

  while (queue.length > 0) {
      const current = queue.shift();

      if (isValid(current)) {
          result.push(current);
          found = true;
      }

      if (found) continue;

      for (let i = 0; i < current.length; i++) {
          if (current[i] !== '(' && current[i] !== ')') continue;

          const next = current.slice(0, i) + current.slice(i + 1);
          if (!visited.has(next)) {
              queue.push(next);
              visited.add(next);
          }
      }
  }

  return result;
}

function isValid(s) {
  let count = 0;
  for (const char of s) {
      if (char === '(') {
          count++;
      } else if (char === ')') {
          count--;
      }
      if (count < 0) return false;
  }
  return count === 0;
}
