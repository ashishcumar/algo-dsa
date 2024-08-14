// RUN COMMAND node value-swap.js


// let a = 10;
// let b = 20;

// a = a + b; // a now holds the sum of both values (10 + 20 = 30)
// b = a - b; // b now holds the original value of 'a' (30 - 20 = 10)
// a = a - b; // a now holds the original value of 'b' (30 - 10 = 20)

// console.log(a); // Output: 20
// console.log(b); // Output: 10

function swap (a,b) {
    a = a + b
    b = a - b
    a = a - b

    return [a,b]
}

console.log(swap(10,15))