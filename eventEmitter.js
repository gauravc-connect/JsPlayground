const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("Raised event", ()=>{
    console.log('Received the raised Event');
})
emitter.emit("Raised event");
