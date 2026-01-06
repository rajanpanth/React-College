// Create an object person with keys name, age, and country. Destructure the object to extract name and country into variables and log them.

let obj = {
    name: "Rajan",
    age: 20,
    country: "Nepal"
}

//destructing
let{name, age, country} = obj
console.log(name, age, country);