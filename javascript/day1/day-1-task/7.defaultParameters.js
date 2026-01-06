// Write a function sayHello with a parameter name that defaults to "Guest" if not provided. Log the output when called with and without an argument.

let hello= (a = "Guest")=>{
console.log(`Hello!, ${a}`)
}
hello("rajan")
hello();