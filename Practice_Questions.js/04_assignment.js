const prompt = require("prompt-sync")();

const side1 = Number(prompt("Enter the first side length: "));
const side2 = Number(prompt("Enter the second side length: "));
const side3 = Number(prompt("Enter the third side length: "));

const isValidNumber = [side1, side2, side3].every(Number.isFinite);
const formsTriangle = side1 + side2 > side3 &&
    side1 + side3 > side2 &&
    side2 + side3 > side1;

if (!isValidNumber || side1 <= 0 || side2 <= 0 || side3 <= 0 || !formsTriangle) {
    console.log("Invalid triangle");
} else if (side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
}
