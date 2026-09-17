
// const calculator = {
//     value: 0,
//     add(n) {
//         this.value += n;
//         return this;
//     }
// }
// calculator.add(5).add(10);
// console.log(calculator.value);



//const { age } = user;
const user = { name: "John", age: 30, city: "NYC" };
const { country = "USA" } = user;
console.log(country);
console.log(user);

const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"

        }
    }
};

const { user: { address: { city } } } = data;
console.log(user);