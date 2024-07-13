function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const indegree = Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) {
      graph[b].push(a);
      indegree[a]++;
  }
  const stack = [];
  for (let i = 0; i < numCourses; i++) {
      if (indegree[i] === 0) stack.push(i);
  }
  let count = 0;
  while (stack.length) {
      const course = stack.pop();
      count++;
      for (const nextCourse of graph[course]) {
          if (--indegree[nextCourse] === 0) stack.push(nextCourse);
      }
  }
  return count === numCourses;
}
// Test
const numCourses = 2;
const prerequisites = [[1,0]];
console.log(canFinish(numCourses, prerequisites)); // Output: true
