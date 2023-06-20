function reverseStringS(S) {
  const stack = [];
  let result = "";

  for (let i = 0; i < S.length; i++) {
    stack.push(S[i]);
  }

  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}

// Example:
const S1 = "GeeksforGeeks";
console.log('EXample1 output is:' + reverseStringS(S1));
