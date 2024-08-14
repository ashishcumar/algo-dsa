function throtelling (cb,d = 1000) {
    let last = 0;

    return function (...args) {
        let now  = new Date().getTime()
        if(now - last < b) last = now
        else cb(...args)
    }

}


function inf (a) {
    return function (b){
        if(!b) return a
        inf(a+b)
    }
}