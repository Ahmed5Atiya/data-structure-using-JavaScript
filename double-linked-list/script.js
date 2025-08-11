class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.Length = 0;
  }

  // add in the end of the linked list of array
  push(value) {
    let newNode = new Node(value);
    if (this.Length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.Length += 1;
    return this;
  }

  // reomve node form the end or linked list
  pop() {
    if (this.Length === 0) return undefined;

    var poppedNode = this.tail;
    if (this.Length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      poppedNode.prev = null;
      // this.prev = this.tail.prev;
    }

    this.Length -= 1;
    return poppedNode;
  }

  // this is remove form the begin of the linked list
  shift() {
    if (this.Length === 0) return undefined;
    var shiftNode = this.head;
    if (this.Length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      shiftNode.next = null;
    }
    this.Length--;
    return shiftNode;
  }
  // add the value in the begin of the linked list
  unShift(value) {
    let newNode = new Node(value);
    if (this.Length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.Length++;
    return this;
  }

  // get the node by index
  get(index) {
    if (this.Length === 0 || index < 0 || index > this.Length) return null;
    var element = null;
    if (index > Math.floor(this.Length / 2)) {
      element = this.tail;
      let counter = this.Length - 1;
      while (counter !== index) {
        element = element.prev;
        counter--;
      }
    } else {
      element = this.head;
      let counter = 0;
      while (counter !== index) {
        element = element.next;
        counter++;
      }
    }

    return element;
  }

  set(index, value) {
    var foundedNode = this.get(index);
    if (foundedNode !== null) {
      foundedNode.value = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value) {
    if (this.Length === 0 || index < 0 || index > this.Length) return null;
    if (index === 0) return this.unShift(value);
    if (index === this.Length) return this.push(value);
    var newNode = new Node(value);
    var befourNode = this.get(index - 1);
    var afterNode = befourNode.next;

    // this using the destraction
    [newNode.next, newNode.prev, afterNode.prev, befourNode.next] = [
      afterNode,
      befourNode,
      newNode,
      newNode,
    ];
    // newNode.next = afterNode;
    // newNode.prev = befourNode;
    // afterNode.prev = newNode;
    // befourNode.next = newNode;
    this.Length++;
    return this;
  }

  remove(index) {
    if (this.Length === 0 || index < 0 || index > this.Length) return null;
    if (index === 0) return this.shift(value);
    if (index === this.Length - 1) return this.pop(value);
    var removedNode = this.get(index);
    // let befourNode = removedNode.prev;
    // var afterNode = removedNode.next;
    // befourNode.next = removedNode.next;
    // afterNode.prev = befourNode;
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev
    removedNode.next = null;
    removedNode.prev = null;
    this.Length--;
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new DoubleLinkedList();
//    10  15 20 25
console.log(list.push(10));
console.log(list.push(15));
console.log(list.push(20));
console.log(list.push(25));
console.log(list.unShift(0));
console.log(list.get(0));
console.log(list.print());
console.log(list.remove(2));
console.log(list.print());
