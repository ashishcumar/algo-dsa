// node calculatePower.js

const calculatePower = (base, n) => {
    if(n ==0 ) return 1
    else return base * calculatePower(base,n-1)
}

console.log(calculatePower(2,3))
console.log(calculatePower(3,3))
console.log(calculatePower(4,3))