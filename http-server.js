const httpServer = require('http');

const server = httpServer.createServer((req,res)=> {
    res.end("Hello there!!!");
});

server.listen(8999, () => {
    console.log(`Server listining to port number 8999`);
});