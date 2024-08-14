// run command node checkPowerOfTwo.js

const checkPowerOfTwo = (n) => {
    if(n == 1) return true
    if(n %2 !== 0 || n < 0) return false;

    return checkPowerOfTwo(n/2)
}

console.log(checkPowerOfTwo(2))
console.log(checkPowerOfTwo(4))
console.log(checkPowerOfTwo(6))
