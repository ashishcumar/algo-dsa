let a = [1,8,6,2,5,4,8,3,7]

// two pointer approach
const checkMaxWater = (a) => {
  let i = 0
  let j = a.length -1
  let maxWater = 0;

  while(i<j){
   maxWater = Math.max(maxWater, ((j - i)* (Math.min(a[i],a[j]))))
   if(a[i] < a[j]) i++
   else j--
  }

  return maxWater
}

console.log(checkMaxWater(a))