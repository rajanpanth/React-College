let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];



let addUsingRest = (...arr1) => {
    return arr1.reduce(
    (accumulator, currentValue)=>{return accumulator + currentValue},0
)
}
let restResult = addUsingRest(...arr1);
console.log("result using rest ", restResult);
