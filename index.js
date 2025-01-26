//Simulate a series of asynchronous tasks using nested callbacks. For example, reading a file,
//  processing its contents, and saving the result.

function readFile(cb){
    setTimeout(()=>{
        fileContent = {
            title : "Notebook",
            text : "ppppppppppppp pppppppppp qqqqqqqqqq qqqqqqqqq"
        };
        console.log("File content =", fileContent);
        cb(fileContent);
    },2000);
}

function processContent(content, cb){
    setTimeout(()=>{
        const processedContent = content;
        processContent["processed"] = true;
        console.log("processedContent =", processedContent);
        cb(processedContent);
    },2000);
}

function saveContent(content,cb){
    setTimeout(()=>{
        const result = content + "File Saved";
        cb(result);
    },2000);
}

function onRead(fileContent){
    processContent(fileContent, )
}

readFile( (fileContent) => {
    
    processContent(fileContent, (content) => {
        
        saveContent = () => {
            console.log("Tasks Done");
        }
    })
} )

