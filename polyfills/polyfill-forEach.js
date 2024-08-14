function forEachPolyfill (arr,fn) {
    for(ele of arr){
        fn(ele)
    }
}

function consoleLog (ele) {
   console.log('curr element is',ele)
}

forEachPolyfill([1,2,3,4,5],consoleLog)