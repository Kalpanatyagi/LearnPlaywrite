
let actualstatuscode = 200;
let expectedresultcode = 200;
let result = actualstatuscode === expectedresultcode ? "Test case pass" : "Test case fail";
console.log(result);


let responsetime = 850;
let sla = 1000;
let slastatus = responsetime <= sla ? "within SLA" : "SLA breached";
console.log(`responsetime is: ${responsetime} ms - ${slastatus}`);


let temp = 35;
let feel = (temp >= 40) ? "Very hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : " Cold";
console.log("7. Temperature:", temp, " |feel:", feel);