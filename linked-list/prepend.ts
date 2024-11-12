// cannnot use Node as a class name
class Nood {
  val: number;
  next: Nood | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

// main class
class LinkedList {
  head: Nood | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  // time complexcity: O(1)
  prepend(value: number) {
    const node = new Nood(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // time complexcity: O(n)
  append(value: number) {
    const node = new Nood(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;

      while (current?.next) {
        current = current.next;
      }

      if (current) current.next = node;
    }
    this.size++;
  }

  // time complexcity: O(n)
  insert(value: number, index: number) {
    if (index < 0 || index > this.getSize()) return false;
    else if (index === 0) this.prepend(value);
    else {
      const node = new Nood(value);
      let current = this.head;

      for (let i = 0; i < index -1; i++) {
        if (current) current = current.next;
      }

      if (current) {
        node.next = current.next;
        current.next = node;
        this.size++;
      }
    }
  }

  // time complexcity: O(n)
  removeByIndex(index: number) {
    if (index < 0 || index >= this.size) return false;
    else if (index === 0) {
      if (this.head) this.head = this.head.next;
    } else {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        if (current) current = current.next;
      }

      if (current) {
        const removedNode = current.next;
        if (removedNode) {
          current.next = removedNode.next;
        }
      }
    }
    this.size--;
  }

  removeByValue(value: number) {

  }
}

// initialize the the object
const list = new LinkedList();

// adding element to the first
list.prepend(2);
list.prepend(1);

// adding element to the last
list.append(4);

// insert element to random position
list.insert(3, 2);

// remove element
/// list.removeByIndex(0);

list.removeByValue(3);

// printing the whole object
console.log(JSON.stringify(list))