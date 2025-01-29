//Using ES6 classes, create a Vehicle class with a start() method.
//  Extend it to create a Car class with an additional drive() method.
//  Demonstrate its usage with instances of both classes.

class Vehicle {
    start(){
        console.log("Start you vehicle");
    }
    drive(){
        console.log("Do not drive it on the road");
    }
}

class Car extends Vehicle {
    drive(){
        //super.drive();
        console.log("drive it on the road");
    }
}

const bmw = new Car();

bmw.start();
bmw.drive();