
let mergeAndDestructure = (obj1, obj2) => {
    let mergedObj = { ...obj1, ...obj2 };
    
    let { name, age, address, city, ...rest } = mergedObj;
    
    return {
        name,
        age,
        address,
        city,
        rest
    };
}

let person = {
    name: "rajan",
    age: 25,
    email: "rajan@example.com"
};

let location = {
    address: "123 Main St",
    city: "Kathmandu",
    country: "Nepal"
};

// Call the function
let result = mergeAndDestructure(person, location);

console.log("Merged Object:", { ...person, ...location });
console.log("\nDestructured values:");
console.log("Name:", result.name);
console.log("Age:", result.age);
console.log("Address:", result.address);
console.log("City:", result.city);
console.log("Rest:", result.rest);
