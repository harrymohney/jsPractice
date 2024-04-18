function removeDuplicateLetters(s) {
  const count = Array(26).fill(0);
  const visited = Array(26).fill(false);
  const stack = [];
  for (const char of s) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  for (const char of s) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      count[index]--;
      if (visited[index]) continue;
      while (stack.length && stack[stack.length - 1] > char && count[stack[stack.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
          visited[stack.pop().charCodeAt(0) - 'a'.charCodeAt(0)] = false;
      }
      stack.push(char);
      visited[index] = true;
  }
  return stack.join('');
}
