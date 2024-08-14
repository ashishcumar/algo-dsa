function mapPolyfill(arr, fn) {
  let output = [];
  arr.forEach((item) => {
    output.push(fn(item));
  });
  return output;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addTwo(n) {
  return n + 2;
}

let addedNum = mapPolyfill(arr, addTwo);

console.log(addedNum);

// function


