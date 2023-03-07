"use strict";
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const node = new ListNode(value);
        if (this.head === null) {
            this.head = node;
        }
        if (this.tail !== null) {
            this.tail.next = node;
        }
        this.tail = node;
        this.length += 1;
    }
    pop() {
        var _a;
        if (this.head !== null) {
            let current = this.head;
            while (current.next !== this.tail) {
                if (current.next) {
                    current = current.next;
                }
                else {
                    this.head = null;
                    this.tail = null;
                    this.length = 0;
                    return current.value;
                }
            }
            const result = (_a = current.next) === null || _a === void 0 ? void 0 : _a.value;
            current.next = null;
            this.tail = current;
            this.length -= 1;
            return result;
        }
        return undefined;
    }
}
const numberList = new SinglyLinkedList();
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
//# sourceMappingURL=singlyLinkedList.js.map