class Queue {
  private queue: number[];

  constructor() {
    this.queue = [];
  }

  push(value: number): void {
    this.queue.push(value);
  }

  pop(): number | null | undefined {
    if (this.isEmpty()) return null;

    const popped = this.queue[0];

    for (let i = 0; i < this.size(); i++) {
      this.queue[i] = this.queue[i + 1];
    }
    this.queue.length = this.queue.length - 1;

    return popped;
  }

  peak(): number | null {
    if (this.isEmpty()) return null;

    return this.queue[0];
  }

  size(): number {
    return this.queue.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  print(): string {
    let out = '';

    for (let i of this.queue) {
      out += i + ' ';
    }

    return out;
  }
}

// create object and test methods
const queue = new Queue();

queue.push(1);
queue.push(2);

// console.log(queue.peak());

queue.pop();

console.log(queue.print());
