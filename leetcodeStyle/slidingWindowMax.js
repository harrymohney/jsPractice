function maxSlidingWindow(nums, k) {
  if (nums.length === 0) return [];
  const result = [];
  const deque = [];
  for (let i = 0; i < nums.length; i++) {
      while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
          deque.pop();
      }
      deque.push(i);
      if (i - deque[0] >= k) {
          deque.shift();
      }
      if (i >= k - 1) {
          result.push(nums[deque[0]]);
      }
  }
  return result;
}
