import "../styles/navbar.css"
import {Link} from "react-router-dom"
import logo from "../assets/images/logo.jpg"
export default function Navbar() {
    const path = window.location.pathname
  return (
    <div className="NavBarContainer">
      <Link to="/" className="evergreen-title">
       <img src={logo} alt="evergreen logo" width="35%"/>
      </Link>
      <ul className="navBarLinkContainer">
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/gallery">GALLERY</Link>
        </li>
        <li>
          <Link to="/jewelry">JEWELRY</Link>
        </li>
        <li>
          <Link to="/team">TEAM</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
      {/* have to get an or statement that shows the hamburger icon */}
    </div>
  );
}