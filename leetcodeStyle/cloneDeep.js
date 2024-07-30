function cloneDeep(value) {
  if (typeof value !== 'object' || value === null) {
      return value;
  }
  if (Array.isArray(value)) {
      return value.map(cloneDeep);
  }
  const result = {};
  for (const key in value) {
      result[key] = cloneDeep(value[key]);
  }
  return result;
}
// Test
const objects = [{ 'a': 1 }, { 'b': 2 }];
const deep = cloneDeep(objects);
console.log(deep[0] === objects[0]); // Output: false
