let a = [1, 3, 3, 4, 2, 1, 3, 4, 2, 0];

const checkSingle = (a) => {
  let hash = {};

  for (let i of a) {
    hash[i] ? hash[i]++ : (hash[i] = 1);
  }

  for (let i in hash) {
    if (hash[i] == 1) {
      return i;
    } else {
      return "no single num found";
    }
  }
};

// time complexity is O(n)
console.log(checkSingle(a));
