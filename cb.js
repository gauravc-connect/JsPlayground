//Simulate a series of asynchronous tasks using nested callbacks. For example, reading a file,
//  processing its contents, and saving the result.


function readFile(path, callback){
    setTimeout( ()=> {
        console.log(`Reads the file from path ${path}`);
        const content = "content of the file";
        callback(content);
    }, 2000);
}

function processContent(content, callback){
    setTimeout( () => {
        console.log("Processing the content");
        const processedContent = " Processed content";
        callback(processedContent);
    },2000);
}

function saveResult(content, callback) {
    setTimeout( () => {
        console.log("Saving the content");
        const fileSaved = true;
        callback(fileSaved);
    },2000);
}

readFile("c:/desktop", (content) => {
    processContent(content,  (processedContent) => {
        saveResult(content,(fileSaved) => {
            console.log("All jobs done");
        } );
    } );
});