const createTestCafe = require('testcafe');
const path = require('path');
const fs = require('fs');

let testcafe = null;
let runner = null;

createTestCafe('localhost', 1337, 1338)
.then((tc) => {
    testcafe = tc;
    runner = testcafe.createRunner();

    let scriptList = path.join(__dirname, 'baseScript.ts');
    console.log(JSON.stringify(scriptList));
    return runner
    .src(scriptList)
    .browsers(['chrome'])
    .concurrency(1)
    .run({
        skipJsErrors: true,
        quarantineMode: false,
        selectorRimeout: 20000,
        assertionTimeout: 20000,
        pageLoadTimeout: 20000,
        speed: 0.90,
        debugMode: false,
        stopOnFirstFail: false
    });
})
.then((failedCount) => {
    console.log('failed: ' + failedCount);
    testcafe.close();
});
