class MaxBinaryHeap<T> {
  public values: T[];
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
  insert(value: T) {
    // debugger;
    //1.array 맨뒤에 추가한다
    this.values.push(value);
    //2.bubbleup한다.
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);
    if (parentIndex !== null) {
      let child = this.values[childIndex]; // 20
      let parent = this.values[parentIndex]; //10
      while (parent < child) {
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
    const node = this.values[index];
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const leftChild = this.values[leftIndex];
    const rightChild = this.values[rightIndex];
    if (node < leftChild && leftChild > rightChild) {
      this.swap(index, leftIndex);
      this.sinkDown(leftIndex);
    } else if (node < rightChild && rightChild > leftChild) {
      this.swap(index, rightIndex);
      this.sinkDown(rightIndex);
    }
  }
  extractMax(): T | undefined {
    if (this.values.length > 0) {
      // 1개남은게 아닐경우
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

const maxBinaryHeap = new MaxBinaryHeap<number>();
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);
maxBinaryHeap.insert(199);
// console.log(maxBinaryHeap.extractMax());
