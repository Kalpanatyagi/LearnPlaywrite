// null vs undefined in JavaScript

// 1) undefined -> variable is declared but no value is assigned
let name;
console.log(name); // undefined

// 2) null -> intentional absence of a value
let age = null;
console.log(age); // null

// 3) Example showing the difference
let user = {
    firstName: "Kalpana"
};

console.log(user.lastName); // undefined (property does not exist)
user.lastName = null;
console.log(user.lastName); // null (value is intentionally empty)

// 4) Type check
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"

// Summary:
// undefined means a variable has not been assigned a value yet.
// null means a variable has been assigned a value intentionally as empty.
