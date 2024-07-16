function findOrder(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const indegree = Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) {
      graph[b].push(a);
      indegree[a]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
      if (indegree[i] === 0) queue.push(i);
  }
  const result = [];
  while (queue.length) {
      const course = queue.shift();
      result.push(course);
      for (const nextCourse of graph[course]) {
          if (--indegree[nextCourse] === 0) queue.push(nextCourse);
      }
  }
  return result.length === numCourses ? result : [];
}
// Test
const numCourses = 4;
const prerequisites = [[1,0],[2,0],[3,1],[3,2]];
console.log(findOrder(numCourses, prerequisites)); // Output: [0,1,2,3]
