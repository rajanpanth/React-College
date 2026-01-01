// export example -> 3 types:

//using normal export to singal variable
export const PI = 3.1415

//default export should be only once in a file
let radius = 34.5
export default radius

//exporting multiple variable at once.
let x = 10;
let y = 20;
export {x,y}

//exporting a function
let calculateAreaOfCircle = (radius) =>{
    return PI*radius*radius
}
let calculatePermeterOfCircle = (diameter)=>{
    return PI * diameter
}
export {calculateAreaOfCircle, calculatePermeterOfCircle};


