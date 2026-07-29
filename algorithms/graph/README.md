# Graph Algorithms

## What it is
Graphs model relationships between entities (nodes connected by edges). Graph algorithms traverse or search this structure.

## When to use
- Problems involving networks (social, road, communication)
- Relationships between objects (friends, dependencies, routes)
- Pathfinding, connectivity, cycle detection, topological ordering

## How it works
Two fundamental traversals:
- **BFS** (Queue): explores neighbors first → shortest path in unweighted graphs
- **DFS** (Stack/Recursion): explores as deep as possible first → connectivity, cycle detection

## Variations
- **Adjacency list**: each vertex stores a list of neighbors (efficient for sparse graphs)
- **Adjacency matrix**: V×V boolean matrix (fast edge lookup, expensive memory)
- **Weighted graphs**: edges have weights → Dijkstra, Bellman-Ford

## Complexity

| Traversal | Time | Space |
|-----------|------|-------|
| BFS | O(V + E) | O(V) |
| DFS | O(V + E) | O(V) |

## Examples
- `ts/bfs.ts` — graph BFS to find a target node
- `ts/dfs.ts` — graph DFS to find a target node
