//RUN COMMAND node generate-parantheses.js

const genParan = (n) => {
  let stack = [];
  let result = [];

  const backTrack = (open, close) => {
    if (open == close && open == n) {
      result.push(stack.join(""));
    }
    if (open < n) {
      stack.push("(");
      backTrack(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(")");
      backTrack(open, close + 1);
      stack.pop();
    }
  };

  backTrack(0, 0);

  return result;
};


console.log(genParan(2))
