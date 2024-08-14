const { resolve } = require("url")

// write a function to break array into small chunks of given size
let arr1 = [1,2,3,4,5,6,7,8,9,10]
let arr2 = [11,12,13,14,15,16,17,18,19,20]
let arr3 = [21,22,23,24,25,26,27,28,29,30]

function divideArrInchunks (arr,chunkSize) {
   let result = []
   let temp = []
   for(let i = 0;i<arr.length;i++){
    temp.push(arr[i])
    if(temp.length == chunkSize || arr.length-1 == i){
        result.push(temp)
        temp = []
    }
   }
    
   return result;
}
// console.log(divideArrInchunks(arr1,4))
// console.log(divideArrInchunks(arr2,3))
// console.log(divideArrInchunks(arr3,5))

// write a function to print console.logs in synchronous way

const sleep = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve,duration)
  })
}

const printLogs = async() => {
    console.log('log1')
    await sleep(2000)
    console.log('log2')
}

printLogs()

