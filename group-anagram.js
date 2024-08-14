// RUN COMMAND node group-anagram.js

let a = ["eat","tea","tan","ate","nat","bat"]

const giveAna = (a) => {
    let hash = {}

    for(let i = 0; i<a.length; i++){
        let val = a[i].split('').sort().join('')
        if(hash[val]) hash[val].push(a[i])
        else hash[val] = [a[i]]
    }

    return Object.values(hash)
}

console.log(giveAna(a))