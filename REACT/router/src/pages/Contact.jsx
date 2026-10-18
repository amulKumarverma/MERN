import { Outlet } from "react-router-dom";
import { Link } from "react-router";
const Contact=()=>{

  return(
    <>
    <div>
    <div>
      <Link to='/contact/manager'>Manger</Link>
      <Link to='/contact/Hr'>Hr</Link>
    </div>
    <Outlet/>
    </div>
    </>
  )
}


export default Contact;