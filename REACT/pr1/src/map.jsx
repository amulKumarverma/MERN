import Errmsg from './errormsg';

import food from "./data-food-item";
function Mapp(){



   return (
    <>
    {/* {food.length===0 ? <h1>empty</h1>:null} */}
    {/* {food.length === 0 && <h1>Empty</h1>} */}

    <Errmsg food={food}></Errmsg>
      {food.map((item, index) => (
        <li key={index}>{item} and key={index}</li>
      ))}
    </>
  );
}

export default Mapp;