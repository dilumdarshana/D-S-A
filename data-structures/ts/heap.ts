// MinHeap — complete binary tree where parent ≤ children
// Backed by an array: left child at 2i+1, right child at 2i+2

class MinHeap {
  private heap: number[] = [];

  insert(val: number): void {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin(): number | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);
    return min;
  }

  peek(): number | undefined {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }

  private bubbleUp(idx: number): void {
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] <= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  private bubbleDown(idx: number): void {
    const last = this.heap.length - 1;

    while (true) {
      let smallest = idx;
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;

      if (left <= last && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right <= last && this.heap[right] < this.heap[smallest]) smallest = right;
      if (smallest === idx) break;

      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }
}

const heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(8);
heap.insert(1);
heap.insert(2);

console.log(heap.extractMin()); // 1
console.log(heap.extractMin()); // 2
console.log(heap.extractMin()); // 3
console.log(heap.extractMin()); // 5
console.log(heap.extractMin()); // 8
