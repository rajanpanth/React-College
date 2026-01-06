let obj = {
    name: "Rajan",
    greeting: function greet(name) {
        console.log(`Hello, its me ${this.name}`)
    }
}
// let mygreet = obj.greeting();
// mygreet();

let greetWithBind = obj.greeting.bind(obj)
greetWithBind();
