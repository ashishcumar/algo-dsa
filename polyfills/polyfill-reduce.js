function reducePolyfill (arr,cb,val) {
  let initVal = val
   arr.forEach((item) => {
    initVal = cb(initVal,item)
   })
   return initVal
}

function add (a,b) {
   return a + b
}

let arr = [1,2,3,4,5,6,7,8,9,10]

let reducedVal = reducePolyfill(arr,add,0)

console.log(reducedVal)