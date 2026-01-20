import Profile from "../pages/Profile"

let EventHandling = () => {
    let handleIncrement = (event) => {
        console.log("increment Button clicked")
        event.target.style.backgroundColor = "red"
        event.target.style.fontSize = "40px"
    }
    let person = {
        name: "Rajiv",
        age: 25,
        address: "bhaktapur"
    }
    /*
let event = {
target:{
title: "increment",
style:{
backgroundColor: "red",
fontSize: "40px"
},
onClick : ()=>()
}
}
    */

let handleOnchange = (event) => {
    console.log("input changed");
// console.log(event.target.placeholder)
console.log(event.target.value)
}
    return (
        <div>
            <h1>Event Handling Test</h1>
            <input onChange={handleOnchange} placeholder="Enter your full name" type="text"></input>
            <br></br>
            <button onClick={handleIncrement} >
                Increment
            </button>
            <button onClick={
                () => {
                    console.log("decrement clicked")
                    console.log(event.target)
                }
            }>
                Decrement
            </button>

            <Profile {...person} />
        </div>
    )
}
export default EventHandling