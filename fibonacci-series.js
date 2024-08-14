const recurClimb = (n) => {
    if(n == 0) return 0
    if(n == 1) return 1
    
    return recurClimb(n-1) + recurClimb(n-2)
}

console.log(recurClimb(10))