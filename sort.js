//how to sort an object in ascending order based on id(numerical value)

// const objArray = [
//     { id : 2, value : "Two"},
//     { id : 3, value : "Three"},
//     { id : 1, value : "One"},
//     { id : 4, value : "Four"}
// ]

// const sortedObjArray = objArray.sort( (a,b) => a.id - b.id);

// console.log("sortedObjArray",sortedObjArray);

const obj = {
    a : { id : 2, value : "Two"},
    b : { id : 3, value : "Three"},
    c : { id : 1, value : "One"},
    d : { id : 4, value : "Four"}
}

const objArray = Object.entries(obj);

console.log("objArray",objArray);

const sortedObjArray = objArray.sort( ([,val1],[,val2]) => val1.id - val2.id);

console.log("sortedObjArray",sortedObjArray);

const sortedObj = Object.fromEntries(sortedObjArray);

console.log("sortedObj",sortedObj);

const sortedMap = new Map(sortedObjArray);
console.log("====================================================");
console.log("sortedMap",sortedMap);
console.log("---------------------------------------------------");
console.log(Object.fromEntries(sortedMap));