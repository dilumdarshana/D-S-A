# Linked List

## What it is
A linear data structure where elements (nodes) are connected via pointers. Each node stores a value and a reference to the next node.

## When to use
- Frequent insertions/deletions at arbitrary positions (no shifting like arrays)
- Unknown or changing size
- Implementing stacks, queues, and adjacency lists

## How it works
- **Singly linked**: each node points to the next. Forward traversal only
- **Doubly linked**: each node points to both next and previous
- **Operations**: prepend/append (O(1) at head, O(n) at tail without tail pointer), insert/remove at index (O(n)), search (O(n))

## Variations
- **Singly linked list**: simplest form, one direction
- **Doubly linked list**: bidirectional traversal
- **Circular linked list**: tail points back to head
- **Fast & slow pointer**: detect cycles or find the middle

## Complexity

| Operation | Time |
|-----------|------|
| Access / Search | O(n) |
| Insert at head | O(1) |
| Insert at tail | O(n) (O(1) with tail pointer) |
| Delete | O(n) |

## Examples
- `ts/list.ts` — singly linked list with prepend, append, insert, remove, search, reverse
- `python/list.py` — singly linked list with remove middle
