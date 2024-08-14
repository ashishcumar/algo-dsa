function filterPolyfill(arr, fn) {
  // here i am passing arr and a function with required logic
  let output = [];
  arr.forEach((item) => {
    if (fn(item)) {
      output.push(item);
    }
  });
  return output;
}

const isEven = (n) => (n % 2 ? false : true); // this is the function which is going to pass as argument

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const onlyEven = filterPolyfill(arr, isEven);
console.log(onlyEven);

