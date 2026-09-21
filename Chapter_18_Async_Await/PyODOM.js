async function runTheE2E() {
    let msg1 = await openBrowser();
    console.log("Step:1", msg1);

    let msg2 = await gotToLogin();
    console.log("Step:2", msg2);

    let msg3 = await enterCredentials();
    console.log("Step:3", msg3);

    let msg4 = await clickLogin();
    console.log("Step:4", msg4);
}

runTheE2E();