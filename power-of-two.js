// RUN COMMAND  node power-of-two.js

const power = (n) => {
  if( n == 1) return true
  if(n%2 !== 0 || n <= 0) return false

  return power(n/2)
}

console.log(power(4))
console.log(power(41))
console.log(power(18))
console.log(power(16))