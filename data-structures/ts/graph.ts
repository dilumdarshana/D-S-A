// Graph — adjacency list representation

class Graph {
  private adj: Map<string, string[]> = new Map();

  addVertex(v: string): void {
    if (!this.adj.has(v)) this.adj.set(v, []);
  }

  addEdge(v1: string, v2: string, undirected = true): void {
    this.adj.get(v1)?.push(v2);
    if (undirected) this.adj.get(v2)?.push(v1);
  }

  getNeighbors(v: string): string[] {
    return this.adj.get(v) ?? [];
  }

  print(): void {
    for (const [v, neighbors] of this.adj) {
      console.log(`${v} -> ${neighbors.join(", ")}`);
    }
  }
}

//   A — B
//   |   |
//   C — D
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.print();
// A -> B, C
// B -> A, D
// C -> A, D
// D -> B, C
