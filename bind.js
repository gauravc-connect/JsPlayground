const obj1 = { name: "Alice" };
const obj2 = { name: "Bob" };

function greet() {
  console.log(this.name);
}

const boundGreet = greet.bind(obj1).bind(obj2);
boundGreet(); // Alice (not Bob, as `this` is bound once)