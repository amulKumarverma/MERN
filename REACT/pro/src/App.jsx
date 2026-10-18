import { useState } from "react";
import { Notesform } from "./Notesform";
import { Data } from "./Data";

function App() {
  const [task, setTask] = useState([]);



  return (
    <>
      <Notesform task={task} setTask={setTask} />
      <Data task={task}  setTask={setTask} />
    </>
  );
}
export default App;
