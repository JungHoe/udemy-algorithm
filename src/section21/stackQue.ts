class StackNode<T> {
  public next: StackNode<T> | null;
  constructor(public value: T) {
    this.next = null;
  }
}

class Stack<T> {
  public first: StackNode<T> | null;
  public last: StackNode<T> | null;
  public size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value: T) {
    const node = new StackNode(value);
    if (this.first !== null) {
      node.next = this.first;
    } else {
      this.last = node;
    }
    this.first = node;
    this.size += 1;
  }

  pop() {
    if (this.first !== null) {
      const nextFirst = this.first.next;
      const result = this.first.value;
      this.first = nextFirst;
      this.size -= 1;
      if (nextFirst === null) {
        this.last = null;
      }
      return result;
    }
    return undefined;
  }
}
class Queue<T> {
  public first: StackNode<T> | null;
  public last: StackNode<T> | null;
  public size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value: T) {
    const node = new StackNode(value);
    if (this.first == null) {
      this.first = node;
      this.last = node;
    } else {
      this!.last!.next = node;
      this.last = node;
    }
    this.size += 1;
  }

  pop() {
    if (this.first !== null) {
      const nextFirst = this.first.next;
      const result = this.first.value;
      this.first = nextFirst;
      this.size -= 1;
      if (nextFirst === null) {
        this.last = null;
      }
      return result;
    }
    return undefined;
  }
}

// const stack = new Stack<number>();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);

const q = new Queue<number>();

q.push(1);
q.push(2);
q.push(3);
console.debug("🤔 ~ file: run.ts:93 ~ q:", q);
// console.log(q.pop());
// console.log(q.pop());
// console.log(q.pop());
