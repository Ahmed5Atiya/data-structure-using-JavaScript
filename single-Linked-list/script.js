class Node {
  constructor(value) {
    (this.value = value); (this.next = null);
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.Length = 0;
  }

  // add in the end of linked list
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.Length += 1;
    return this;
  }

  // remove form the end linked list
  pop() {
    if (!this.head) return undefined;
    let pointer = this.head;
    let newTail = pointer;
    let val = null;
    while (pointer.next) {
      newTail = pointer;
      pointer = pointer.next;
    }
    val = pointer.value;

    this.tail = newTail;
    this.tail.next = null;
    this.Length -= 1;

    if (this.Length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  // remove form the begin of linked list
  shift() {
    if (!this.head) return undefined;
    let pointer = this.head;
    this.head = this.head.next;
    this.Length -= 1;

    if (this.Length === 0) {
      this.tail = null;
    }
    return pointer;
  }
  // add in the begin of linked list
  unShift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      //   this.head.next = pointer;
    }

    this.Length += 1;
    return this;
  }
  // get the current value in the index
  get(index) {
    if (index >= this.Length || index < 0) return undefined;

    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // set(index, value) {
  //   if (index >= this.Length || index < 0) return false;
  //   let current = this.head;
  //   let counter = 0;
  //   while (counter !== index) {
  //     current = current.next;
  //     counter++;
  //   }
  //   current.value = value;
  //   return current;
  // }

  //  change the value in this index
  set(index, value) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value) {
    let foundedValue = this.get(index);
    if (foundedValue) {
      if (index === this.Length) {
        return this.push(value);
      } else if (index === 0) {
        return this.unShift(value);
      } else {
        let newNode = new Node(value);
        let prev = this.get(index - 1);
        newNode.next = foundedValue;
        prev.next = newNode;
      }
      this.Length += 1;
      return this;
    } else {
      return false;
    }
  }

  remove(index) {
    let foundedValue = this.get(index);
    if (foundedValue) {
      if (index === this.Length) {
        return this.pop();
      } else if (index === 0) {
        return this.shift();
      } else {
        // let newNode = new Node(value);
        let prev = this.get(index - 1);
        var removed = prev.next;
        prev.next = removed.next;
      }
      this.Length -= 1;
      return removed;
    } else {
      return false;
    }
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.Length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
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

const list = new SingleLinkedList();
console.log(list.push(1)); // 0
console.log(list.push(2)); // 1
console.log(list.push(3)); // 2
// console.log(list.pop());
console.log(list.print());
console.log(list.reverse());
console.log(list.print());

// console.log(list.insert(2, 3));
// console.log(list.remove(2));
// console.log(list);

// console.log(list.unShift(0));
// console.log(list.get(3));
// console.log(list.set(4, 10));
// console.log(list.get(3));

// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list);
// console.log(list.pop());

// console.log(list.push(2));
