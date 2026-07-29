/**
 * Dijkstra — shortest path in a weighted graph (non-negative edges).
 *
 * Uses a priority queue (simple array-based here for clarity).
 * Time: O((V + E) log V) with binary heap, O(V²) with array scan
 */

interface Edge {
  to: string;
  weight: number;
}

type Graph = Map<string, Edge[]>;

function dijkstra(graph: Graph, start: string): Map<string, number> {
  const dist = new Map<string, number>();
  const visited = new Set<string>();

  for (const v of graph.keys()) dist.set(v, Infinity);
  dist.set(start, 0);

  // simple array-based priority queue (extract min via linear scan)
  const unvisited = new Set(graph.keys());

  while (unvisited.size > 0) {
    // find unvisited node with smallest distance
    let curr: string | null = null;
    let minDist = Infinity;
    for (const v of unvisited) {
      const d = dist.get(v)!;
      if (d < minDist) {
        minDist = d;
        curr = v;
      }
    }
    if (curr === null || minDist === Infinity) break;

    unvisited.delete(curr);
    visited.add(curr);

    for (const { to, weight } of graph.get(curr) ?? []) {
      if (visited.has(to)) continue;
      const newDist = dist.get(curr)! + weight;
      if (newDist < dist.get(to)!) dist.set(to, newDist);
    }
  }

  return dist;
}

//   A ---4--- B
//   |         |
//   2         1
//   |         |
//   C ---3--- D
const graph: Graph = new Map();
graph.set("A", [{ to: "B", weight: 4 }, { to: "C", weight: 2 }]);
graph.set("B", [{ to: "A", weight: 4 }, { to: "D", weight: 1 }]);
graph.set("C", [{ to: "A", weight: 2 }, { to: "D", weight: 3 }]);
graph.set("D", [{ to: "B", weight: 1 }, { to: "C", weight: 3 }]);

const distances = dijkstra(graph, "A");
console.log(Object.fromEntries(distances));
// { A: 0, B: 4, C: 2, D: 5 }
