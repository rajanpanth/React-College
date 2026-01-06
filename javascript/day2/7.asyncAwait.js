// async and await soves the problem of callback hell 
//  makes asynchronous code look like synchronous code
// async makes a function return a promise
// await makes a function wait for a promise

let fetchUsers = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let result = await response.json();
        console.log("user: ", result)
    } catch (error) {
        console.log("error is: ", error)
    } finally {
        console.log("this is always called")
    }
}
console.log("fetching user...")
fetchUsers();
console.log("after user fetched")