// array is the collection of element
// notation: []
//creating array;
let myArr = [4, 5, 8, 9, 6, 3]
//accessing element in some index
console.log("element is index 4 is ", myArr[4])
console.log("element is index 3 is ", myArr[3])
//adding new element at last
myArr.push(22);
console.log("new array: ", myArr)
//removing last element
myArr.pop()
console.log("new array: ", myArr)
//changing element in some index
myArr[3] = 999;
console.log("new array: ", myArr)


// //slice example
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// fruits.slice(1, 3);     // ['banana', 'cherry']
// fruits.slice(2);        // ['cherry', 'date', 'elderberry']
// fruits.slice(-2);       // ['date', 'elderberry'] (last 2 items)
// fruits.slice();         // ['apple', 'banana', 'cherry', 'date', 'elderberry'] (shallow copy)
// console.log(fruits);    // Original unchanged: ['apple', 'banana', 'cherry', 'date', 'elderberry']


// normal array loop
let arr = [2, 5, 8, 6, 9, 7]

for (let i = 0; i < arr.length; i++) {
    arr[i];
    console.log("index", i, "element ", arr[i])
}

//using for -of
for (element of arr) {
    console.log("element", element)
}
//using for -in
for (index in arr) {
    console.log("index", index, "element: ", arr[index])
}
//using extension function forEach
arr.forEach(
    //callback function
    (element, index) => {
        console.log("index: ", index, "element: ", element)
    }
)

let name = ["Anita", "ravi", "samay", "rohit", "virat"]
//using map to modify each element in array
let modifiedName = name.map(
    (element, index) => {
        return element.toUpperCase()
    }
)
console.log("modified name: ", modifiedName)

//using reduce to accumulate the element in array
let numbers = [90, 80, 50, 140, 150, 60, 88]
// sum of all elements in an array
let sum = numbers.reduce(
    (accumulator, element) => {
        return accumulator + element;
    }, 0  //initial value for accumulator
)
console.log("sum is", sum)


//using reduce to find maximum element in array
let numbers1 = [90, 80, 50, 140, 150, 60, 88]

let max = numbers1.reduce(
    (accumulator, element) => {
        return accumulator > element ? accumulator : element;
    }, 0
)
console.log("max is", max)

//using find in array: always returns first found element
let marks = [90, 80, 50, 22, 150, 60, 88]
lessThan25 = marks.find(
    (ele, index) => {
        return ele<25
    }
)
console.log("the number less than 25  is",lessThan25)


//using filter in array
let filterMarks = marks.filter(
    (e, i)=>{
return e<25
    }
)
console.log("filtered Marks = ", filterMarks)



// //slice example
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// fruits.slice(1, 3);     // ['banana', 'cherry']
// fruits.slice(2);        // ['cherry', 'date', 'elderberry']
// fruits.slice(-2);       // ['date', 'elderberry'] (last 2 items)
// fruits.slice();         // ['apple', 'banana', 'cherry', 'date', 'elderberry'] (shallow copy)
// console.log(fruits);    // Original unchanged: ['apple', 'banana', 'cherry', 'date', 'elderberry']

//slice ans splice example

let slicedMarks = marks.slice(1, 3);     
console.log("sliced marks: ", slicedMarks)


//remove 2 elements starting from index 1
let spliceMarks = marks.splice(1, 2);
console.log("removed elements: ", spliceMarks)  
