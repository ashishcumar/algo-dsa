// RUN COMMAND node search-in-rotated-sorted-arr.js

const bruteForce = (arr, t) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == t) return i;
  }
};

