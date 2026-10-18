import './style.css'

export const Data=({task,setTask  })=>{



function deletenotes(index){
console.log(index)
    const updatedTask = task.filter((item, i) => i !== index);
    setTask(updatedTask);
}

  return (
<>
 {task.map((item, index) => (
      <div className="dataparent" key={index}>
  <div className="title">
    <h2>{item.title}</h2>
  </div>
  <div className="titeldara">
    <p>{item.data}</p>
  </div>
  <div className="btn">
    <span><button >Done</button></span>
    <span><button onClick={()=>deletenotes(index)}>Delete</button></span>
    </div>
</div>
      ))}


</>


  )
}



