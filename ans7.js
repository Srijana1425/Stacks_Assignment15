class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return;
    }

    const val = this.stack.pop();

    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return val;
  }

  top() {
    if (this.stack.length === 0) {
      return -1;
    }

    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.minStack.length === 0) {
      return -1;
    }

    return this.minStack[this.minStack.length - 1];
  }
}

// Example1:
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2