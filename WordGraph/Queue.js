class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add nodes methods
  addToHead(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  };

  addToTail(value) {
    const newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }

  // Remove nodes methods
  removeHead() {
    if (!this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.prev = null;
    else this.tail = null;

    return value;

  }

  removeTail() {
    if (!this.tail) return null;
    let value = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) this.tail.next = null;
    else this.head = null;

    return value;
  }

  // Search method

  search(searchValue) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === searchValue) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  isEmpty() {
    return !this.head && !this.tail;
  }

}

module.exports = Queue;