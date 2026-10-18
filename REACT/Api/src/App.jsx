import { useState } from "react"
import "./App.css";


function App() {

  const [count,setcount]= useState(1)
  const [todo, setTodo] = useState(null);
const data= async function getdata() {
 
  const ans= await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
 
  const dataa= await ans.json()
  setTodo(dataa);
  console.log(dataa)
    console.log(dataa.title)
setcount((prev) => prev + 1);

  
}

  return (
   <>
      <button onClick={data} className="btn">Get Data</button>

      <div className="prt">
        

        {todo && (
          <>
            <h2 className="id">ID: {todo.id}</h2>
            <p className="ttl">Title: {todo.title}</p>
            <p className="yn">Completed: {todo.completed ? "Yes" : "No"}</p>
          </>
        )}
      </div>
    </>
  );
  
}

export default App
