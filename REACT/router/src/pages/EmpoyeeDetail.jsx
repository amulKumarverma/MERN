import { useParams } from "react-router-dom";

const Details=()=>{

  const param=useParams();
  console.log(param)
  return (
    <>
    <h1>this is the company {param.id} detalis....</h1>
    </>
  )
}

export default Details;