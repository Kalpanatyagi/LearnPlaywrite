let isLoggedIn = true;
let userRole = "Editor";

if (isLoggedIn) {
    if (userRole.toLowerCase() === "admin") {
        console.log("You have full access");
    } else if (userRole.toLowerCase() === "editor") {
        console.log("Edit access");
    } else if (userRole.toLowerCase() === "viewer") {
        console.log("Only view access");
    } else {
        console.log("You have no access");
    }

} else {
    console.log("You are not logged in");
}

