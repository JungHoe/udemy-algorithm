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
    shift() {
        if (this.head !== null) {
            const nextHead = this.head.next;
            const result = this.head.value;
            this.head = nextHead;
            this.length -= 1;
            if (nextHead === null) {
                this.tail = null;
            }
            return result;
        }
        return undefined;
    }
    unshift(value) {
        const node = new ListNode(value);
        if (this.head !== null) {
            node.next = this.head;
        }
        else {
            this.tail = node;
        }
        this.head = node;
        this.length += 1;
    }
    get(index) {
        if (index + 1 <= this.length) {
            let temp = this.head;
            for (let i = 0; i < index; i += 1) {
                temp = temp.next;
            }
            return temp;
        }
        return undefined;
    }
    set(index, value) {
        const node = this.get(index);
        if (node !== undefined) {
            node.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index > this.length) {
            throw Error("out of index");
        }
        if (index === 0) {
            this.unshift(value);
        }
        else if (index === this.length) {
            this.push(value);
        }
        else {
            const node = this.get(index - 1);
            const newNode = new ListNode(value);
            newNode.next = node.next;
            node.next = newNode;
            this.length += 1;
        }
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        else if (index === 0) {
            return this.shift();
        }
        else {
            const prev = this.get(index - 1);
            const target = prev.next;
            prev.next = target.next;
            this.length -= 1;
            return target;
        }
    }
    reverse() {
        // 1 2 3 4 5 6
        // 6 2 3 4 5 1
        // 6 3 4 5 2 1
        // 6 4 5 3 2 1
        // 6 5 4 3 2 1
        // 1. swap head and tail
        let prev = this.head;
        this.head = this.tail;
        this.tail = prev;
        let next = prev.next;
        this.tail.next = null;
        const loop = this.length - 1;
        for (let i = 0; i < loop; i += 1) {
            // prev = 1 next = 2 temp = 3
            // => next.next 에 3을 꺼내서 저장을 하고.
            // => next.next를 prev로 업데이트
            // prev = 1 next = 2 temp =3 next.next=1
            // 2 1
            // prev를 next로 바꾸고 next를 Temp로 바꾼다
            // prev =2 next =3
            const temp = next.next; //3
            next.next = prev;
            prev = next;
            next = temp;
        }
    }
}
const numberList = new SinglyLinkedList();
// numberList.push(1);
// numberList.push(2);
// numberList.push(3);
// const t1 = numberList.pop();
// const t2 = numberList.pop();
// const t3 = numberList.pop();
// const t4 = numberList.pop();
// numberList.push(1);
// numberList.push(2);
// numberList.push(3);
// console.log(numberList);
// numberList.shift();
// numberList.shift();
// numberList.shift();
// numberList.shift();
// console.log(numberList);
// numberList.unshift(1);
// numberList.unshift(2);
// console.log(numberList);
// numberList.set(0, 50);
// numberList.set(1, 100);
// numberList.set(2, 150);
// console.log(numberList);
// numberList.insert(0, 1);
// numberList.insert(1, 2);
// numberList.insert(2, 3);
// numberList.insert(2, 4);
// numberList.remove(1);
// numberList.push(1);
// numberList.push(2);
// numberList.push(3);
// numberList.push(4);
// numberList.push(5);
// numberList.push(6);
// numberList.push(7);
// numberList.push(8);
// numberList.push(9);
// numberList.push(10);
// numberList.reverse();
// console.log(numberList);
//# sourceMappingURL=singlyLinkedList.js.map