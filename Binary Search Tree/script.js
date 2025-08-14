class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.count = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) {
          current.count++;
          return this;
        } else if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

const BST = new BinarySearchTree();

console.log(BST);

console.log(BST.insert(10));
console.log(BST.insert(10));
console.log(BST.insert(5));
console.log(BST.insert(2));
console.log(BST.insert(5));
console.log(BST.insert(5));
console.log(BST.insert(5));

console.log(BST.insert(7));
console.log(BST.insert(13));
console.log(BST.insert(11));
console.log(BST.insert(16));
console.log(BST.find(1))