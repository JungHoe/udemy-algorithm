"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class DoublyListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * List의 길이를 증가시킵니다.
     */
    increaseLength() {
        this.length += 1;
    }
    /**
     * List의 길이를 감소시킵니다.
     */
    decreaseLength() {
        this.length -= 1;
    }
}
exports.LinkedList = LinkedList;
class DoublyLinkedList extends LinkedList {
    invalidIndexBounce(index) {
        return (index < 0 || index >= this.length) && index !== 0;
    }
    push(value) {
        const node = new DoublyListNode(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.increaseLength();
    }
    pop() {
        const result = this.tail;
        if (this.length === 0) {
            return undefined;
        }
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = result.previous;
            this.tail.next = null;
            result.previous = null;
        }
        this.decreaseLength();
        return result;
    }
    shift() {
        const result = this.head;
        if (this.length === 0) {
            return undefined;
        }
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = result.next;
            this.head.previous = null;
            result.next = null;
        }
        this.decreaseLength();
        return result;
    }
    unshift(value) {
        const node = new DoublyListNode(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
        }
        this.increaseLength();
    }
    get(index) {
        if (this.invalidIndexBounce(index)) {
            return null;
        }
        const half = Math.floor(this.length / 2);
        let result = index < half ? this.head : this.tail;
        let i = index < half ? 0 : this.length - 1;
        while (i !== index) {
            if (index < half) {
                result = result.next;
                i += 1;
            }
            else {
                result = result.previous;
                i -= 1;
            }
        }
        return result;
    }
    set(index, value) {
        if (this.invalidIndexBounce(index)) {
            return false;
        }
        const node = this.get(index);
        node.value = value;
        return true;
    }
    insert(index, value) {
        if (this.invalidIndexBounce(index)) {
            return false;
        }
        if (index === 0) {
            this.unshift(value);
        }
        else if (index + 1 === this.length) {
            this.push(value);
        }
        else {
            const node = new DoublyListNode(value);
            const targetNode = this.get(index);
            node.previous = targetNode;
            node.next = targetNode.next;
            targetNode.next.previous = node;
            targetNode.next = node;
            this.increaseLength();
        }
        return true;
    }
    remove(index) {
        if (this.invalidIndexBounce(index)) {
            return undefined;
        }
        if (index === 0) {
            return this.shift();
        }
        else if (index === this.length - 1) {
            return this.pop();
        }
        else {
            // 1 2 4 3
            const node = this.get(index);
            if (node) {
                const prev = node.previous;
                const next = node.next;
                node.next = null;
                node.previous = null;
                prev.next = next;
                next.previous = prev;
                this.decreaseLength();
                return node;
            }
        }
        return undefined;
    }
}
const doublyNumberList = new DoublyLinkedList();
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
//# sourceMappingURL=doublyLinkedList.js.map