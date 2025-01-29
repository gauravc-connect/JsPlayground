const { EventEmitter } = require('events'); 

const eventEmitter = new EventEmitter(); // Now correctly using EventEmitter

eventEmitter.on('myEvent', (data) => {
    console.log(data, '-- FIRST');
});

console.log('Statement A');

eventEmitter.on("myEvent", data=> {
    console.log(data, '- SECOND');
});

eventEmitter.emit('myEvent', 'Emitted Statement');

console.log("Statement B");