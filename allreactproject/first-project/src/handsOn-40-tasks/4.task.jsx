//Embed a JavaScript array length in JSX: "You have {items.length} items".

function NoOfArray(){
    let arr = [2, 4, 6, 8, 9]
    return(<div>
<div>You have {arr.length} items</div>
    </div>)
}
export default NoOfArray