let a = [1,2,3,4]

const prodQ = (a) => {
  let ans = []

  for(let i = 0; i<a.length; i++){
    let val = 1
    for(let j = 0; j<a.length; j++){
         val *= i !== j ? a[j] : 1
    }
    ans.push(val)
  }

  return ans
}

console.log(prodQ(a))

// RUN COMMAND node product-of-array-except-self.js