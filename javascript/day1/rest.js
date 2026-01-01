// rest operator combines multiple values in an array
// notation : ...
//example without using rest operator

let add = (a, b, c, d, e, f, g, h, i, j, k, l, m, n) => {

    return a + b + c + d + e + f + g + h + i + j + k + l + m + n;

}
let result = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);
console.log("result: " + result);

//using rest operator

let addUsingRest = (...value) => {
// let sum = 0;
// for (let i = 0; i < value.length; i++) {
//   sum += value[i];
// }
// return sum;
return value.reduce(
    (accumulator, currentValue)=>{return accumulator + currentValue},0
)
}
//calling function
let restResult = addUsingRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);
console.log("result using rest ", restResult);



