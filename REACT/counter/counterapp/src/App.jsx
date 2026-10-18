import { useState } from "react"
import {Counter} from "./Counter"

const App =()=>{


  const [count,setcount]=useState(0);

  function handleincr(){
    setcount(count + 1);
  }

  return (
<>
<Counter></Counter>
</>
  );
}

export default App;