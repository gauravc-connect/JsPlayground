//Simulate a series of asynchronous tasks using nested callbacks. For example, reading a file,
//  processing its contents, and saving the result.


function readFile(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Reads the file from path ${path}`);
            const content = "content of the file";
            resolve(content);
        }, 2000);
    })

}

function processContent(content) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" Error Processing the content");
            const processedContent = " Processed content";
            resolve(processedContent);
        }, 2000);
    })
}

function saveResult(content) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Saving the content");
            const fileSaved = true;
            resolve(fileSaved);
            //reject("Error while saving file");
        }, 2000);
    })
}

// readFile("c:/desktop", (content) => {
//     processContent(content,  (processedContent) => {
//         saveResult(content,(fileSaved) => {
//             console.log("All jobs done");
//         } );
//     } );
// });

readFile("c:/desktop")
    .then(processContent)
    .then(saveResult)
    .catch( error => console.log(error));