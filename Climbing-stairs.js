
// n is the num of steps by which we can reach top
const climb = (n) => {
 let memo = [1,1,2]

 for(let i = 3; i<= n;i++){
    memo[i] = memo[i-1] + memo[i-2]
 }

 return memo[n]
}

// console.log(climb(10))

