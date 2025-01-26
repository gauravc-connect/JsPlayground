//Create a constructor function named Car that takes make, model, and year as arguments 
// and sets the corresponding properties of the object.
//Add a method to the Car prototype named getAge that calculates and returns the age of the car (current year - year).
// function Car(make,model,year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// };

// Car.prototype.getAge = function() {
//     const currentYear = new Date().getFullYear();
//     console.log("Age of the car is =", currentYear - this.year);
// };

// const car1 = new Car("BMW","X1",2019);
// car1.getAge();

//Write a constructor function to create an object for a Book with title and author.
//  Add a method getDetails() to the prototype.

function Book(title, author){
    this.title = title;
    this.author = author;
}

Book.prototype.getDetails = function (){
    console.log(`The author of the book named "${this.title}" is "${this.author}"`);
}

const book1 = new Book("Ctor function of Javascript","MDN Docs");
book1.getDetails();

console.log(book1.__proto__);