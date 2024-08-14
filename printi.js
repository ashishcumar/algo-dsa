function varPrint() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), i * 1000); // it will print 5 only because var is functional scope and its value is modified each time
  }
}

function letPrint() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), i * 1000); // it will print 0,1,2,3,4  because let is block scope and it make new let ref each time
  }
}

function varClousersPrint() {
  for (let i = 0; i < 5; i++) {
    (function (index) {
      setTimeout(() => console.log(index), index * 1000); //  This closure captures the current value of i as index, which is then used inside the setTimeout callback. As a result, you'll get the output 0, 1, 2, 3, 4
    })(i);
  }
}

varClousersPrint();
