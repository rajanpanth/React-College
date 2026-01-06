// inheritance : the ability of an object to inheritance properties and method from another object

//parent class
class Vehicle {

    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
        console.log("vehicle constructor is called")
    }
    makeSound(sound) {
        console.log(`${this.name} makes ${sound}`)
    }
    noOfWeels() {
        console.log(`${this.name} has 4 wheels.`)
    }

}
class Car extends Vehicle {
    constructor(name, model, year, color) {
        //calling parent class constructor
        super(name, model, year)
        //new property for car class
        this.color = color;
        console.log("car constructor is called")
    }
}
let myCar = new Car("Car1", "model1", 2025, "red");
console.log(myCar.name)
console.log(myCar.model)
console.log(myCar.year)
myCar.noOfWeels();
myCar.makeSound("huuu huuuu")

class Bike extends Vehicle {
    constructor(name, model, year, color) {
        super(name, model, year)
        //new property for car class
        this.color = color;
        console.log("Bike constructor is called")
    }
    //method overiding: defining same method in child class
    noOfWeels() {
        console.log(`${this.name} has 2 wheels`)
    }
}


let myBike = new Bike("Bike1", "model100", 2020, "Black");
console.log(myBike.name)
console.log(myBike.model)
console.log(myBike.year)
myBike.makeSound("broom broom")


