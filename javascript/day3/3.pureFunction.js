// pure function :does not depend on any external variable
// does not have any side effects

let add=(a,b)=>{
    return a +b;
}
let res=add(23,34);
console.log(res)


// impure function

let tax=0.13;
let calculatetax=(price)=>{
    return price  * tax
}
let taxamount=calculatetax(100)
console.log(taxamount)