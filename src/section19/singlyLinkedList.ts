class ListNode<T> {
  public next: ListNode<T> | null;
  constructor(public value: T) {
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  public length: number;
  public head: ListNode<T> | null;
  public tail: ListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value: T) {
    const node = new ListNode<T>(value);
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail !== null) {
      this.tail.next = node;
    }
    this.tail = node;
    this.length += 1;
  }

  pop(): T | undefined {
    if (this.head !== null) {
      let current = this.head;
      while (current.next !== this.tail) {
        if (current.next) {
          current = current.next;
        } else {
          this.head = null;
          this.tail = null;
          this.length = 0;
          return current.value;
        }
      }
      const result = current.next?.value;
      current.next = null;
      this.tail = current;
      this.length -= 1;
      return result;
    }
    return undefined;
  }
}

const numberList = new SinglyLinkedList<number>();
console.log(numberList);
numberList.push(1);
numberList.push(2);
numberList.push(3);
console.log(numberList);
const t1 = numberList.pop();
const t2 = numberList.pop();
const t3 = numberList.pop();
const t4 = numberList.pop();
console.log(numberList);
