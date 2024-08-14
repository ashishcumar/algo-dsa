function Outer(){
    let a=1;
    return ()=> {console.log(a++)}
  }
  
  const obj = Outer()
  obj()
  obj()
  Outer()()

//   a++ = 1,2,1
//   ++a = 2,3,2

  var funcA = (function(){
    console.log('foo');
    funcB();
  })()
  
  var funcB = function(){
    console.log('bar')
  }
