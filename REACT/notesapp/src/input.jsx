import "./Notes.css";
import { useState } from "react";



export const Notes=()=>{
  const [title,setitle]=useState("")

  function handleform(e){
    e.preventDefault();
    console.log("sbumitted by :-",title)
    setitle("")


  }

  function handlechange(e){
    setitle(e.target.value)
  }

  return(
    <>
    <form onSubmit={handleform}>
      <div className="frm">
        <div className="inp" ><input type="text" onChange={handlechange} value={title}/></div>
        <div className="subtn"><button type="submit">Submit</button></div>
      </div>
    </form>
    
    </>
  )
}