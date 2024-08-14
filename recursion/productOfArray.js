
// node productOfArray.js

function checkAllValues (arr,) {
    return arr.reduce((prod,element) => prod*element)
  }
  
//Approach 2

function getProduct (arr,cb,acc= 1) {
  arr.forEach((item) => acc =  cb(item,acc))
  return acc
}

function callBack (ele,acc) {
   return ele * acc
}

console.log(getProduct([1,2,3,10],callBack))

