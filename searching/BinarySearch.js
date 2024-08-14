let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 96;

function binSer(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (mid > target) right = mid - 1;
    if (mid < target) left = mid + 1;
    if (mid == target) return mid;   
  }

  return -1;
}

console.log(binSer(arr,target))
