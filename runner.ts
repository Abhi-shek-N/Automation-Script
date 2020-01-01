console.log("Started Running !!!!!");

const createTestCafe = require('testcafe');
const path = require('path');
const fs = require('fs');

let testcafe = null;
let runner = null;

function getfiles(data) {
    let scriptarray = [];
    console.log('getting script files');
    return scriptarray.push('welcomeScript.ts');
}

createTestCafe('localhost', 1337, 1338)
.then((tc) => {
    testcafe = tc;
    runner = testcafe.createTestCafe();
    let configPath = 'config.json';

    const configData = String(fs.readFileSync(configPath));
    let data = JSON.parse(configData);
    let scriptList = getfiles(data);
    console.log(JSON.stringify(scriptList));
    return runner
    .src(scriptList)
    .browser(['chrome'])
    .concorrency(1)
    .reporter(['spec', {
        name: 'json',
        output: 'report.json'
    }, {
        name: 'html',
        output: 'report.html'
    }])
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

console.log('Ended Running !!!');