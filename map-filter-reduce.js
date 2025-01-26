const numbers = [1, 2, 3, 4, 5];

// Find the sum of squares of even numbers

// const even = numbers.filter( x => x%2 ===0);
// console.log("even", even);

// const square = even.map( x => x*x);
// console.log("square ", square);

// const sum = square.reduce((output, current)=> output + current,0);

const sum = numbers.filter(x => x % 2 === 0)
    .map(x => x * x)
    .reduce((output, current) => output + current, 0);

//console.log("sum", sum);

// create an array of objects from strings

const names = ['Alice', 'Bob', 'Charlie'];

const obj = names.map( x => ({x, length : x.length}));

console.log(obj)