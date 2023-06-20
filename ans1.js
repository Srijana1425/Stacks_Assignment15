function GreaterElement(a) {
  const stack = [];
  const result = [];

  for (let i = a.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= a[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.unshift(-1);
    } else {
      result.unshift(stack[stack.length - 1]);
    }

    stack.push(a[i]);
  }

  return result;
}

// Example1:
const a1 = [1, 3, 2, 4];
console.log('EXample1 output is:' +GreaterElement(a1)); 

// Example2:
const a2 = [6, 8, 0, 1, 3];
console.log('EXample2 output is:' +GreaterElement(a2));
