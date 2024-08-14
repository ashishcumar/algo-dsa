let a = [5, 4, 8, 9, 5, 4, 8, 5, 2, 3, 1];

function bubble(a) {
  let n = a.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}

// time-complexity = 0(n2) 
// space-complexity = 0(1) constant

console.log(bubble(a));
