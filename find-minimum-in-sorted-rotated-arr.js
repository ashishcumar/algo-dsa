// RUN COMMAND node find-minimum-in-sorted-rotated-arr.js


function minInArr (a) {
 let i =0;
 let j =a.length-1

 while(i<j){
    let mid = i + Math.floor((j-i)/2)

    if(a[j] >= a[mid]) j = mid
    else i = mid + 1

 }
 return a[i]
}

console.log(minInArr([3,4,5,1,2]))