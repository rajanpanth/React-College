let obj1 = {
name: "rajan",
obj2 : {
surName : "Pantha"
},
 call :  function(){
    this.first = this.name;
    this.last = this.obj2.surName

    console.log(`${this.first} ${this.last}`)
}
}

obj1.call();