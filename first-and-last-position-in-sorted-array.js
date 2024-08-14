let a = [1,2,3,4,4,5,8]

//Approach 1st
// time complexity 0(1)
const giveOcc = (a,t) => {
let fOcc = -1
    for(let i = 0;i<a.length; i++){
     if(a[i] == t && fOcc == -1){
        fOcc = i
     }else if (a[i] > t){
        if(fOcc !== -1){
            return [fOcc,i-1]
        }else {
            return [-1,-1]
        }
     }
    }
}

// console.log(giveOcc(a,4))

//Approach 2nd

const giveOcc2 = (a,t) => {
  return [a.indexOf(t),a.lastIndexOf(t)]
}

// console.log(giveOcc2(a,4))

//Approach 3rd and Best 



// RUN COMMAND node first-and-last-position-in-sorted-array.js