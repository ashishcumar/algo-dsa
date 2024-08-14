const sqrt = (n) => {
  let i  = 0;
  let j  = n + 1
  
  while(i<j){
    let m = Math.floor(i+(j-i)/2)

    if(m*m > n) j = m
    else i = m + 1
  }

  return i - 1
}

console.log(sqrt(16))