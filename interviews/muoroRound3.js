
const arr1 = [2,7,1,3] 
const arr2 = [5,6,2,7]
const target = 8
const output = [[1,7],[2,6],[3,5]]

const getSumOptimized = (arr1,arr2,target) => {
    const result = []
    const array2 = new Set(arr2)
    for(let i =0;i<arr1.length;i++){
        const findNum = target - arr1[i]
        if(array2.has(findNum)){
            result.push([arr1[i],findNum])
        }
    }
    if(result.length == 0) return 'no pair found!'
    return result.sort((a,b) => a[0] - b[0])
}

console.log('getSumOptimized  --->',getSumOptimized(arr1,arr2,target))


const getSum = (arr1,arr2,target) => {
const result = []
for(let i =0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i] + arr2[j] === target){
            result.push([arr1[i],arr2[j]])
        }
    }
}
if(result.length){
 return result.sort((a,b) => a[0] - b[0])
}
return 'no pair found!'
}

console.log('getSum -->',getSum(arr1,arr2,target))


// React Round :- 
// 1. asked to create a child component and modify any state of parent component.
// 2. lazy loading of react, why to use it ? and how to implement it ?
// 3. react context api and react redux and 