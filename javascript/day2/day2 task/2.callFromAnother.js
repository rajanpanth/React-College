let obj = {
    name: "Rajan",
    greeting: function greet(name) {
        console.log(`Hello, its me ${this.name}`)
    }
}
let mygreet = obj.greeting();
mygreet();