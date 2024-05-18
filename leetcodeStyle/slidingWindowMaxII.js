function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = [];
  
  for (let i = 0; i < nums.length; i++) {
      // Remove elements not within the window
      if (deque.length && deque[0] < i - k + 1) {
          deque.shift();
      }
      
      // Remove elements from deque that are less than the current element
      while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
          deque.pop();
      }
      
      deque.push(i);
      
      // Push the maximum for the current window
      if (i >= k - 1) {
          result.push(nums[deque[0]]);
      }
  }
  
  return result;
}
