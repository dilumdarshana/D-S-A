/**
 * Graph BFS — Breadth-First Search using a Queue
 *
 * Visits nodes level by level. Good for shortest path in unweighted graphs.
 * Time: O(V + E), Space: O(V)
 */

// adjacency list
const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

function bfs(start: string, target: string): boolean {
  const visited = new Set<string>();
  const queue: string[] = [start];

  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node === target) return true;

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return false;
}

console.log(bfs("A", "F")); // true
console.log(bfs("A", "Z")); // false
