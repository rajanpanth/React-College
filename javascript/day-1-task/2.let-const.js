// Create a let variable inside a block {} and try to access it outside. Then do the same with a const variable. Observe the errors.


{
    let blockLet = "I'm inside the block";
    console.log(blockLet); 
}

{
    const blockConst = "I'm also inside the block";
    console.log(blockConst); 
}
console.log(blockLet) 
console.log(blockConst)
