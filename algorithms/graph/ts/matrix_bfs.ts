/**
 * Matrix BFS — search/process a 2D grid.
 *
 * Common problems: number of islands, flood fill, shortest path in a grid.
 * Time: O(m * n), Space: O(m * n)
 */

// directions: up, down, left, right
const DIRS: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];

// Count islands (connected groups of 1s)
function numIslands(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) {
        count++;
        bfs(grid, r, c);
      }
    }
  }

  return count;
}

// BFS to mark all cells of an island as visited
function bfs(grid: number[][], startR: number, startC: number): void {
  const queue: [number, number][] = [[startR, startC]];
  grid[startR][startC] = 0; // mark visited in-place

  while (queue.length > 0) {
    const [r, c] = queue.shift()!;

    for (const [dr, dc] of DIRS) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === 1) {
        grid[nr][nc] = 0;
        queue.push([nr, nc]);
      }
    }
  }
}

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

console.log(numIslands(grid)); // 3
