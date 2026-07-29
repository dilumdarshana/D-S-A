/**
 * Union-Find (Disjoint Set) — track connected components.
 *
 * Operations:
 *   - find(x): identify which component x belongs to
 *   - union(x, y): merge the components of x and y
 * Uses path compression + union by rank for near-O(1) amortized time.
 */

class UnionFind {
  private parent: number[];
  private rank: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // path compression
    }
    return this.parent[x];
  }

  union(x: number, y: number): void {
    const px = this.find(x);
    const py = this.find(y);
    if (px === py) return;

    // union by rank
    if (this.rank[px] < this.rank[py]) {
      this.parent[px] = py;
    } else if (this.rank[px] > this.rank[py]) {
      this.parent[py] = px;
    } else {
      this.parent[py] = px;
      this.rank[px]++;
    }
  }

  connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }
}

const uf = new UnionFind(6);
uf.union(0, 1);
uf.union(1, 2);
uf.union(3, 4);

console.log(uf.connected(0, 2)); // true
console.log(uf.connected(0, 3)); // false

uf.union(2, 3);
console.log(uf.connected(0, 3)); // true
console.log(uf.find(4));         // 3 (or 0 depending on rank)
