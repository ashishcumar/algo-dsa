// RUN COMMAND node smallest-pos-num.js


//Function to find the smallest positive number missing from the array.

let a = [1,2,3,4,5]
let b = [0,-10,1,3,-20]


const minPos = (a) => {

    let min = Math.min(...a)
    let max = Math.max(...a)
    
    for(let i = min; i<=max; i++){
        if(i > 0&& a.indexOf(i) < 0){
            return i
        }
    }
    return max + 1
}

console.log(minPos(b))