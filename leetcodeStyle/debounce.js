function debounce(func, wait) {
  let timeout;
  return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
// Test
const log = () => console.log('Called!');
const debouncedLog = debounce(log, 1000);
debouncedLog();
debouncedLog();
debouncedLog(); // Only this call will log 'Called!' after 1 second
