//destructing

let Profile = ({ address, name, age }) => {
    console.log("Address: ", address)
    console.log("Name: ", name)
    return (
        <div>
            <h1> Profile Page</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Address: {address}</p>
        </div>
    )
}
export default Profile