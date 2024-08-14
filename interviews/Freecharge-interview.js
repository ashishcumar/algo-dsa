// Curring  :- function a(val1) {
// find missing number in unsorted array 
const missNum = (a) => {
    let ans = Math.floor( (a.length+1) * (a.length + 2) / 2 )
    for(const element of a){
        ans -= element
    }
    return ans
} 

// For this time complexity is O(n)
// console.log(missNum([ 5,4, 3,1 ]))



// function Currying normal type
function sumAll (a) {
   return function (b) {
     return function (c) {
        return a + b + c
     }
   }
}
// console.log(sumAll(1)(2)(3))


function dynamicCurring (a) {
   return function (b) {
      if(!b){
        return a
      }
      return dynamicCurring(a + b)
   }
}

console.log(dynamicCurring(1)(2)(3)(4)(18)())

// RUN COMMAND :- node Freecharge-interview.js
