// node flatArr.js

let a = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]];
function flatArr(arr, depth, result = []) {
  if (depth <= 0) {
    return result.push(arr);
  } else {
    for (let i of arr) {
      if (Array.isArray(i)) {
        flatArr(i, depth - 1, result);
      } else {
        result.push(i);
      }
    }
  }

  return result;
}

console.log(flatArr(a, 3));
