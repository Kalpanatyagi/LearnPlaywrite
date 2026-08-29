var testcases = ["login", "logout", "signup"];

for (var i = 0; i < testcases.length; i++) {
    console.log("Running test:", testcases[i]);



}
console.log("loop counter leaked outside", i);