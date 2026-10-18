import './style.css'
import { useState } from "react";


export function Notesform({ task, setTask }) {
  const [title,settitle]=useState("");
  const [data,setdata]=useState("");

  


function handleform(e){

  

  e.preventDefault();

  const cyptask=[...task];
  setTask([...task, { title, data }]);
    settitle("")
  setdata("")
}

function handlechange(e){
  settitle(e.target.value)
}

function handlenotes(e){
  setdata(e.target.value)
}

  return (
    <>
     <form onSubmit={handleform}>
      <div className="parent">
        <div><input type="text" onChange={handlechange} value={title}/ ></div>
        <div><textarea  cols="30" rows="10" onChange={handlenotes} value={data}></textarea></div>
        <div><button type="submit">Add</button></div>
      </div>
     </form>
    </>
  )
}

