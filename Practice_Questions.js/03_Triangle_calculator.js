
// let a=10, b=20, c=30;
// if (a<b) : (a<c) {
//     console.log("its an Scalene triangle");
//     else if(a===b===c){
//         console.log(Equilateral triangle);

//         else{
//             console.log("Isoceles triangle");
//         }

//     }
// }

let side1 = 10, side2 = 20, side3 = 30;

if (side1 <= 0 || side2 <= 0 || side3 <= 0 ||
    (side1 + side2 <= side3) ||
    (side1 + side3 <= side2) ||
    (side2 + side3 <= side1)) {
    return "Invalid Triangle";
}

// Step 2: Classify the triangle using if...else if
if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
}
else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Isosceles Triangle");
}
else {
    console.log("Scalene Triangle");
}
