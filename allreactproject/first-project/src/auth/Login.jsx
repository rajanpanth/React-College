let rules = [{
    name: "email", type: "email", placeholder: "enter your email", rule: "required | email"
},
{
    name: "password", type: "password", placeholder: "enter your password", rule: "required | min: 8"
}
]




function Login() {
    return (<div>

        {/* {rules.map(
    (el, index) => {
        return (
            <div key={index}>
                <p>Name: {el.name} </p>
                <p>Rule: {el.rule} </p>
            </div>

        )
    }
)} */}

        <h1>Login Page</h1>
        <p>Please enter the following details to login:</p>
        <div>
            <ol>
                {rules.map(
                    (el, index) => {
                        return (
                       <li key={index}> {el.name}</li>   

                        )
                    }
                )}

            </ol>


            <input type="text" placeholder="Enter the username"></input>
            <br></br>

            <input type="password" placeholder="Enter the password"></input>
            <br></br>
            <button>Login</button>

        </div>

    </div>)
}
export default Login