// A number will be given add all number until that number;

const sumRange = () => {
  if (n <= 1) return n;
  return n + sumRange(n - 1);
};

const sumRange2 = (n, curr = 0, total = 0) => {
  if (n <= 1) return n;
  while (curr <= n) {
    return sumRange2(n, curr + 1, (total += curr));
  }
  return total;
};

console.log(sumRange2(10));
