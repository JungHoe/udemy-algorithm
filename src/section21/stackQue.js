"use strict";
class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        const node = new StackNode(value);
        if (this.first !== null) {
            node.next = this.first;
        }
        else {
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
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        const node = new StackNode(value);
        if (this.first == null) {
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
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
const q = new Queue();
q.push(1);
q.push(2);
q.push(3);
console.debug("🤔 ~ file: run.ts:93 ~ q:", q);
// console.log(q.pop());
// console.log(q.pop());
// console.log(q.pop());
//# sourceMappingURL=stackQue.js.map