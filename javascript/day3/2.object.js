// object: key:value pair or json data
// notation: {}
//declaring object
let myObj = {
    "fullName": "sachin",
    age: 20,
    address: "Kathmandu",
    year: 2005,
    "isMarryed": true,
}

//accessing value from key
//1. using bracket notation
let fullName = myObj["fullName"]
console.log("name is: ", fullName)
// 2. dot notation (recommended)
let address = myObj.address
console.log("address is: ", address)
// adding new key:value pair
myObj.country = "Nepal";
console.log("my object: ", myObj)
//updating or changing value of key
myObj.age = 56;
console.log("updataed object ", myObj)
//deleting key:value pair
delete myObj.isMarryed
console.log("after deletion: ", myObj)

//converting object (key: value pair) to object(array)
//converting to key array
let keyArray = Object.keys(myObj);
console.log("keys:", keyArray)
//convertion to values array
let values = Object.values(myObj)
console.log("values:", values)
//converting the entire [Key, value array]
let entries = Object.entries(myObj)
console.log("entries: ", entries);

//todo: use forEach for all of the above and use destructing for entries inside forEach

//using forEach to iterate over keys
console.log("\nIterating over keys using forEach:");
keyArray.forEach((key) => {
    console.log(key);
});

//using forEach to iterate over values
console.log("\nIterating over values using forEach:");
values.forEach((value) => {
    console.log(value);
});

//using forEach to iterate over entries with destructuring
console.log("\nIterating over entries using forEach with destructuring:");
entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


let response = async function data(){
    axios.get(sdsjhcvjwdlw, {
        res.json{
           
            message: ""
        }
         let data = response.data.name;
    })
}