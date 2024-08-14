// RUN COMMAND node reverse-word-by-word.js

// we have to reverse a letter in the sentence but not the position of words

let a  = 'this is a javascript code'
let b = a.split(' ')
let ans = ""

for(const element of b){
    let curr = element.split('')
    let left = 0;
    let right = curr.length - 1

    while(left < right){
        let temp  = curr[left]
        curr[left]  = curr[right]
        curr[right] = temp
        left++
        right--
    }
    
    ans += `${curr.join('')} ` 
}


console.log(ans)
