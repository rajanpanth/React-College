//class: blueprint of an object
//object: instance of the class

class Car {
    #grade;
    //constructor is called when object is created 
    // it is initial setup of the object
    constructor(name, color, model, makingYear) {
        //defining property inside the class
        this.name = name;
        this.color = color;
        this.model = model;
        this.year = makingYear;
        this.#grade = "A";
        console.log("car constructor is called")
    }
    //defining method
    start() {
        console.log(`${this.name} has started`)
    }
    //private method
    #stop(){
        console.log(`${this.#grade} is stopped`)
    }
    stop() {
        this.#stop();
    }
    displayDetails(myName) {
        console.log(`My name is ${myName}`)
        console.log(`name is ${this.name}`)
        console.log(`color is ${this.color}`)
        console.log(`model is ${this.model}`)
        console.log(`year is ${this.year}`)
    }
}
//creating instance or object of class Car
let BMW1 = new Car("BMW", "red", "model1", 2025);
let tesla = new Car("tesla", "black", "model1", 2025)
//accessing property of class using object
console.log("car name: ", BMW1.name);
console.log("car color: ", BMW1.color);
console.log("car model: ", BMW1.model);
console.log("car year: ", BMW1.year);
BMW1.start();

//accessing property of class using object
console.log("car name: ", tesla.name);
console.log("car color: ", tesla.color);
console.log("car model: ", tesla.model);
console.log("car year: ", tesla.year);
tesla.start();

BMW1.displayDetails("rajan");
tesla.displayDetails("rajan")
tesla.stop()
