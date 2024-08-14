let arr = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15, 16,[17,18,19,[20,21,22]]]]];


// Recurrsive Approach
function arrFlat(arr, depth, result = []) {
  if (depth <= 0) {
    return result.push(arr);
  } else {
    for (let ele of arr) {
      if (Array.isArray(ele)) {
        arrFlat(ele, depth - 1, result);
      } else {
        result.push(ele);
      }
    }
  }

  return result;
}

// Iterative Approach

function flatArr (arr){
  let stack = [...arr]
  let result = []
  
  while(stack.length){
    let ele  = stack.shift()
    if(Array.isArray(ele)){
      stack.push(...ele)
    }else{
      result.push(ele)
    }
  }

  return result
}

console.log(flatArr(arr))


// simplest way to use inbuilt function


// console.log(arr.flat(4))
