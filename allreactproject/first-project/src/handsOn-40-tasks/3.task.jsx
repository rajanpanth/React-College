// Write JSX with a conditional message using ternary operator.

import { useState } from "react"

function ConditionalRendering(){
    let [count, setCount] = useState(0);
    function increase(){
        setCount(count+1)
    }
return(<div>
<button onClick={increase}>increase</button>
<div>{count%2 == 0 ? "even" : "odd"}</div>
</div>)
}
export default ConditionalRendering