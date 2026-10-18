
import { FaArrowRight } from "react-icons/fa";
import "./Card.css"

export const Cardlist=(props)=>{

   console.log("(son)form card.jsx")
   console.log(props)
 
console.log(props)
  return(
    <>
          <div className="child1">
        <h3>{props.fill.title}</h3>

        <p>{props.fill.description}</p>

        <div className="btn">
          {props.fill.tags.map((tag, index) => (
            <button key={index}>{tag}</button>
          ))}
        </div>
      </div>

      <div className="child2">
        <h4>Explore</h4>

        <button>
          <FaArrowRight />
        </button>
      </div>

    </>
  )
}