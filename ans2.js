function nearestSmallerNumber(a) {
  const stack = [];
  const result = [];

  for (let i = 0; i < a.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }

    stack.push(a[i]);
  }

  return result;
}

// Example1:
const a1 = [1, 6, 2];
console.log('EXample1 output is:' +nearestSmallerNumber(a1));


// Example2:
const a2 = [1, 5, 0, 3, 4, 5];
console.log('EXample2 output is:' +nearestSmallerNumber(a2));