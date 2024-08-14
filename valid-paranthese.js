// RUN COMMAND node valid-paranthese.js

const validParanthese = (s) => {
  let stack = [];

  for (let char of s) {
    switch (char) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        topEle = stack.pop();
        if (char !== topEle) return false;
    }
  }

  return stack.length === 0;
};

console.log(validParanthese(")("));
