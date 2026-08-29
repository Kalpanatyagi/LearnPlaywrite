// JavaScript Number Type - Complete Lab Exercise

// 1. Number is a primitive data type in JavaScript
let count = 10;
console.log("count:", count);

// 2. Numbers can be written in decimal form
let price = 99.99;
console.log("price:", price);

// 3. Numbers can be written in exponential form
let bigNumber = 1e5;
let smallNumber = 1e-5;
console.log("bigNumber:", bigNumber);
console.log("smallNumber:", smallNumber);

// 4. Integer and floating point numbers
let integerValue = 25;
let floatValue = 25.75;
console.log("integerValue:", integerValue);
console.log("floatValue:", floatValue);

// 5. JS uses IEEE 754 standard for numbers
let a = 0.1 + 0.2;
console.log("0.1 + 0.2 =", a);
console.log("This shows floating point precision in JavaScript");

// 6. Special numeric values
console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("NaN:", NaN);

// 7. Number() conversion
let strNum = "123";
let converted = Number(strNum);
console.log("Converted Number:", converted);

// 8. parseInt and parseFloat
console.log("parseInt('123abc'):", parseInt("123abc"));
console.log("parseFloat('12.5px'):", parseFloat("12.5px"));

// 9. Number methods
console.log("Number.isInteger(10):", Number.isInteger(10));
console.log("Number.isInteger(10.5):", Number.isInteger(10.5));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isFinite(100):", Number.isFinite(100));

// 10. Math operations
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.round(4.6):", Math.round(4.6));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.ceil(4.1):", Math.ceil(4.1));

// 11. Number.MAX_VALUE and Number.MIN_VALUE
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);

// 12. Summary
console.log("JavaScript numbers are double-precision floating-point values.");
console.log("They support integers, decimals, exponent notation, NaN, Infinity, and Math operations.");
