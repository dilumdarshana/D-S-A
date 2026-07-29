# D-S-A

## What this is

Educational DSA practice repo. Standalone example scripts — no tests, no production code.

Key reference: [`BIG_O.md`](./BIG_O.md) — complexity tables for DS and algorithm patterns.

## Languages

- **TypeScript** — run with `npx tsx <file>` (or `npx ts-node` if `tsx` unavailable)
- **Python 3** — run with `python <file>`

No package manager, no build system, no lint/format config.

## Structure

```
algorithms/             — one subdirectory per pattern
  back-tracking/ts/     — DFS, BFS on trees
  binary-search/ts/
  divide-conquer/ts/    — fast exponentiation
  dynamic-programming/ts/
  graph/ts/             — BFS, DFS, Dijkstra, Union-Find, topo sort, matrix BFS
  greedy/ts/
  linked-list/ts/
  recursion/ts/
  sliding-window/ts/
  sorting/ts/           — bubble, insertion, selection, merge, quick
  stacks/ts/            — stack (LIFO), queue (FIFO)
  two-pointer/ts/
data-structures/  — built-in type usage and custom DS examples
  ts/             — array, map, set, stack, queue, binary_tree, bst, trie, heap, graph
  python/
```

## Conventions

- Each algorithm directory has a `README.md` explaining the pattern, when to use it, variations, and complexity
- Each file is a self-contained script — no modules, no imports from other files in the repo
- Verified by running the file and checking console output
- Code has minor typos (`Nood`, `dymmy`, `complexcity`) — do not "fix" them unless the task explicitly asks
