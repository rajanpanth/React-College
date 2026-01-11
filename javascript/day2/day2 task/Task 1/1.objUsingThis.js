let obj = {
    name: "Rajan",
    greeting: function greet(name) {
        let myname = this.name;
        console.log(`Hello, its me ${myname}`)
    }
}
obj.greeting();