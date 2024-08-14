

const checkDup = (a) => {
    let hash = {}
    for(const element of a){
       if(hash[element]) return true 
       else hash[element] = 1
    }
    return false
}

console.log(checkDup([1,2,4,5,2]))