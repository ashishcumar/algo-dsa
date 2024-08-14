
 // basically here we have to calculate power of x upto n times
 
const pow = (x,n) => {
    if( n == 1) return x
    let num = pow(x,Math.floor(n/2))
    
    if(n%2 == 0){
        return num * num
    }else {
        return x * num * num
    }
}

const myPow = (x,n) => {
    if( n == 0) return 1
    if (n > 0) return pow(x,n)
    if(n < 0) return 1/pow(x,n)
}


console.log(myPow(2,10))