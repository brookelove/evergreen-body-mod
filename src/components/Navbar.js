import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/emptyIcon.png";
export default function Navbar() {
  // const path = window.location.pathname
  return (
    <div className="NavBarContainer">
      <div>
        <div className="logoContainer">
          <img src={logo} alt="evergreen logo" width="25%" className="Logo" />
        </div>
        <ul className="navBarLinkContainer">
          <li className="hoverUnderlineAnimate">
            <Link to="/">HOME</Link>
          </li>
          <li className="hoverUnderlineAnimate">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="hoverUnderlineAnimate">
            <Link to="/gallery">GALLERY</Link>
          </li>
          {/* <li className="hoverUnderlineAnimate">
          <Link to="/jewelry">JEWELRY</Link>
        </li> */}
          <li className="hoverUnderlineAnimate">
            <Link to="/team">TEAM</Link>
          </li>
          <li className="hoverUnderlineAnimate">
            <Link to="/locate">LOCATE</Link>
          </li>
          <li className="hoverUnderlineAnimate">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>

        {/* have to get an or statement that shows the hamburger icon */}
      </div>
    </div>
  );
}
