// Write a function sumAll using the rest operator (...numbers) that calculates the sum of any number of inputs. Test with 1, 2, 3, 4.

let sumAll = (...value) =>{
return value.reduce(
    (accumulator, currentValue)=>{return accumulator + currentValue},0
)
}
let res = sumAll(1, 2, 3, 4)
console.log(res)