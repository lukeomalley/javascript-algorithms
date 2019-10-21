class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    if (this.length === 0) {
      let node = new Node(value);
      this.last = node;
      this.first = node;
      this.length += 1;
      return this;
    } else {
      let node = new Node(value);
      this.last.next = node;
      this.last = node;
      this.length += 1;
      return this;
    }
  }

  dequeue() {
    if (this.length === 0) {
      return this;
    }
    const firstInLine = this.first;
    this.first = this.first.next;
    this.length -= 1;
    return firstInLine;
  }
}

let queue = new Queue();
