"use strict";
class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const node = new BinaryNode(value);
        if (this.root === null) {
            this.root = node;
        }
        else {
            let compareData = this.root;
            while (true) {
                if (compareData.value > value) {
                    if (compareData.left) {
                        compareData = compareData.left;
                    }
                    else {
                        compareData.left = node;
                        break;
                    }
                }
                else if (compareData.value < value) {
                    if (compareData.right) {
                        compareData = compareData.right;
                    }
                    else {
                        compareData.right = node;
                        break;
                    }
                }
                else {
                    console.log("can not add");
                    break;
                }
            }
        }
    }
    find(value) {
        let compareData = this.root;
        if (compareData) {
            while (true) {
                if (compareData.value > value) {
                    if (compareData.left) {
                        compareData = compareData.left;
                    }
                    else {
                        break;
                    }
                }
                else if (compareData.value < value) {
                    if (compareData.right) {
                        compareData = compareData.right;
                    }
                    else {
                        break;
                    }
                }
                else {
                    return compareData;
                }
            }
        }
        return undefined;
    }
}
const numberBST = new BinarySearchTree();
// numberBST.root = new BinaryNode(10);
// numberBST.root.right = new BinaryNode(15);
// numberBST.root.left = new BinaryNode(7);
// numberBST.root.left.right = new BinaryNode(9);
// numberBST.insert(10);
// numberBST.insert(15);
// numberBST.insert(7);
// numberBST.insert(9);
// console.debug("🤔 ~ file: run.ts:17 ~ numberBST:", numberBST);
//# sourceMappingURL=BinarySearchTree.js.map