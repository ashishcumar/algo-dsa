// flat an arr;  with recursion and normal itirative approach
// check the occurance of letters in a word
// write a function which return the value from given nested-obj and path as string
// react stapper ui code
// questions around react form handling

let obj = {
    a:1,
    b:2,
    c:{
        d:3,
        e:4,
        f:{
            g:5,
            h:6,
            i:{
                j:7,
                k:8
            }
        }
    }
}

function getVal (obj,path) {
   Object.keys(obj).forEach((item) => {
     if(typeof obj[item] === "object"){
          return  getVal(obj[item],path.substr(2))
       }
        if(obj[path]){
            console.log('passed condition ->',obj[path])
        }
   })
}

// getVal(obj,"c.f.i.k")

////// find the occurance of letters in a word;

let str = "hellolll"


function countOcc (s) {
  let result = ""
  let count = 1

  for(let i =0;i<s.length; i++){
    if(s[i] === s[i+1]){
        count++
    }else{
        result += s[i] + count;
        count = 1;
    }
  }

  return result;
}

// console.log(countOcc(str))

// other approach for finding the occurance of letters in a word

function countOccurance (s) {

    let result = ""
    let hash = {}
    for(let letter of s){
        hash[letter] ? hash[letter]++ : hash[letter] = 1;
    }

     Object.entries(hash).map(([key,value]) => {
         result += key + value
     })

     return result;
}

console.log(countOccurance(str))


