# Stacks & Queues

## What it is
Two fundamental container types that restrict how elements are added and removed.

| Structure | Order | Analogy |
|-----------|-------|---------|
| **Stack** | LIFO (Last In, First Out) | Stack of plates |
| **Queue** | FIFO (First In, First Out) | Line at a counter |

## When to use
**Stack**:
- Undo/redo operations
- Parsing expressions (parentheses matching)
- DFS / backtracking (explicit stack)
- Reversing elements

**Queue**:
- BFS (level-order traversal)
- Task scheduling / producer-consumer
- Request buffering

## How it works
**Stack operations** (all O(1)): `push` (add top), `pop` (remove top), `peek` (view top)

**Queue operations**: `enqueue` (add rear), `dequeue` (remove front), `peek` (view front)

## Variations
- **Deque** (double-ended queue): push/pop from both ends
- **Priority queue**: elements ordered by priority, not insertion order
- **Circular queue**: fixed-size queue that reuses slots

## Complexity

| Operation | Stack | Queue (array) | Queue (linked) |
|-----------|-------|---------------|----------------|
| Push/Enqueue | O(1) | O(1) | O(1) |
| Pop/Dequeue | O(1) | O(n) | O(1) |
| Peek | O(1) | O(1) | O(1) |

## Examples
- `ts/stack.ts` — Stack class with push, pop, peek, clear, isEmpty, size
- `ts/queue.ts` — Queue class with push, pop, peek, isEmpty, size
