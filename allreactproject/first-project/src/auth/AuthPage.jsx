import Dashboard from "./Dashboard"
import Login from "./login"

let AuthPage = ({ isAuthenticated }) => {

    //conditional rendering using if else
    if (isAuthenticated) {
        return (
            <Dashboard />
        )

    } else {
        return (<Login />)
    }
}
export default AuthPage