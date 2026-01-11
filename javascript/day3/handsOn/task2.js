let student=[
    {
          firstname:"Bibek",
        course:"BSC.csit", 
        age:18
    },
    {
         firstname:"Lajusam",
        course:"BSC.It",  
        age:16
    },
     {
         firstname:"Rajan",
        course:"BSC.It",  
        age:20
    },
]

// let filterres=student.filter(student=>student.age>17)
// console.log(filterres);


let mapres=student.map(({firstname,age},index)=>{
        return {
            firstname:firstname.toUpperCase(),
            age:age+5,
        }
})

console.log("using map:",mapres);


let filres=student.filter((e,i)=>{
    return e.age>18;

})
console.log("using filter:",filres);