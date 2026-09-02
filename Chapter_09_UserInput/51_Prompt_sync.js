const prompt = require("prompt-sync")();

let num = Number(prompt("enter a number"));

if (num % 2 === 0) {
    console.log(num + " is even");
} else {
    console.log(num + " is odd");
}
