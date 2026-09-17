let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.timeout = "login test";

console.log(config);

if (config.browser === "chrome") {
    console.log("I will execute my TC");
}