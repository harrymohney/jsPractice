function canVisitAllRooms(rooms) {
  const visited = new Array(rooms.length).fill(false);
  function dfs(room) {
      if (visited[room]) return;
      visited[room] = true;
      for (const key of rooms[room]) {
          dfs(key);
      }
  }
  dfs(0);
  return visited.every(Boolean);
}
// Test
console.log(canVisitAllRooms([[1],[2],[3],[]])); // Output: true
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]])); // Output: false
