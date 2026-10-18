
import {Cardlist} from "./Cardlist"
import "./Card.css"

export const Card=(props)=>{
 console.log("(father)form card.jsx")
 
console.log(props)

  
  return (
    <div className="container">
      {props.data.map((item) => (
        <div className="parent" key={item.id}>
          <Cardlist fill={item} />
        </div>
      ))}
    </div>
  );
};