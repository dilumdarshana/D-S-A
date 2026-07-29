/**
 * Topological Sort — order vertices so that for every edge u → v, u comes before v.
 *
 * Two approaches:
 *   1. DFS with post-order (reverse of finish times)
 *   2. Kahn's algorithm (BFS with indegree tracking)
 *
 * Only works on DAGs (Directed Acyclic Graphs).
 */

// adjacency list
const graph: Record<string, string[]> = {
  A: ["C"],
  B: ["C", "D"],
  C: ["E"],
  D: ["F"],
  E: ["F"],
  F: [],
};

// 1. DFS-based topological sort
function topoSortDFS(graph: Record<string, string[]>): string[] {
  const visited = new Set<string>();
  const stack: string[] = [];

  function dfs(v: string) {
    if (visited.has(v)) return;
    visited.add(v);

    for (const neighbor of graph[v]) {
      dfs(neighbor);
    }

    stack.push(v); // post-order
  }

  for (const v of Object.keys(graph)) {
    dfs(v);
  }

  return stack.reverse();
}

// 2. Kahn's algorithm (BFS)
function topoSortKahn(graph: Record<string, string[]>): string[] {
  const indegree: Record<string, number> = {};
  for (const v of Object.keys(graph)) indegree[v] = 0;

  for (const v of Object.keys(graph)) {
    for (const neighbor of graph[v]) {
      indegree[neighbor] = (indegree[neighbor] || 0) + 1;
    }
  }

  const queue: string[] = [];
  for (const v of Object.keys(indegree)) {
    if (indegree[v] === 0) queue.push(v);
  }

  const result: string[] = [];
  while (queue.length > 0) {
    const v = queue.shift()!;
    result.push(v);

    for (const neighbor of graph[v]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return result;
}

console.log(topoSortDFS(graph));   // [B, D, A, C, E, F]
console.log(topoSortKahn(graph));  // [B, A, D, C, E, F]
