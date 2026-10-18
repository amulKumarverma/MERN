import { useState } from "react"

export const Counter =()=>{


  const [count,setcount]=useState(0);

  function handleincr(){
    setcount(count + 1);
  }

  return (
    <div className="counter-container">
      <h1>{count}</h1>
      <button onClick={handleincr}>Click Me</button>
    </div>
  );
}