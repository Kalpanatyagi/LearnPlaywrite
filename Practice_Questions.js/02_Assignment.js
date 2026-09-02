//MAximum number between two numbers - using ternary operator
// Maximum between the three numbers also by using ternary operator


// let a = 1;
// let b = 5;

// let max = (a > b) ? a : b;
// console.log(max);



let x = 10;
let y = 20;
let z = 30;

let max = (x > y) ? (x > z) ? x : z : (y > z) ? y : z;
console.log(max);