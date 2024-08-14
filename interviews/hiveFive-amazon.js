// node interviews/hiveFive-amazon.js

let  items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]


function highFive (arr) {
const obj = {}
const resultObj = {}

for(let [key,value] of arr){
    if(obj[key]) obj[key].push(value)
    else obj[key] = [value]
}

Object.keys(obj).forEach((key) => {
    obj[key] = obj[key].sort((a,b) => b-a)
})

for(let key in obj){
    resultObj[key] = Math.floor(((obj[key].splice(0,5).reduce((acc,curr) => acc+curr))/5))
}

return Object.entries(resultObj)

}
