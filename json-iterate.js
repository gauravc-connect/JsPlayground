const pureJSON = `{
     "name" : "Gaurav",
     "city" : "Bengaluru",
     "zip" : "560103"
}`;

const jsonObj = JSON.parse(pureJSON);

// for(let key in jsonObj){
//     console.log(key, ":", jsonObj[key]);
// }

Object.keys(jsonObj).forEach((key)=>{
    console.log(key, "::", jsonObj[key]);
});

Object.entries(jsonObj).forEach(([key,value])=>{
    console.log(key, "/", value);
});

const jsonMap = new Map(Object.entries(jsonObj));


jsonMap.forEach((value,key)=>{
    console.log(key, ">", value);
});

for(const [key,value] of Object.entries(jsonObj)){
    console.log(key, "<>", value);
}

console.log("--------------------------------");
console.log(Object.entries(jsonObj));