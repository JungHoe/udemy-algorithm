class QueueNode<T> {
  constructor(public value: T, public priority: number) {}
}
class PriorityQueue<T> {
  public values: QueueNode<T>[];
  constructor() {
    this.values = [];
  }
  private getParentIndex(index: number) {
    if (index === 0) {
      return null;
    }
    return Math.floor((index - 1) / 2);
  }
  private swap(a: number, b: number) {
    const temp = this.values[a];
    this.values[a] = this.values[b];
    this.values[b] = temp;
  }
  enqueue(value: T, priority: number) {
    const node = new QueueNode(value, priority);
    this.values.push(node);
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);
    if (parentIndex !== null) {
      let child = this.values[childIndex];
      let parent = this.values[parentIndex];
      while (parent > child) {
        this.swap(childIndex, parentIndex);
        if (parentIndex !== 0) {
          childIndex = parentIndex;
          parentIndex = this.getParentIndex(parentIndex)!;
        }
        child = this.values[childIndex];
        parent = this.values[parentIndex];
      }
    }
  }
  private sinkDown(index: number) {
    // debugger;
    const node = this.values[index].priority;
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const leftChild = this.values[leftIndex] && this.values[leftIndex].priority;
    const rightChild =
      this.values[rightIndex] && this.values[rightIndex].priority;
    if (node > leftChild && leftChild < rightChild) {
      this.swap(index, leftIndex);
      this.sinkDown(leftIndex);
    } else if (node > rightChild && rightChild < leftChild) {
      this.swap(index, rightIndex);
      this.sinkDown(rightIndex);
    }
  }

  dequeue(): QueueNode<T> | undefined {
    if (this.values.length > 0) {
      const root = this.values[0];
      const last = this.values.pop()!;
      if (this.values.length > 0) {
        this.values[0] = last;
        this.sinkDown(0);
      }
      return root;
    }
    return undefined;
  }
}

const priorityQueue = new PriorityQueue<string>();
priorityQueue.enqueue("dog", 0);
priorityQueue.enqueue("pig", 1);
priorityQueue.enqueue("horse", 2);
priorityQueue.enqueue("cat", 5);
console.log(priorityQueue.dequeue());
console.debug("🤔 ~ file: run.ts:42 ~ priorityQueue:", priorityQueue);
