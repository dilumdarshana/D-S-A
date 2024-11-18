/**
 * Stacks are always LIFO queues
 */

class Stack {
  private stack: number[] = [];
  private count: number = 0;

  // add new element to the stack
  push(value: number): void {
    this.stack.push(value);
    this.count +=1
  }

  // remove last element and return remaining elements
  pop(): number | undefined {
    if (this.count === 0) return;
  
    this.count -= 1;
    return this.stack.pop();
  }

  // last element of the stack
  peak(): number | null {
    if (this.count === 0) return null;

    return this.stack[this.count - 1];
  }

  // remove all elements from the stack
  clear(): void {
    this.stack = [];
    this.count = 0;
  }

  // check if the stack is empty
  isEmpty(): boolean {
    return this.size() === 0;
  }

  // return the number of elements in the stack
  size(): number {
    return this.count;
  }

  print(): string {
    let out = '';

    for (let i of this.stack) {
      out += i + ' ';
    }

    return out;
  }
}

// create obejct and test functions
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.pop();
stack.push(3);

console.log(stack.peak());

console.log(stack.print());