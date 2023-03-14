class BinaryNode<T> {
  public left: BinaryNode<T> | null;
  public right: BinaryNode<T> | null;
  constructor(public value: T) {
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree<T> {
  private root: BinaryNode<T> | null;
  constructor() {
    this.root = null;
  }
  insert(value: T) {
    const node = new BinaryNode(value);
    if (this.root === null) {
      this.root = node;
    } else {
      let compareData = this.root;
      while (true) {
        if (compareData.value > value) {
          if (compareData.left) {
            compareData = compareData.left;
          } else {
            compareData.left = node;
            break;
          }
        } else if (compareData.value < value) {
          if (compareData.right) {
            compareData = compareData.right;
          } else {
            compareData.right = node;
            break;
          }
        } else {
          console.log("can not add");
          break;
        }
      }
    }
  }
  find(value: T): BinaryNode<T> | undefined {
    let compareData = this.root;
    if (compareData) {
      while (true) {
        if (compareData.value > value) {
          if (compareData.left) {
            compareData = compareData.left;
          } else {
            break;
          }
        } else if (compareData.value < value) {
          if (compareData.right) {
            compareData = compareData.right;
          } else {
            break;
          }
        } else {
          return compareData;
        }
      }
    }
    return undefined;
  }
  BFS(): Array<T> | undefined {
    if (this.root) {
      const visited = new Array<T>();
      const queue = new Array<BinaryNode<T>>();
      queue.push(this.root);
      while (queue.length !== 0) {
        const node = queue.shift()!;
        visited.push(node.value);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      return visited;
    }
    return undefined;
  }
  /**
   * 깊이 우선탐색 전위순회 Root - 왼쪽-오른쪽
   */
  DFS_pre() {
    if (this.root) {
      const visited = new Array<T>();
      const traverse = (node: BinaryNode<T>) => {
        visited.push(node.value);
        if (node.left) {
          traverse(node.left);
        }
        if (node.right) {
          traverse(node.right);
        }
      };
      traverse(this.root);
      return visited;
    }
  }
  /**
   * 깊이 우선탐색 후위순회 왼쪽 - 오른쪽 - Root
   */
  DFS_post() {
    if (this.root) {
      const visited = new Array<T>();
      const traverse = (node: BinaryNode<T>) => {
        if (node.left) {
          traverse(node.left);
        }
        if (node.right) {
          traverse(node.right);
        }
        visited.push(node.value);
      };
      traverse(this.root);
      return visited;
    }
  }
  /**
   * 깊이 우선탐색 중위 순회 왼쪽 - Root - 오른쪽
   */
  DFS_in() {
    if (this.root) {
      const visited = new Array<T>();
      const traverse = (node: BinaryNode<T>) => {
        if (node.left) {
          traverse(node.left);
        }
        visited.push(node.value);
        if (node.right) {
          traverse(node.right);
        }
      };
      traverse(this.root);
      return visited;
    }
  }
}

const numberBST = new BinarySearchTree<number>();
numberBST.insert(10);
numberBST.insert(6);
numberBST.insert(15);
numberBST.insert(20);
numberBST.insert(3);
numberBST.insert(8);

console.log(numberBST.BFS());
console.log(numberBST.DFS_pre());
console.log(numberBST.DFS_post());
console.log(numberBST.DFS_in());
