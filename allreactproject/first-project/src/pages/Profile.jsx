import { useState } from "react";

//destructing props
let Profile = ({ address, name, age }) => {
    console.log("Address: ", address)
    console.log("Name: ", name)
    // let count = 0;
    // let [c, setC] = [0, f]
    let [count, setCount] = useState(0)
    // console.log("state: ", state)
    return (
        <div>
            <h1> Profile Page</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Address: {address}</p>
            <p>Count: {count}</p>
            <button onClick={
                () => {
                    setCount(count++)
                    console.log("count: ", count);
                }
            }>Increase count</button>
        </div>
    )
}
export default Profile