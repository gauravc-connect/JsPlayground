const cluster = require('cluster');
const http = require('http');
const os = require('os');

// Get the number of CPU cores on the machine
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Listen for dying workers
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share the TCP connection
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello from Node.js Cluster!');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
