
let names = ["Rahul", "Ram", "Hari", "Shyam"]
let Dashboard = () => {
    return (<div>

        <h3>User Dashboard</h3>
        <p>Welcome to Dashboard</p>
        <i>You are good to go</i>
        <ul>
            {
                names.map(
                    (el, index) => {
                        return (
                            <li key={index}>{el}</li>

                        )
                    }
                )
            }
        </ul>
    </div>)
}
export default Dashboard