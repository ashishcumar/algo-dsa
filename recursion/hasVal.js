// node hasVal.js


var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}


function hasVal (obj,searchVal) {
    for(let ele in obj){
        if(typeof obj[ele] === "object"){
            return hasVal(obj[ele],searchVal)
        }else if (obj[ele] == searchVal) {
            return true
        }
    }
    
    return false
}

console.log(hasVal(nestedObject,44))



const deepNestedObject = {
  name: "John",
  age: 30,
  contact: {
    email: "john@example.com",
    phone: {
      mobile: "123-456-7890",
      home: "987-654-3210",
    },
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  },
  interests: ["programming", "gaming", "reading"],
  education: {
    highSchool: {
      name: "Anytown High School",
      graduationYear: 2005,
    },
    college: {
      name: "University of JavaScript",
      graduationYear: 2010,
      degrees: [
        "Bachelor's in Computer Science",
        "Master's in Web Development",
      ],
    },
  },
};

function hasVal2(obj, searchVal) {
  Object.forEach(obj).find((ele) => {
    console.log('ele ->', ele,obj[ele],"searchVal ->",searchVal)
    if (obj[ele] == searchVal) return true;
    if (typeof obj[ele] == "object") {
        console.log('obj[ele] ->', obj[ele])
      return hasVal(obj[ele], searchVal);
    }
  });

  return false;
}

console.log(hasVal2(deepNestedObject, 2010));
