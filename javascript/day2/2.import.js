import radius, {PI, x, y} from "./3.export.js"
import { calculateAreaOfCircle, calculatePermeterOfCircle } from "./3.export.js"
console.log("the radius is: ", radius)
console.log("PI is: ", PI)
console.log("x is: ",x)
console.log("y is: ",y)

let area = calculateAreaOfCircle(56);
let perimeter = calculatePermeterOfCircle(30);
console.log("area is: ", area)
console.log("perimeter is: ", perimeter)