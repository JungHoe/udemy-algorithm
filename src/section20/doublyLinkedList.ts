class DoublyListNode<T> {
  public next: DoublyListNode<T> | null;
  public previous: DoublyListNode<T> | null;
  constructor(public value: T) {
    this.next = null;
    this.previous = null;
  }
}

export abstract class LinkedList<T> {
  public length: number;
  public head: DoublyListNode<T> | null;
  public tail: DoublyListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /**
   * List의 길이를 증가시킵니다.
   */
  protected increaseLength() {
    this.length += 1;
  }
  /**
   * List의 길이를 감소시킵니다.
   */
  protected decreaseLength() {
    this.length -= 1;
  }
  /**
   * 데이터 맨 뒤에 값을 추가합니다.
   * @param value
   *
   */
  abstract push(value: T): void;
  /**
   * 데이터 맨 뒤에 값을 추출하고 제거합니다.
   */
  abstract pop(): DoublyListNode<T> | undefined;
  /**
   * 데이터 맨 앞에 값을 추출하고 제거합니다.
   * @param value
   */
  abstract shift(): DoublyListNode<T> | undefined;
  /**
   * 데이터 맨 앞에 값을 추가합니다.
   */
  abstract unshift(value: T): void;
  /**
   * 특정 index의 node를 가져옵니다.
   * @param index
   */
  abstract get(index: number): DoublyListNode<T> | null;
  /**
   * 특정 index의 값을 update합니다.
   * @param index
   * @param value
   */
  abstract set(index: number, value: T): boolean;
  /**
   * 특정 index의 값을 추가합니다.
   * @param index
   * @param value
   */
  abstract insert(index: number, value: T): boolean;
  /**
   * 특정 index의 값을 삭제합니다
   */
  abstract remove(index: number): DoublyListNode<T> | undefined;
}

class DoublyLinkedList<T> extends LinkedList<T> {
  private invalidIndexBounce(index: number): boolean {
    return (index < 0 || index >= this.length) && index !== 0;
  }
  push(value: T) {
    const node = new DoublyListNode<T>(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.increaseLength();
  }
  pop(): DoublyListNode<T> | undefined {
    const result = this.tail!;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = result.previous!;
      this.tail.next = null;
      result.previous = null;
    }
    this.decreaseLength();
    return result;
  }
  shift(): DoublyListNode<T> | undefined {
    const result = this.head!;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = result.next;
      this.head!.previous = null;
      result.next = null;
    }
    this.decreaseLength();
    return result;
  }
  unshift(value: T) {
    const node = new DoublyListNode<T>(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head!.previous = node;
      node.next = this.head;
      this.head = node;
    }
    this.increaseLength();
  }
  get(index: number): DoublyListNode<T> | null {
    if (this.invalidIndexBounce(index)) {
      return null;
    }
    const half = Math.floor(this.length / 2);
    let result = index < half ? this.head : this.tail;
    let i = index < half ? 0 : this.length - 1;
    while (i !== index) {
      if (index < half) {
        result = result!.next;
        i += 1;
      } else {
        result = result!.previous;
        i -= 1;
      }
    }
    return result;
  }
  set(index: number, value: T) {
    if (this.invalidIndexBounce(index)) {
      return false;
    }
    const node = this.get(index);
    node!.value = value;
    return true;
  }
  insert(index: number, value: T): boolean {
    if (this.invalidIndexBounce(index)) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
    } else if (index + 1 === this.length) {
      this.push(value);
    } else {
      const node = new DoublyListNode(value);
      const targetNode = this.get(index)!;
      node.previous = targetNode;
      node.next = targetNode.next;
      targetNode!.next!.previous = node;
      targetNode.next = node;
      this.increaseLength();
    }
    return true;
  }
  remove(index: number) {
    if (this.invalidIndexBounce(index)) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      // 1 2 4 3
      const node = this.get(index);
      if (node) {
        const prev = node!.previous;
        const next = node!.next;
        node.next = null;
        node.previous = null;
        prev!.next = next;
        next!.previous = prev;
        this.decreaseLength();
        return node;
      }
    }
    return undefined;
  }
}

const doublyNumberList = new DoublyLinkedList<number>();
// doublyNumberList.push(1);
// doublyNumberList.push(2);
// doublyNumberList.push(3);
// const t1 = doublyNumberList.pop();
// console.log(doublyNumberList.shift());
// console.log(doublyNumberList.shift());
// doublyNumberList.unshift(1);
// doublyNumberList.unshift(2);
// doublyNumberList.unshift(3);
// console.log(doublyNumberList.get(6));
// doublyNumberList.set(0, 10);
// doublyNumberList.insert(0, 2);
// doublyNumberList.insert(0, 1);
// doublyNumberList.insert(1, 3);
// doublyNumberList.insert(1, 4);
// console.log(doublyNumberList.remove(2));
