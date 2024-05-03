function maxLength(arr) {
  const isValid = (str) => {
      const set = new Set();
      for (const char of str) {
          if (set.has(char)) return false;
          set.add(char);
      }
      return true;
  };

  const backtrack = (index, current) => {
      if (index === arr.length) {
          return isValid(current) ? current.length : 0;
      }

      const include = isValid(current + arr[index]) ? backtrack(index + 1, current + arr[index]) : 0;
      const exclude = backtrack(index + 1, current);

      return Math.max(include, exclude);
  };

  return backtrack(0, "");
}
