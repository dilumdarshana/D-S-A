/**
 * Graph DFS — Depth-First Search using recursion (implicit stack)
 *
 * Explores as deep as possible before backtracking.
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

function dfs(node: string, target: string, visited = new Set<string>()): boolean {
  if (node === target) return true;

  visited.add(node);

  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      if (dfs(neighbor, target, visited)) return true;
    }
  }

  return false;
}

console.log(dfs("A", "F")); // true
console.log(dfs("A", "Z")); // false
