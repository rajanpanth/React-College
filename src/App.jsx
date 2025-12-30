
import React, { useState } from 'react';
// import './App.css';
import customcss from './customcss.module.css';
import image from './assets/image.png';
const Rajan = () => {
  const [count, setCount] = useState(10);
  return (<div>
    <h1 className={customcss.title}>Training of react</h1>
    <p>This is my first React component!</p>
    <img className={count %2 ==0 ? customcss.myimage: customcss.new_style} src={image} alt="Walpaper" />
    <button onClick={()=>{
      setCount(count+1)
    }}>Count : {count}  </button>
  </div>)
}
export default Rajan;