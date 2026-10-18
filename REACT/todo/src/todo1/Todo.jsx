import { CiCircleCheck } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const [inputvalue, setInputValue] = useState("");
    const [task, settask] = useState([]);
  const handleInputChange = (value) => {
    setInputValue(value);
  };


  const handeFormSbmit=(e)=>{
    e.preventDefault();





      if(!inputvalue){
    return;
  }

  if(task.includes(inputvalue)){
     setInputValue("");
    return;

  }
  settask((prevTask)=>[...prevTask,inputvalue])

  setInputValue("");
  }

const handletelist=(value)=>{
  console.log(task);
    console.log(value);
 const updatedTask=   task.filter((curTask)=>curTask !==value);
 settask(updatedTask);
}


const handleDeleteal=(alltask)=>{
 settask([]);
}


  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
        </header>
        <section className="form">
          <form onSubmit={handeFormSbmit}>
            <div>
              <input
                type="text"
                className="todo-input"
                value={inputvalue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            </div>
            <div>
              <button type="submit" className="todo-btn">
                Add Task
              </button>
            </div>
          </form>
        </section>
        <section className='myUnOrdList'>
          <ul>
         {task.map((curTask,index) =>{

          return(<li key={index} className="todo-item"><span>{curTask}</span>
          <button className="check-btn"><CiCircleCheck /></button>
          <button className="delete-btn" onClick={()=>handletelist(curTask)}><MdDelete /></button>
          </li>)
         })}
          </ul>

        </section>

        <section className="clear-btn" onClick={handleDeleteal}>Clear All</section>
      </section>
    </>
  );
};
