function arithmeticoperators(S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    const char = S[i];

    if (!isNaN(char)) {
      stack.push(Number(char));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      let result;

      switch (char) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
      }

      stack.push(result);
    }
  }

  return stack.pop();
}

// Example 1:
const postfix1 = "231*+9-";
console.log('EXample1 output is:' + arithmeticoperators(postfix1));

// Example 2:
const postfix2 = "123+*8-";
console.log('EXample2 output is:' + arithmeticoperators(postfix2));