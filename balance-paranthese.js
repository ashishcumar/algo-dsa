// node balance-paranthese.js

let str = "{{[{()}}"

function balanceParanthese (s) {
    const stack = [];
    const pairs = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
  
    for (let char of s) {
      if (char in pairs) {
        stack.push(char);
      } else {
        console.log('char',char)
        console.log('pairs[stack.pop()]',pairs[stack.pop()])
        if (stack.length === 0 || pairs[stack.pop()] !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
}

balanceParanthese(str)