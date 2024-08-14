Function.prototype.Basicbind = function (obj) {
  const func = this;
  return function (arg) {
    return func.call(obj, arg);
  };
};

let obj = {
  first: "ashish",
  last: "kumar",
};

function printName(val) {
  console.log("first name", this.first, "last name", this.last, "val", val);
}

// printName.call(obj)
let myBindVal = printName.Basicbind(obj);
myBindVal("df");
