

const avgSub = (arr,k) => {
  
    let sum = 0;
    let ans = 0
    for(let i =0;i<k; i++){
        sum+= arr[i]
    }
    ans = sum/k

    for(let i = 0; i< i+k-1;i++){
        console.log(i)
        console.log(arr[i])
    }

}

console.log(avgSub([1,12,-5,-6,50,3],4))


// RUN COMMAND:- node Algo-Dsa/Max-Avg-SubArr.js