const person = {
    name: 'John',
    age: 30,
    country: 'USA'
};

for(let key in person){
    console.log(key, ":", person[key]);
}