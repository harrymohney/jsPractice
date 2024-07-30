function throttle(func, wait) {
  let lastCall = 0;
  return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall >= wait) {
          lastCall = now;
          func.apply(this, args);
      }
  };
}
// Test
const log = () => console.log('Called!');
const throttledLog = throttle(log, 1000);
throttledLog();
throttledLog();
throttledLog(); // Only the first call will log 'Called!' immediately
