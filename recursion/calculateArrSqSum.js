// node calculateArrSqSum.js

function power (base,expo){
    if(expo == 0 ) return 1;
    return base * power(base,expo-1)
}

let arr = [1,2,3,4,5,6,7,8]

function calculateSq (arr) {
    let total = 0;
    for(let i of arr){
        total += power(2,i)
    }
    
    return total
}

console.log(calculateSq(arr))