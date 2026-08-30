// Confusing Comparisons: == vs === in JavaScript
// ==  -> loose equality (converts types before comparing)
// === -> strict equality (compares value AND type, no conversion)

// Same type, same value -> both true
console.log("5 == 5   =>", 5 == 5);
console.log("5 === 5  =>", 5 === 5);

// Number vs String
console.log("5 == '5'   =>", 5 == "5");
console.log("5 === '5'  =>", 5 === "5");

// Number vs Boolean
console.log("1 == true   =>", 1 == true);
console.log("1 === true  =>", 1 === true);
console.log("0 == false  =>", 0 == false);
console.log("0 === false =>", 0 === false);

// Empty string vs false
console.log("'' == false   =>", "" == false);
console.log("'' === false  =>", "" === false);
console.log("'' == 0       =>", "" == 0);
console.log("'' === 0      =>", "" === 0);

// null vs undefined
console.log("null == undefined  =>", null == undefined);
console.log("null === undefined =>", null === undefined);

// null vs 0 (surprising!)
console.log("null == 0  =>", null == 0);
console.log("null === 0 =>", null === 0);

// NaN is never equal to itself
console.log("NaN == NaN  =>", NaN == NaN);
console.log("NaN === NaN =>", NaN === NaN);

// Variables
let a = 10;
let b = "10";

console.log("a == b  =>", a == b);
console.log("a === b =>", a === b);

// Arrays and objects
console.log("[] == []     =>", [] == []);
console.log("[] === [] ", "[] === []");
//console.log("[] == false  =>", [] == false);
//console.log("[] === false =>", [] === false);

// Rule of thumb:
// Always use === unless you specifically need type coercion.
// Loose equality (==) causes confusing bugs.