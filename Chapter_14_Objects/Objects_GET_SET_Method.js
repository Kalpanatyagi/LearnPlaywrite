const user = {
    firstname: "kalpana",
    lastname: "Tyagi",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.fisrtName, this.lastName] = value.split("");
    }
}

console.log(user.fullName);
user.fullName = "Radhika Tyagi";
console.log(user.fullName);