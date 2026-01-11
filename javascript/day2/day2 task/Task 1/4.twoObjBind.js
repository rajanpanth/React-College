let obj = {
    name: "Rajan",
    greeting: function greet(name) {
        console.log(`Hello, its me ${this.name}`)
    }
}
let obj1 = {
    name: "Ram",
    greeting: function greet(name) {
        console.log(`Hello, its me ${this.name}`)
    }
}


let greetWithBind = obj.greeting.bind(obj)
let greetWithBind1 = obj1.greeting.bind(obj1)
greetWithBind();
greetWithBind1();

