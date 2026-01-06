// promise: represent to the future value
//it makes asynchronous programming easy
// resolve: pronise will be fullfilled
// reject: promise will be rejected

//creaating promise
let myPromise = new Promise(
    //callback function
    (resolve, reject) => {
        let mailePromisePuraGaray = true;
        if (mailePromisePuraGaray) {
            resolve("promise fullfilled successfully");
        } else {
            reject("promise rejected");
        }
    });

//consuming promise
console.log("before promise")
myPromise.then(
    (result) => {
        console.log(result);
    }

).catch(
    (error) => {
        console.log("error is", error);
    }
).finally(() => {
    console.log("Always finally called")
})

console.log("after promise")
