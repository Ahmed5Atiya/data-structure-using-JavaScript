
# Stack Data Structure

This repository provides a JavaScript implementation of the Stack data structure to help you understand this fundamental concept in computer science. Stacks are used in many programming scenarios and understanding them is crucial for any developer.

## Table of Contents
- [What is a Stack?](#what-is-a-stack)
- [Key Properties](#key-properties)
- [Why Use a Stack?](#why-use-a-stack)
- [How Stacks Work](#how-stacks-work)
- [Implementation Details](#implementation-details)
- [Real-World Examples](#real-world-examples)
- [How to Implement in JavaScript](#how-to-implement-in-javascript)
- [How to Study with This Repository](#how-to-study-with-this-repository)
- [Running the Code](#running-the-code)
- [Learning Objectives](#learning-objectives)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)

## What is a Stack?

A Stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. Think of it like a stack of plates in a cafeteria - you can only add or remove plates from the top.

## Key Properties

- **LIFO Principle**: Last element added is the first one removed
- **Restricted Access**: Elements can only be added or removed from one end (called the top)
- **Dynamic Size**: Can grow and shrink at runtime
- **Homogeneous Data**: Typically stores elements of the same type
- **Operations**: Main operations are push (add), pop (remove), and peek (view top element)

## Why Use a Stack?

Stacks are useful because they:

- Provide efficient O(1) time complexity for insertion and deletion operations
- Help manage function calls in programming languages (call stack)
- Are used in undo mechanisms in text editors
- Enable expression evaluation and syntax parsing
- Support backtracking algorithms
- Assist in memory management

## How Stacks Work

### Push Operation

1. Add an element to the top of the stack
2. Increment the stack pointer

### Pop Operation

1. Remove the element from the top of the stack
2. Decrement the stack pointer
3. Return the removed element

### Peek/Top Operation

1. View the element at the top of the stack
2. Do not remove the element

## Implementation Details

### Stack Class

```javascript
class Stack {
  constructor() {
    this.items = []; // Array to store stack elements
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // View the top element without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }

  // Display all elements in the stack
  print() {
    return this.items.toString();
  }
}

// Example usage
const stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.print()); // "10,20,30"
console.log(stack.size()); // 3
console.log(stack.peek()); // 30

stack.pop();
console.log(stack.print()); // "10,20"
```

## Real-World Examples

### 1. Browser History

When you navigate the web, your browser keeps track of pages you've visited in a stack. The back button works by popping the current page from the stack and taking you to the previous page.

```javascript
class BrowserHistory {
  constructor() {
    this.history = new Stack();
  }
  
  visitPage(url) {
    this.history.push(url);
    console.log(`Visited: ${url}`);
  }
  
  goBack() {
    if (this.history.isEmpty()) {
      console.log("No more history");
      return null;
    }
    const page = this.history.pop();
    console.log(`Going back from: ${page}`);
    return page;
  }
}

const browser = new BrowserHistory();
browser.visitPage("google.com");
browser.visitPage("github.com");
browser.visitPage("stackoverflow.com");
browser.goBack(); // "Going back from: stackoverflow.com"
```

### 2. Undo Functionality

Text editors use stacks to implement undo functionality. Each action is pushed onto a stack, and undo pops the most recent action.

```javascript
class TextEditor {
  constructor() {
    this.content = "";
    this.history = new Stack();
  }
  
  addText(text) {
    this.history.push(this.content); // Save current state
    this.content += text;
    console.log(`Added text. Current content: "${this.content}"`);
  }
  
  undo() {
    if (this.history.isEmpty()) {
      console.log("Nothing to undo");
      return;
    }
    this.content = this.history.pop();
    console.log(`Undo performed. Current content: "${this.content}"`);
  }
}

const editor = new TextEditor();
editor.addText("Hello ");
editor.addText("World!");
editor.undo(); // "Undo performed. Current content: "Hello ""
```

### 3. Function Call Management

Programming languages use a call stack to manage function calls. When a function is called, it's pushed onto the stack, and when it returns, it's popped off.

```javascript
class CallStack {
  constructor() {
    this.stack = new Stack();
  }
  
  functionCall(functionName) {
    this.stack.push(functionName);
    console.log(`Calling function: ${functionName}`);
    console.log(`Call stack: [${this.stack.print()}]`);
  }
  
  functionReturn() {
    if (this.stack.isEmpty()) {
      console.log("No function to return from");
      return;
    }
    const functionName = this.stack.pop();
    console.log(`Returning from function: ${functionName}`);
    console.log(`Call stack: [${this.stack.print()}]`);
  }
}

const callStack = new CallStack();
callStack.functionCall("main");
callStack.functionCall("calculate");
callStack.functionCall("add");
callStack.functionReturn(); // Returns from "add"
callStack.functionReturn(); // Returns from "calculate"
```

### 4. Expression Evaluation

Stacks are used to evaluate mathematical expressions, especially when converting between different notations (infix, postfix, prefix).

```javascript
class ExpressionEvaluator {
  constructor() {
    this.stack = new Stack();
  }
  
  // Evaluate a postfix expression
  evaluatePostfix(expression) {
    const tokens = expression.split(' ');
    
    for (let token of tokens) {
      if (!isNaN(token)) {
        // If token is a number, push it to stack
        this.stack.push(parseInt(token));
      } else {
        // If token is an operator, pop two elements and apply operator
        const b = this.stack.pop();
        const a = this.stack.pop();
        
        switch(token) {
          case '+':
            this.stack.push(a + b);
            break;
          case '-':
            this.stack.push(a - b);
            break;
          case '*':
            this.stack.push(a * b);
            break;
          case '/':
            this.stack.push(a / b);
            break;
        }
      }
    }
    
    return this.stack.pop();
  }
}

const evaluator = new ExpressionEvaluator();
console.log(evaluator.evaluatePostfix("3 4 + 2 *")); // (3 + 4) * 2 = 14
console.log(evaluator.evaluatePostfix("15 7 1 1 + - / 3 * 2 1 1 + + -")); // Complex expression
```

## How to Implement in JavaScript

To implement a Stack from scratch in JavaScript, follow these steps:

### Step 1: Define the Stack Structure

```javascript
class Stack {
  constructor() {
    this.items = [];
  }
}
```

### Step 2: Implement Core Methods

```javascript
// Push method - adds element to top
push(element) {
  this.items.push(element);
}

// Pop method - removes and returns top element
pop() {
  if (this.items.length === 0) {
    return "Underflow";
  }
  return this.items.pop();
}

// Peek method - returns top element without removing
peek() {
  return this.items[this.items.length - 1];
}
```

### Step 3: Add Helper Methods

```javascript
// Check if stack is empty
isEmpty() {
  return this.items.length === 0;
}

// Get size of stack
size() {
  return this.items.length;
}

// Clear all elements
clear() {
  this.items = [];
}
```

### Step 4: Test Your Implementation

```javascript
const stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.size()); // 2

stack.pop();
console.log(stack.size()); // 1
```

## How to Study with This Repository

Use this repository to master Stacks:

1. **Study the Theory**: Review the conceptual explanations to understand stack properties
2. **Analyze the Code**: Examine the implementation with the detailed explanations
3. **Experiment**:
   - Try different push/pop sequences
   - Test edge cases like popping from an empty stack
   - Implement additional methods like `search` or `toArray`
4. **Visualize**: Draw the stack after operations to understand the LIFO principle
5. **Practice Writing**: Follow the implementation guide to code your own stack
6. **Apply to Real Problems**: Try solving problems that use stacks like balanced parentheses or postfix evaluation

## Running the Code

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```

3. Ensure Node.js is installed, then run:
   ```bash
   node index.js
   ```

Alternatively, copy the code into a browser's developer console (F12).

## Learning Objectives

By studying this repository, you will:

- Understand stack structure and LIFO principle
- Learn how push, pop, and peek operations work in theory and code
- Explore real-world applications of stacks
- Gain hands-on experience with JavaScript and stack structures
- Develop problem-solving skills using stack-based algorithms

### Key Concepts

- **LIFO Principle**: Last In, First Out access pattern
- **Time Complexity**: Push/Pop operations are O(1)
- **Space Complexity**: O(n) where n is the number of elements
- **Applications**: Function calls, undo mechanisms, expression evaluation

## Resources

To deepen your stack knowledge:

### Articles
- [GeeksforGeeks: Stack Data Structure](https://www.geeksforgeeks.org/stack-data-structure/)
- [freeCodeCamp: Stacks and Queues](https://www.freecodecamp.org/news/how-to-implement-a-stack-in-javascript/)
- [MDN Web Docs: JavaScript Arrays as Stacks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Videos
- [HackerRank: Stacks and Queues](https://www.youtube.com/watch?v=wjI1WNcIntg)
- [CS50: Stack Data Structure](https://www.youtube.com/watch?v=KU70u23NCes)

### Interactive Tools
- [VisuAlgo: Stack Visualization](https://visualgo.net/en/list)
- [Visualgo: Online Algorithm Visualization](https://visualgo.net/en)

### Books
- Introduction to Algorithms by Cormen et al. (Chapter 10)
- Data Structures and Algorithms in JavaScript by Michael McMillan
- JavaScript Data Structures and Algorithms by Sammie Bae

## Contributing

Contributions to improve this guide or code are welcome:

1. Fork the repository
2. Create a branch (`git checkout -b stack-enhancements`)
3. Add improvements (e.g., better explanations, exercises, more examples)
4. Commit changes (`git commit -m "Add stack applications"`)
5. Push to the branch (`git push origin stack-enhancements`)
6. Create a pull request

Ensure contributions are clear and educational.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.