// easy  implement stack using the array

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.Length = 0;
  }

  push(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.Length;
  }

  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.Length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
      this.Length--;
      return temp
  }
}

const stack = new Stack();
console.log(stack.push(1));
stack.push(2);
stack.push(3);
console.log(stack.pop());

console.log(stack);
