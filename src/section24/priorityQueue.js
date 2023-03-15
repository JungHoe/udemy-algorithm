"use strict";
class QueueNode {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    getParentIndex(index) {
        if (index === 0) {
            return null;
        }
        return Math.floor((index - 1) / 2);
    }
    swap(a, b) {
        const temp = this.values[a];
        this.values[a] = this.values[b];
        this.values[b] = temp;
    }
    enqueue(value, priority) {
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
                    parentIndex = this.getParentIndex(parentIndex);
                }
                child = this.values[childIndex];
                parent = this.values[parentIndex];
            }
        }
    }
    sinkDown(index) {
        // debugger;
        const node = this.values[index].priority;
        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;
        const leftChild = this.values[leftIndex] && this.values[leftIndex].priority;
        const rightChild = this.values[rightIndex] && this.values[rightIndex].priority;
        if (node > leftChild && leftChild < rightChild) {
            this.swap(index, leftIndex);
            this.sinkDown(leftIndex);
        }
        else if (node > rightChild && rightChild < leftChild) {
            this.swap(index, rightIndex);
            this.sinkDown(rightIndex);
        }
    }
    dequeue() {
        if (this.values.length > 0) {
            const root = this.values[0];
            const last = this.values.pop();
            if (this.values.length > 0) {
                this.values[0] = last;
                this.sinkDown(0);
            }
            return root;
        }
        return undefined;
    }
}
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("dog", 0);
priorityQueue.enqueue("pig", 1);
priorityQueue.enqueue("horse", 2);
priorityQueue.enqueue("cat", 5);
console.log(priorityQueue.dequeue());
console.debug("🤔 ~ file: run.ts:42 ~ priorityQueue:", priorityQueue);
//# sourceMappingURL=priorityQueue.js.map