function largestTimeFromDigits(A) {
  const permutations = permute(A);
  let maxTime = '';
  for (const perm of permutations) {
      const [h1, h2, m1, m2] = perm;
      const hours = parseInt(`${h1}${h2}`);
      const minutes = parseInt(`${m1}${m2}`);
      if (hours < 24 && minutes < 60) {
          const time = `${h1}${h2}:${m1}${m2}`;
          if (time > maxTime) maxTime = time;
      }
  }
  return maxTime;

  function permute(nums) {
      const result = [];
      const used = Array(nums.length).fill(false);
      backtrack([]);
      return result;

      function backtrack(path) {
          if (path.length === nums.length) {
              result.push([...path]);
              return;
          }
          for (let i = 0; i < nums.length; i++) {
              if (!used[i]) {
                  used[i] = true;
                  path.push(nums[i]);
                  backtrack(path);
                  path.pop();
                  used[i] = false;
              }
          }
      }
  }
}
