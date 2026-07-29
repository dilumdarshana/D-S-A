/**
 * Fast & Slow Pointer — detect a cycle in a linked list.
 *
 * Technique: move slow by 1 step, fast by 2 steps.
 * If they meet, a cycle exists.
 * Time: O(n), Space: O(1)
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

// list: 1 -> 2 -> 3 -> 4 -> 2 (cycle)
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // cycle

console.log(hasCycle(node1)); // true

// no cycle
const linear = new ListNode(1);
linear.next = new ListNode(2);
linear.next.next = new ListNode(3);

console.log(hasCycle(linear)); // false
