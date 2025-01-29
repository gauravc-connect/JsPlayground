let count = 0;
const sayHello = setInterval(()=>{
    
    count++;
    console.log("Hello....",count);
},1000);

setTimeout(()=>{
    clearInterval(sayHello);
    console.log("Stop the sayHello function now");
}, 10000);