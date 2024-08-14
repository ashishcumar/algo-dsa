let a = [3, 5, 6, 10, 11, 20];
let b = [1, 2, 7, 8, 15, 19];

const mergeSort = (a, b) => {
  // a and b are sort arrays
  let ansArr = [];

  while (a.length && b.length) {
    let val = a[0] < b[0] ? a.shift() : b.shift();
    ansArr.push(val);
  }

  if (a.length) ansArr = ansArr.concat(a);
  else if (b.length) ansArr = ansArr.concat(b);

  console.log(ansArr);
};



console.log(mergeSort(a,b))