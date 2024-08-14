let a = [1, 2, 3, 4, 6, 7, 8, 9, 10]; // have to find missing number

let missingNum = Math.floor(((a.length + 1) * (a.length + 2)) / 2);
a.forEach((item) => (missingNum = -item));
console.log(missingNum);
