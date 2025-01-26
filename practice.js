
function task1(path) {
    return new Promise((resolve, reject) => {
        setTimeout((path) => {
            console.log("Reading the raw data : task1");
            resolve("rawData");
        }, 2000);
    });
}
function task2(param, rawData) {
    console.log("param in task2", param);
    // read from the path
    return new Promise((resolve, reject) => {
        setTimeout((path) => {
            console.log("Processing Raw data : task2");
            resolve("processedData");
        }, 2000);
    });
}
function task3(processedData) {
    // read from the path
    return new Promise((resolve, reject) => {
        setTimeout((path) => {
            console.log("Formalize data : task3");
            resolve("formalizedData");
        }, 2000);
    });
}

async function processData() {
    const task1Result = await task1("path");
    const task2Result = await task2("argument",task1Result );
    const task3Result = await task3(task2Result);
    console.log("All tasks executed");    
}
processData();
// task1("path")
//     .then((rawData) => task2("argument", rawData))
//     .then(task3)
//     .then(() => console.log("All tasks executed"))
//     .catch(err => console.log(err));