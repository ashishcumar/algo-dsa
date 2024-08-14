// node recursion/reverseStrWithRecursion.js

// reverse string with recursion
function reverse (s) {
    console.log("S ->",s)
    if(s.length == 0) return ""
    return reverse(s.substr(1)) + s.charAt(0)
}

// console.log(reverse("hello"))


// reverse string with two-pointers


function twoPointer (s) {
    let str = s.split('')
    let left = 0;
    let right = s.length-1

    while(left < right){
       [str[left],str[right]] = [str[right],str[left]]
       left++
       right--
    }

    return str.join('')
}

console.log(twoPointer("hello"))
