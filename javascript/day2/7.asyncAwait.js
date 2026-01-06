// async and await soves the problem of callback hell 
//  makes asynchronous code look like synchronous code
// async makes a function return a promise
// await makes a function wait for a promise

let fetchUsers = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
}