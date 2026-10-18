import "./Nav.css";
import { Link } from "react-router";
export const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>My Website</h1>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};
