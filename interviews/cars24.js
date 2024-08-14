// Q1. Hositing

////////////////////////////////////////////////////////////////////////////////////////////////////
// Q2. polyfill for reduce

function cbForReduce(item, acc) {
  return item + acc;
}
function reducePolyfill(cb, arr) {
  let acc = 0;
  arr.forEach((item) => (acc = cb(item, acc)));
  return acc;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reducePolyfill(cbForReduce, arr));

////////////////////////////////////////////////////////////////////////////////////////////////////

//  Q3;  interviewer gave me this arrofobj and asked for the output of
// [[ 'aplha', [ [Object], [Object], [Object] ] ],  [ 'beta', [ [Object] ] ],  [ 'gamma', [ [Object] ] ] ]
let arrOfObj = [
  {
    category: "aplha",
  },
  {
    category: "aplha",
  },
  {
    category: "beta",
  },
  {
    category: "gamma",
  },
  {
    category: "aplha",
  },
];

let result = [];
let hash = {};

arrOfObj.forEach((item) => {
  if (hash[item.category]) {
    hash[item.category].push(item);
  } else {
    hash[item.category] = [item];
  }
});

console.log(Object.entries(hash));

////////////////////////////////////////////////////////////////////////////////////////////////////

// Q: toggle the second obj of array on behalf of a boolean indicator ;
let booleanIndicator = false;
let arr1 = [
  {
    a: 2,
    b: 1,
  },
  {
    a: 2,
    b: 1,
  },
];

// Approch

let arr1Ans = [
  {
    a: 2,
    b: 1,
  },
  {
    ...(true
      ? {
          a: 2,
          b: 1,
        }
      : []),
  },
];

////////////////////////////////////////////////////////////////////////////////////////////////////
